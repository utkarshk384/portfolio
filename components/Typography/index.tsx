import React from "react";

/* Styled */
import { StyledTypography } from "./styled";

/* Types */
import type { FontColors, FontSizes, FontWeights, TextCases } from "./types";
type BaseProps = {
  children?: React.ReactNode;
  size?: FontSizes;
  weight?: FontWeights;
  color?: FontColors;
  textCase?: TextCases;
  className?: string;
  href?: string;
} & React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>;

type TextProps = {
  as?: "p" | "span" | "li" | "a";
} & BaseProps;

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & BaseProps;

export const Text: React.FC<TextProps> = (props) => {
  const {
    as = "p",
    className = "",
    size = "32",
    weight = "400",
    color = "content",
    textCase = "none",
  } = props;

  return (
    <StyledTypography
      color={color}
      size={size}
      weight={weight}
      as={as}
      textCase={textCase}
      className={className}
    >
      {props.children}
    </StyledTypography>
  );
};

export const Heading: React.FC<HeadingProps> = (props) => {
  const {
    as = "h3",
    className = "",
    size = "44",
    weight = "700",
    color = "content",
    ...rest
  } = props;

  return (
    <StyledTypography
      color={color}
      size={size}
      weight={weight}
      as={as}
      className={className}
      {...rest}
    >
      {props.children}
    </StyledTypography>
  );
};
