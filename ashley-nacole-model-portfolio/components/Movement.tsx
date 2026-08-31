import { movementVideos } from '@/data/modelData';

function getEmbedUrl(type: 'youtube' | 'vimeo', src: string) {
  if (type === 'youtube') {
    let id = src.includes('youtu.be/') ? src.split('youtu.be/')[1]?.split(/[?&]/)[0] : undefined;
    if (!id) {
      try { id = new URL(src).searchParams.get('v') ?? undefined; } catch { id = undefined; }
    }
    return id ? `https://www.youtube-nocookie.com/embed/${id}` : src;
  }
  const match = src.match(/vimeo\.com\/(\d+)/);
  return match ? `https://player.vimeo.com/video/${match[1]}` : src;
}

export function Movement() {
  const videos = movementVideos.filter((video) => video.visible).sort((a, b) => a.order - b.order);

  return (
    <section className="movement-section section-shell" id="movement" aria-labelledby="movement-title">
      <div className="section-intro-line">
        <div>
          <p className="eyebrow">Motion / Athletic Ability</p>
          <h2 id="movement-title">Movement</h2>
        </div>
        <p className="section-copy narrow-copy">Natural movement for commercial, fitness, wellness, and fashion environments.</p>
      </div>
      <div className="movement-grid">
        {videos.map((video) => (
          <article className="movement-card" key={video.id}>
            {video.src ? (
              video.type === 'mp4' ? (
                <video controls preload="metadata" poster={video.poster} playsInline>
                  <source src={video.src} type="video/mp4" />
                </video>
              ) : (
                <iframe
                  src={getEmbedUrl(video.type, video.src)}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )
            ) : (
              <div className="video-placeholder" aria-label={`${video.title} placeholder`}>
                <span>VIDEO PLACEHOLDER</span>
              </div>
            )}
            <h3>{video.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
