import { useQuery } from "@tanstack/react-query";

/* Handlers */
import { getCurrentlyPlaying, getAccessToken } from "../handlers/spotify";
import { useRef } from "react";

export const useGetNowPlaying = (accessToken: string) => {
  const nowPlaying = useQuery({
    queryKey: ["spotify-now-playing", accessToken],
    queryFn: () => getCurrentlyPlaying(accessToken),
    enabled: !!accessToken,
    refetchInterval: 60000, // 1 minute
  });

  return nowPlaying;
};

export const useGetAccessToken = () => {
  const accessToken = useRef<string | null>(null);

  const { isLoading } = useQuery({
    queryKey: ["spotify-access-token"],
    queryFn: () => getAccessToken(),
    onSuccess(data) {
      accessToken.current = data.access_token;
    },
  });

  return { accessToken: accessToken.current, isLoading };
};
