"use client";

import React from "react";

/* Components */
import { Section } from "../section";
import { Text } from "@/components";
import Image from "next/image";

type Props = {
  children?: React.ReactNode;
};

export const AboutMe: React.FC<Props> = (props) => {
  const {} = props;
  return (
    <Section
      wrapperClassName="body-line body-line-t-rounded"
      depth="100 Mts"
      titleId="about"
      titleText="About Me"
    >
      <div className="flex flex-col-reverse xl:grid grid-cols-[3fr_1fr] gap-12">
        <div className="flex flex-col justify-center gap-4">
          <Text weight="500" size="20">
            Hello! My name is Utkarsh Kumar a vegetarian, an musicophile and a
            passionate full-stack developer from Bhutan. The genre of music that
            I usually listen to are pop, hip-hop, electronic and occasionally
            folk.
          </Text>
          <Text weight="500" size="20">
            I started to fiddle with code since 2013 by hitting{" "}
            <Text
              as="span"
              size="18"
              className="px-2 py-1 rounded-lg bg-accent !text-black"
            >
              F12
            </Text>{" "}
            to open the developer console so I can alter the HTML content of
            games website. This taught me a lot about how HTML, Javascript and
            CSS work to make an website and soon drove enough interest within me
            to become a well versed developer.
          </Text>
          <Text weight="500" size="20">
            I have worked with many technologies such as React JS, Express JS,
            Go Fiber, Django, Svelte, Solid JS etcetera and have also created
            websites that provide good UX to its users.
          </Text>
        </div>
        <div className="relative self-center overflow-hidden rounded-lg justify-self-end">
          <Image
            width={353}
            height={100}
            alt="Picture of Utkarsh Kumar"
            src="/my-picture.webp"
          />
        </div>
      </div>
    </Section>
  );
};
