import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ContentWrapper,
  Header,
  SubHeader,
  StyledSection,
  ButtonRow,
  PrimaryBtn,
  SecondaryBtn,
  TrustLine,
  ParticleCanvas,
} from './styles';

export function HeroSection(): JSX.Element {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const N = 70;
    const CONN = 150;
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONN) {
            const alpha = ((1 - d / CONN) * 0.25).toFixed(3);
            ctx.strokeStyle = `rgba(255,129,100,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      pts.forEach((p) => {
        ctx.fillStyle = 'rgba(255,129,100,0.55)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <StyledSection id="home-hero">
      <ParticleCanvas ref={canvasRef} aria-hidden="true" />
      <ContentWrapper>
        <Header $size={6}>
          Marketing systems{' '}
          <br className="mobile-break" />
          that drive revenue.
        </Header>

        <SubHeader>
          We help founders and leadership teams build the strategy, execution, and
          infrastructure that turns marketing into a reliable growth engine.
        </SubHeader>

        <ButtonRow>
          <PrimaryBtn onClick={() => navigate('/contact')}>Book a Call</PrimaryBtn>
          <SecondaryBtn onClick={() => navigate('/work')}>See Our Work</SecondaryBtn>
        </ButtonRow>

        <TrustLine>SaaS &nbsp;·&nbsp; Events &nbsp;·&nbsp; Ecommerce &nbsp;·&nbsp; Professional Services</TrustLine>
      </ContentWrapper>
    </StyledSection>
  );
}
