import { AxiosWrapper } from "../../axios";
import queryString from "querystring";

/* Types */
import { SpotifyTokenResponse, SpotifyNowPlayingResponse } from "./types";

const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

export const getAccessToken = async () => {
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await AxiosWrapper<SpotifyTokenResponse, string>({
    baseURL: "https://accounts.spotify.com",
    url: "/api/token",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${basic}`,
    },
    body: queryString.stringify({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  return response;
};

export const getCurrentlyPlaying = async (accessToken: string) => {
  const response = await AxiosWrapper<SpotifyNowPlayingResponse, string>({
    baseURL: "https://api.spotify.com",
    url: "/v1/me/player/currently-playing",
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};
