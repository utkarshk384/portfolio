import React from "react";

type Props = {
  children?: React.ReactNode;
};

export const Line: React.FC<Props> = (props) => {
  const {} = props;

  return (
    <div className="absolute mt-12 top-0 w-2.5 h-full rounded-full bg-accent" />
  );
};
