import { Actions, Context, Item } from "./helperTypes";

export type SpotifyTokenResponse = {
  access_token: string;
  token_type: "Bearer";
  expires_in: number;
  scope: string;
};

export interface SpotifyNowPlayingResponse {
  timestamp: number;
  context: Context;
  progress_ms: number;
  item: Item;
  currently_playing_type: string;
  actions: Actions;
  is_playing: boolean;
}
