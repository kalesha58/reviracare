export type ChatMessageRole = "user" | "bot";

export interface IChatMessage {
  id: string;
  role: ChatMessageRole;
  content: string;
  timestamp: Date;
}

export interface IChatSupportProps {
  /** Optional initial greeting from bot */
  welcomeMessage?: string;
}
