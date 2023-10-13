"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

/* Components */
import { Section } from "../section";
import { Heading, Text } from "@/components";

/* APIs */
import { getAccessToken, getCurrentlyPlaying } from "@/src/api";
import { textUtils } from "@/src/utils";
import { useGetAccessToken, useGetNowPlaying } from "@/src/api/hooks";

type Props = {
  children?: React.ReactNode;
};

type SpotifyData = {
  name: string;
  artwork: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
};
const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  const nowPlaying = await getCurrentlyPlaying(access_token);

  return nowPlaying;
};

export const Footer: React.FC<Props> = (props) => {
  const {} = props;
  return (
    <Section
      className="flex items-center justify-between pb-10 mt-4"
      depth="400 Mts"
      titleText=""
      isLast
      titleId="footer"
    >
      <SpotifyPlayer />
      <Text size="18">Designed and built with love from Utkarsh 🩶</Text>
    </Section>
  );
};

export const SpotifyPlayer = () => {
  /* APIs */
  const token = useGetAccessToken();
  const nowPlaying = useGetNowPlaying(token.accessToken as string);

  /* State */
  const [data, setData] = useState<SpotifyData>({
    name: "",
    artwork: "",
    artist: "",
    isPlaying: false,
    songUrl: "",
  });

  useEffect(() => {
    if (!nowPlaying.isSuccess) return;
    const res = nowPlaying.data;
    const data = {
      name: res?.item?.name,
      artwork: res?.item?.album?.images?.[0]?.url,
      artist: res?.item?.artists?.[0]?.name,
      isPlaying: res?.is_playing,
      songUrl: res?.item?.external_urls?.spotify,
    };

    setData(data);
  }, [nowPlaying.data, nowPlaying.isSuccess]);

  /* Handlers */
  const onClickHandler = () => {
    if (!data.isPlaying) return;
    window.open(data.songUrl, "_blank");
  };

  return (
    <div
      className={`grid grid-cols-[1fr_2fr] overflow-hidden ${
        data.isPlaying ? "gap-5" : "gap-0"
      } p-0 rounded-lg bg-neutral-gradient backdrop-blur-md shadow-card w-[20rem]`}
    >
      <button
        onClick={onClickHandler}
        className="relative grid w-full h-full overflow-hidden place-items-center"
      >
        <Image
          width={data.isPlaying ? undefined : 64}
          height={data.isPlaying ? undefined : 64}
          src={
            data.isPlaying
              ? data.artwork
              : "https://utkarshk-portfolio-images.s3.ap-southeast-1.amazonaws.com/technology-icons/spotfiy.png"
          }
          fill={data.isPlaying}
          alt="Spotify Logo"
          className="object-cover"
        />
      </button>
      <div className="flex flex-col justify-center w-full gap-2 py-4 pr-6">
        <Heading title={data.name} as="h6" size="20">
          {data.isPlaying
            ? `${textUtils.truncate(data.name, 11)} 🎧`
            : "Utkarsh is not"}
        </Heading>
        <Text size="18">
          {data.isPlaying ? data.artist : "listening to music 👻"}
        </Text>
      </div>
    </div>
  );
};
