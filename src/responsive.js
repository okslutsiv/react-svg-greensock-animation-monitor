import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { TimelineMax, Power2, Circ, Bounce } from "gsap";

const Responsive = () => {
  const svgRef = useRef();
  const parts = useRef({});
  const tl = new TimelineMax({ paused: true });

  useEffect(() => {
    console.log(parts);
    const p = parts.current;
    tl.set(svgRef.current, { opacity: 1 })
      .from(
        p.base,
        0.9,
        {
          scaleY: 0,
          transformOrigin: "bottom",
          ease: Power2.easeOut
        },
        "-=0.15"
      )
      .from(
        p.case,
        0.9,
        {
          scaleX: 0,
          transformOrigin: "center",
          ease: Bounce.easeOut
        },
        "-=0.15"
      )
      .from(
        p.frame,
        0.6,
        {
          scaleY: 0,
          transformOrigin: "bottom",
          ease: Circ.easeOut
        },
        "+=0.4"
      )
      .addLabel("screen", "+=0.2")
      .from(p.leftKnobs, 0.5, { scale: 0 }, "screen")
      .from(p.rightKnobs, 0.5, { scale: 0 }, "screen")
      .from(p.redSq, 0.5, { opacity: 0 }, "screen +=0.5")
      .from(p.greySq, 0.5, { opacity: 0 }, "screen +=0.8")
      .from(p.arrow, 1, { x: 100, opacity: 0, y: 100 }, "screen +=1.8")
      .paused(false);
  }, [tl]);
  return (
    <Monitor
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 432.55"
      ref={svgRef}
    >
      <g id="Layer_1" data-name="Layer 1">
        <path
          id="screenFrame"
          d="M494.35 0H17.66A17.65 17.65 0 000 17.66v282.48h512V17.66A17.65 17.65 0 00494.35 0zm-8.83 273.65h-459V26.48h459z"
          fill="#464655"
          ref={el => (parts.current.frame = el)}
        />
        <g id="case" ref={el => (parts.current.case = el)}>
          <path
            d="M0 335.45a17.65 17.65 0 0017.66 17.65h476.68A17.65 17.65 0 00512 335.45v-35.31H0zm256-22.07a13.24 13.24 0 11-13.24 13.24A13.24 13.24 0 01256 313.38z"
            fill="#bec8dc"
          />
          <circle cx="256" cy="326.62" r="13.24" fill="#96a5b9" />
        </g>
        <g id="base" ref={el => (parts.current.base = el)}>
          <path
            fill="#afbbd0"
            d="M177.66 414.9h156.69l-5.52-44.14H183.17l-5.51 44.14z"
          />
          <path
            d="M176.55 414.9a8.83 8.83 0 100 17.66h158.9a8.83 8.83 0 100-17.66h-158.9z"
            fill="#bec8dc"
          />
          <path
            fill="#96a5b9"
            d="M183.17 370.76h145.66l-2.21-17.66H185.38l-2.21 17.66z"
          />
        </g>
        <g id="leftKnobs" ref={el => (parts.current.leftKnobs = el)}>
          <path
            id="kn5"
            d="M61.79 185.38h8.83a8.83 8.83 0 000-17.66h-8.83a8.83 8.83 0 000 17.66z"
            fill="#e4eaf6"
          />
          <path
            id="kn4"
            d="M61.79 158.9h8.83a8.83 8.83 0 000-17.66h-8.83a8.83 8.83 0 000 17.66z"
            fill="#e4eaf6"
          />
          <path
            id="kn3"
            d="M61.79 132.41h8.83a8.83 8.83 0 000-17.66h-8.83a8.83 8.83 0 000 17.66z"
            fill="#e4eaf6"
          />
          <path
            id="kn2"
            d="M61.79 105.93h8.83a8.83 8.83 0 000-17.66h-8.83a8.83 8.83 0 000 17.66z"
            fill="#96a5b9"
          />
          <path
            id="kn1"
            d="M61.79 79.45h8.83a8.83 8.83 0 100-17.66h-8.83a8.83 8.83 0 000 17.66z"
            fill="#e4eaf6"
          />
          <path
            d="M61.79 238.35h8.83a8.83 8.83 0 008.83-8.83v-17.66a8.83 8.83 0 00-8.83-8.86h-8.83a8.83 8.83 0 00-8.79 8.86v17.65a8.83 8.83 0 008.79 8.84z"
            fill="#96a5b9"
          />
          <path
            d="M53 256h26.45a8.83 8.83 0 008.83-8.83V53a8.83 8.83 0 00-8.83-8.83H53A8.83 8.83 0 0044.14 53v194.17A8.83 8.83 0 0053 256zm8.79-194.21h8.83a8.83 8.83 0 010 17.66h-8.83a8.83 8.83 0 010-17.66zm0 26.48h8.83a8.83 8.83 0 110 17.66h-8.83a8.83 8.83 0 010-17.66zm0 26.48h8.83a8.83 8.83 0 110 17.66h-8.83a8.83 8.83 0 010-17.66zm0 26.48h8.83a8.83 8.83 0 010 17.66h-8.83a8.83 8.83 0 010-17.66zm0 26.48h8.83a8.83 8.83 0 010 17.66h-8.83a8.83 8.83 0 010-17.66zM53 211.86a8.83 8.83 0 018.79-8.86h8.83a8.83 8.83 0 018.83 8.83v17.65a8.83 8.83 0 01-8.83 8.83h-8.83a8.83 8.83 0 01-8.79-8.79z"
            fill="#bec8dc"
          />
        </g>
        <g id="rightKnobs" ref={el => (parts.current.rightKnobs = el)}>
          <path
            d="M464 54.31c0-4.81-3-8.71-6.63-8.71h-59.59c-3.66 0-6.63 3.9-6.63 8.71v52.23H464V54.31zm-9.94 43.53h-53c-1.83 0-3.31-1.95-3.31-4.35s1.48-4.35 3.31-4.35h53c1.83 0 3.31 1.95 3.31 4.35s-1.45 4.35-3.28 4.35zm0-17.41h-53c-1.83 0-3.31-1.95-3.31-4.35s1.48-4.35 3.31-4.35h53c1.83 0 3.31 1.95 3.31 4.35s-1.45 4.35-3.28 4.35zm0-17.41h-53c-1.83 0-3.31-1.95-3.31-4.35s1.48-4.35 3.31-4.35h53c1.83 0 3.31 1.95 3.31 4.35S455.92 63 454.09 63zM397.78 254.53h59.62c3.66 0 6.63-3.9 6.63-8.71v-78.34h-72.87v78.35c0 4.81 2.96 8.7 6.62 8.7zm29.81-78.35h26.5c1.83 0 3.31 1.95 3.31 4.35s-1.48 4.35-3.31 4.35h-26.5c-1.83 0-3.31-1.95-3.31-4.35s1.48-4.34 3.31-4.34zm0 17.41h26.5c1.83 0 3.31 1.95 3.31 4.35s-1.48 4.35-3.31 4.35h-26.5c-1.83 0-3.31-1.95-3.31-4.35s1.48-4.34 3.31-4.34zm0 17.41h26.5c1.83 0 3.31 1.95 3.31 4.35s-1.48 4.35-3.31 4.35h-26.5c-1.83 0-3.31-1.95-3.31-4.35s1.48-4.35 3.31-4.35zm0 17.41h26.5c1.83 0 3.31 1.95 3.31 4.35s-1.48 4.35-3.31 4.35h-26.5c-1.83 0-3.31-1.95-3.31-4.35s1.48-4.34 3.31-4.34zm-13.25-52.23c1.83 0 3.31 1.95 3.31 4.35s-1.48 4.35-3.31 4.35-3.31-1.95-3.31-4.35 1.48-4.34 3.31-4.34zm0 17.41c1.83 0 3.31 1.95 3.31 4.35s-1.48 4.35-3.31 4.35-3.31-1.95-3.31-4.35 1.48-4.34 3.31-4.34zm0 17.41c1.83 0 3.31 1.95 3.31 4.35s-1.48 4.35-3.31 4.35-3.31-1.95-3.31-4.35 1.48-4.35 3.31-4.35zm0 17.41c1.83 0 3.31 1.95 3.31 4.35s-1.48 4.35-3.31 4.35-3.31-1.95-3.31-4.35 1.48-4.34 3.31-4.34zm-13.25-52.23c1.83 0 3.31 1.95 3.31 4.35s-1.48 4.35-3.31 4.35-3.31-1.95-3.31-4.35 1.48-4.34 3.31-4.34zm0 17.41c1.83 0 3.31 1.95 3.31 4.35s-1.48 4.35-3.31 4.35-3.31-1.95-3.31-4.35 1.48-4.34 3.31-4.34zm0 17.41c1.83 0 3.31 1.95 3.31 4.35s-1.48 4.35-3.31 4.35-3.31-1.95-3.31-4.35 1.48-4.35 3.31-4.35zm0 17.41c1.83 0 3.31 1.95 3.31 4.35s-1.48 4.35-3.31 4.35-3.31-1.95-3.31-4.35 1.48-4.34 3.31-4.34z"
            fill="#bec8dc"
          />
          <path
            d="M464 106.54h-72.84v60.94H464zm-56.31 52.23h-6.63c-1.83 0-3.31-1.95-3.31-4.35s1.48-4.35 3.31-4.35h6.63c1.83 0 3.31 1.95 3.31 4.35s-1.45 4.35-3.28 4.35zm0-17.41h-6.63c-1.83 0-3.31-1.95-3.31-4.35s1.48-4.35 3.31-4.35h6.63c1.83 0 3.31 1.95 3.31 4.35s-1.45 4.35-3.28 4.35zm0-17.41h-6.63c-1.83 0-3.31-1.95-3.31-4.35s1.48-4.35 3.31-4.35h6.63c1.83 0 3.31 1.95 3.31 4.35s-1.45 4.4-3.28 4.4zm46.37 34.82H421c-1.83 0-3.31-1.95-3.31-4.35s1.48-4.35 3.31-4.35h33.12c1.83 0 3.31 1.95 3.31 4.35s-1.51 4.35-3.34 4.35zm0-17.41H421c-1.83 0-3.31-1.95-3.31-4.35s1.48-4.35 3.31-4.35h33.12c1.83 0 3.31 1.95 3.31 4.35s-1.51 4.35-3.34 4.35zm0-17.41H421c-1.83 0-3.31-1.95-3.31-4.35s1.48-4.35 3.31-4.35h33.12c1.83 0 3.31 1.95 3.31 4.35s-1.51 4.4-3.34 4.4zM454.09 54.31h-39.75c1.83 0 3.31 1.95 3.31 4.35S416.17 63 414.34 63h39.75c1.83 0 3.31-1.95 3.31-4.35s-1.48-4.34-3.31-4.34zM404.4 58.66c0-2.4 1.48-4.35 3.31-4.35h-6.63c-1.83 0-3.31 1.95-3.31 4.35s1.49 4.34 3.32 4.34h6.63c-1.83 0-3.32-1.93-3.32-4.34zM454.09 89.13h-26.5c1.83 0 3.31 1.95 3.31 4.35s-1.48 4.35-3.31 4.35h26.5c1.83 0 3.31-1.95 3.31-4.35s-1.48-4.35-3.31-4.35zM417.65 93.48c0-2.4 1.48-4.35 3.31-4.35h-19.87c-1.83 0-3.31 1.95-3.31 4.35s1.48 4.35 3.31 4.35H421c-1.86.01-3.35-1.94-3.35-4.35z"
            fill="#96a5b9"
          />
          <path
            d="M454.09 115.25H421c-1.83 0-3.31 1.95-3.31 4.35s1.45 4.4 3.31 4.4h33.12c1.83 0 3.31-1.95 3.31-4.35s-1.51-4.4-3.34-4.4z"
            fill="#bec8dc"
          />
          <path
            d="M437.53 76.07c0-2.4 1.48-4.35 3.31-4.35h-39.75c-1.83 0-3.31 1.95-3.31 4.35s1.48 4.35 3.31 4.35h39.75c-1.84.01-3.31-1.94-3.31-4.35zM454.09 71.72h-6.63c1.83 0 3.31 1.95 3.31 4.35s-1.48 4.35-3.31 4.35h6.63c1.83 0 3.31-1.95 3.31-4.35s-1.48-4.35-3.31-4.35z"
            fill="#96a5b9"
          />
          <path
            d="M417.65 58.66c0-2.4-1.48-4.35-3.31-4.35h-6.63c-1.83 0-3.31 1.95-3.31 4.35s1.49 4.34 3.32 4.34h6.63c1.82 0 3.3-1.93 3.3-4.34zM430.9 93.48c0-2.4-1.48-4.35-3.31-4.35H421c-1.83 0-3.31 1.95-3.31 4.35s1.48 4.35 3.31 4.35h6.63c1.79.01 3.27-1.94 3.27-4.35zM407.72 115.25h-6.63c-1.83 0-3.31 1.95-3.31 4.35s1.48 4.35 3.31 4.35h6.63c1.83 0 3.31-1.95 3.31-4.35s-1.48-4.35-3.31-4.35z"
            fill="#e4eaf6"
          />
          <path
            d="M454.09 132.66H421c-1.83 0-3.31 1.95-3.31 4.35s1.48 4.35 3.31 4.35h33.12c1.83 0 3.31-1.95 3.31-4.35s-1.51-4.35-3.34-4.35z"
            fill="#bec8dc"
          />
          <path
            d="M407.72 132.66h-6.63c-1.83 0-3.31 1.95-3.31 4.35s1.48 4.35 3.31 4.35h6.63c1.83 0 3.31-1.95 3.31-4.35s-1.48-4.35-3.31-4.35z"
            fill="#e4eaf6"
          />
          <path
            d="M454.09 150.07H421c-1.83 0-3.31 1.95-3.31 4.35s1.48 4.35 3.31 4.35h33.12c1.83 0 3.31-1.95 3.31-4.35s-1.51-4.35-3.34-4.35z"
            fill="#bec8dc"
          />
          <path
            d="M407.72 150.07h-6.63c-1.83 0-3.31 1.95-3.31 4.35s1.48 4.35 3.31 4.35h6.63c1.83 0 3.31-1.95 3.31-4.35s-1.48-4.35-3.31-4.35zM401.09 202.3c1.83 0 3.31-1.95 3.31-4.35s-1.48-4.35-3.31-4.35-3.31 1.95-3.31 4.35 1.48 4.35 3.31 4.35zM401.09 184.89c1.83 0 3.31-1.95 3.31-4.35s-1.48-4.35-3.31-4.35-3.31 1.95-3.31 4.35 1.48 4.35 3.31 4.35zM401.09 237.12c1.83 0 3.31-1.95 3.31-4.35s-1.48-4.35-3.31-4.35-3.31 1.95-3.31 4.35 1.48 4.35 3.31 4.35zM401.09 219.71c1.83 0 3.31-1.95 3.31-4.35s-1.48-4.35-3.31-4.35-3.31 1.95-3.31 4.35 1.48 4.35 3.31 4.35z"
            fill="#e4eaf6"
          />
          <path
            d="M414.34 202.3c1.83 0 3.31-1.95 3.31-4.35s-1.48-4.35-3.31-4.35-3.31 1.95-3.31 4.35 1.48 4.35 3.31 4.35zM414.34 184.89c1.83 0 3.31-1.95 3.31-4.35s-1.48-4.35-3.31-4.35-3.31 1.95-3.31 4.35 1.48 4.35 3.31 4.35zM414.34 237.12c1.83 0 3.31-1.95 3.31-4.35s-1.48-4.35-3.31-4.35-3.31 1.95-3.31 4.35 1.48 4.35 3.31 4.35zM414.34 219.71c1.83 0 3.31-1.95 3.31-4.35s-1.48-4.35-3.31-4.35-3.31 1.95-3.31 4.35 1.48 4.35 3.31 4.35zM427.59 202.3h26.5c1.83 0 3.31-1.95 3.31-4.35s-1.48-4.35-3.31-4.35h-26.5c-1.83 0-3.31 1.95-3.31 4.35s1.48 4.35 3.31 4.35zM427.59 184.89h26.5c1.83 0 3.31-1.95 3.31-4.35s-1.48-4.35-3.31-4.35h-26.5c-1.83 0-3.31 1.95-3.31 4.35s1.48 4.35 3.31 4.35zM427.59 237.12h26.5c1.83 0 3.31-1.95 3.31-4.35s-1.48-4.35-3.31-4.35h-26.5c-1.83 0-3.31 1.95-3.31 4.35s1.48 4.35 3.31 4.35zM427.59 219.71h26.5c1.83 0 3.31-1.95 3.31-4.35s-1.48-4.35-3.31-4.35h-26.5c-1.83 0-3.31 1.95-3.31 4.35s1.48 4.35 3.31 4.35z"
            fill="#96a5b9"
          />
          <path
            d="M450.78 76.07c0-2.4-1.48-4.35-3.31-4.35h-6.63c-1.83 0-3.31 1.95-3.31 4.35s1.48 4.35 3.31 4.35h6.63c1.83.01 3.31-1.94 3.31-4.35z"
            fill="#e4eaf6"
          />
        </g>
        <rect
          id="redSq"
          x="138"
          y="63.02"
          width="148"
          height="130.58"
          rx="12"
          ry="12"
          fill="none"
          stroke="#ec646c"
          strokeMiterlimit="10"
          strokeWidth="18"
          ref={el => (parts.current.redSq = el)}
        />
        <g id="dasheedSq" fill="#96a5b9">
          <Rect
            id="greySq"
            x="203"
            y="103"
            width="148"
            height="130.58"
            rx="12"
            ry="12"
            fill="none"
            stroke=""
            strokeMiterlimit="10"
            strokeWidth=""
            ref={el => (parts.current.greySq = el)}
          />
        </g>
        <path
          id="arrow"
          d="M218 138.18l-.07 5.3-.37 28.52a3.54 3.54 0 005 3.29l8.78-3.85 7.84 17.86a4.42 4.42 0 008.09-3.55l-7.87-17.85 8.78-3.85a3.54 3.54 0 00.94-5.88L226 137.41l-2-1.83a3.54 3.54 0 00-6 2.6z"
          fill="#464655"
          ref={el => (parts.current.arrow = el)}
        />
      </g>
    </Monitor>
  );
};

const Monitor = styled.svg`
  width: 90%;
  max-width: 400px;
  display: block;
  opacity: 0;
`;
const anim = keyframes`
0% {stroke-dashoffset: 300;}
100% { stroke-dashoffset: 0}
`;
const Rect = styled.rect`
  stroke: #96a5b9;
  stroke-width: 10px;
  stroke-dasharray: 20px 10px;
  stroke-dashoffset: 300px;
  animation: ${anim} 20s infinite linear;
`;
export default Responsive;