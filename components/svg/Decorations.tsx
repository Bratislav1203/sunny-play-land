import React from "react";

type SvgProps = { className?: string; style?: React.CSSProperties };

export function SunSvg({ className = "", style }: SvgProps) {
  return (
    <svg
      width="220"
      height="220"
      viewBox="0 0 220 220"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Nasmejano sunce"
      className={className}
      style={{ pointerEvents: "none", ...style }}
    >
      <defs>
        <radialGradient id="sunFaceGradient" cx="35%" cy="28%" r="75%">
          <stop offset="0%" stopColor="#FFF7A8" />
          <stop offset="40%" stopColor="#FFD84A" />
          <stop offset="100%" stopColor="#FFAA00" />
        </radialGradient>
        <linearGradient id="sunRayGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD640" />
          <stop offset="100%" stopColor="#FF9F00" />
        </linearGradient>
        <radialGradient id="sunCheekGradient">
          <stop offset="0%" stopColor="#FF9AB0" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#FF718F" stopOpacity="0.15" />
        </radialGradient>
        <filter id="sunShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#E58A00" floodOpacity="0.28" />
        </filter>
        <filter id="sunInnerGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="blur" in2="SourceGraphic" operator="in" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Zraci */}
      <g stroke="url(#sunRayGradient)" strokeWidth="11" strokeLinecap="round" opacity="0.98">
        <path d="M110 12V35" />
        <path d="M110 185V208" />
        <path d="M12 110H35" />
        <path d="M185 110H208" />
        <path d="M41 41L58 58" />
        <path d="M162 162L179 179" />
        <path d="M179 41L162 58" />
        <path d="M58 162L41 179" />
        <path d="M72 20L80 42" />
        <path d="M140 178L148 200" />
        <path d="M20 72L42 80" />
        <path d="M178 140L200 148" />
        <path d="M148 20L140 42" />
        <path d="M80 178L72 200" />
        <path d="M20 148L42 140" />
        <path d="M178 80L200 72" />
      </g>

      {/* Lice */}
      <circle cx="110" cy="110" r="70" fill="url(#sunFaceGradient)" stroke="#F39B00" strokeWidth="6" filter="url(#sunShadow)" />

      {/* Svetlosni odsjaj */}
      <ellipse cx="83" cy="75" rx="29" ry="19" fill="#FFFFFF" opacity="0.38" transform="rotate(-25 83 75)" />
      <ellipse cx="72" cy="62" rx="11" ry="6" fill="#FFFFFF" opacity="0.55" transform="rotate(-25 72 62)" />

      {/* Obrve */}
      <path d="M70 92C78 84 88 83 96 88" fill="none" stroke="#6A4300" strokeWidth="5" strokeLinecap="round" opacity="0.75" />
      <path d="M124 88C133 83 143 84 151 92" fill="none" stroke="#6A4300" strokeWidth="5" strokeLinecap="round" opacity="0.75" />

      {/* Oči */}
      <ellipse cx="84" cy="107" rx="8" ry="11" fill="#252C46" />
      <ellipse cx="136" cy="107" rx="8" ry="11" fill="#252C46" />
      <circle cx="81" cy="103" r="2.8" fill="#FFFFFF" opacity="0.9" />
      <circle cx="133" cy="103" r="2.8" fill="#FFFFFF" opacity="0.9" />

      {/* Obrazi */}
      <ellipse cx="65" cy="129" rx="17" ry="11" fill="url(#sunCheekGradient)" />
      <ellipse cx="155" cy="129" rx="17" ry="11" fill="url(#sunCheekGradient)" />

      {/* Osmeh */}
      <path d="M77 127C85 145 99 153 110 153C121 153 135 145 143 127" fill="none" stroke="#343A54" strokeWidth="7" strokeLinecap="round" />
      <path d="M92 145C103 151 117 151 128 145" fill="none" stroke="#FF788F" strokeWidth="5" strokeLinecap="round" opacity="0.75" />
    </svg>
  );
}

export function CloudSvg({ className = "", style }: SvgProps) {
  return (
    <svg
      width="330"
      height="190"
      viewBox="0 0 330 190"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Mekani oblak"
      className={className}
      style={{ pointerEvents: "none", ...style }}
    >
      <defs>
        <linearGradient id="cloudMainGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="52%" stopColor="#F1FAFF" />
          <stop offset="100%" stopColor="#CFEFFF" />
        </linearGradient>
        <linearGradient id="cloudBottomGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D9F3FF" />
          <stop offset="100%" stopColor="#A7DDF7" />
        </linearGradient>
        <radialGradient id="cloudHighlight">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <filter id="cloudShadow" x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#62B5D8" floodOpacity="0.24" />
        </filter>
      </defs>

      {/* Glavni oblak */}
      <path
        d="M67 161 C34 161 12 141 12 112 C12 84 34 63 62 62 C72 32 99 13 132 13 C169 13 199 35 207 68 C219 56 237 49 256 49 C291 49 318 74 318 106 C318 138 292 161 257 161 Z"
        fill="url(#cloudMainGradient)"
        stroke="#A8DDF5"
        strokeWidth="5"
        strokeLinejoin="round"
        filter="url(#cloudShadow)"
      />

      {/* Donja dubina */}
      <path
        d="M42 136 C82 151 130 151 166 144 C206 136 248 140 286 126 C278 149 259 161 234 161 H68 C56 161 47 152 42 136 Z"
        fill="url(#cloudBottomGradient)"
        opacity="0.68"
      />

      {/* Odsjaji */}
      <ellipse cx="124" cy="55" rx="54" ry="31" fill="url(#cloudHighlight)" />
      <ellipse cx="224" cy="85" rx="42" ry="25" fill="url(#cloudHighlight)" opacity="0.65" />

      {/* Blaga unutrašnja linija */}
      <path
        d="M55 131C104 146 158 146 208 135C238 128 265 129 288 119"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.55"
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
      width="280"
      height="350"
      viewBox="0 0 280 350"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Šareni baloni"
      className={className}
      style={{ pointerEvents: "none", ...style }}
    >
      <defs>
        <radialGradient id="pinkBalloon" cx="32%" cy="24%" r="78%">
          <stop offset="0%" stopColor="#FFB8CC" />
          <stop offset="38%" stopColor="#FF719A" />
          <stop offset="100%" stopColor="#DF376C" />
        </radialGradient>
        <radialGradient id="blueBalloon" cx="30%" cy="22%" r="80%">
          <stop offset="0%" stopColor="#BDEAFF" />
          <stop offset="42%" stopColor="#55B9FF" />
          <stop offset="100%" stopColor="#1674D1" />
        </radialGradient>
        <radialGradient id="yellowBalloon" cx="30%" cy="22%" r="80%">
          <stop offset="0%" stopColor="#FFF4A7" />
          <stop offset="42%" stopColor="#FFD13D" />
          <stop offset="100%" stopColor="#F5A500" />
        </radialGradient>
        <filter id="balloonShadow" x="-40%" y="-30%" width="180%" height="180%">
          <feDropShadow dx="0" dy="9" stdDeviation="8" floodColor="#304A6D" floodOpacity="0.2" />
        </filter>
        <linearGradient id="stringGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B45A76" />
          <stop offset="100%" stopColor="#6E7FA7" />
        </linearGradient>
      </defs>

      {/* Kanapi */}
      <path d="M80 172C90 220 57 248 94 337" fill="none" stroke="#CC5578" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M142 150C124 211 172 250 143 338" fill="none" stroke="#3488D8" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M201 174C181 221 220 261 190 337" fill="none" stroke="#E9A713" strokeWidth="3.5" strokeLinecap="round" />

      {/* Roze balon */}
      <ellipse cx="78" cy="95" rx="54" ry="72" fill="url(#pinkBalloon)" stroke="#CC3367" strokeWidth="5" filter="url(#balloonShadow)" />
      <path d="M67 160L78 179L89 160Z" fill="#D8396D" stroke="#C22C5C" strokeWidth="2" />
      <ellipse cx="61" cy="64" rx="16" ry="26" fill="#FFFFFF" opacity="0.5" transform="rotate(18 61 64)" />
      <ellipse cx="55" cy="48" rx="6" ry="10" fill="#FFFFFF" opacity="0.72" transform="rotate(18 55 48)" />

      {/* Plavi balon */}
      <ellipse cx="147" cy="75" rx="52" ry="69" fill="url(#blueBalloon)" stroke="#156FBE" strokeWidth="5" filter="url(#balloonShadow)" />
      <path d="M136 136L147 155L158 136Z" fill="#258AD9" stroke="#156FBE" strokeWidth="2" />
      <ellipse cx="129" cy="47" rx="15" ry="25" fill="#FFFFFF" opacity="0.52" transform="rotate(17 129 47)" />
      <ellipse cx="123" cy="32" rx="5.5" ry="9" fill="#FFFFFF" opacity="0.75" transform="rotate(17 123 32)" />

      {/* Žuti balon */}
      <ellipse cx="205" cy="105" rx="50" ry="67" fill="url(#yellowBalloon)" stroke="#E09A00" strokeWidth="5" filter="url(#balloonShadow)" />
      <path d="M195 164L205 182L216 164Z" fill="#ECAA12" stroke="#D48D00" strokeWidth="2" />
      <ellipse cx="189" cy="78" rx="14" ry="23" fill="#FFFFFF" opacity="0.52" transform="rotate(17 189 78)" />
      <ellipse cx="184" cy="63" rx="5" ry="8" fill="#FFFFFF" opacity="0.75" transform="rotate(17 184 63)" />

      {/* Konfete */}
      <g strokeLinecap="round">
        <path d="M20 211L7 223" stroke="#FFB700" strokeWidth="7" />
        <path d="M238 225L255 234" stroke="#7E63F3" strokeWidth="7" />
        <path d="M230 282L248 267" stroke="#FF5E88" strokeWidth="7" />
        <path d="M32 286L15 279" stroke="#36C987" strokeWidth="7" />
        <path d="M118 230L126 216" stroke="#FF8A41" strokeWidth="6" />
      </g>
      <rect x="35" y="235" width="13" height="13" rx="3" fill="#8059E8" transform="rotate(24 35 235)" />
      <rect x="220" y="196" width="13" height="13" rx="3" fill="#2EBBD0" transform="rotate(-20 220 196)" />
      <circle cx="58" cy="323" r="7" fill="#FFD13D" />
      <circle cx="231" cy="316" r="6" fill="#FF7095" />
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
    <svg
      width="390"
      height="255"
      viewBox="0 0 390 255"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Duga sa oblacima"
      className={className}
      style={{ pointerEvents: "none", ...style }}
    >
      <defs>
        <filter id="rainbowShadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="9" stdDeviation="9" floodColor="#6982A1" floodOpacity="0.22" />
        </filter>
        <linearGradient id="rainbowCloudGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#D6F1FF" />
        </linearGradient>
        <radialGradient id="rainbowCloudLight">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Duga */}
      <g fill="none" strokeLinecap="round" filter="url(#rainbowShadow)">
        <path d="M65 210C65 96 123 36 195 36C267 36 325 96 325 210" stroke="#FF668B" strokeWidth="38" />
        <path d="M83 210C83 108 133 58 195 58C257 58 307 108 307 210" stroke="#FFB53C" strokeWidth="31" />
        <path d="M100 210C100 121 143 80 195 80C247 80 290 121 290 210" stroke="#FFE55B" strokeWidth="27" />
        <path d="M116 210C116 136 151 101 195 101C239 101 274 136 274 210" stroke="#58D18C" strokeWidth="24" />
        <path d="M131 210C131 150 158 121 195 121C232 121 259 150 259 210" stroke="#55B9FF" strokeWidth="21" />
        <path d="M145 210C145 163 166 140 195 140C224 140 245 163 245 210" stroke="#8A6CE8" strokeWidth="18" />
      </g>

      {/* Levi oblak */}
      <g filter="url(#rainbowShadow)">
        <path
          d="M20 230 C7 230 0 220 0 208 C0 194 11 184 25 184 C30 168 45 158 62 158 C82 158 98 171 102 189 C108 183 117 180 126 180 C144 180 158 193 158 209 C158 222 147 230 132 230 Z"
          fill="url(#rainbowCloudGradient)"
          stroke="#ADDDF3"
          strokeWidth="4"
        />
        <ellipse cx="59" cy="180" rx="31" ry="17" fill="url(#rainbowCloudLight)" />
      </g>

      {/* Desni oblak */}
      <g filter="url(#rainbowShadow)">
        <path
          d="M255 230 C242 230 234 220 234 207 C234 193 246 183 260 183 C266 166 281 156 299 156 C320 156 336 170 340 189 C346 182 355 179 365 179 C383 179 390 194 390 209 C390 223 379 230 363 230 Z"
          fill="url(#rainbowCloudGradient)"
          stroke="#ADDDF3"
          strokeWidth="4"
        />
        <ellipse cx="300" cy="178" rx="32" ry="18" fill="url(#rainbowCloudLight)" />
      </g>

      {/* Sjaj */}
      <g fill="#FFFFFF">
        <path d="M55 44L60 57L73 62L60 67L55 80L50 67L37 62L50 57Z" opacity="0.9" />
        <path d="M330 58L334 68L344 72L334 76L330 86L326 76L316 72L326 68Z" opacity="0.8" />
      </g>
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
