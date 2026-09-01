const COMP_CARD_VIEW = 'https://www.canva.com/design/DAHT-hyw8rs/view?embed';
const COMP_CARD_OPEN = 'https://www.canva.com/d/hnaFOGiDE9qzRYY';

export function CompCardViewer() {
  return (
    <main
      style={{
        minHeight: '100svh',
        background: '#efefef',
        padding: '18px 14px 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '14px',
      }}
    >
      <div
        style={{
          width: 'min(100%, 760px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '14px',
          flexWrap: 'wrap',
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '.1em',
        }}
      >
        <a href="/digitals" style={{ borderBottom: '1px solid currentColor', paddingBottom: '3px' }}>
          ← Digitals
        </a>
        <a
          href={COMP_CARD_OPEN}
          target="_blank"
          rel="noreferrer"
          style={{ borderBottom: '1px solid currentColor', paddingBottom: '3px' }}
        >
          Open Full-Resolution Comp Card ↗
        </a>
      </div>

      <div
        style={{
          width: 'min(100%, 760px)',
          aspectRatio: '1137 / 1473',
          background: '#fff',
          boxShadow: '0 8px 28px rgba(0,0,0,.14)',
          overflow: 'hidden',
        }}
      >
        <iframe
          src={COMP_CARD_VIEW}
          title="Ashley Nacole high-resolution model comp card"
          allowFullScreen
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            border: 0,
            background: '#fff',
          }}
        />
      </div>

      <p style={{ width: 'min(100%, 760px)', margin: 0, color: '#555', fontSize: '12px', textAlign: 'center' }}>
        This is the current Ashley Nacole comp card. Use “Open Full-Resolution Comp Card” above for the full-size version.
      </p>
    </main>
  );
}
