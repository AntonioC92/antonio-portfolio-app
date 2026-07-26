import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// ─── Animations ──────────────────────────────────────────────────────────────

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(16px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
`;

const blink = keyframes`
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
  40%            { transform: scale(1);   opacity: 1;   }
`;

// ─── Styled components ────────────────────────────────────────────────────────

const Wrap = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  font-family: inherit;

  @media (max-width: 480px) {
    bottom: 16px;
    right: 16px;
  }
`;

const Panel = styled.div<{ $open: boolean }>`
  width: 360px;
  height: 520px;
  background: #161616;
  border: 1px solid rgba(255, 129, 100, 0.18);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255,255,255,0.04);
  animation: ${slideUp} 0.22s cubic-bezier(0.22, 1, 0.36, 1);

  ${({ $open }) =>
    !$open &&
    css`
      display: none;
    `}

  @media (max-width: 480px) {
    width: calc(100vw - 32px);
    height: 72vh;
    max-height: 560px;
  }
`;

const Header = styled.div`
  padding: 14px 18px;
  background: #111;
  border-bottom: 1px solid rgba(255, 129, 100, 0.12);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AvatarRing = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff8164, #ff5a35);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  flex-shrink: 0;
`;

const HeaderMeta = styled.div``;

const HeaderTitle = styled.div`
  font-size: 13.5px;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.01em;
`;

const HeaderStatus = styled.div`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.38);
  margin-top: 1px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.35);
  cursor: pointer;
  padding: 4px;
  line-height: 1;
  border-radius: 6px;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.07);
  }
`;

const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar { width: 3px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.08); border-radius: 2px; }
`;

const Bubble = styled.div<{ $user: boolean }>`
  max-width: 86%;
  padding: 9px 13px;
  border-radius: ${({ $user }) => ($user ? '16px 16px 4px 16px' : '16px 16px 16px 4px')};
  font-size: 13.5px;
  line-height: 1.58;
  color: ${({ $user }) => ($user ? '#fff' : 'rgba(255,255,255,0.85)')};
  background: ${({ $user }) => ($user ? '#ff8164' : '#242424')};
  align-self: ${({ $user }) => ($user ? 'flex-end' : 'flex-start')};
  word-break: break-word;

  a {
    color: ${({ $user }) => ($user ? 'rgba(255,255,255,0.9)' : '#ff8164')};
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;

const TypingBubble = styled(Bubble)`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 12px 16px;
`;

const Dot = styled.span<{ $i: number }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.45);
  display: inline-block;
  animation: ${blink} 1.3s ease-in-out infinite;
  animation-delay: ${({ $i }) => $i * 0.18}s;
`;

const InputRow = styled.form`
  padding: 11px 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
`;

const ChatInput = styled.input`
  flex: 1;
  background: #222;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 10px;
  padding: 9px 13px;
  font-size: 13.5px;
  font-family: inherit;
  color: #fff;
  outline: none;
  transition: border-color 0.15s;

  &::placeholder { color: rgba(255, 255, 255, 0.25); }
  &:focus { border-color: rgba(255, 129, 100, 0.45); }
  &:disabled { opacity: 0.5; }
`;

const SendButton = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: #ff8164;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.15s, transform 0.1s;

  &:hover:not(:disabled) { background: #ff6b4a; transform: scale(1.04); }
  &:disabled { background: rgba(255, 129, 100, 0.35); cursor: default; }

  svg { fill: #fff; }
`;

const Fab = styled.button`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff8164, #ff5a35);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(255, 129, 100, 0.45);
  transition: transform 0.15s, box-shadow 0.15s;

  &:hover {
    transform: scale(1.07);
    box-shadow: 0 6px 28px rgba(255, 129, 100, 0.55);
  }

  svg { fill: #fff; }
`;

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconChat() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );
}

function IconSend() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}

// ─── Markdown link parser ─────────────────────────────────────────────────────

function parseContent(text: string): React.ReactNode {
  const lines = text.split('\n');
  return lines.map((line, lineIdx) => {
    const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
    const nodes: React.ReactNode[] = [];
    let last = 0;
    let m: RegExpExecArray | null;

    while ((m = linkRe.exec(line)) !== null) {
      if (m.index > last) nodes.push(line.slice(last, m.index));
      const isExternal = m[2].startsWith('http');
      nodes.push(
        <a
          key={m.index}
          href={m[2]}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {m[1]}
        </a>
      );
      last = m.index + m[0].length;
    }

    if (last < line.length) nodes.push(line.slice(last));

    return (
      <React.Fragment key={lineIdx}>
        {lineIdx > 0 && <br />}
        {nodes.length > 0 ? nodes : null}
      </React.Fragment>
    );
  });
}

// ─── Component ───────────────────────────────────────────────────────────────

const GREETING: Message = {
  role: 'assistant',
  content:
    "Hi, I'm the Caruso Martech assistant. Ask me anything about paid media, SEO, marketing automation, or how we work — I'll give you a straight answer.",
};

export function ChatWidget(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [displayMessages, setDisplayMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Actual conversation history sent to the API (excludes the local greeting)
  const historyRef = useRef<Message[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [displayMessages, loading]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: 'user', content: text };
    historyRef.current = [...historyRef.current, userMsg];
    setDisplayMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: historyRef.current }),
      });

      const data: { content?: string; error?: string } = await res.json();
      const content = data.content ?? data.error ?? 'Something went wrong. Please try again.';
      const reply: Message = { role: 'assistant', content };
      historyRef.current = [...historyRef.current, reply];
      setDisplayMessages((prev) => [...prev, reply]);
    } catch {
      const errorMsg: Message = {
        role: 'assistant',
        content: 'Connection error. Please try again.',
      };
      setDisplayMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Wrap>
      {open && (
        <Panel $open={open}>
          <Header>
            <HeaderLeft>
              <AvatarRing>🚀</AvatarRing>
              <HeaderMeta>
                <HeaderTitle>Caruso Martech</HeaderTitle>
                <HeaderStatus>Marketing assistant</HeaderStatus>
              </HeaderMeta>
            </HeaderLeft>
            <CloseButton onClick={() => setOpen(false)} aria-label="Close chat">
              <IconClose />
            </CloseButton>
          </Header>

          <MessageList>
            {displayMessages.map((msg, i) => (
              <Bubble key={i} $user={msg.role === 'user'}>
                {parseContent(msg.content)}
              </Bubble>
            ))}
            {loading && (
              <TypingBubble $user={false} aria-label="Thinking">
                <Dot $i={0} />
                <Dot $i={1} />
                <Dot $i={2} />
              </TypingBubble>
            )}
            <div ref={bottomRef} />
          </MessageList>

          <InputRow onSubmit={handleSubmit}>
            <ChatInput
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a marketing question..."
              disabled={loading}
              aria-label="Chat input"
            />
            <SendButton
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
            >
              <IconSend />
            </SendButton>
          </InputRow>
        </Panel>
      )}

      <Fab onClick={() => setOpen((o) => !o)} aria-label={open ? 'Close chat' : 'Open chat'}>
        {open ? <IconClose /> : <IconChat />}
      </Fab>
    </Wrap>
  );
}
