"use client";

import { gsap } from "gsap";
import Image from "next/image";
import React, { useMemo } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

/* Components */
import { Section } from "../section";
import { Heading, Text } from "@/components";
import { TechIcon } from "@components/Icons";
import { ExperienceItemContainer, ExperienceMarkerContainer } from "./styled";

/* Hooks */
import { useUniqueId } from "@/src/hooks";
import { usePlugin, useTweens } from "@/src/hooks/gsap";

/* Utils */
import mergeRefs from "@/src/utils/mergeRefs";

/* Types */
import type { TechIconType } from "@components/Icons";
import type { GsapContextFn } from "@/src/hooks/gsap";

type Props = {
  children?: React.ReactNode;
};

type ExperienceItemProps = {
  technologies: TechIconType[];
  position: string;
  duration: string;
  logoUrl: string;
  itemCount: number;
  description: string[];
};

const Animation: GsapContextFn<HTMLDivElement> = (ctx, ref) => {
  const experiences = gsap.utils.toArray(".experience-item");

  gsap.set("#experience-container", {
    width: ref.current.offsetWidth * experiences.length - 1,
  });

  gsap.to(experiences, {
    xPercent: -100 * (experiences.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ref.current,
      pin: true,
      markers: false,
      pinSpacing: false,
      scrub: 1,
      snap: 1 / experiences.length - 1,
      end: () => "+=" + ref.current.offsetWidth,
    },
  });
};

export const Experience = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const {} = props;

    usePlugin(ScrollTrigger);

    const scopeRef = useTweens(Animation);
    return (
      <>
        <Section
          ref={mergeRefs(scopeRef, ref)}
          className={`overflow-hidden md:!pl-12 !pl-5`}
          wrapperClassName="body-line"
          depth="200 Mts"
          titleText="Experience"
          titleId="experience"
        >
          <div id="experience-container" className="relative flex gap-4">
            <ExperienceItem
              itemCount={2}
              logoUrl="/my-picture.webp"
              description={[
                "Created a notification system from scratch that is being used by the sales team.",
                "Add trash functionality in the labs of the product. This makes it possible to delete an item and store it in the trash bin.",
                "Added referral system which shows the user how many users has he/her referred.",
              ]}
              duration="Jan 2021 - Present"
              position="Backend Developer Intern"
              technologies={[
                "Express",
                "Go",
                "AWS",
                "Django",
                "Javascript",
                "Mysql",
              ]}
            />
            <ExperienceItem
              itemCount={2}
              logoUrl="/my-picture.webp"
              description={[
                "Created a notification system from scratch that is being used by the sales team.",
                "Add trash functionality in the labs of the product. This makes it possible to delete an item and store it in the trash bin.",
                "Added referral system which shows the user how many users has he/her referred.",
              ]}
              duration="Jan 2021 - Present"
              position="Backend Developer Intern"
              technologies={[
                "Express",
                "Go",
                "AWS",
                "Django",
                "Javascript",
                "Mysql",
              ]}
            />
          </div>
        </Section>
        <div
          className="body-line"
          style={{ height: scopeRef.current?.scrollWidth || 0 }}
        />
      </>
    );
  }
);

Experience.displayName = "Experience";

export const ExperienceItem: React.FC<ExperienceItemProps> = (props) => {
  const { description = [], technologies = [] } = props;

  const uniqueId = useUniqueId("tech-stack-");
  const descId = useUniqueId("exp-desc-");

  const techStack = useMemo(
    () => technologies.map((item) => TechIcon[item]),
    [technologies]
  );

  return (
    <ExperienceItemContainer
      style={{ "--items": props.itemCount } as any}
      className="experience-item"
    >
      <div className="flex items-center min-w-[7.8125rem] overflow-hidden">
        <Image
          width={125}
          height={125}
          className="rounded-lg"
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
    </ExperienceItemContainer>
  );
};
