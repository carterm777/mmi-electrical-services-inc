/*
 * One markup pattern for every photograph on the page, per the image
 * catalogue: explicit dimensions, an 800px srcSet entry, real alt text, and
 * lazy loading everywhere except the hero.
 */
export default function Img({
  name,
  alt,
  width,
  height,
  sizes = '100vw',
  priority = false,
  className = '',
}) {
  return (
    <img
      className={className}
      src={`/images/${name}.webp`}
      srcSet={`/images/${name}-800.webp 800w, /images/${name}.webp 1600w`}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchpriority={priority ? 'high' : undefined}
      decoding="async"
    />
  )
}
