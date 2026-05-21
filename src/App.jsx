import { useState, useEffect, useRef } from 'react'

// ── FORMSPREE CONTACT FORM ─────────────────────────────────────────
function FormspreeForm() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [focused, setFocused] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    const res = await fetch('https://formspree.io/f/xkoykvdw', {
      method: 'POST',
      body: new FormData(e.target),
      headers: { Accept: 'application/json' },
    })
    if (res.ok) { setSent(true); e.target.reset() }
    setSending(false)
  }

  const inp = (name) => ({
    padding: '15px 18px',
    background: focused === name ? 'rgba(245,166,35,0.06)' : 'rgba(255,255,255,0.03)',
    border: focused === name ? '1px solid rgba(245,166,35,0.6)' : '1px solid rgba(255,255,255,0.08)',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
    width: '100%',
    fontFamily: "'Inter', sans-serif",
    transition: 'all 0.3s ease',
    letterSpacing: '0.3px',
  })

  if (sent) return (
    <div style={{
      textAlign: 'center', padding: '48px 32px',
      background: 'rgba(34,197,94,0.06)',
      border: '1px solid rgba(34,197,94,0.2)',
      borderRadius: '8px',
    }}>
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
      <div style={{ color: '#22C55E', fontSize: '16px', fontFamily: "'Inter'", fontWeight: 600, letterSpacing: '1px' }}>
        MESSAGE SENT
      </div>
      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', fontFamily: "'Inter'", marginTop: '8px' }}>
        I'll reply within 24 hours.
      </div>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <input
        name="name" placeholder="Your Name" required style={inp('name')}
        onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
      />
      <input
        name="email" type="email" placeholder="Your Email" required style={inp('email')}
        onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
      />
      <textarea
        name="message" placeholder="Your Message" rows={5} required
        style={{ ...inp('message'), resize: 'vertical' }}
        onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
      />
      <button type="submit" disabled={sending} style={{
        padding: '16px',
        background: sending ? 'rgba(245,166,35,0.3)' : 'linear-gradient(135deg, #F5A623, #FF8C00)',
        color: sending ? 'rgba(255,255,255,0.5)' : '#000',
        border: 'none', borderRadius: '6px',
        fontSize: '12px', fontWeight: 700, letterSpacing: '3px',
        textTransform: 'uppercase', cursor: sending ? 'not-allowed' : 'pointer',
        fontFamily: "'Inter'",
        transition: 'all 0.3s ease',
        boxShadow: sending ? 'none' : '0 8px 30px rgba(245,166,35,0.35)',
      }}>
        {sending ? 'Sending...' : 'Send Message →'}
      </button>
    </form>
  )
}

// ── PLATFORM LINKS ─────────────────────────────────────────────────
const LINKS = {
  youtube:   'https://www.youtube.com/@Primalthrone',
  amazon:    '#coming-soon-amazon',
  gumroad:   'https://masudad.gumroad.com/',
  digistore: '#coming-soon-digistore',
  pinterest: 'https://www.pinterest.com/davinche2112/',
}

// ── SLIDES ─────────────────────────────────────────────────────────
const slides = [
  {
    id: 1,
    headline: 'UNLOCK YOUR PURPOSE',
    sub: 'KDP Bestseller on Amazon',
    desc: 'Discover the framework thousands use to build a life of meaning and passive income.',
    tag: 'Amazon KDP', emoji: '📖', link: LINKS.amazon,
    blob1: '#FF6B35', blob2: '#F5A623', blob3: '#FFD700',
  },
  {
    id: 2,
    headline: 'DIGITAL INCOME BLUEPRINT',
    sub: 'Premium Digital Product',
    desc: 'The exact system I use to generate passive income from digital products every single day.',
    tag: 'Gumroad', emoji: '💰', link: LINKS.gumroad,
    blob1: '#4ECDC4', blob2: '#2196F3', blob3: '#9C27B0',
  },
  {
    id: 3,
    headline: 'CONTENT CREATOR MASTERY',
    sub: 'Full Video Course',
    desc: 'From zero to monetized. Build a YouTube channel that earns while you sleep.',
    tag: 'Digistore', emoji: '🎬', link: LINKS.digistore,
    blob1: '#E91E8C', blob2: '#FF1744', blob3: '#FF9100',
  },
  {
    id: 4,
    headline: 'THE PINTEREST PROFIT METHOD',
    sub: 'Step-by-Step Digital Guide',
    desc: 'Drive thousands of free clicks to your books and products using Pinterest alone.',
    tag: 'Digital Download', emoji: '📌', link: LINKS.pinterest,
    blob1: '#00E676', blob2: '#1DE9B6', blob3: '#00BCD4',
  },
]

const platforms = [
  { name: 'YouTube',   icon: '▶',  desc: 'Watch free tutorials', link: LINKS.youtube,   color: '#FF0000' },
  { name: 'Amazon',    icon: '📦', desc: 'Browse my books',       link: LINKS.amazon,    color: '#FF9900' },
  { name: 'Gumroad',   icon: '🛒', desc: 'Get digital products',  link: LINKS.gumroad,   color: '#FF90E8' },
  { name: 'Digistore', icon: '💎', desc: 'Premium courses',       link: LINKS.digistore, color: '#6C63FF' },
  { name: 'Pinterest', icon: '📌', desc: 'Visual inspiration',    link: LINKS.pinterest, color: '#E60023' },
]

// ── AURORA BACKGROUND ──────────────────────────────────────────────
function Aurora({ blob1, blob2, blob3 }) {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
      <div style={{ position: 'absolute', inset: 0, background: '#030108' }} />
      <div style={{
        position: 'absolute', width: '70vw', height: '70vw', borderRadius: '50%',
        background: blob1, filter: 'blur(120px)', opacity: 0.35,
        top: '-20%', left: '-10%',
        animation: 'blob1Move 14s ease-in-out infinite alternate',
        transition: 'background 1.2s ease',
      }} />
      <div style={{
        position: 'absolute', width: '55vw', height: '55vw', borderRadius: '50%',
        background: blob2, filter: 'blur(100px)', opacity: 0.30,
        bottom: '-15%', right: '-5%',
        animation: 'blob2Move 10s ease-in-out infinite alternate',
        transition: 'background 1.2s ease',
      }} />
      <div style={{
        position: 'absolute', width: '90vw', height: '25vh', borderRadius: '50%',
        background: `linear-gradient(90deg, ${blob1}, ${blob2}, ${blob3}, ${blob1})`,
        backgroundSize: '300% 100%',
        filter: 'blur(60px)', opacity: 0.45,
        bottom: '5%', left: '-10%',
        animation: 'sweepMove 8s ease-in-out infinite alternate, rainbowShift 6s linear infinite',
        transition: 'background 1.2s ease',
      }} />
      <div style={{
        position: 'absolute', width: '40vw', height: '40vw', borderRadius: '50%',
        background: blob3, filter: 'blur(140px)', opacity: 0.12,
        top: '20%', left: '30%',
        animation: 'blob3Move 18s ease-in-out infinite alternate',
        transition: 'background 1.2s ease',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(2,1,8,0.55)' }} />
    </div>
  )
}

// ── PARTICLES ──────────────────────────────────────────────────────
function Particles() {
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 5 + Math.random() * 8,
    size: 1 + Math.random() * 2.5,
    opacity: 0.4 + Math.random() * 0.6,
  }))
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
      {particles.map(p => (
        <div key={p.id} style={{
          position: 'absolute', left: `${p.left}%`, bottom: '-10px',
          width: `${p.size}px`, height: `${p.size}px`, borderRadius: '50%',
          background: 'radial-gradient(circle, #fff, #FFD700)',
          boxShadow: `0 0 ${p.size * 4}px #FFD700`,
          opacity: p.opacity,
          animation: `floatUp ${p.duration}s ${p.delay}s infinite ease-in`,
        }} />
      ))}
    </div>
  )
}

// ── SCROLL REVEAL ──────────────────────────────────────────────────
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.12 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{
      transition: `opacity 0.9s ease ${delay}ms, transform 0.9s ease ${delay}ms`,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(36px)',
    }}>
      {children}
    </div>
  )
}

// ── COMING SOON OVERLAY ────────────────────────────────────────────
function ComingSoonOverlay({ visible, name, onClose }) {
  useEffect(() => {
    if (visible) {
      const t = setTimeout(onClose, 3500)
      return () => clearTimeout(t)
    }
  }, [visible, onClose])

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(3,1,8,0.85)',
      backdropFilter: 'blur(12px)',
      animation: 'overlayIn 0.4s ease',
    }} onClick={onClose}>
      <div style={{
        background: 'linear-gradient(145deg, #0D0618, #10051E)',
        border: '1px solid rgba(245,166,35,0.4)',
        borderRadius: '16px',
        padding: '64px 72px',
        textAlign: 'center',
        maxWidth: '480px',
        width: '90%',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 40px 120px rgba(245,166,35,0.2), 0 0 0 1px rgba(245,166,35,0.1)',
        animation: 'cardIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }} onClick={e => e.stopPropagation()}>

        {/* Glow top */}
        <div style={{
          position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)',
          width: '200px', height: '200px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,166,35,0.3), transparent)',
          pointerEvents: 'none',
        }} />

        {/* Animated ring */}
        <div style={{
          width: '90px', height: '90px', borderRadius: '50%',
          border: '2px solid rgba(245,166,35,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 28px',
          position: 'relative',
          animation: 'ringPulse 2s ease infinite',
        }}>
          <div style={{
            position: 'absolute', inset: '-8px', borderRadius: '50%',
            border: '1px solid rgba(245,166,35,0.1)',
            animation: 'ringPulse 2s ease infinite 0.3s',
          }} />
          <span style={{ fontSize: '36px' }}>🚀</span>
        </div>

        <div style={{
          fontFamily: "'Inter'", fontSize: '10px', letterSpacing: '5px',
          color: '#F5A623', textTransform: 'uppercase', marginBottom: '14px',
          opacity: 0.8,
        }}>
          Coming Soon
        </div>

        <h3 style={{
          fontFamily: "'Bebas Neue'", fontSize: '48px', letterSpacing: '3px',
          color: '#fff', marginBottom: '16px', lineHeight: 1,
        }}>
          {name} <span style={{
            background: 'linear-gradient(135deg,#FFD700,#F5A623,#FF8C00)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>STORE</span>
        </h3>

        <p style={{
          fontFamily: "'Inter'", fontSize: '14px',
          color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: '36px',
          fontWeight: 300,
        }}>
          Something powerful is being built. Be the first to know when it drops.
        </p>

        {/* Progress bar */}
        <div style={{
          height: '3px', background: 'rgba(255,255,255,0.06)',
          borderRadius: '2px', overflow: 'hidden', marginBottom: '32px',
        }}>
          <div style={{
            height: '100%',
            background: 'linear-gradient(90deg, #F5A623, #FFD700)',
            borderRadius: '2px',
            animation: 'progressBar 3.5s linear forwards',
          }} />
        </div>

        <button onClick={onClose} style={{
          padding: '12px 32px',
          background: 'transparent',
          border: '1px solid rgba(245,166,35,0.3)',
          borderRadius: '4px',
          color: '#F5A623',
          fontFamily: "'Inter'", fontSize: '11px', fontWeight: 600,
          letterSpacing: '2px', textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(245,166,35,0.1)'
            e.currentTarget.style.borderColor = 'rgba(245,166,35,0.6)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderColor = 'rgba(245,166,35,0.3)'
          }}
        >
          Got It
        </button>
      </div>
    </div>
  )
}

// ── MAIN APP ───────────────────────────────────────────────────────
export default function App() {
  const [slide, setSlide] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [textVisible, setTextVisible] = useState(true)
  const [comingSoon, setComingSoon] = useState({ visible: false, name: '' })

  const s = slides[slide]

  const handleComingSoon = (e, name) => {
    e.preventDefault()
    setComingSoon({ visible: true, name })
  }

  const closeComingSoon = () => setComingSoon({ visible: false, name: '' })

  const isComingSoon = (link) => link.startsWith('#coming-soon')

  useEffect(() => {
    const t = setInterval(() => {
      setTextVisible(false)
      setTimeout(() => {
        setSlide(prev => (prev + 1) % slides.length)
        setTextVisible(true)
      }, 400)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const changeSlide = (i) => {
    setTextVisible(false)
    setTimeout(() => { setSlide(i); setTextVisible(true) }, 350)
  }

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: '#030108', color: '#fff', overflowX: 'hidden' }}>

      {/* ── COMING SOON OVERLAY ── */}
      <ComingSoonOverlay
        visible={comingSoon.visible}
        name={comingSoon.name}
        onClose={closeComingSoon}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #030108; }
        ::-webkit-scrollbar-thumb { background: #F5A623; border-radius: 2px; }

        @keyframes overlayIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: scale(0.85) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes ringPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.08); opacity: 0.7; }
        }
        @keyframes progressBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes floatUp {
          0%   { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-100vh) scale(0.2); opacity: 0; }
        }
        @keyframes blob1Move {
          0%   { transform: translate(0,0) scale(1); }
          100% { transform: translate(8vw,6vh) scale(1.15); }
        }
        @keyframes blob2Move {
          0%   { transform: translate(0,0) scale(1); }
          100% { transform: translate(-6vw,-8vh) scale(1.2); }
        }
        @keyframes blob3Move {
          0%   { transform: translate(0,0) rotate(0deg); }
          100% { transform: translate(5vw,4vh) rotate(15deg); }
        }
        @keyframes sweepMove {
          0%   { transform: translateX(-5%) scaleX(1); }
          100% { transform: translateX(5%) scaleX(1.1); }
        }
        @keyframes rainbowShift {
          0%   { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
        @keyframes shimmer {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(245,166,35,0.4); }
          50%       { box-shadow: 0 0 0 8px rgba(245,166,35,0); }
        }
        .gold-text {
          background: linear-gradient(135deg,#FFD700 0%,#F5A623 40%,#FF8C00 70%,#FFD700 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s ease infinite;
        }
        .hover-lift { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .hover-lift:hover { transform: translateY(-10px); box-shadow: 0 24px 60px rgba(0,0,0,0.5); }
        .nav-link { cursor: pointer; transition: color 0.2s; }
        .nav-link:hover { color: #F5A623; }
        .dot-btn { cursor: pointer; transition: all 0.35s ease; }
        .cta-gold {
          padding: 16px 38px;
          background: linear-gradient(135deg, #F5A623, #FF8C00);
          color: #000; border: none; cursor: pointer; text-decoration: none;
          display: inline-block;
          font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase; border-radius: 2px;
          box-shadow: 0 8px 30px rgba(245,166,35,0.4);
          transition: all 0.3s ease;
        }
        .cta-gold:hover { transform: translateY(-3px); box-shadow: 0 18px 50px rgba(245,166,35,0.65); }
        .cta-outline {
          padding: 16px 38px; background: transparent; color: #F5A623;
          border: 1px solid rgba(245,166,35,0.45); cursor: pointer; text-decoration: none;
          display: inline-block;
          font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 500;
          letter-spacing: 2px; text-transform: uppercase; border-radius: 2px;
          transition: all 0.3s ease;
        }
        .cta-outline:hover { background: rgba(245,166,35,0.08); transform: translateY(-3px); border-color: rgba(245,166,35,0.8); }
        .footer-link { color: #444; text-decoration: none; font-family: 'Inter', sans-serif; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; transition: color 0.2s; }
        .footer-link:hover { color: #F5A623; }
        .wa-btn { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .wa-btn:hover { transform: scale(1.15); box-shadow: 0 8px 30px rgba(37,211,102,0.7); }
        .coming-soon-badge {
          display: inline-flex; align-items: center; gap: 6px;
          padding: '3px 10px';
          background: rgba(245,166,35,0.12);
          border: 1px solid rgba(245,166,35,0.3);
          border-radius: 100px;
          font-family: 'Inter', sans-serif; font-size: 9px;
          letter-spacing: 2px; color: #F5A623; text-transform: uppercase;
          animation: badgePulse 2s ease infinite;
        }
        .platform-card {
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .platform-card:hover {
          transform: translateY(-10px);
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '18px 48px',
        background: scrolled ? 'rgba(3,1,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(28px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(245,166,35,0.12)' : 'none',
        transition: 'all 0.4s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div className="gold-text" onClick={() => goTo('hero')}
          style={{ fontFamily: "'Bebas Neue'", fontSize: '30px', letterSpacing: '4px', cursor: 'pointer' }}>
          DAVID
        </div>
        <div style={{ display: 'flex', gap: '36px', fontFamily: "'Inter'", fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#bbb' }}>
          {[['hero','Home'],['about','About'],['books','Books'],['platforms','Platforms'],['contact','Contact']].map(([id,label]) => (
            <span key={id} className="nav-link" onClick={() => goTo(id)}>{label}</span>
          ))}
        </div>
        <a href={LINKS.youtube} target="_blank" rel="noreferrer" className="cta-gold" style={{ padding: '10px 22px', fontSize: '11px' }}>
          Watch Now
        </a>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Aurora blob1={s.blob1} blob2={s.blob2} blob3={s.blob3} />
        <Particles />
        <div style={{
          position: 'relative', zIndex: 2,
          width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 48px',
          display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '80px', alignItems: 'center',
        }}>
          <div style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ fontFamily: "'Inter'", fontSize: '11px', letterSpacing: '4px', color: '#F5A623', textTransform: 'uppercase' }}>
                ✦ {s.tag}
              </div>
              {isComingSoon(s.link) && (
                <span style={{
                  padding: '3px 10px',
                  background: 'rgba(245,166,35,0.12)',
                  border: '1px solid rgba(245,166,35,0.3)',
                  borderRadius: '100px',
                  fontFamily: "'Inter'", fontSize: '9px',
                  letterSpacing: '2px', color: '#F5A623', textTransform: 'uppercase',
                  animation: 'badgePulse 2s ease infinite',
                }}>
                  ● Coming Soon
                </span>
              )}
            </div>
            <h1 style={{ fontFamily: "'Bebas Neue'", fontSize: 'clamp(56px, 8vw, 108px)', lineHeight: 0.92, marginBottom: '28px', letterSpacing: '2px', color: '#fff' }}>
              {s.headline.split(' ').map((word, i) => (
                <span key={i} style={{ display: 'block' }}>
                  {i === 1 ? <span className="gold-text">{word}</span> : word}
                </span>
              ))}
            </h1>
            <p style={{ fontFamily: "'Inter'", fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.65)', maxWidth: '420px', marginBottom: '40px', fontWeight: 300 }}>
              {s.desc}
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href={isComingSoon(s.link) ? '#' : s.link}
                target={isComingSoon(s.link) ? '_self' : '_blank'}
                rel="noreferrer"
                className="cta-gold"
                onClick={isComingSoon(s.link) ? (e) => handleComingSoon(e, s.tag) : undefined}
              >
                Get It Now →
              </a>
              <button className="cta-outline" onClick={() => goTo('books')}>See All Books</button>
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '48px' }}>
              {slides.map((_, i) => (
                <div key={i} className="dot-btn" onClick={() => changeSlide(i)} style={{
                  width: i === slide ? '32px' : '8px', height: '8px', borderRadius: '4px',
                  background: i === slide ? '#F5A623' : 'rgba(255,255,255,0.2)',
                }} />
              ))}
            </div>
          </div>

          <div style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? 'scale(1)' : 'scale(0.95)',
            transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(40px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px', padding: '52px 44px',
              position: 'relative', overflow: 'hidden',
              boxShadow: `0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px ${s.blob1}20`,
            }}>
              <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '160px', height: '160px', borderRadius: '50%', background: `radial-gradient(${s.blob1}50, transparent)`, transition: 'background 1s ease' }} />
              <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '100px', height: '100px', borderRadius: '50%', background: `radial-gradient(${s.blob2}30, transparent)`, transition: 'background 1s ease' }} />
              <div style={{ position: 'relative' }}>
                <div style={{ fontSize: '72px', marginBottom: '20px', lineHeight: 1 }}>{s.emoji}</div>
                <div style={{
                  display: 'inline-block', padding: '4px 14px',
                  background: `${s.blob1}25`, border: `1px solid ${s.blob1}50`,
                  color: s.blob1, fontSize: '10px', letterSpacing: '2px',
                  fontFamily: "'Inter'", textTransform: 'uppercase',
                  marginBottom: '18px', borderRadius: '2px', transition: 'all 1s ease',
                }}>{s.tag}</div>
                <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#fff', marginBottom: '12px', lineHeight: 1.25 }}>{s.headline}</h2>
                <p style={{ fontFamily: "'Inter'", fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '28px' }}>{s.sub}</p>
                {isComingSoon(s.link) && (
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '8px 16px',
                    background: 'rgba(245,166,35,0.08)',
                    border: '1px solid rgba(245,166,35,0.25)',
                    borderRadius: '100px',
                    fontFamily: "'Inter'", fontSize: '10px',
                    letterSpacing: '2px', color: '#F5A623',
                    textTransform: 'uppercase', marginBottom: '20px',
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F5A623', animation: 'badgePulse 1.5s ease infinite', display: 'inline-block' }} />
                    Launching Soon
                  </div>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '36px', height: '3px', background: `linear-gradient(90deg, ${s.blob1}, ${s.blob2})`, borderRadius: '2px', transition: 'background 1s ease' }} />
                  <span style={{ fontFamily: "'Inter'", fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '2px', textTransform: 'uppercase' }}>David's Collection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ borderTop: '1px solid rgba(245,166,35,0.12)', borderBottom: '1px solid rgba(245,166,35,0.12)', background: 'rgba(245,166,35,0.025)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '36px 48px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px', textAlign: 'center' }}>
          {[['10K+','Readers Worldwide'],['5','Active Platforms'],['50+','Digital Products'],['∞','Passive Income']].map(([num, label]) => (
            <Reveal key={label}>
              <div className="gold-text" style={{ fontFamily: "'Bebas Neue'", fontSize: '52px', letterSpacing: '2px' }}>{num}</div>
              <div style={{ fontFamily: "'Inter'", fontSize: '11px', color: '#555', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>{label}</div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: '130px 48px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
          <Reveal>
            <div style={{ background: 'linear-gradient(145deg, rgba(245,166,35,0.06), rgba(255,140,0,0.03))', border: '1px solid rgba(245,166,35,0.15)', borderRadius: '6px', padding: '60px 50px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ fontFamily: "'Bebas Neue'", fontSize: '160px', color: 'rgba(245,166,35,0.05)', position: 'absolute', top: '-20px', right: '10px', lineHeight: 1, userSelect: 'none' }}>D</div>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, #F5A623, #FF8C00)', marginBottom: '24px', borderRadius: '2px' }} />
                <p style={{ fontFamily: "'Inter'", fontSize: '11px', letterSpacing: '4px', color: '#F5A623', textTransform: 'uppercase', marginBottom: '12px' }}>Author · Creator</p>
                <h2 style={{ fontFamily: "'Bebas Neue'", fontSize: '60px', letterSpacing: '2px', marginBottom: '24px', lineHeight: 1 }}>HI, I'M<br /><span className="gold-text">DAVID</span></h2>
                <p style={{ fontFamily: "'Inter'", fontSize: '15px', lineHeight: 1.9, color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}>
                  YouTube creator, KDP author, and digital entrepreneur. I build products that create real results — books, courses, and tools designed around one mission: your freedom.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div>
              <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, #F5A623, #FF8C00)', marginBottom: '24px', borderRadius: '2px' }} />
              <p style={{ fontFamily: "'Inter'", fontSize: '11px', letterSpacing: '4px', color: '#F5A623', textTransform: 'uppercase', marginBottom: '14px' }}>My Mission</p>
              <h2 style={{ fontFamily: "'Bebas Neue'", fontSize: '52px', letterSpacing: '1px', marginBottom: '28px', lineHeight: 1.1 }}>TURNING <span className="gold-text">KNOWLEDGE</span> INTO INCOME</h2>
              <p style={{ fontFamily: "'Inter'", fontSize: '15px', lineHeight: 1.9, color: 'rgba(255,255,255,0.5)', marginBottom: '36px', fontWeight: 300 }}>
                Everything here — books, digital products, content — is engineered to help you build multiple income streams whether you are a beginner or ready to scale.
              </p>
              {['Books that teach real systems', 'Digital products that deliver daily income', 'A multi-platform presence anyone can build'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '16px', fontFamily: "'Inter'", fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                  <span style={{ color: '#F5A623', marginTop: '2px', flexShrink: 0 }}>✦</span>{item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── BOOKS ── */}
      <section id="books" style={{ padding: '130px 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(245,166,35,0.04) 0%, transparent 65%)' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <p style={{ fontFamily: "'Inter'", fontSize: '11px', letterSpacing: '4px', color: '#F5A623', textTransform: 'uppercase', marginBottom: '14px' }}>✦ Books & Products ✦</p>
              <h2 style={{ fontFamily: "'Bebas Neue'", fontSize: '76px', letterSpacing: '2px', lineHeight: 1 }}>SHOP THE <span className="gold-text">COLLECTION</span></h2>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '24px' }}>
            {slides.map((item, i) => (
              <Reveal key={item.id} delay={i * 100}>
                <a
                  href={isComingSoon(item.link) ? '#' : item.link}
                  target={isComingSoon(item.link) ? '_self' : '_blank'}
                  rel="noreferrer"
                  style={{ textDecoration: 'none', display: 'block' }}
                  onClick={isComingSoon(item.link) ? (e) => handleComingSoon(e, item.tag) : undefined}
                >
                  <div className="hover-lift" style={{
                    background: 'linear-gradient(145deg, #0D0618, #080310)',
                    border: `1px solid ${item.blob1}20`, borderRadius: '6px', padding: '44px 38px',
                    cursor: 'pointer', position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '120px', background: `radial-gradient(${item.blob1}18, transparent)` }} />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                      <div style={{ fontSize: '44px', lineHeight: 1 }}>{item.emoji}</div>
                      {isComingSoon(item.link) && (
                        <span style={{
                          padding: '4px 12px',
                          background: 'rgba(245,166,35,0.1)',
                          border: '1px solid rgba(245,166,35,0.25)',
                          borderRadius: '100px',
                          fontFamily: "'Inter'", fontSize: '9px',
                          letterSpacing: '2px', color: '#F5A623',
                          textTransform: 'uppercase',
                        }}>
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <div style={{ display: 'inline-block', padding: '4px 12px', background: `${item.blob1}18`, border: `1px solid ${item.blob1}40`, color: item.blob1, fontSize: '10px', letterSpacing: '2px', fontFamily: "'Inter'", textTransform: 'uppercase', marginBottom: '16px', borderRadius: '2px' }}>{item.tag}</div>
                    <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '10px', lineHeight: 1.2 }}>{item.headline}</h3>
                    <p style={{ fontFamily: "'Inter'", fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: '24px' }}>{item.desc}</p>
                    <span style={{ color: item.blob1, fontFamily: "'Inter'", fontSize: '12px', fontWeight: 600, letterSpacing: '1px' }}>
                      {isComingSoon(item.link) ? 'Notify Me →' : 'Get Access →'}
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section id="platforms" style={{ padding: '130px 48px', maxWidth: '1200px', margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <p style={{ fontFamily: "'Inter'", fontSize: '11px', letterSpacing: '4px', color: '#F5A623', textTransform: 'uppercase', marginBottom: '14px' }}>✦ Find Me Everywhere ✦</p>
            <h2 style={{ fontFamily: "'Bebas Neue'", fontSize: '76px', letterSpacing: '2px' }}>ALL <span className="gold-text">PLATFORMS</span></h2>
            <p style={{ fontFamily: "'Inter'", fontSize: '15px', color: 'rgba(255,255,255,0.4)', marginTop: '16px', fontWeight: 300 }}>One creator. Five streams. One mission.</p>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '16px' }}>
          {platforms.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <a
                href={isComingSoon(p.link) ? '#' : p.link}
                target={isComingSoon(p.link) ? '_self' : '_blank'}
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
                onClick={isComingSoon(p.link) ? (e) => handleComingSoon(e, p.name) : undefined}
              >
                <div className="platform-card" style={{
                  background: 'linear-gradient(145deg, #0D0618, #080310)',
                  border: `1px solid ${p.color}20`, borderRadius: '6px',
                  padding: '36px 20px', textAlign: 'center', cursor: 'pointer',
                }}>
                  <div style={{ fontSize: '34px', marginBottom: '14px' }}>{p.icon}</div>
                  <div style={{ fontFamily: "'Bebas Neue'", fontSize: '20px', letterSpacing: '1px', color: '#fff', marginBottom: '8px' }}>{p.name}</div>
                  <div style={{ fontFamily: "'Inter'", fontSize: '11px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5, marginBottom: '12px' }}>{p.desc}</div>
                  {isComingSoon(p.link) ? (
                    <div style={{
                      display: 'inline-block', padding: '3px 10px',
                      background: 'rgba(245,166,35,0.08)',
                      border: '1px solid rgba(245,166,35,0.2)',
                      borderRadius: '100px',
                      fontFamily: "'Inter'", fontSize: '8px',
                      letterSpacing: '2px', color: '#F5A623',
                      textTransform: 'uppercase',
                    }}>Soon</div>
                  ) : (
                    <div style={{ width: '28px', height: '2px', background: p.color, margin: '4px auto 0', borderRadius: '1px' }} />
                  )}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA + CONTACT FORM ── */}
      <section id="contact" style={{ position: 'relative', padding: '140px 48px', overflow: 'hidden' }}>
        <Aurora blob1="#F5A623" blob2="#FF6B35" blob3="#FFD700" />
        <Particles />
        <Reveal>
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontFamily: "'Inter'", fontSize: '11px', letterSpacing: '4px', color: '#F5A623', textTransform: 'uppercase', marginBottom: '20px' }}>✦ Join the Movement ✦</p>
            <h2 style={{ fontFamily: "'Bebas Neue'", fontSize: 'clamp(56px, 8vw, 100px)', letterSpacing: '2px', lineHeight: 0.95, marginBottom: '28px' }}>
              START YOUR<br /><span className="gold-text">JOURNEY</span><br />TODAY
            </h2>
            <p style={{ fontFamily: "'Inter'", fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '48px', fontWeight: 300 }}>
              Every book. Every product. Every video. It all compounds. Start now.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={LINKS.youtube} target="_blank" rel="noreferrer" className="cta-gold">▶ Watch on YouTube</a>
              <a href={LINKS.pinterest} target="_blank" rel="noreferrer" className="cta-outline">📌 Pinterest</a>
            </div>

            {/* ── CONTACT FORM ── */}
            <div style={{ marginTop: '60px' }}>
              <p style={{ fontFamily: "'Inter'", fontSize: '11px', letterSpacing: '4px', color: '#aa88ff', textTransform: 'uppercase', textAlign: 'center', marginBottom: '28px' }}>
                ✦ Send a Message ✦
              </p>
              <FormspreeForm />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid rgba(245,166,35,0.1)', padding: '48px', textAlign: 'center' }}>
        <div className="gold-text" style={{ fontFamily: "'Bebas Neue'", fontSize: '36px', letterSpacing: '5px', marginBottom: '20px' }}>DAVID</div>
        <div style={{ display: 'flex', gap: '28px', justifyContent: 'center', marginBottom: '28px', flexWrap: 'wrap' }}>
          {platforms.map(p => (
            <a
              key={p.name}
              href={isComingSoon(p.link) ? '#' : p.link}
              target={isComingSoon(p.link) ? '_self' : '_blank'}
              rel="noreferrer"
              className="footer-link"
              onClick={isComingSoon(p.link) ? (e) => handleComingSoon(e, p.name) : undefined}
            >
              {p.name}
            </a>
          ))}
        </div>
        <p style={{ fontFamily: "'Inter'", fontSize: '12px', color: '#2a2a2a' }}>
          © {new Date().getFullYear()} David. All rights reserved. Built with purpose.
        </p>
      </footer>

      {/* ── WHATSAPP FLOATING BUTTON ── */}
      <a
        href="https://wa.me/251943055403?text=Hi%2C%20I%20found%20your%20website%21"
        target="_blank"
        rel="noreferrer"
        className="wa-btn"
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 9999,
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
          fontSize: '28px',
          textDecoration: 'none',
        }}
      >
        💬
      </a>

    </div>
  )
}