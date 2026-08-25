export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" stroke="url(#grad)" strokeWidth="3" fill="#1A1428" />
      <path d="M38 30L38 70L68 54L38 38" stroke="url(#grad)" strokeWidth="4" strokeLinejoin="round" />
      <path d="M28 44C30 46 30 50 28 52" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" />
      <path d="M22 38C26 42 26 54 22 58" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round" />
      <path d="M72 44C74 46 74 50 72 52" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" />
      <path d="M78 38C74 42 74 54 78 58" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round" />
      <circle cx="74" cy="30" r="4" fill="#7C3AED" />
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
    </svg>
  );
}
