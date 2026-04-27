export const T = {
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
  
  export const globalStyle = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { background: ${T.black}; color: ${T.text}; font-family: 'Barlow', sans-serif; font-weight: 400; line-height: 1.5; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
    ::selection { background: ${T.accent}; color: white; }
    input { font-family: 'Barlow', sans-serif; }
    @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
    @keyframes spin { to { transform: rotate(360deg); } }
  `;