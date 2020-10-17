export type PlatformName =
  | "Linux"
  | "PC (Microsoft Windows)"
  | "Mac"
  | "web Browser";

export interface Platform {
  id: number;
  name: PlatformName;
}
