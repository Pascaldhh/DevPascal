import { SVGProps } from "react";

export default function CircleDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <defs>
        <linearGradient id="circle-down-icon-gradient" x2="0%" y2="100%">
          <stop
            className="[stop-color:_theme('colors.red.primary.400')]"
            offset="0%"
          />
          <stop
            className="[stop-color:_theme('colors.red.primary.500')]"
            offset="100%"
          />
        </linearGradient>
      </defs>
      <path
        fill="url(#circle-down-icon-gradient)"
        d="M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512zm120.9 294.6-107.1 99.9c-3.8 3.5-8.7 5.5-13.8 5.5s-10.1-2-13.8-5.5l-107.1-99.9c-4.5-4.2-7.1-10.1-7.1-16.3 0-12.3 10-22.3 22.3-22.3H208v-96c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v96h57.7c12.3 0 22.3 10 22.3 22.3 0 6.2-2.6 12.1-7.1 16.3z"
      />
    </svg>
  );
}
