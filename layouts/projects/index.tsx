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

export const Projects: React.FC<Props> = (props) => {
  const {} = props;

  return (
    <Section depth="200 Mts" titleId="projects" titleText="Projects">
      <ProjectItem
        description={[
          "An all in one package tracking application.",
          "Can be used to track packages from DTDC and Ekart.",
          "Can view past details of the package in a digestible format.",
        ]}
        githubUrl="https://github.com"
        technologies={["React", "Typescript", "Tailwind", "NextJS"]}
        title="Ease Track"
        images={["/my-picture.webp", "/my-picture.webp"]}
        projectUrl="https://github.com"
        figmaUrl="https://github.com"
      />
    </Section>
  );
};

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
          showStatus={false}
          emulateTouch
          showThumbs={false}
          renderArrowPrev={(clickHandler, hasPrev) => (
            <CarouselButton hasPrev={hasPrev} clickHandler={clickHandler} />
          )}
          renderArrowNext={(clickHandler, hasNext) => (
            <CarouselButton hasNext={hasNext} clickHandler={clickHandler} />
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
