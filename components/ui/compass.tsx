interface CompassProps {
  speed: number
  deg: number
}
export default function Compass({ speed, deg }: CompassProps) {
  return (
    <>
      <div className="relative -mt-5 flex h-[10rem] w-[10rem] items-center justify-center md:-mt-5 md:h-[9rem] md:w-[9rem]">
        <div className="absolute text-sm font-semibold">
          {Math.round(speed)}m/s
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 331 331"
          className="absolute dark:invert"
        >
          <g fill="none" fillRule="evenodd" opacity=".401">
            <path
              fill="#000"
              d="M11.5 0 23 23H0z"
              transform="translate(154 31)"
            />
            <path
              stroke="#000"
              strokeLinecap="square"
              strokeLinejoin="bevel"
              strokeWidth={2}
              d="m11.421 250 .158 17.999"
              transform="translate(154 31)"
            />
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(3 -566.204 3300.048)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(6 -241.38 1723.694)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(9 -133.006 1197.762)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(12 -78.745 934.435)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(15 -46.128 776.15)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(18 -24.333 670.385)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(21 -8.724 594.63)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(24 3.021 537.632)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(27 12.19 493.137)"
              />
            </g>
            <g
              stroke="#000"
              strokeLinecap="square"
              strokeLinejoin="bevel"
              strokeWidth={2}
            >
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(30 19.555 457.394)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(33 25.609 428.015)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(36 30.679 403.409)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(39 34.993 382.473)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(42 38.713 364.42)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(45 41.959 348.673)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(48 44.816 334.798)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(51 47.359 322.465)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(54 49.636 311.415)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(57 51.69 301.446)"
              />
            </g>
            <g
              stroke="#000"
              strokeLinecap="square"
              strokeLinejoin="bevel"
              strokeWidth={2}
            >
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(60 53.555 292.394)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(63 55.258 284.128)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(66 56.822 276.539)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(69 58.264 269.538)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(72 59.601 263.051)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(75 60.845 257.016)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(78 62.007 251.379)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(81 63.096 246.095)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(84 64.12 241.125)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(87 65.086 236.437)"
              />
            </g>
            <g
              stroke="#000"
              strokeLinecap="square"
              strokeLinejoin="bevel"
              strokeWidth={2}
            >
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(90 66 232)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(93 66.868 227.79)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(96 67.694 223.784)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(99 68.48 219.962)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(102 69.233 216.307)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(105 69.955 212.805)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(108 70.649 209.44)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(111 71.317 206.2)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(114 71.96 203.075)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(117 72.582 200.056)"
              />
            </g>
            <g
              stroke="#000"
              strokeLinecap="square"
              strokeLinejoin="bevel"
              strokeWidth={2}
            >
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(120 73.185 197.131)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(123 73.77 194.294)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(126 74.338 191.536)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(129 74.892 188.85)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(132 75.431 186.231)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(135 75.959 183.673)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(138 76.474 181.169)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(141 76.98 178.715)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(144 77.477 176.306)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(147 77.965 173.938)"
              />
            </g>
            <g
              stroke="#000"
              strokeLinecap="square"
              strokeLinejoin="bevel"
              strokeWidth={2}
            >
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(150 78.445 171.606)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(153 78.919 169.306)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(156 79.386 167.036)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(159 79.85 164.79)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(162 80.307 162.566)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(165 80.762 160.362)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(168 81.213 158.171)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(171 81.662 155.993)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(174 82.109 153.824)"
              />
            </g>
            <g stroke="#000" strokeLinecap="square" strokeLinejoin="bevel">
              <path
                d="m.421 0 .158 17.999M.421 247l.158 17.999"
                transform="rotate(177 82.554 151.66)"
              />
            </g>
            <g
              fill="#000"
              fontFamily="Arial-BoldMT, Arial"
              fontSize={36}
              fontWeight="bold"
            >
              <text transform="translate(60 60)">
                <tspan x="92.501" y={33}>
                  N
                </tspan>
              </text>
              <text transform="translate(60 60)">
                <tspan x="178.494" y={118}>
                  E
                </tspan>
              </text>
              <text transform="translate(60 60)">
                <tspan x="93.494" y={203}>
                  S
                </tspan>
              </text>
              <text transform="translate(60 60)">
                <tspan x="3.511" y={118}>
                  W
                </tspan>
              </text>
            </g>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 331 331"
          style={{ transform: `rotate(${deg}deg)` }}
          className="absolute transition-transform ease-in-out will-change-transform dark:invert"
        >
          <path d="M163 103V57.785c-6.817-1.185-12-7.13-12-14.285 0-8.008 6.492-14.5 14.5-14.5S180 35.492 180 43.5c0 7.155-5.183 13.1-12 14.285V103h-5zm2.5-50a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19zm0 250L151 274h12v-47h5l-.001 47H180l-14.5 29z" />
        </svg>
      </div>
    </>
  )
}
