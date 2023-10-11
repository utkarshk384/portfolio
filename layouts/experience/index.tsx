"use client";

import Image from "next/image";
import React, { useMemo } from "react";

/* Components */
import { Section } from "../section";
import { Heading, Text } from "@/components";
import { TechIcon } from "@components/Icons";
import { ExperienceMarkerContainer } from "./styled";

/* Hooks */
import { useUniqueId } from "@/src/hooks";

/* Types */
import type { TechIconType } from "@components/Icons";

type Props = {
  children?: React.ReactNode;
};

type ExperienceItemProps = {
  technologies: TechIconType[];
  position: string;
  duration: string;
  logoUrl: string;
  description: string[];
};

export const Experience: React.FC<Props> = (props) => {
  const {} = props;
  return (
    <Section
      className="flex flex-col gap-12"
      wrapperClassName="body-line"
      depth="200 Mts"
      titleText="Experience"
      titleId="experience"
    >
      <ExperienceItem
        logoUrl="/my-picture.webp"
        description={[
          "Created a notification system from scratch that is being used by the sales team.",
          "Add trash functionality in the labs of the product. This makes it possible to delete an item and store it in the trash bin.",
          "Added referral system which shows the user how many users has he/her referred.",
        ]}
        duration="Jan 2021 - Present"
        position="Backend Developer Intern"
        technologies={["Express", "Go", "AWS", "Django", "Javascript", "Mysql"]}
      />
      <ExperienceItem
        logoUrl="/my-picture.webp"
        description={[
          "Created a notification system from scratch that is being used by the sales team.",
          "Add trash functionality in the labs of the product. This makes it possible to delete an item and store it in the trash bin.",
          "Added referral system which shows the user how many users has he/her referred.",
        ]}
        duration="Jan 2021 - Present"
        position="Backend Developer Intern"
        technologies={["Express", "Go", "AWS", "Django", "Javascript", "Mysql"]}
      />
    </Section>
  );
};
export const ExperienceItem: React.FC<ExperienceItemProps> = (props) => {
  const { description = [], technologies = [] } = props;

  const uniqueId = useUniqueId("tech-stack-");
  const descId = useUniqueId("exp-desc-");

  const techStack = useMemo(
    () => technologies.map((item) => TechIcon[item]),
    [technologies]
  );

  return (
    <div className="flex flex-col gap-4">
      <ExperienceMarkerContainer>
        <div className="flex items-center min-w-[7.8125rem] overflow-hidden rounded-lg">
          <Image
            width={125}
            height={125}
            alt="Company logo"
            src={props.logoUrl}
          />
        </div>
        <div className="flex flex-col justify-center">
          <Heading weight="700" size="32">
            {props.position}
          </Heading>
          <Heading weight="700" size="24">
            Qwikskills
          </Heading>
          <Text size="28">{props.duration}</Text>
        </div>
      </ExperienceMarkerContainer>
      <div className="flex flex-wrap gap-4">
        {techStack.map((Tech, i) => (
          <Tech key={uniqueId + i} height={32} width={32} />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {description.map((item, i) => (
          <Text as="li" key={descId + i} size="18">
            {item}
          </Text>
        ))}
      </div>
    </div>
  );
};
