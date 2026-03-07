import './VelloxLogo.css'

function VelloxLogo({ size = 36 }) {
    return (
        <div className="vellox-logo" style={{ width: size, height: size }}>
            <svg
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg"
                className="vellox-logo-svg"
            >
                <defs>
                    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00d4ff" />
                        <stop offset="50%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#e74c8a" />
                    </linearGradient>
                    <linearGradient id="logoGradReverse" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#00d4ff" />
                        <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                    <filter id="logoGlow">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                <polygon
                    points="60,5 110,30 110,90 60,115 10,90 10,30"
                    fill="none"
                    stroke="url(#logoGrad)"
                    strokeWidth="2.5"
                    opacity="0.8"
                />
                <polygon
                    points="60,12 104,34 104,86 60,108 16,86 16,34"
                    fill="rgba(168, 85, 247, 0.08)"
                    stroke="none"
                />

                <g filter="url(#logoGlow)">
                    <path
                        d="M 35,32 L 60,88 L 85,32"
                        fill="none"
                        stroke="url(#logoGrad)"
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M 44,42 L 60,76 L 76,42"
                        fill="none"
                        stroke="url(#logoGradReverse)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.6"
                    />
                </g>

                <circle cx="60" cy="5" r="2.5" fill="#00d4ff" opacity="0.9" />
                <circle cx="110" cy="30" r="2" fill="#a855f7" opacity="0.7" />
                <circle cx="110" cy="90" r="2" fill="#e74c8a" opacity="0.7" />
                <circle cx="60" cy="115" r="2.5" fill="#e74c8a" opacity="0.9" />
                <circle cx="10" cy="90" r="2" fill="#a855f7" opacity="0.7" />
                <circle cx="10" cy="30" r="2" fill="#00d4ff" opacity="0.7" />
            </svg>
        </div>
    )
}

export default VelloxLogo
