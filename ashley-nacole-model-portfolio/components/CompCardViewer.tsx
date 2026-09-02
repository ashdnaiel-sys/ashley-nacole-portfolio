const COMP_CARD_IMAGE = '/images/comp-card/ashley-nacole-comp-card.jpg';

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
          href={COMP_CARD_IMAGE}
          target="_blank"
          rel="noreferrer"
          style={{ borderBottom: '1px solid currentColor', paddingBottom: '3px' }}
        >
          Open Full-Resolution Comp Card ↗
        </a>
      </div>

      <a
        href={COMP_CARD_IMAGE}
        target="_blank"
        rel="noreferrer"
        aria-label="Open Ashley Nacole full-resolution model comp card"
        style={{
          display: 'block',
          width: 'min(100%, 760px)',
          background: '#fff',
          boxShadow: '0 8px 28px rgba(0,0,0,.14)',
        }}
      >
        <img
          src={COMP_CARD_IMAGE}
          alt="Ashley Nacole model comp card"
          width={1137}
          height={1473}
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />
      </a>

      <p style={{ width: 'min(100%, 760px)', margin: 0, color: '#555', fontSize: '12px', textAlign: 'center' }}>
        This is the current Ashley Nacole comp card. Tap the card or “Open Full-Resolution Comp Card” above to open the original image at full size.
      </p>
    </main>
  );
}
