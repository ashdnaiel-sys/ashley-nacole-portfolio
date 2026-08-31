const githubImageBase =
  'https://raw.githubusercontent.com/ashdnaiel-sys/ashley-nacole-portfolio/main/ashley-nacole-model-portfolio/public';

export function resolvePublicAsset(src?: string) {
  if (!src) return src;
  if (src.startsWith('/images/')) return `${githubImageBase}${src}`;
  return src;
}
