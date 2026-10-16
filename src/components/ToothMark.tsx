interface ToothMarkProps {
  size?: number | string;
  className?: string;
  variant?: 'bicolor' | 'line';
  id?: string;
}

const TOOTH_PATH =
  'M18,8 C30,0 40,6 50,6 C60,6 70,0 82,8 C97,18 98,42 92,56 C88,66 86,78 82,92 C79,100 70,100 68,92 C64,78 60,70 50,70 C40,70 36,78 32,92 C30,100 21,100 18,92 C14,78 12,66 8,56 C2,42 3,18 18,8 Z';

export function ToothMark({
  size = 24,
  className = '',
  variant = 'bicolor',
  id = 'tooth-mark',
}: ToothMarkProps) {
  if (variant === 'line') {
    return (
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d={TOOTH_PATH} stroke="#2CDDC0" strokeWidth="2" fill="none" />
      </svg>
    );
  }

  const clipId = `clip-${id}`;

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipId}>
          <rect x="50" y="0" width="50" height="100" />
        </clipPath>
      </defs>
      <path d={TOOTH_PATH} fill="#2CDDC0" />
      <path d={TOOTH_PATH} fill="#0E777F" clipPath={`url(#${clipId})`} />
    </svg>
  );
}
