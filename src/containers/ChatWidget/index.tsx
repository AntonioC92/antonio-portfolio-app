import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Message {
  role: 'user' | 'assistant';
  content: string;
  hasCta?: boolean;
}

interface ApiMessage {
  role: 'user' | 'assistant';
  content: string;
}

type CtaState = 'idle' | 'form' | 'submitting' | 'done' | 'error';

// ─── Animations ───────────────────────────────────────────────────────────────

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(16px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
`;

const blink = keyframes`
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
  40%            { transform: scale(1);   opacity: 1;   }
`;

const pillEntrance = keyframes`
  0%   { opacity: 0; transform: translateY(20px) scale(0.92); }
  100% { opacity: 1; transform: translateY(0)    scale(1);    }
`;

const pillPulse = keyframes`
  0%, 100% { transform: scale(1);    box-shadow: 0 4px 20px rgba(255, 129, 100, 0.45); }
  50%       { transform: scale(1.05); box-shadow: 0 8px 36px rgba(255, 129, 100, 0.75); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0);   }
`;

// ─── Shell ────────────────────────────────────────────────────────────────────

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
  height: 560px;
  background: #161616;
  border: 1px solid rgba(255, 129, 100, 0.18);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.04);
  animation: ${slideUp} 0.22s cubic-bezier(0.22, 1, 0.36, 1);

  ${({ $open }) => !$open && css`display: none;`}

  @media (max-width: 480px) {
    width: calc(100vw - 32px);
    height: 78vh;
    max-height: 620px;
  }
`;

// ─── Header ───────────────────────────────────────────────────────────────────

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
  &:hover { color: #fff; background: rgba(255, 255, 255, 0.07); }
`;

// ─── Messages ─────────────────────────────────────────────────────────────────

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

// ─── CTA block ────────────────────────────────────────────────────────────────

const CtaWrap = styled.div`
  align-self: flex-start;
  width: 100%;
  max-width: 92%;
  animation: ${fadeIn} 0.25s ease;
`;

const CtaCard = styled.div`
  background: rgba(255, 129, 100, 0.06);
  border: 1px solid rgba(255, 129, 100, 0.2);
  border-radius: 14px;
  padding: 13px 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CtaLabel = styled.div`
  font-size: 11.5px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.07em;
`;

const CtaButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const BookBtn = styled.a`
  display: block;
  width: 100%;
  padding: 9px 13px;
  border-radius: 9px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  background: #ff8164;
  color: #fff;
  box-sizing: border-box;
  transition: background 0.15s, transform 0.1s;
  &:hover { background: #ff6b4a; transform: translateY(-1px); }
`;

const DetailsBtn = styled.button`
  width: 100%;
  padding: 9px 13px;
  border-radius: 9px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  background: transparent;
  border: 1px solid rgba(255, 129, 100, 0.3);
  color: rgba(255, 255, 255, 0.75);
  transition: background 0.15s, transform 0.1s;
  &:hover { background: rgba(255, 129, 100, 0.1); transform: translateY(-1px); }
`;

// ─── Lead form ────────────────────────────────────────────────────────────────

const LeadForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 7px;
  animation: ${fadeIn} 0.2s ease;
`;

const Field = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 8px 11px;
  font-size: 13px;
  color: #fff;
  font-family: inherit;
  outline: none;
  width: 100%;
  box-sizing: border-box;

  &::placeholder { color: rgba(255, 255, 255, 0.22); }
  &:focus { border-color: rgba(255, 129, 100, 0.4); }
  &:disabled { opacity: 0.45; }
`;

const Textarea = styled.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 8px 11px;
  font-size: 13px;
  color: #fff;
  font-family: inherit;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  resize: none;
  height: 64px;

  &::placeholder { color: rgba(255, 255, 255, 0.22); }
  &:focus { border-color: rgba(255, 129, 100, 0.4); }
  &:disabled { opacity: 0.45; }
`;

const SubmitBtn = styled.button`
  background: #ff8164;
  border: none;
  border-radius: 8px;
  padding: 9px 14px;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s;
  &:hover:not(:disabled) { background: #ff6b4a; }
  &:disabled { opacity: 0.5; cursor: default; }
`;

const AltBookLink = styled.a`
  display: block;
  text-align: center;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
  text-decoration: underline;
  text-underline-offset: 2px;
  padding-top: 2px;
  &:hover { color: rgba(255, 255, 255, 0.7); }
`;

const ErrorNote = styled.div`
  font-size: 12px;
  color: rgba(255, 100, 100, 0.85);
`;

const SuccessNote = styled.div`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.55;
  animation: ${fadeIn} 0.3s ease;

  strong { color: #ff8164; }
`;

// ─── Input row ────────────────────────────────────────────────────────────────

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

// ─── FAB ──────────────────────────────────────────────────────────────────────

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

const PillBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 20px;
  border-radius: 50px;
  background: linear-gradient(135deg, #ff8164, #ff5a35);
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(255, 129, 100, 0.45);
  animation:
    ${pillEntrance} 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards,
    ${pillPulse} 0.85s ease-in-out 0.8s 3 forwards;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 28px rgba(255, 129, 100, 0.55);
  }
  svg { fill: #fff; flex-shrink: 0; }
`;

const PillText = styled.span`
  color: #fff;
  font-size: 13.5px;
  font-weight: 700;
  white-space: nowrap;
  letter-spacing: -0.01em;
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

// ─── Helpers ──────────────────────────────────────────────────────────────────

function parseLine(line: string): React.ReactNode {
  // Split on **bold** and [link](url) tokens
  const tokenRe = /(\*\*[^*]+\*\*|\[([^\]]+)\]\(([^)]+)\))/g;
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;

  while ((m = tokenRe.exec(line)) !== null) {
    if (m.index > last) nodes.push(line.slice(last, m.index));

    const token = m[0];
    if (token.startsWith('**')) {
      // Bold
      nodes.push(<strong key={m.index}>{token.slice(2, -2)}</strong>);
    } else {
      // Markdown link
      const text = m[2];
      const href = m[3];
      const isExternal = href.startsWith('http');
      nodes.push(
        <a
          key={m.index}
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {text}
        </a>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < line.length) nodes.push(line.slice(last));
  return nodes.length > 0 ? nodes : null;
}

function parseContent(text: string): React.ReactNode {
  const lines = text.split('\n');

  // Group consecutive bullet lines vs plain lines
  type Segment = { type: 'bullets'; items: string[] } | { type: 'text'; lines: string[] };
  const segments: Segment[] = [];

  for (const line of lines) {
    const isBullet = /^[-*]\s+/.test(line);
    if (isBullet) {
      const itemText = line.replace(/^[-*]\s+/, '').replace(/^[•·]\s*/, '');
      const last = segments[segments.length - 1];
      if (last?.type === 'bullets') {
        last.items.push(itemText);
      } else {
        segments.push({ type: 'bullets', items: [itemText] });
      }
    } else {
      const last = segments[segments.length - 1];
      if (last?.type === 'text') {
        last.lines.push(line);
      } else {
        segments.push({ type: 'text', lines: [line] });
      }
    }
  }

  return segments.map((seg, si) => {
    if (seg.type === 'bullets') {
      return (
        <ul key={si} style={{ margin: '8px 0', padding: 0, listStyle: 'none' }}>
          {seg.items.map((item, ii) => (
            <li key={ii} style={{ display: 'flex', gap: '8px', marginBottom: '6px', alignItems: 'flex-start' }}>
              <span style={{ color: '#ff8164', flexShrink: 0, marginTop: '1px' }}>•</span>
              <span>{parseLine(item)}</span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <React.Fragment key={si}>
        {seg.lines.map((line, li) => (
          <React.Fragment key={li}>
            {(si > 0 || li > 0) && <br />}
            {parseLine(line)}
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  });
}

function parseAiResponse(raw: string): { content: string; hasCta: boolean } {
  const hasCta = /\[SCHEDULE\]/i.test(raw);
  const content = raw
    .replace(/\[SCHEDULE\]/gi, '')
    .replace(/—/g, ',') // strip em dashes
    .trim();
  return { content, hasCta };
}

// ─── CTA block component ──────────────────────────────────────────────────────

interface CtaBlockProps {
  ctaState: CtaState;
  formName: string;
  formEmail: string;
  formMessage: string;
  onShowForm: () => void;
  onFormChange: (field: 'name' | 'email' | 'message', value: string) => void;
  onFormSubmit: (e: React.FormEvent) => void;
}

function CtaBlock({
  ctaState,
  formName,
  formEmail,
  formMessage,
  onShowForm,
  onFormChange,
  onFormSubmit,
}: CtaBlockProps) {
  const isSubmitting = ctaState === 'submitting';

  return (
    <CtaWrap>
      <CtaCard>
        <CtaLabel>Ready to take the next step?</CtaLabel>

        {ctaState === 'idle' && (
          <CtaButtons>
            <BookBtn
              href="https://calendly.com/caruso-martech/new-meeting?utm_source=website&utm_medium=chatbot&utm_campaign=organic"
              target="_blank"
              rel="noopener noreferrer"
            >
              📅 Book a call
            </BookBtn>
            <DetailsBtn type="button" onClick={onShowForm}>
              ✉️ Get in touch
            </DetailsBtn>
          </CtaButtons>
        )}

        {(ctaState === 'form' || ctaState === 'submitting' || ctaState === 'error') && (
          <LeadForm onSubmit={onFormSubmit}>
            {ctaState === 'error' && (
              <ErrorNote>Something went wrong. Please try again.</ErrorNote>
            )}
            <Field
              type="text"
              placeholder="Your name"
              value={formName}
              onChange={(e) => onFormChange('name', e.target.value)}
              disabled={isSubmitting}
              required
            />
            <Field
              type="email"
              placeholder="Your email"
              value={formEmail}
              onChange={(e) => onFormChange('email', e.target.value)}
              disabled={isSubmitting}
              required
            />
            <Textarea
              placeholder="What do you need help with?"
              value={formMessage}
              onChange={(e) => onFormChange('message', e.target.value)}
              disabled={isSubmitting}
            />
            <SubmitBtn type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send →'}
            </SubmitBtn>
            <AltBookLink
              href="https://calendly.com/caruso-martech/new-meeting?utm_source=website&utm_medium=chatbot&utm_campaign=organic"
              target="_blank"
              rel="noopener noreferrer"
            >
              Or book a call instead
            </AltBookLink>
          </LeadForm>
        )}

        {ctaState === 'done' && (
          <SuccessNote>
            Got it, <strong>{formName.split(' ')[0] || formName}</strong>. I'll follow up
            at {formEmail} shortly.
            <br />
            <br />
            <BookBtn
              href="https://calendly.com/caruso-martech/new-meeting?utm_source=website&utm_medium=chatbot&utm_campaign=organic"
              target="_blank"
              rel="noopener noreferrer"
            >
              📅 Book a call in the meantime
            </BookBtn>
          </SuccessNote>
        )}
      </CtaCard>
    </CtaWrap>
  );
}

// ─── Greeting ─────────────────────────────────────────────────────────────────

const GREETING: Message = {
  role: 'assistant',
  content:
    "Hi, I'm the Caruso Martech assistant. Ask me anything about paid media, SEO, marketing automation, or how we work. I'll give you a straight answer.",
};

// ─── Main widget ──────────────────────────────────────────────────────────────

export function ChatWidget(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // CTA and form state (single instance — tracks the most recent CTA)
  const [ctaState, setCtaState] = useState<CtaState>('idle');
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');

  // API conversation history (no hasCta, no GREETING)
  const historyRef = useRef<ApiMessage[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading, ctaState]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 80);
  }, [open]);

  // ── Send chat message ────────────────────────────────────────────────────────

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    historyRef.current = [...historyRef.current, { role: 'user', content: text }];
    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setInput('');
    setLoading(true);
    setCtaState('idle');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: historyRef.current }),
      });

      const data: { content?: string; error?: string } = await res.json();
      const raw = data.content ?? data.error ?? 'Something went wrong. Please try again.';
      const { content, hasCta } = parseAiResponse(raw);

      historyRef.current = [...historyRef.current, { role: 'assistant', content }];
      setMessages((prev) => [...prev, { role: 'assistant', content, hasCta }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Connection error. Please try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  }

  // ── CTA handlers ────────────────────────────────────────────────────────────

  function handleShowForm() {
    const lastUserMsg = [...historyRef.current]
      .reverse()
      .find((m) => m.role === 'user');
    setFormMessage(lastUserMsg?.content ?? '');
    setCtaState('form');
  }

  function handleFormChange(field: 'name' | 'email' | 'message', value: string) {
    if (field === 'name') setFormName(value);
    if (field === 'email') setFormEmail(value);
    if (field === 'message') setFormMessage(value);
  }

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setCtaState('submitting');

    try {
      const res = await fetch('/api/hubspot', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name: formName, email: formEmail, message: formMessage }),
      });
      const data: { success?: boolean; error?: string } = await res.json();
      setCtaState(res.ok && data.success ? 'done' : 'error');
    } catch {
      setCtaState('error');
    }
  }

  // Only the last hasCta message gets the full interactive CTA block
  const lastCtaIdx = messages.reduce((acc, m, i) => (m.hasCta ? i : acc), -1);

  return (
    <Wrap>
      {open && (
        <Panel $open={open}>
          <Header>
            <HeaderLeft>
              <AvatarRing>🚀</AvatarRing>
              <div>
                <HeaderTitle>Caruso Martech</HeaderTitle>
                <HeaderStatus>Marketing assistant</HeaderStatus>
              </div>
            </HeaderLeft>
            <CloseButton onClick={() => setOpen(false)} aria-label="Close chat">
              <IconClose />
            </CloseButton>
          </Header>

          <MessageList>
            {messages.map((msg, i) => (
              <React.Fragment key={i}>
                <Bubble $user={msg.role === 'user'}>
                  {parseContent(msg.content)}
                </Bubble>

                {/* Full CTA block on the last hasCta message */}
                {msg.hasCta && i === lastCtaIdx && (
                  <CtaBlock
                    ctaState={ctaState}
                    formName={formName}
                    formEmail={formEmail}
                    formMessage={formMessage}
                    onShowForm={handleShowForm}
                    onFormChange={handleFormChange}
                    onFormSubmit={handleFormSubmit}
                  />
                )}

                {/* Minimal book link on earlier hasCta messages */}
                {msg.hasCta && i !== lastCtaIdx && (
                  <CtaWrap>
                    <BookBtn
                      href="https://calendly.com/caruso-martech/new-meeting?utm_source=website&utm_medium=chatbot&utm_campaign=organic"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📅 Book a call
                    </BookBtn>
                  </CtaWrap>
                )}
              </React.Fragment>
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

      {open ? (
        <Fab onClick={() => setOpen(false)} aria-label="Close chat">
          <IconClose />
        </Fab>
      ) : (
        <PillBtn onClick={() => setOpen(true)} aria-label="Open chat">
          <IconChat />
          <PillText>Ask any marketing question</PillText>
        </PillBtn>
      )}
    </Wrap>
  );
}
