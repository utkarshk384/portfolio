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
import { NowPlayingContainer } from "./styled";

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
      className="flex flex-wrap items-center justify-between gap-4 pb-10 mt-4 lg:gap-0"
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

  /* Memos */
  const artwork = useMemo(() => {
    if (!data.artwork)
      return {
        size: 64,
        fill: false,
        src: "https://utkarshk-portfolio-images.s3.ap-southeast-1.amazonaws.com/technology-icons/spotfiy.png",
      };

    return {
      size: undefined,
      fill: true,
      src: data.artwork,
    };
  }, [data.artwork]);

  return (
    <NowPlayingContainer
      className={`${
        data.isPlaying ? "gap-5" : "gap-0"
      } backdrop-blur-md shadow-card`}
    >
      <button
        onClick={onClickHandler}
        className="relative grid w-full h-full overflow-hidden place-items-center"
      >
        <Image
          width={artwork.size}
          height={artwork.size}
          src={artwork.src}
          fill={artwork.fill}
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
        <Text size="18" title={data.artist}>
          {data.isPlaying
            ? textUtils.truncate(data.artist, 11)
            : "listening to music 👻"}
        </Text>
      </div>
    </NowPlayingContainer>
  );
};
