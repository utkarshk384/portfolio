"use client";

import Image from "next/image";
import React, { useMemo } from "react";
import { Carousel } from "react-responsive-carousel";
import { ArrowTopRightOnSquareIcon as ExternalLinkIcon } from "@heroicons/react/24/solid";

/* CSS */
import "react-responsive-carousel/lib/styles/carousel.min.css";

/* Components */
import { Section } from "../section";
import { StyledProjectItem } from "./styled";
import { CarouselButton } from "./components";
import { Badge, SocialIcon, Text, TechIcon } from "@/components";

/* Data */
import { data } from "@/src/data";

/* Hooks */
import { useUniqueId } from "@/src/hooks";

/* Types */
import type { TechIconType } from "@/components/Icons";

type Props = {
  children?: React.ReactNode;
};

type ProjectItemProps = {
  technologies: TechIconType[];
  title: string;
  githubUrl: string;
  figmaUrl?: string;
  description: string[];
  images: string[];
  projectUrl?: string;
};

export const Projects = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const {} = props;

    /* Memos */
    const projectsData = useMemo(() => data.projects, []);

    return (
      <Section
        ref={ref}
        wrapperClassName="body-line"
        depth="200 Mts"
        titleId="projects"
        titleText="Projects"
      >
        <div className="flex flex-col gap-24">
          {projectsData.map((i) => (
            <ProjectItem
              key={i.title + i}
              description={i.description}
              githubUrl={i.githubUrl}
              technologies={i.technologies}
              title={i.title}
              images={i.images}
              projectUrl={i.projectUrl}
              figmaUrl={i.figmaUrl}
            />
          ))}
        </div>
      </Section>
    );
  }
);

Projects.displayName = "Projects";

export const ProjectItem: React.FC<ProjectItemProps> = (props) => {
  const technologies = useMemo(
    () => props.technologies.map((tech) => TechIcon[tech]),
    [props.technologies]
  );
  const techUniqueId = useUniqueId("project-tech-icon-");
  const descId = useUniqueId("project-desc-");

  return (
    <StyledProjectItem.Container>
      <StyledProjectItem.Details>
        <div className="flex flex-col flex-wrap gap-4">
          <div className="flex flex-wrap gap-4">
            <StyledProjectItem.TitleWrapper>
              <Text
                size="32"
                weight="600"
                as={props.projectUrl ? "a" : "p"}
                href={props.projectUrl}
                target="_blank"
              >
                {props.title}
              </Text>
              <ExternalLinkIcon
                width={20}
                height={20}
                className="text-accent"
              />
            </StyledProjectItem.TitleWrapper>
            <Badge
              roundness="pill"
              text="Github"
              LeftIcon={() => <SocialIcon.Github />}
              as="a"
              color="darkBlue"
              href={props.githubUrl}
              target="_blank"
              size="sm"
            />
            {props.figmaUrl && (
              <Badge
                roundness="pill"
                text="Figma"
                LeftIcon={() => <SocialIcon.Figma />}
                as="a"
                color="yellow"
                href={props.figmaUrl}
                size="sm"
              />
            )}
          </div>
          <div className="flex gap-4">
            {technologies.map((Icon, i) => (
              <Icon key={techUniqueId + i} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {props.description.map((desc, i) => (
            <Text
              key={descId + i}
              as="li"
              size="18"
              weight="400"
              className="text-gray-600"
            >
              {desc}
            </Text>
          ))}
        </div>
      </StyledProjectItem.Details>
      <StyledProjectItem.ImageWrapper>
        <Carousel
          className="z-10"
          showStatus={false}
          emulateTouch
          showThumbs={false}
          renderArrowPrev={(clickHandler, hasNext) => (
            <CarouselButton hasNext={hasNext} clickHandler={clickHandler} />
          )}
          renderArrowNext={(clickHandler, hasPrev) => (
            <CarouselButton hasPrev={hasPrev} clickHandler={clickHandler} />
          )}
        >
          {props.images.map((image, i) => (
            <Image
              key={i}
              src={image}
              width={500}
              alt="Project Image"
              height={500}
              style={{ objectFit: "cover", aspectRatio: "16/9" }}
            />
          ))}
        </Carousel>
      </StyledProjectItem.ImageWrapper>
    </StyledProjectItem.Container>
  );
};
