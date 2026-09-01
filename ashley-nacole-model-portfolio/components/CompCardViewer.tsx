const COMP_CARD = '/images/comp-card/ashley-nacole-comp-card.jpg';

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
          href={COMP_CARD}
          download="Ashley-Nacole-Comp-Card.jpg"
          style={{ borderBottom: '1px solid currentColor', paddingBottom: '3px' }}
        >
          Save High-Resolution JPG ↓
        </a>
      </div>

      <a href={COMP_CARD} target="_blank" rel="noreferrer" style={{ width: 'min(100%, 760px)' }}>
        <img
          src={COMP_CARD}
          alt="Ashley Nacole high-resolution model comp card"
          width={1137}
          height={1473}
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            background: '#fff',
            boxShadow: '0 8px 28px rgba(0,0,0,.14)',
          }}
        />
      </a>

      <p style={{ width: 'min(100%, 760px)', margin: 0, color: '#555', fontSize: '12px', textAlign: 'center' }}>
        Tap the card to open it full size. On iPhone, you can also press and hold the image to save it to Photos.
      </p>
    </main>
  );
}
