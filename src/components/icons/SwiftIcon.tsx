import { SVGProps } from "react";

export default function SwiftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <path
        fill="currentColor"
        d="M29.312 21.797c.073-.152.073-.297.152-.448 1.791-7.032-2.469-15.256-9.797-19.589 3.213 4.333 4.484 9.495 3.364 14.131a6.943 6.943 0 0 1-.375 1.197 7.378 7.378 0 0 1-.599-.375S14.806 12.229 7.03 4.374c-.224-.224 4.188 6.281 9.12 11.443-2.317-1.348-8.896-6.057-13.011-9.869.448.817 1.125 1.64 1.797 2.464 3.437 4.411 7.927 9.796 13.308 13.905-3.813 2.323-9.12 2.469-14.505 0-1.344-.593-2.469-1.344-3.74-2.239 2.245 3.515 5.76 6.728 9.948 8.448 5.011 2.171 10.093 2.02 13.755 0h.079c.145-.073.297-.152.448-.297 1.792-.901 5.307-1.869 7.249 1.869.527 1.047 1.495-3.812-2.167-8.301z"
      />
    </svg>
  );
}
