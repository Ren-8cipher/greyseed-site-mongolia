export function LeafMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 42V20M24 20c0-7 5-13 13-14 1 8-3 15-13 14Zm0 6c-1-6-6-10-13-10 0 6 5 11 13 10Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LeafDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-2" aria-hidden="true">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50 sm:w-24" />
      <LeafMark className="h-6 w-6 text-gold" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50 sm:w-24" />
    </div>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy ring-1 ring-gold/40">
        <LeafMark className="h-5 w-5 text-sage" />
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-serif text-base font-bold tracking-[0.22em]">GREYSEED</span>
        <span className="mt-1 text-[7px] tracking-[0.18em] opacity-70">
          CASUAL DINING &amp; LIFESTYLE
        </span>
      </span>
    </span>
  );
}
