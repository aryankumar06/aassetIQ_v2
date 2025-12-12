export const LogoMark = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 5L30 12L30 28L20 35L10 28L10 12L20 5Z"
      fill="currentColor"
      opacity="0.2"
    />
    <path
      d="M20 8L27 13L27 27L20 32L13 27L13 13L20 8Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="20" cy="20" r="4" fill="currentColor" />
  </svg>
);

export const BrandLogoFull = ({ className = "h-8" }: { className?: string }) => (
  <div className="flex items-center gap-2">
    <LogoMark className={className} />
    <span className="text-xl font-bold tracking-tight text-white">
      Aasset<span className="text-[#F4C430]">IQ</span>
    </span>
  </div>
);
