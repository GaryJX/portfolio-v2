import React from 'react'
import styles from './LogoTitle.module.scss'

// Circle SVG dimensions
const RADIUS = 250
const STROKE = 30
const NORMALIZED_RADIUS = RADIUS - STROKE / 2
const CIRCUMFERENCE = RADIUS * 2 * Math.PI

const LogoTitle: React.FC = () => {
  return (
    <a className={styles.logoTitle} href="/" aria-label="Home">
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        preserveAspectRatio="xMidYMid meet"
        className={styles.logoTitleCircle}
      >
        <circle
          fill="transparent"
          strokeWidth={STROKE}
          strokeDasharray={`${CIRCUMFERENCE} ${CIRCUMFERENCE}`}
          r={NORMALIZED_RADIUS}
          cx={RADIUS}
          cy={RADIUS}
        />
        <g transform="translate(0,500) scale(0.1,-0.1)">
          <path
            d="M2415 3464 c-158 -15 -367 -98 -477 -191 -214 -180 -338 -480 -338
            -818 0 -349 125 -634 354 -806 121 -92 204 -128 351 -155 264 -47 510 15 706
            177 32 27 60 45 62 41 3 -4 13 -41 22 -82 28 -117 20 -111 138 -108 l102 3 3
            518 2 517 -420 0 -420 0 0 -140 0 -140 278 -2 277 -3 -4 -55 c-11 -168 -106
            -314 -258 -392 -90 -47 -157 -62 -278 -62 -302 -1 -505 167 -582 482 -23 94
            -23 341 1 437 70 288 250 466 499 494 276 31 483 -91 558 -329 l17 -55 148 -3
            c81 -1 152 2 157 7 13 13 -36 188 -74 263 -126 250 -356 387 -674 401 -60 2
            -128 3 -150 1z"
          />
        </g>
      </svg>
      {/* <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 901.000000 224.000000"
        preserveAspectRatio="xMidYMid meet"
        className={styles.logoTitleSvg}
      >
        <g transform="translate(0.000000,224.000000) scale(0.100000,-0.100000)">
          <path
            d="M460 2089 c-86 -11 -197 -66 -245 -122 -166 -192 -167 -528 -1 -705
              137 -147 381 -163 546 -38 l35 27 13 -45 13 -46 50 0 49 0 0 250 0 250 -200 0
              -201 0 3 -67 3 -68 133 -3 c149 -3 146 -1 117 -83 -38 -105 -120 -159 -244
              -159 -190 0 -300 137 -289 358 7 138 64 242 163 295 57 31 183 31 242 0 51
              -28 101 -87 109 -130 l6 -33 78 0 78 0 -10 42 c-24 110 -85 190 -179 237 -53
              27 -79 33 -179 45 -14 1 -54 -1 -90 -5z"
          />
          <path
            d="M3030 2075 c0 -3 68 -104 150 -225 l151 -221 -153 -221 c-84 -122
              -157 -228 -161 -235 -6 -10 10 -13 83 -13 l90 0 111 170 c61 94 114 170 118
              170 4 0 56 -76 117 -169 l109 -170 93 0 c74 -1 91 2 85 12 -4 7 -77 113 -161
              235 l-153 221 151 217 c82 119 150 221 150 225 0 5 -38 9 -84 9 l-84 0 -108
              -165 c-84 -128 -111 -162 -120 -153 -6 7 -53 78 -105 158 -51 80 -98 148 -104
              152 -11 8 -175 11 -175 3z"
          />
          <path d="M3872 1968 l3 -83 78 -3 77 -3 0 86 0 85 -80 0 -81 0 3 -82z" />
          <path
            d="M1233 1840 c-109 -23 -173 -89 -181 -186 l-4 -54 65 0 66 0 11 40 c8
              28 19 44 40 55 37 19 133 19 170 0 48 -25 50 -104 3 -119 -10 -3 -64 -12 -121
              -21 -117 -17 -164 -34 -206 -73 -55 -52 -72 -144 -41 -219 35 -83 96 -117 207
              -117 66 0 86 5 142 33 l66 32 30 -25 c35 -29 81 -39 130 -28 34 8 35 9 38 64
              l3 57 -38 3 -38 3 -5 220 c-3 147 -9 227 -17 241 -20 34 -70 72 -111 84 -54
              15 -161 20 -209 10z m205 -408 c7 -46 -18 -102 -57 -128 -45 -29 -131 -42
              -174 -25 -54 21 -61 95 -12 127 22 14 207 54 230 49 6 -1 11 -11 13 -23z"
          />
          <path
            d="M1956 1840 c-16 -5 -46 -23 -68 -40 l-38 -31 0 31 0 30 -65 0 -65 0
              0 -335 0 -335 70 0 70 0 0 213 c0 182 2 217 18 246 25 50 63 74 127 79 l55 4
              0 68 c0 62 -2 68 -22 74 -29 7 -46 6 -82 -4z"
          />
          <path
            d="M4347 1839 c-96 -23 -170 -89 -209 -188 -29 -75 -31 -231 -5 -308 27
              -78 77 -137 144 -170 49 -24 70 -28 138 -28 151 1 245 70 283 208 l10 37 -66
              0 c-67 0 -67 0 -87 -37 -27 -49 -73 -75 -135 -75 -84 0 -146 51 -157 130 l-6
              42 233 0 233 0 -7 73 c-18 188 -80 275 -222 312 -64 17 -91 17 -147 4z m150
              -149 c36 -22 58 -52 68 -92 l7 -28 -156 0 c-101 0 -156 4 -156 10 0 26 42 89
              72 109 43 27 121 28 165 1z"
          />
          <path
            d="M2080 1827 c0 -2 49 -149 110 -326 l110 -322 -28 -67 -28 -67 -57 0
              -57 0 0 -63 c0 -58 2 -63 26 -72 75 -29 169 5 209 75 19 32 315 822 315 840 0
              3 -33 5 -72 5 l-73 0 -73 -208 c-40 -114 -77 -214 -81 -221 -6 -9 -34 64 -82
              208 l-74 221 -72 0 c-40 0 -73 -1 -73 -3z"
          />
          <path d="M3880 1495 l0 -335 70 0 70 0 0 335 0 335 -70 0 -70 0 0 -335z" />
          <path
            d="M183 628 c-54 -18 -86 -60 -91 -121 -6 -78 16 -100 141 -136 108 -32
              127 -43 127 -75 0 -42 -36 -66 -100 -66 -69 0 -110 30 -110 81 0 16 -7 19 -40
              19 -39 0 -39 0 -34 -32 10 -55 37 -92 84 -115 83 -43 215 -21 256 42 9 14 18
              46 18 70 2 77 -39 110 -186 150 -89 24 -109 55 -63 100 18 19 35 25 70 25 51
              0 95 -32 95 -70 0 -16 6 -20 36 -20 l37 0 -6 41 c-12 91 -124 142 -234 107z"
          />
          <path
            d="M719 626 c-97 -34 -149 -114 -149 -230 0 -73 20 -125 65 -172 98
              -102 275 -78 345 46 34 61 36 184 3 246 -54 101 -162 147 -264 110z m150 -83
              c40 -30 61 -80 61 -148 0 -73 -23 -121 -71 -147 -123 -66 -249 53 -210 199 29
              107 139 155 220 96z"
          />
          <path
            d="M7106 625 c-61 -21 -88 -46 -118 -105 -35 -67 -39 -171 -9 -235 52
              -112 180 -156 298 -101 110 52 152 200 93 331 -23 52 -65 90 -119 110 -53 18
              -94 19 -145 0z m150 -80 c57 -37 82 -163 46 -235 -37 -74 -131 -102 -200 -60
              -98 60 -91 252 11 304 39 20 105 16 143 -9z"
          />
          <path
            d="M1170 400 l0 -230 35 0 35 0 0 100 0 100 105 0 105 0 0 35 0 35 -105
              0 -106 0 3 58 3 57 118 3 117 3 0 34 0 35 -155 0 -155 0 0 -230z"
          />
          <path
            d="M1590 595 l0 -35 70 0 70 0 0 -195 0 -195 40 0 40 0 0 195 0 195 70
              0 70 0 0 35 0 35 -180 0 -180 0 0 -35z"
          />
          <path
            d="M2121 403 c32 -126 59 -229 59 -230 0 -2 17 -3 38 -3 l39 0 43 161
              c25 92 46 155 50 147 4 -7 20 -56 34 -108 64 -223 53 -200 95 -200 l39 0 56
              225 c31 124 56 227 56 230 0 3 -18 5 -39 5 l-39 0 -27 -117 c-43 -188 -46
              -199 -55 -183 -4 8 -25 79 -46 157 l-39 143 -37 0 c-41 0 -35 15 -94 -207 -15
              -56 -30 -101 -34 -98 -3 2 -22 72 -40 155 l-34 150 -42 0 -42 0 59 -227z"
          />
          <path
            d="M2855 613 c-14 -36 -155 -434 -155 -439 0 -2 18 -4 39 -4 l39 0 22
              65 22 65 78 0 78 0 22 -65 22 -65 39 0 c21 0 39 3 39 7 0 4 -35 108 -77 230
              l-78 223 -41 0 c-31 0 -44 -5 -49 -17z m74 -165 c12 -34 21 -66 21 -70 0 -4
              -22 -8 -50 -8 -27 0 -50 3 -50 8 0 16 44 132 51 132 4 0 17 -28 28 -62z"
          />
          <path
            d="M3250 400 l0 -230 35 0 34 0 3 93 3 92 77 3 c101 4 118 -11 118 -97
              0 -84 4 -91 56 -91 45 0 57 13 32 38 -7 7 -15 44 -19 83 -4 42 -12 77 -22 86
              -13 14 -12 19 10 52 20 29 24 45 20 84 -8 93 -57 117 -234 117 l-113 0 0 -230z
              m248 144 c15 -10 22 -25 22 -49 0 -54 -19 -65 -116 -65 l-84 0 0 58 c0 32 3
              62 7 65 14 14 148 7 171 -9z"
          />
          <path
            d="M3780 400 l0 -230 165 0 165 0 0 35 0 35 -130 0 -130 0 0 65 0 65
              120 0 120 0 0 35 0 35 -120 0 -121 0 3 58 3 57 123 3 122 3 0 34 0 35 -160 0
              -160 0 0 -230z"
          />
          <path
            d="M4540 400 l0 -230 109 0 c123 0 152 8 199 53 75 73 83 245 15 336
              -41 54 -91 71 -215 71 l-108 0 0 -230z m226 145 c45 -18 64 -63 64 -150 0
              -114 -39 -155 -150 -155 l-60 0 0 160 0 160 55 0 c31 0 71 -7 91 -15z"
          />
          <path
            d="M5080 400 l0 -230 165 0 165 0 0 35 0 35 -130 0 -130 0 0 65 0 65
              120 0 120 0 0 35 0 35 -120 0 -121 0 3 58 3 57 123 3 122 3 0 34 0 35 -160 0
              -160 0 0 -230z"
          />
          <path
            d="M5540 624 c0 -4 137 -389 155 -436 5 -13 18 -18 44 -18 l36 0 75 216
              c41 119 76 223 78 230 3 10 -7 14 -35 14 l-38 0 -54 -162 c-29 -90 -57 -167
              -61 -171 -3 -4 -33 69 -65 163 l-58 170 -39 0 c-21 0 -38 -3 -38 -6z"
          />
          <path
            d="M6080 400 l0 -230 165 0 165 0 0 35 0 35 -130 0 -130 0 0 65 0 65
              120 0 120 0 0 35 0 35 -120 0 -121 0 3 58 3 57 123 3 122 3 0 34 0 35 -160 0
              -160 0 0 -230z"
          />
          <path
            d="M6570 400 l0 -230 145 0 145 0 0 35 0 35 -105 0 -105 0 0 195 0 195
              -40 0 -40 0 0 -230z"
          />
          <path
            d="M7560 400 l0 -230 35 0 35 0 0 90 0 90 58 0 c83 1 131 15 165 48 37
              37 46 100 23 155 -24 58 -74 77 -208 77 l-108 0 0 -230z m236 135 c19 -25 18
              -64 -3 -87 -13 -14 -31 -18 -90 -18 l-73 0 0 66 0 66 76 -4 c60 -3 79 -7 90
              -23z"
          />
          <path
            d="M8050 400 l0 -230 170 0 170 0 0 35 0 35 -130 0 -130 0 0 65 0 65
              120 0 120 0 0 35 0 35 -120 0 -120 0 0 60 0 60 125 0 125 0 0 35 0 35 -165 0
              -165 0 0 -230z"
          />
          <path
            d="M8560 400 l0 -230 35 0 34 0 3 93 3 92 77 3 c101 4 118 -11 118 -97
              0 -84 4 -91 56 -91 45 0 57 13 32 38 -7 7 -15 44 -19 83 -4 42 -12 77 -22 86
              -13 14 -12 19 10 52 20 29 24 45 20 84 -8 93 -57 117 -234 117 l-113 0 0 -230z
              m248 144 c15 -10 22 -25 22 -49 0 -54 -19 -65 -116 -65 l-84 0 0 58 c0 32 3
              62 7 65 14 14 148 7 171 -9z"
          />
        </g>
      </svg> */}
    </a>
  )
}

export default LogoTitle
