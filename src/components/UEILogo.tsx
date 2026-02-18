interface UEILogoProps {
  className?: string;
  /** Show the full company name tagline beneath UEI */
  showTagline?: boolean;
}

export default function UEILogo({ className, showTagline = true }: UEILogoProps) {
  if (!showTagline) {
    // Compact version: "UEI" only — used in navbar and footer
    return (
      <svg
        viewBox="0 0 148 52"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="UEI"
        role="img"
      >
        <text
          x="2"
          y="44"
          fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
          fontWeight="900"
          fontSize="50"
          fill="white"
          letterSpacing="10"
        >
          UEI
        </text>
        {/* Orange underline accent */}
        <rect x="2" y="48" width="36" height="3" fill="#f97316" rx="1.5" />
      </svg>
    );
  }

  // Full version: "UEI" + divider + tagline — used in hero
  return (
    <svg
      viewBox="0 0 272 72"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="UEI — United Electrical Installations, INC."
      role="img"
    >
      {/* Main wordmark */}
      <text
        x="2"
        y="46"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="900"
        fontSize="50"
        fill="white"
        letterSpacing="10"
      >
        UEI
      </text>
      {/* Full-width orange divider */}
      <rect x="2" y="52" width="268" height="1.5" fill="#f97316" rx="0.75" />
      {/* Tagline */}
      <text
        x="2"
        y="66"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="400"
        fontSize="8"
        fill="#f97316"
        letterSpacing="2.5"
      >
        UNITED ELECTRICAL INSTALLATIONS, INC.
      </text>
    </svg>
  );
}
