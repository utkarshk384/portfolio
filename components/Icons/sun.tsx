import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

export const SunIcon: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={61.6}
      height={61.6}
      viewBox="0 0 61.6 61.6"
      overflow="visible"
      {...props}
    >
      <path
        d="M61.6 30.8c-5.6 3.5-6.3 6.8-2.4 12-6.4.8-8.3 3.6-6.6 9.8-6.2-1.7-9 .2-9.8 6.6-5.2-3.9-8.5-3.2-12 2.4-3.5-5.6-6.8-6.3-12-2.4-.8-6.4-3.6-8.3-9.8-6.6 1.7-6.2-.2-9-6.6-9.8 3.9-5.2 3.2-8.5-2.4-12 5.6-3.5 6.3-6.8 2.4-12C8.9 18 10.7 15.3 9 9c6.2 1.7 9-.2 9.8-6.6 5.2 3.9 8.5 3.2 12-2.4 3.5 5.6 6.8 6.3 12 2.4.8 6.4 3.6 8.3 9.8 6.6-1.7 6.2.2 9 6.6 9.8-3.9 5.2-3.2 8.5 2.4 12z"
        fill="#ffd04b"
      />
      <path
        d="M30.8 51.3c-3 0-5.5-.5-7.9-1.5-2.4-1-4.7-2.6-6.7-4.5-1.9-1.9-3.5-4.2-4.5-6.7-1-2.3-1.4-4.8-1.4-7.8s.5-5.5 1.5-7.9c1-2.3 2.6-4.6 4.5-6.6 2-2 4.3-3.5 6.6-4.5s4.9-1.5 7.9-1.5 5.5.5 7.9 1.5c2.3 1 4.6 2.5 6.5 4.5 2 2 3.6 4.3 4.6 6.7 1 2.4 1.5 4.9 1.5 7.9s-.5 5.5-1.5 7.9c-1 2.4-2.6 4.7-4.6 6.7-1.8 1.8-4.1 3.4-6.5 4.4-2.4.9-4.9 1.4-7.9 1.4z"
        fill="#ffe9b3"
      />
    </svg>
  );
};
