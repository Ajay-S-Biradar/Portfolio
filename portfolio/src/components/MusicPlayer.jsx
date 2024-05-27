import React from 'react';
import { motion } from 'framer-motion';

const CD = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3750 3000"
      className="origin-center w-32 overflow-hidden"
      style={{ transformOrigin: '40% 40%' }}
      initial={{
      }}
      animate={{
        rotate: 360
      }}
      transition={{
        duration: 2,
        // repeat: Infinity
      }}
    >
      <path
        d="M1370 2130c-132 -19 -309 -87 -419 -163 -24 -16 -74 -59 -112 -94 -405 -382 -408 -1014 -8 -1399 85 -81 136 -117 234 -167 346 -175 749 -130 1057 119 139 113 256 294 315 489 24 82 27 104 26 255 0 150 -2 173 -27 255 -103 348 -355 594 -696 681 -108 28 -268 38 -370 24zm385 -75c330 -97 581 -367 649 -698 21 -98 21 -276 0 -375 -69 -333 -313 -595 -651 -699 -80 -24 -103 -27 -248 -27 -138 -1 -171 2 -240 22 -428 123 -705 504 -681 937 11 210 74 374 207 540 122 151 295 259 494 309 93 23 111 25 250 21 105 -3 147 -8 220 -30z"
        fill="black"
      />
      <path
        d="M1290 1959c-216 -58 -422 -226 -518 -422 -63 -131 -98 -306 -85 -429 5 -53 8 -59 27 -56 20 3 21 8 18 88 -14 374 249 708 616 783 82 17 87 20 79 42 -8 20 -45 18 -137 -6z"
        fill="black"
      />
      <path
        d="M1324 1811c-232 -66 -408 -249 -469 -486 -20 -80 -21 -251 0 -258 23 -9 27 8 30 116 5 170 62 304 182 423 82 83 196 146 300 167 65 13 90 28 79 46 -10 15 -50 13 -122 -8z"
        fill="black"
      />
      <path
        d="M1376 1669c-112 -26 -242 -120 -306 -219 -48 -76 -80 -186 -80 -279 0 -57 4 -80 13 -84 27 -10 40 9 33 46 -4 20 -2 66 4 104 30 188 175 345 356 386 48 11 60 18 62 35 4 25 -13 27 -82 11z"
        fill="black"
      />
      <path
        d="M1419 1417c-127 -48 -198 -175 -170 -302 45 -200 290 -273 434 -128 67 67 93 166 67 258 -15 55 -78 128 -133 157 -52 26 -149 33 -198 15zm203 -72c122 -85 121 -264 0 -350 -40 -27 -51 -30 -121 -30 -69 0 -82 3 -118 28 -84 58 -118 181 -73 265 29 55 42 69 91 97 38 22 54 25 111 23 55 -3 75 -9 110 -33z"
        fill="black"
      />
      <path
        d="M2270 1183c0 -191 -55 -353 -169 -496 -113 -142 -298 -251 -467 -275 -41 -6 -50 -11 -52 -30 -4 -27 12 -28 111 -6 341 78 601 388 624 745 7 120 -1 169 -27 169 -19 0 -20 -8 -20 -107z"
        fill="black"
      />
      <path
        d="M2133 1273c-9 -3 -13 -31 -13 -92 0 -106 -26 -217 -72 -304 -49 -94 -174 -215 -268 -260 -67 -32 -97 -42 -192 -62 -19 -4 -28 -12 -28 -25 0 -27 39 -26 134 4 244 77 420 275 463 521 15 88 13 200 -4 215 -4 4 -14 5 -20 3z"
        fill="black"
      />
      <path
        d="M1977 1253c-4 -3 -7 -36 -7 -73 0 -167 -78 -314 -214 -402 -54 -35 -103 -53 -188 -72 -20 -5 -28 -13 -28 -28 0 -19 4 -20 49 -15 148 18 317 147 383 295 26 57 50 176 47 232 -3 56 -21 84 -42 63z"
        fill="black"
      />
    </motion.svg>
  );
};

export default CD;
