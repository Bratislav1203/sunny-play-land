import React from "react";

type SvgProps = { className?: string; style?: React.CSSProperties };

export function SunSvg({ className = "", style }: SvgProps) {
  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ pointerEvents: "none", ...style }}
    >
      <g stroke="#FFB703" strokeWidth="7" strokeLinecap="round">
        <path d="M70 7V22" />
        <path d="M70 118V133" />
        <path d="M7 70H22" />
        <path d="M118 70H133" />
        <path d="M25.5 25.5L36 36" />
        <path d="M104 104L114.5 114.5" />
        <path d="M114.5 25.5L104 36" />
        <path d="M36 104L25.5 114.5" />
      </g>
      <circle cx="70" cy="70" r="41" fill="#FFD84D" stroke="#FFB703" strokeWidth="5" />
      <circle cx="55" cy="63" r="4.5" fill="#24304A" />
      <circle cx="85" cy="63" r="4.5" fill="#24304A" />
      <path
        d="M51 79C56 89 65 94 70 94C75 94 84 89 89 79"
        stroke="#24304A"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="45" cy="76" r="7" fill="#FF8FA3" opacity="0.75" />
      <circle cx="95" cy="76" r="7" fill="#FF8FA3" opacity="0.75" />
    </svg>
  );
}

export function CloudSvg({ className = "", style }: SvgProps) {
  return (
    <svg
      width="240"
      height="130"
      viewBox="0 0 240 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ pointerEvents: "none", ...style }}
    >
      <path
        d="M52 112C28 112 10 95 10 74C10 54 26 38 47 36C55 16 74 5 96 5C123 5 145 23 150 48C157 43 166 40 176 40C199 40 218 57 218 79C218 98 202 112 181 112H52Z"
        fill="#DDF3FF"
        stroke="#A9DFFF"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M46 93C83 101 141 101 187 92"
        stroke="#C4E9FF"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}

export function StarSvg({ className = "", style }: SvgProps) {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ pointerEvents: "none", ...style }}
    >
      <path
        d="M60 9L73 39L106 42L81 64L88 97L60 80L32 97L39 64L14 42L47 39L60 9Z"
        fill="#6EC5FF"
        stroke="#278EDB"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <circle cx="48" cy="57" r="4" fill="#24304A" />
      <circle cx="72" cy="57" r="4" fill="#24304A" />
      <path
        d="M46 69C50 76 56 79 60 79C64 79 70 76 74 69"
        stroke="#24304A"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <circle cx="39" cy="68" r="6" fill="#FF91A8" opacity="0.7" />
      <circle cx="81" cy="68" r="6" fill="#FF91A8" opacity="0.7" />
    </svg>
  );
}

export function BalloonsSvg({ className = "", style }: SvgProps) {
  return (
    <svg
      width="180"
      height="220"
      viewBox="0 0 180 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ pointerEvents: "none", ...style }}
    >
      <path
        d="M53 105C53 105 44 135 59 161C68 177 57 193 50 211"
        stroke="#FF7091"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M112 100C112 100 125 132 108 157C98 172 112 191 120 211"
        stroke="#3F9CFF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <ellipse cx="53" cy="61" rx="35" ry="46" fill="#FF7091" stroke="#EF456E" strokeWidth="5" />
      <ellipse cx="112" cy="55" rx="34" ry="45" fill="#67B7FF" stroke="#268DE0" strokeWidth="5" />
      <path d="M47 105L53 115L59 105" fill="#EF456E" />
      <path d="M106 99L112 109L118 99" fill="#268DE0" />
      <path d="M39 35C45 27 51 25 57 25" stroke="white" strokeWidth="6" strokeLinecap="round" opacity="0.65" />
      <path d="M98 31C104 24 110 22 116 22" stroke="white" strokeWidth="6" strokeLinecap="round" opacity="0.65" />
      <g strokeLinecap="round" strokeWidth="5">
        <path d="M19 139L9 148" stroke="#FFD43B" />
        <path d="M148 130L161 136" stroke="#8C6CFF" />
        <path d="M151 164L163 154" stroke="#FF7091" />
        <path d="M25 175L13 170" stroke="#54C887" />
      </g>
      <rect x="21" y="119" width="9" height="9" rx="2" transform="rotate(20 21 119)" fill="#8C6CFF" />
      <rect x="149" y="112" width="9" height="9" rx="2" transform="rotate(-18 149 112)" fill="#FFD43B" />
    </svg>
  );
}

export function HeartSvg({ className = "", style }: SvgProps) {
  return (
    <svg width="60" height="56" viewBox="0 0 60 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className} style={{ pointerEvents: "none", ...style }}>
      <path d="M30 52C30 52 4 36 4 18C4 9.16 11.16 2 20 2C24.48 2 28.5 3.96 31.26 7.06C33.94 3.96 37.9 2 42 2C50.84 2 58 9.16 58 18C58 36 30 52 30 52Z" fill="#FF91B2" stroke="#FF5F87" strokeWidth="4" strokeLinejoin="round"/>
    </svg>
  );
}

export function RainbowSvg({ className = "", style }: SvgProps) {
  return (
    <svg width="200" height="110" viewBox="0 0 200 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className} style={{ pointerEvents: "none", ...style }}>
      <path d="M10 100 Q100 10 190 100" stroke="#FF5F87" strokeWidth="12" fill="none" strokeLinecap="round"/>
      <path d="M20 100 Q100 22 180 100" stroke="#FFC928" strokeWidth="10" fill="none" strokeLinecap="round"/>
      <path d="M30 100 Q100 34 170 100" stroke="#45B95B" strokeWidth="10" fill="none" strokeLinecap="round"/>
      <path d="M40 100 Q100 46 160 100" stroke="#338BFF" strokeWidth="10" fill="none" strokeLinecap="round"/>
      <path d="M50 100 Q100 57 150 100" stroke="#8059E8" strokeWidth="8" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

export function ConfettiSvg({ className = "", style }: SvgProps) {
  return (
    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className} style={{ pointerEvents: "none", ...style }}>
      <rect x="20" y="15" width="10" height="10" rx="2" transform="rotate(25 20 15)" fill="#FF5F87"/>
      <rect x="80" y="8" width="8" height="8" rx="1" transform="rotate(-15 80 8)" fill="#FFC928"/>
      <rect x="130" y="25" width="10" height="10" rx="2" transform="rotate(40 130 25)" fill="#8059E8"/>
      <rect x="10" y="70" width="8" height="8" rx="1" transform="rotate(10 10 70)" fill="#338BFF"/>
      <rect x="145" y="65" width="9" height="9" rx="2" transform="rotate(-30 145 65)" fill="#45B95B"/>
      <rect x="50" y="130" width="10" height="10" rx="2" transform="rotate(20 50 130)" fill="#11B5C8"/>
      <rect x="110" y="120" width="8" height="8" rx="1" transform="rotate(-10 110 120)" fill="#FF5F87"/>
      <circle cx="60" cy="30" r="5" fill="#FFC928"/>
      <circle cx="140" cy="100" r="4" fill="#FF91B2"/>
      <circle cx="25" cy="110" r="5" fill="#338BFF"/>
      <path d="M100 40 L108 40 L104 47 Z" fill="#8059E8"/>
      <path d="M35 50 L43 50 L39 57 Z" fill="#FF5F87"/>
      <path d="M120 80 L128 80 L124 87 Z" fill="#FFC928"/>
    </svg>
  );
}

export function GiftSvg({ className = "", style }: SvgProps) {
  return (
    <svg width="80" height="90" viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className} style={{ pointerEvents: "none", ...style }}>
      <rect x="8" y="32" width="64" height="52" rx="6" fill="#FF91B2" stroke="#FF5F87" strokeWidth="3"/>
      <rect x="4" y="22" width="72" height="18" rx="6" fill="#FF5F87" stroke="#E04070" strokeWidth="3"/>
      <path d="M40 22V84" stroke="white" strokeWidth="4" strokeLinecap="round"/>
      <path d="M4 36H76" stroke="white" strokeWidth="4" strokeLinecap="round"/>
      <path d="M40 22C40 22 28 10 22 16C16 22 28 22 40 22Z" fill="#FFC928" stroke="#E5B020" strokeWidth="2"/>
      <path d="M40 22C40 22 52 10 58 16C64 22 52 22 40 22Z" fill="#FFC928" stroke="#E5B020" strokeWidth="2"/>
    </svg>
  );
}

export function CoffeeCupSvg({ className = "", style }: SvgProps) {
  return (
    <svg width="70" height="80" viewBox="0 0 70 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className} style={{ pointerEvents: "none", ...style }}>
      <path d="M12 28H52L46 68H18L12 28Z" fill="#FFF8E8" stroke="#E8A040" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M52 34H60C64.4 34 68 37.6 68 42C68 46.4 64.4 50 60 50H52" stroke="#E8A040" strokeWidth="3" strokeLinecap="round"/>
      <rect x="4" y="70" width="56" height="8" rx="4" fill="#E8A040"/>
      <path d="M22 20C22 20 20 14 26 12" stroke="#11B5C8" strokeWidth="3" strokeLinecap="round"/>
      <path d="M32 18C32 18 30 10 38 8" stroke="#11B5C8" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function GameControllerSvg({ className = "", style }: SvgProps) {
  return (
    <svg width="100" height="70" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className} style={{ pointerEvents: "none", ...style }}>
      <path d="M16 20C16 20 8 22 6 40C4 54 12 64 20 64C26 64 30 58 38 56H62C70 58 74 64 80 64C88 64 96 54 94 40C92 22 84 20 84 20H16Z" fill="#8059E8" stroke="#6040C8" strokeWidth="3"/>
      <rect x="24" y="30" width="4" height="14" rx="2" fill="white"/>
      <rect x="18" y="36" width="16" height="4" rx="2" fill="white"/>
      <circle cx="68" cy="32" r="4" fill="#FF5F87" stroke="white" strokeWidth="2"/>
      <circle cx="76" cy="40" r="4" fill="#FFC928" stroke="white" strokeWidth="2"/>
      <circle cx="60" cy="40" r="4" fill="#45B95B" stroke="white" strokeWidth="2"/>
      <circle cx="68" cy="48" r="4" fill="#338BFF" stroke="white" strokeWidth="2"/>
    </svg>
  );
}

export function RocketSvg({ className = "", style }: SvgProps) {
  return (
    <svg width="70" height="100" viewBox="0 0 70 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className} style={{ pointerEvents: "none", ...style }}>
      <path d="M35 5C35 5 18 20 18 50H52C52 20 35 5 35 5Z" fill="#FF5F87" stroke="#E04070" strokeWidth="3"/>
      <rect x="22" y="48" width="26" height="26" rx="4" fill="#FF91B2" stroke="#E04070" strokeWidth="3"/>
      <path d="M22 60L12 68L18 74" stroke="#FFC928" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M48 60L58 68L52 74" stroke="#FFC928" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="35" cy="32" r="8" fill="white" stroke="#E04070" strokeWidth="2"/>
      <circle cx="35" cy="32" r="4" fill="#338BFF"/>
      <path d="M26 74C26 74 22 82 22 90L35 86L48 90C48 82 44 74 44 74H26Z" fill="#FFC928" stroke="#E5B020" strokeWidth="2"/>
    </svg>
  );
}
