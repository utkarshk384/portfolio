"use client";

import Image from "next/image";
import React, { useMemo } from "react";
import Marquee from "react-fast-marquee";

/* Components */
import { Section } from "../section";
import { Heading, Text } from "@/components";

/* Styled */
import { ToolContainer } from "./styled";

/* Consts */
import { TOOLS } from "./consts";

type Props = {
  children?: React.ReactNode;
};

type ToolProps = {
  name: string;
  url: string;
};

export const Tooling = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {} = props;

  const tools = useMemo(() => Object.values(TOOLS).flat(), []);

  return (
    <Section
      ref={ref}
      wrapperClassName="body-line"
      titleId="tools"
      depth="300 Mts"
      titleText="Tooling"
    >
      <div className="flex flex-col gap-12">
        <div className="w-full">
          <Heading size="32" weight="600">
            Langauges and Runtimes
          </Heading>
          <Marquee speed={150} pauseOnClick loop={0} className="w-full">
            {tools.map((tool, i) => (
              <Tool key={tool.name + i} {...tool} />
            ))}
          </Marquee>
        </div>
      </div>
    </Section>
  );
});

Tooling.displayName = "Tooling";

const Tool: React.FC<ToolProps> = (props) => {
  const { name, url } = props;

  return (
    <ToolContainer>
      <div className="overflow-hidden rounded-full">
        <Image src={url} width={48} height={48} alt={`${name} icon`} />
      </div>
      <Text size="18" weight="500">
        {name}
      </Text>
    </ToolContainer>
  );
};
