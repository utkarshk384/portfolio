import React from "react";

/* Components */
import { StyledBadge } from "./styled";

/* Types */
import type { BadgeColors, BadgeSize, RoundnessType } from "./types";

type BaseProps = {
  color?: BadgeColors;
  size?: BadgeSize;
  as?: "span" | "div" | "p" | "a";
  LeftIcon?: React.FC;
  href?: string;
  roundness?: RoundnessType;
} & Omit<React.HTMLAttributes<HTMLElement>, "color">;

type Props = (
  | {
      text: string;
      children?: never;
    }
  | {
      children: React.ReactNode;
      text?: never;
    }
) &
  BaseProps;

export const Badge: React.FC<Props> = (props) => {
  const { children, text, LeftIcon, ...rest } = DefaultProps(props);

  return (
    <StyledBadge {...rest}>
      {LeftIcon && <LeftIcon />}
      {text || children}
    </StyledBadge>
  );
};

const DefaultProps = (props: Props) => {
  const defaultProps: Props = {
    ...props,
    color: props.color || "yellow",
    size: props.size || "base",
    as: props.as || "span",
    roundness: props.roundness || "rounded",
  };

  return defaultProps;
};
