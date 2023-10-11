"use client";

import Image from "next/image";
import React, { useMemo } from "react";

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

  const tools = useMemo(() => TOOLS, []);

  return (
    <Section
      ref={ref}
      wrapperClassName="body-line"
      titleId="tools"
      depth="300 Mts"
      titleText="Tooling"
    >
      <div className="flex flex-col gap-12">
        <div>
          <Heading size="32" weight="600">
            Langauges and Runtimes
          </Heading>
          <div className="flex flex-wrap gap-4 mt-4">
            {tools.languages.map((tool, i) => (
              <Tool key={tool.name + i} {...tool} />
            ))}
          </div>
        </div>
        <div>
          <Heading size="32" weight="600">
            Frameworks and Libraries
          </Heading>
          <div className="flex flex-wrap gap-4 mt-4">
            {tools.frameworks.map((tool, i) => (
              <Tool key={tool.name + i} {...tool} />
            ))}
          </div>
        </div>
        <div>
          <Heading size="32" weight="600">
            Design
          </Heading>
          <div className="flex flex-wrap gap-4 mt-4">
            {tools.design.map((tool, i) => (
              <Tool key={tool.name + i} {...tool} />
            ))}
          </div>
        </div>
        <div>
          <Heading size="32" weight="600">
            Other Tools
          </Heading>
          <div className="flex flex-wrap gap-4 mt-4">
            {tools.otherTools.map((tool, i) => (
              <Tool key={tool.name + i} {...tool} />
            ))}
          </div>
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
