type Props = {
  label: string;
  orientation?: 'portrait' | 'landscape' | 'square';
  className?: string;
};

export function ImagePlaceholder({ label, orientation = 'portrait', className = '' }: Props) {
  return (
    <div className={`image-placeholder ${orientation} ${className}`} role="img" aria-label={label}>
      <span>{label}</span>
    </div>
  );
}
