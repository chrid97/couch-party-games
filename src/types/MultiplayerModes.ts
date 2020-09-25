export interface MultiplayerModes {
    id: number;
    campaigncoop: boolean;
    dropin: boolean;
    game: number;
    lancoop: boolean;
    offlinecoop: boolean;
    offlinecoopmax?: number; // exists if offlinecoop is true
    offlinemax?: number;
    onlinecoop: boolean;
    onlinecoopmax?: number; // exists if onlinecoop is true
    onlinemax?: number;
    platform?: number;
    splitscreen: boolean;
  }