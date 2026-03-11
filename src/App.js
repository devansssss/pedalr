import React, { useState, useEffect, useRef } from 'react';

/* ─── DESIGN TOKENS ──────────────────────────────────────────── */
const T = {
  black:   '#0A0A0B',
  surface: '#111113',
  surf2:   '#18181C',
  border:  '#242428',
  muted:   '#3A3A42',
  dim:     '#8A8A96',
  text:    '#F0F0F4',
  white:   '#FFFFFF',
  accent:  '#FF4D1C',
  accentD: 'rgba(255,77,28,0.12)',
  accentG: 'rgba(255,77,28,0.3)',
};

/* ─── GLOBAL STYLES ──────────────────────────────────────────── */
const globalStyle = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background: ${T.black};
    color: ${T.text};
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  ::selection { background: ${T.accent}; color: white; }
  input { font-family: 'Barlow', sans-serif; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  @keyframes xpFill {
    from { width: 0%; }
    to   { width: 67%; }
  }
  @keyframes countUp {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .fadeUp  { animation: fadeUp  0.6s ease both; }
  .fadeIn  { animation: fadeIn  0.5s ease both; }

  /* Grain overlay */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
    opacity: 0.35;
  }
`;

/* ─── LOGO MARK SVG ──────────────────────────────────────────── */
function LogoMark({ size = 28, color = T.accent }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="16" stroke={color} strokeWidth="1.5" fill="none" opacity="0.25"/>
      <circle cx="18" cy="18" r="13.5" stroke={color} strokeWidth="1" fill="none" opacity="0.12"/>
      <path d="M10 22L18 12L26 22" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 27L18 17L26 27" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.38"/>
      <rect x="17.25" y="1.5" width="1.5" height="3" rx="0.75" fill={color} opacity="0.45"/>
      <rect x="17.25" y="31.5" width="1.5" height="3" rx="0.75" fill={color} opacity="0.45"/>
      <rect x="1.5" y="17.25" width="3" height="1.5" rx="0.75" fill={color} opacity="0.45"/>
      <rect x="31.5" y="17.25" width="3" height="1.5" rx="0.75" fill={color} opacity="0.45"/>
    </svg>
  );
}

/* ─── RANK BADGE ─────────────────────────────────────────────── */
const RANKS = [
  { name: 'Commuter', color: '#CD7F32', glow: 'rgba(205,127,50,0.3)',  bg: 'linear-gradient(135deg,#2A1F1A,#3D2418)', border: '#8B5E3C' },
  { name: 'Pacer',    color: '#C0C4CF', glow: 'rgba(192,196,207,0.25)', bg: 'linear-gradient(135deg,#1E2025,#2A2D35)', border: '#9EA3AD' },
  { name: 'Climber',  color: '#50C878', glow: 'rgba(80,200,120,0.3)',  bg: 'linear-gradient(135deg,#1A2420,#1E3028)', border: '#3D8B6E' },
  { name: 'Roadie',   color: '#5B9CF6', glow: 'rgba(91,156,246,0.3)',  bg: 'linear-gradient(135deg,#181D2A,#1A2035)', border: '#3A6BD4' },
  { name: 'Elite',    color: '#FF4D4D', glow: 'rgba(255,77,77,0.35)',  bg: 'linear-gradient(135deg,#251A1A,#331A1A)', border: '#CC2B2B' },
  { name: 'Legend',   color: 'url(#irid)', glow: 'rgba(160,80,255,0.35)', bg: 'linear-gradient(135deg,#1A1A2A,#22153A)', border: 'rgba(180,120,255,0.6)' },
];

function RankBadge({ rank, size = 52 }) {
  const r = RANKS.find(x => x.name === rank) || RANKS[3];
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: r.bg,
      border: `1.5px solid ${r.border}`,
      boxShadow: `0 0 ${size * 0.4}px ${r.glow}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 28 28" fill="none">
        <defs>
          <linearGradient id="irid" x1="7" y1="9" x2="21" y2="21" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF6EC7"/>
            <stop offset="50%" stopColor="#A78BFA"/>
            <stop offset="100%" stopColor="#38BDF8"/>
          </linearGradient>
        </defs>
        <path d="M7 17L14 9L21 17" stroke={r.color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 21L14 13L21 21" stroke={r.color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
      </svg>
    </div>
  );
}

/* ─── ANIMATED COUNTER ───────────────────────────────────────── */
function Counter({ target, suffix = '', duration = 1800 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = null;
        const step = ts => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / duration, 1);
          setVal(Math.floor(p * target));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

/* ─── MOCK SHARE CARD ────────────────────────────────────────── */
function ShareCard() {
  const [xpVisible, setXpVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setXpVisible(true); obs.disconnect(); }
    }, { threshold: 0.6 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      background: T.surface,
      border: `1px solid ${T.border}`,
      borderRadius: 20,
      padding: 28,
      width: 260,
      position: 'relative',
      overflow: 'hidden',
      flexShrink: 0,
    }}>
      {/* glow */}
      <div style={{ position:'absolute', top:-50, right:-50, width:180, height:180,
        background:'radial-gradient(circle, rgba(255,77,28,0.12) 0%, transparent 70%)',
        pointerEvents:'none' }} />

      {/* app label */}
      <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:22,
        fontSize:10, fontWeight:600, letterSpacing:'0.16em', textTransform:'uppercase', color: T.dim }}>
        <LogoMark size={14} />
        PEDALR
      </div>

      {/* rank row */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:18 }}>
        <div>
          <div style={{ fontSize:9, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase',
            color: T.dim, marginBottom:4 }}>Current Rank</div>
          <div style={{ fontFamily:'Barlow Condensed', fontSize:26, fontWeight:700,
            color: T.white, letterSpacing:'0.02em' }}>Roadie</div>
        </div>
        <RankBadge rank="Roadie" size={44} />
      </div>

      {/* stats */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:10,
        borderTop:`1px solid ${T.border}`, paddingTop:18, marginBottom:16 }}>
        {[['32.4','km'],['28.6','avg km/h'],['487m','elev']].map(([v,l]) => (
          <div key={l}>
            <div style={{ fontFamily:'Barlow Condensed', fontSize:20, fontWeight:700,
              color: T.white, lineHeight:1, marginBottom:3 }}>{v}</div>
            <div style={{ fontSize:8, fontWeight:600, letterSpacing:'0.1em',
              textTransform:'uppercase', color: T.dim }}>{l}</div>
          </div>
        ))}
      </div>

      {/* XP bar */}
      <div>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
          <span style={{ fontSize:9, fontWeight:600, letterSpacing:'0.1em',
            textTransform:'uppercase', color: T.dim }}>XP to Elite</span>
          <span style={{ fontSize:9, fontWeight:600, color: T.accent, fontFamily:'monospace' }}>+340 XP</span>
        </div>
        <div style={{ height:3, background: T.border, borderRadius:2, overflow:'hidden' }}>
          <div style={{
            height:'100%', borderRadius:2, background: T.accent,
            width: xpVisible ? '67%' : '0%',
            transition: 'width 1.4s cubic-bezier(0.4,0,0.2,1) 0.3s',
          }} />
        </div>
      </div>
    </div>
  );
}

/* ─── EMAIL FORM ─────────────────────────────────────────────── */
const FORMSPREE_ID = 'mbdzojel'; // replace after setup

function EmailForm({ variant }) {
  // variant: 'waitlist' | 'earlyAdopter'
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const isEarly = variant === 'earlyAdopter';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setStatus('loading');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, type: isEarly ? 'early_adopter' : 'waitlist' }),
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div style={{
        background: isEarly ? T.accentD : T.surf2,
        border: `1px solid ${isEarly ? T.accentG : T.border}`,
        borderRadius: 12, padding: '16px 20px',
        display: 'flex', alignItems: 'center', gap: 10,
        animation: 'fadeIn 0.4s ease',
      }}>
        <div style={{ width:8, height:8, borderRadius:'50%', background: isEarly ? T.accent : '#50C878', flexShrink:0 }} />
        <div>
          <div style={{ fontSize:13, fontWeight:600, color: T.white, marginBottom:2 }}>
            {isEarly ? "You're reserved." : "You're on the list."}
          </div>
          <div style={{ fontSize:12, color: T.dim, fontWeight:300 }}>
            {isEarly
              ? "We'll email you at launch with your $5 lifetime access link."
              : "We'll keep you updated on our launch."}
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:10 }}>
      <div style={{ display:'flex', gap:8 }}>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{
            flex:1,
            background: T.surf2,
            border: `1px solid ${T.border}`,
            borderRadius: 10,
            padding: '12px 16px',
            fontSize: 14,
            color: T.text,
            outline: 'none',
            transition: 'border-color 0.2s',
          }}
          onFocus={e => e.target.style.borderColor = isEarly ? T.accent : T.muted}
          onBlur={e => e.target.style.borderColor = T.border}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            background: isEarly ? T.accent : 'transparent',
            border: `1px solid ${isEarly ? T.accent : T.border}`,
            borderRadius: 10,
            padding: '12px 20px',
            fontSize: 13,
            fontWeight: 600,
            fontFamily: 'Barlow',
            color: isEarly ? T.white : T.text,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            letterSpacing: '0.02em',
            transition: 'all 0.2s',
            display: 'flex', alignItems: 'center', gap: 8,
          }}
          onMouseEnter={e => {
            if (!isEarly) { e.currentTarget.style.borderColor = T.muted; e.currentTarget.style.color = T.white; }
            else e.currentTarget.style.opacity = '0.88';
          }}
          onMouseLeave={e => {
            if (!isEarly) { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.text; }
            else e.currentTarget.style.opacity = '1';
          }}
        >
          {status === 'loading'
            ? <div style={{ width:14, height:14, border:`2px solid rgba(255,255,255,0.3)`,
                borderTopColor:'white', borderRadius:'50%', animation:'spin 0.8s linear infinite' }} />
            : isEarly ? 'Reserve Lifetime' : 'Join Waitlist'}
        </button>
      </div>
      {status === 'error' && (
        <div style={{ fontSize:12, color:'#FF6B6B' }}>Something went wrong. Try again.</div>
      )}
    </form>
  );
}

/* ─── RANK TABLE (viral reel format) ────────────────────────── */
function RankTable() {
  const rows = [
    { rank: 'Commuter', speed: '< 16 km/h' },
    { rank: 'Pacer',    speed: '16 – 22 km/h' },
    { rank: 'Climber',  speed: '22 – 27 km/h' },
    { rank: 'Roadie',   speed: '27 – 32 km/h' },
    { rank: 'Elite',    speed: '32 – 37 km/h' },
    { rank: 'Legend',   speed: '37+ km/h' },
  ];

  return (
    <div style={{
      background: T.surface,
      border: `1px solid ${T.border}`,
      borderRadius: 16,
      overflow: 'hidden',
      width: '100%',
      maxWidth: 420,
    }}>
      <div style={{ padding:'16px 20px', borderBottom:`1px solid ${T.border}`,
        display:'flex', alignItems:'center', gap:8 }}>
        <LogoMark size={16} />
        <span style={{ fontFamily:'Barlow Condensed', fontWeight:700, fontSize:13,
          letterSpacing:'0.08em', color: T.white }}>PEDALR</span>
        <span style={{ marginLeft:'auto', fontSize:12, color: T.dim, fontWeight:300 }}>Avg Speed Ranks</span>
      </div>
      {rows.map((row, i) => (
        <div key={row.rank} style={{
          display:'flex', alignItems:'center', gap:14,
          padding:'14px 20px',
          borderBottom: i < rows.length - 1 ? `1px solid ${T.border}` : 'none',
          background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.012)',
          animation: `fadeUp 0.4s ease ${i * 0.07}s both`,
        }}>
          <RankBadge rank={row.rank} size={36} />
          <span style={{ fontFamily:'Barlow Condensed', fontWeight:700, fontSize:17,
            color: T.white, flex:1, letterSpacing:'0.02em' }}>{row.rank}</span>
          <span style={{ fontSize:14, color: T.dim, fontWeight:400, fontFamily:'Barlow Condensed' }}>{row.speed}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── HOW IT WORKS STEP ──────────────────────────────────────── */
function Step({ num, title, desc, delay }) {
  return (
    <div style={{
      display:'flex', gap:20,
      animation: `fadeUp 0.5s ease ${delay}s both`,
    }}>
      <div style={{
        width:36, height:36, borderRadius:'50%', flexShrink:0,
        background: T.accentD,
        border: `1px solid ${T.accentG}`,
        display:'flex', alignItems:'center', justifyContent:'center',
        fontFamily:'Barlow Condensed', fontWeight:700, fontSize:15, color: T.accent,
      }}>{num}</div>
      <div>
        <div style={{ fontSize:15, fontWeight:600, color: T.white, marginBottom:4 }}>{title}</div>
        <div style={{ fontSize:13, color: T.dim, fontWeight:300, lineHeight:1.65 }}>{desc}</div>
      </div>
    </div>
  );
}

/* ─── MAIN APP ───────────────────────────────────────────────── */
export default function App() {
  const [activeTab, setActiveTab] = useState('waitlist');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{globalStyle}</style>

      {/* ── NAV ── */}
      <nav style={{
        position:'fixed', top:0, left:0, right:0, zIndex:100,
        background: scrolled ? 'rgba(10,10,11,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? `1px solid ${T.border}` : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: '0 clamp(20px, 5vw, 60px)',
        height: 60,
        display:'flex', alignItems:'center', justifyContent:'space-between',
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <LogoMark size={24} />
          <span style={{ fontFamily:'Barlow Condensed', fontWeight:700, fontSize:20,
            letterSpacing:'0.06em', color: T.white }}>
            PEDAL<span style={{ color: T.accent }}>R</span>
          </span>
        </div>
        <a href="#reserve" style={{
          fontSize:12, fontWeight:600, color: T.accent,
          textDecoration:'none', letterSpacing:'0.1em', textTransform:'uppercase',
          padding:'7px 16px', border:`1px solid rgba(255,77,28,0.3)`,
          borderRadius:8, transition:'all 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = T.accentD; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
        >
          Reserve Spot
        </a>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
        padding: 'clamp(100px, 15vh, 160px) clamp(20px, 5vw, 60px) 80px',
        position:'relative', overflow:'hidden',
        textAlign:'center',
      }}>
        {/* Background glow */}
        <div style={{
          position:'absolute', top:'20%', left:'50%', transform:'translateX(-50%)',
          width:'60vw', height:'60vw', maxWidth:700, maxHeight:700,
          background:'radial-gradient(ellipse, rgba(255,77,28,0.07) 0%, transparent 65%)',
          pointerEvents:'none',
        }} />
        {/* Subtle grid lines */}
        <div style={{
          position:'absolute', inset:0, pointerEvents:'none',
          backgroundImage:`linear-gradient(${T.border} 1px, transparent 1px), linear-gradient(90deg, ${T.border} 1px, transparent 1px)`,
          backgroundSize:'60px 60px',
          opacity:0.35,
          maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
          WebkitMaskImage:'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
        }} />

        {/* Label */}
        <div className="fadeUp" style={{
          display:'inline-flex', alignItems:'center', gap:8, marginBottom:28,
          padding:'6px 14px', borderRadius:20,
          background: T.accentD, border:`1px solid rgba(255,77,28,0.2)`,
          fontSize:11, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase', color: T.accent,
          animationDelay:'0.1s',
        }}>
          <div style={{ width:6, height:6, borderRadius:'50%', background: T.accent,
            animation:'pulse 2s ease infinite' }} />
          Coming Soon — Reserve Your Spot
        </div>

        {/* Headline */}
        <h1 className="fadeUp" style={{
          fontFamily:'Barlow Condensed', fontWeight:800, fontSize:'clamp(48px, 8vw, 88px)',
          lineHeight:0.95, letterSpacing:'-0.02em', color: T.white,
          maxWidth:800, marginBottom:24,
          animationDelay:'0.2s',
        }}>
          Most cyclists plateau<br />
          <span style={{ color: T.accent }}>because they have<br />no target.</span>
        </h1>

        {/* Sub */}
        <p className="fadeUp" style={{
          fontSize:'clamp(15px, 2vw, 18px)', color: T.dim, fontWeight:300,
          maxWidth:480, lineHeight:1.7, marginBottom:52,
          animationDelay:'0.35s',
        }}>
          Pedalr gives you one. Earn your rank through every ride —
          distance, elevation, consistency. Know exactly where you stand
          and what it takes to go further.
        </p>

        {/* Card + Rank Table */}
        <div className="fadeUp" style={{
          display:'flex', gap:24, alignItems:'flex-start', justifyContent:'center',
          flexWrap:'wrap', marginBottom:72, animationDelay:'0.5s',
        }}>
          <ShareCard />
          <RankTable />
        </div>

        {/* Scroll hint */}
        <div style={{ animation:'fadeIn 1s ease 1.2s both', display:'flex', flexDirection:'column',
          alignItems:'center', gap:6 }}>
          <span style={{ fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase',
            color: T.muted, fontWeight:500 }}>Scroll to reserve</span>
          <div style={{ width:1, height:32, background:`linear-gradient(${T.muted}, transparent)` }} />
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{
        padding:'80px clamp(20px, 5vw, 60px)',
        maxWidth:640, margin:'0 auto',
      }}>
        <div style={{ marginBottom:48, animation:'fadeUp 0.5s ease both' }}>
          <div style={{ fontSize:11, fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase',
            color: T.accent, marginBottom:12 }}>How it works</div>
          <h2 style={{ fontFamily:'Barlow Condensed', fontWeight:700, fontSize:'clamp(28px, 4vw, 40px)',
            color: T.white, lineHeight:1.1 }}>
            Your rank reflects<br />who you actually are as a cyclist.
          </h2>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:32 }}>
          <Step num="1" delay={0.1}
            title="Ride — tracked automatically"
            desc="GPS records every ride. Distance, speed, elevation. Import existing rides from Apple Health or Apple Watch with one tap. No manual entry." />
          <Step num="2" delay={0.2}
            title="Earn XP after every ride"
            desc="XP is calculated from distance, elevation gained, and how consistently you're riding. A hilly 20km earns more than a flat 20km. Showing up 3x a week earns more than one big ride." />
          <Step num="3" delay={0.3}
            title="Climb through 6 ranks"
            desc="Commuter → Pacer → Climber → Roadie → Elite → Legend. Your rank is a real reflection of your riding — not an arbitrary number. Miss two weeks and you'll feel it." />
          <Step num="4" delay={0.4}
            title="Share your ride card"
            desc="Every ride generates a card with your stats and rank badge. One tap exports to Instagram Stories or TikTok. Your rank travels with you." />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{
        borderTop:`1px solid ${T.border}`, borderBottom:`1px solid ${T.border}`,
        padding:'48px clamp(20px, 5vw, 60px)',
        display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(160px, 1fr))',
        gap:40, maxWidth:800, margin:'0 auto',
      }}>
        {[
          { val: 6, suffix: '', label: 'Rank tiers' },
          { val: 100, suffix: '+', label: 'XP per ride' },
          { val: 0, suffix: ' cost to start', label: 'Free to download' },
        ].map(({ val, suffix, label }) => (
          <div key={label} style={{ textAlign:'center' }}>
            <div style={{ fontFamily:'Barlow Condensed', fontWeight:800,
              fontSize:'clamp(36px, 5vw, 52px)', color: T.accent, lineHeight:1, marginBottom:6 }}>
              <Counter target={val} suffix={suffix} />
            </div>
            <div style={{ fontSize:12, color: T.dim, fontWeight:400, letterSpacing:'0.04em' }}>{label}</div>
          </div>
        ))}
      </section>

      {/* ── RESERVE SECTION ── */}
      <section id="reserve" style={{
        padding:'100px clamp(20px, 5vw, 60px) 120px',
        maxWidth:640, margin:'0 auto',
      }}>
        <div style={{ marginBottom:48, textAlign:'center' }}>
          <div style={{ fontSize:11, fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase',
            color: T.accent, marginBottom:12 }}>Join the waitlist</div>
          <h2 style={{ fontFamily:'Barlow Condensed', fontWeight:800,
            fontSize:'clamp(32px, 5vw, 52px)', color: T.white, lineHeight:1.05, marginBottom:16 }}>
            Get in before launch.
          </h2>
          <p style={{ fontSize:15, color: T.dim, fontWeight:300, lineHeight:1.65, maxWidth:440, margin:'0 auto' }}>
            Two ways to reserve your spot. Early adopters lock in lifetime Pro access for $5 — paid only at launch, not now.
          </p>
        </div>

        {/* Tab switcher */}
        <div style={{
          display:'grid', gridTemplateColumns:'1fr 1fr',
          background: T.surf2, borderRadius:12, padding:4,
          marginBottom:32, border:`1px solid ${T.border}`,
        }}>
          {[
            { id:'earlyAdopter', label:'⚡ Early Adopter', sub:'Lifetime Pro — $5 at launch' },
            { id:'waitlist',     label:'📬 Join Waitlist', sub:'Free updates' },
          ].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              background: activeTab === tab.id
                ? (tab.id === 'earlyAdopter' ? T.accentD : T.surface)
                : 'transparent',
              border: activeTab === tab.id
                ? `1px solid ${tab.id === 'earlyAdopter' ? T.accentG : T.border}`
                : '1px solid transparent',
              borderRadius: 9, padding:'12px 16px',
              cursor:'pointer', transition:'all 0.2s', textAlign:'center',
            }}>
              <div style={{ fontSize:13, fontWeight:600, color: activeTab === tab.id ? T.white : T.dim,
                marginBottom:2, fontFamily:'Barlow' }}>{tab.label}</div>
              <div style={{ fontSize:11, color: activeTab === tab.id
                ? (tab.id === 'earlyAdopter' ? T.accent : T.dim) : T.muted,
                fontWeight:400 }}>{tab.sub}</div>
            </button>
          ))}
        </div>

        {/* Active form */}
        <div style={{
          background: activeTab === 'earlyAdopter' ? T.accentD : T.surf2,
          border: `1px solid ${activeTab === 'earlyAdopter' ? T.accentG : T.border}`,
          borderRadius:16, padding:28, marginBottom:16,
          animation:'fadeIn 0.25s ease',
        }}>
          {activeTab === 'earlyAdopter' ? (
            <>
              <div style={{ display:'flex', alignItems:'flex-start', gap:12, marginBottom:20 }}>
                <div style={{ width:40, height:40, borderRadius:10,
                  background: T.accentD, border:`1px solid ${T.accentG}`,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:18, flexShrink:0 }}>⚡</div>
                <div>
                  <div style={{ fontSize:15, fontWeight:600, color: T.white, marginBottom:3 }}>
                    Reserve Lifetime Pro
                  </div>
                  <div style={{ fontSize:13, color: T.dim, fontWeight:300, lineHeight:1.6 }}>
                    Enter your email now. We'll send you a $5 payment link the day we launch.
                    You pay nothing today — and lock in lifetime Pro forever.
                  </div>
                </div>
              </div>
              <EmailForm variant="earlyAdopter" />
            </>
          ) : (
            <>
              <div style={{ display:'flex', alignItems:'flex-start', gap:12, marginBottom:20 }}>
                <div style={{ width:40, height:40, borderRadius:10,
                  background: T.surf2, border:`1px solid ${T.border}`,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:18, flexShrink:0 }}>📬</div>
                <div>
                  <div style={{ fontSize:15, fontWeight:600, color: T.white, marginBottom:3 }}>
                    Join the Waitlist
                  </div>
                  <div style={{ fontSize:13, color: T.dim, fontWeight:300, lineHeight:1.6 }}>
                    Get notified when Pedalr launches. No spam — just the launch email and
                    occasional build updates.
                  </div>
                </div>
              </div>
              <EmailForm variant="waitlist" />
            </>
          )}
        </div>

        <p style={{ fontSize:12, color: T.muted, textAlign:'center', fontWeight:300, lineHeight:1.6 }}>
          No payment now. No spam. Unsubscribe anytime.
        </p>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop:`1px solid ${T.border}`,
        padding:'32px clamp(20px, 5vw, 60px)',
        display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:16,
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <LogoMark size={20} />
          <span style={{ fontFamily:'Barlow Condensed', fontWeight:700, fontSize:17,
            letterSpacing:'0.06em', color: T.white }}>
            PEDAL<span style={{ color: T.accent }}>R</span>
          </span>
        </div>
        <div style={{ fontSize:12, color: T.muted, fontWeight:300 }}>
          © 2026 Pedalr. Coming soon.
        </div>
      </footer>
    </>
  );
}
