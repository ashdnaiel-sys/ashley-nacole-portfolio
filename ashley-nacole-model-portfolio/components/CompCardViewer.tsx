'use client';

import { useEffect, useState } from 'react';

const WIDTH = 1137;
const HEIGHT = 1473;

const sources = [
  { src: '/images/portfolio/lifestyle-denim-back-close.jpeg', fx: 0.5, fy: 0.43 },
  { src: '/images/portfolio/lifestyle-denim-jacket-smile.jpeg', fx: 0.5, fy: 0.47 },
  { src: '/images/portfolio/lifestyle-denim-seated-full.jpeg', fx: 0.5, fy: 0.5 },
  { src: '/images/portfolio/lifestyle-denim-stool-soft-smile.jpeg', fx: 0.5, fy: 0.45 },
] as const;

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function drawCover(
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  x: number,
  y: number,
  w: number,
  h: number,
  fx = 0.5,
  fy = 0.5,
) {
  const sourceRatio = image.width / image.height;
  const targetRatio = w / h;
  let sw: number;
  let sh: number;
  let sx: number;
  let sy: number;

  if (sourceRatio > targetRatio) {
    sh = image.height;
    sw = sh * targetRatio;
    sx = Math.max(0, Math.min(image.width - sw, image.width * fx - sw / 2));
    sy = 0;
  } else {
    sw = image.width;
    sh = sw / targetRatio;
    sx = 0;
    sy = Math.max(0, Math.min(image.height - sh, image.height * fy - sh / 2));
  }

  ctx.drawImage(image, sx, sy, sw, sh, x, y, w, h);
}

export function CompCardViewer() {
  const [dataUrl, setDataUrl] = useState<string>('');
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function generateCompCard() {
      try {
        const images = await Promise.all(sources.map(({ src }) => loadImage(src)));
        if (cancelled) return;

        const canvas = document.createElement('canvas');
        canvas.width = WIDTH;
        canvas.height = HEIGHT;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Canvas unavailable');

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        const margin = 88;
        const gap = 22;
        const col = (WIDTH - margin * 2 - gap) / 2;
        const top = 58;
        const row = 516;
        const second = top + row + 20;

        drawCover(ctx, images[0], margin, top, col, row, sources[0].fx, sources[0].fy);
        drawCover(ctx, images[1], margin + col + gap, top, col, row, sources[1].fx, sources[1].fy);
        drawCover(ctx, images[2], margin, second, col, row, sources[2].fx, sources[2].fy);
        drawCover(ctx, images[3], margin + col + gap, second, col, row, sources[3].fx, sources[3].fy);

        const textY = second + row + 46;
        ctx.fillStyle = '#111111';
        ctx.textBaseline = 'alphabetic';
        ctx.font = '38px Arial, Helvetica, sans-serif';
        ctx.fillText('ASHLEY NACOLE / MODEL', margin, textY);

        ctx.font = '23px Arial, Helvetica, sans-serif';
        const line = 33;
        const leftLabel = margin;
        const leftValue = margin + 104;
        const rightLabel = margin + 390;
        const rightValue = rightLabel + 108;
        const base = textY + 40;

        const left = [
          ['HEIGHT', '5’8'],
          ['BUST', '32.5”'],
          ['WAIST', '25.5”'],
          ['HIPS', '37”'],
        ];
        const right = [
          ['SHOES', '9'],
          ['HAIR', 'BROWN'],
          ['EYES', 'BROWN'],
        ];

        left.forEach(([label, value], i) => {
          ctx.fillText(label, leftLabel, base + i * line);
          ctx.fillText(value, leftValue, base + i * line);
        });
        right.forEach(([label, value], i) => {
          ctx.fillText(label, rightLabel, base + i * line);
          ctx.fillText(value, rightValue, base + i * line);
        });

        const ruleY = 1390;
        ctx.strokeStyle = '#111111';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(margin, ruleY);
        ctx.lineTo(WIDTH - margin, ruleY);
        ctx.stroke();

        ctx.font = '22px Arial, Helvetica, sans-serif';
        ctx.fillText('NEAL HAMIL AGENCY', margin, ruleY + 38);
        ctx.textAlign = 'right';
        ctx.fillText('ASHLEYNACOLE011@GMAIL.COM', WIDTH - margin, ruleY + 38);
        ctx.textAlign = 'left';

        const url = canvas.toDataURL('image/jpeg', 0.96);
        if (!cancelled) setDataUrl(url);
      } catch {
        if (!cancelled) setError(true);
      }
    }

    generateCompCard();
    return () => {
      cancelled = true;
    };
  }, []);

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
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '.1em',
        }}
      >
        <a href="/digitals" style={{ borderBottom: '1px solid currentColor', paddingBottom: '3px' }}>
          ← Digitals
        </a>
        {dataUrl ? (
          <a
            href={dataUrl}
            download="Ashley-Nacole-Comp-Card.jpg"
            style={{ borderBottom: '1px solid currentColor', paddingBottom: '3px' }}
          >
            Save High-Resolution JPG ↓
          </a>
        ) : (
          <span>Preparing high-resolution JPG…</span>
        )}
      </div>

      {dataUrl ? (
        <img
          src={dataUrl}
          alt="Ashley Nacole high-resolution model comp card"
          width={WIDTH}
          height={HEIGHT}
          style={{
            display: 'block',
            width: 'min(100%, 760px)',
            height: 'auto',
            background: '#fff',
            boxShadow: '0 8px 28px rgba(0,0,0,.14)',
          }}
        />
      ) : error ? (
        <p style={{ width: 'min(100%, 760px)', textAlign: 'center' }}>
          The comp card could not be prepared in this browser. Please open the page in Safari and try again.
        </p>
      ) : (
        <div
          aria-label="Preparing comp card"
          style={{ width: 'min(100%, 760px)', aspectRatio: `${WIDTH} / ${HEIGHT}`, background: '#fff' }}
        />
      )}

      <p style={{ width: 'min(100%, 760px)', margin: 0, color: '#555', fontSize: '12px', textAlign: 'center' }}>
        On iPhone, you can also press and hold the comp card image to save it to Photos.
      </p>
    </main>
  );
}
