// TEXX logo — real artwork at /public/assets/texx-logo.jpg (emblem + wordmark,
// light on dark). Plain <img>; alt text shows if the file is ever missing.
type TexxLogoProps = {
  height?: number;
  className?: string;
};

export default function TexxLogo({ height = 40, className }: TexxLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src="/assets/texx-logo.png"
      alt="TEXX"
      height={height}
      style={{ height, width: "auto", display: "block" }}
    />
  );
}
