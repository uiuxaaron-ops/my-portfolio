interface WavyDividerProps {
  flip?: boolean;
  className?: string;
}

export function WavyDivider({ flip = false, className = "" }: WavyDividerProps) {
  return (
    <div className={`w-full overflow-hidden ${className}`} style={{ lineHeight: 0 }}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-[60px] sm:h-[80px] ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,0 C150,80 350,20 600,50 C850,80 1050,20 1200,50 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}