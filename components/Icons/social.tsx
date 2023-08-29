import * as React from "react";

type Props = React.SVGProps<SVGSVGElement>;

type SocialIconType = {
  Github: React.FC<Props>;
  Figma: React.FC<Props>;
};

export const SocialIcon = {} as SocialIconType;

const GithubIcon: React.FC<Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#EBEBEB"
      d="M12 .5c6.63 0 12 5.37 12 12a12.019 12.019 0 0 1-8.175 11.385c-.6.12-.825-.255-.825-.57 0-.405.015-1.695.015-3.3 0-1.125-.375-1.845-.81-2.22 2.67-.3 5.475-1.32 5.475-5.925 0-1.32-.465-2.385-1.23-3.225.12-.3.54-1.53-.12-3.18 0 0-1.005-.33-3.3 1.23-.96-.27-1.98-.405-3-.405s-2.04.135-3 .405c-2.295-1.545-3.3-1.23-3.3-1.23-.66 1.65-.24 2.88-.12 3.18-.765.84-1.23 1.92-1.23 3.225 0 4.59 2.79 5.625 5.46 5.925-.345.3-.66.825-.765 1.605-.69.315-2.415.825-3.495-.99-.225-.36-.9-1.245-1.845-1.23-1.005.015-.405.57.015.795.51.285 1.095 1.35 1.23 1.695.24.675 1.02 1.965 4.035 1.41 0 1.005.015 1.95.015 2.235 0 .315-.225.675-.825.57A11.992 11.992 0 0 1 0 12.5C0 5.87 5.37.5 12 .5Z"
    />
  </svg>
);

const FigmaIcon: React.FC<Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#0ACF83"
        d="M8.113 24.5a3.996 3.996 0 0 0 3.989-4v-4H8.113a3.996 3.996 0 0 0-3.988 4c0 2.208 1.787 4 3.988 4Z"
      />
      <path
        fill="#A259FF"
        d="M4.125 12.5c0-2.208 1.787-4 3.988-4h3.989v8H8.113a3.996 3.996 0 0 1-3.988-4Z"
      />
      <path
        fill="#F24E1E"
        d="M4.125 4.5c0-2.208 1.787-4 3.988-4h3.989v8H8.113a3.996 3.996 0 0 1-3.988-4Z"
      />
      <path
        fill="#FF7262"
        d="M12.102.5h3.988a3.996 3.996 0 0 1 3.989 4c0 2.208-1.787 4-3.989 4h-3.988v-8Z"
      />
      <path
        fill="#1ABCFE"
        d="M20.079 12.5c0 2.208-1.787 4-3.989 4a3.996 3.996 0 0 1-3.988-4c0-2.208 1.787-4 3.988-4a3.996 3.996 0 0 1 3.989 4Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

SocialIcon.Github = GithubIcon;
SocialIcon.Figma = FigmaIcon;
