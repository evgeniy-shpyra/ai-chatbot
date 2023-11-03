export interface IMessage {
  time: string;
  text: string;
  type: "ai" | "person";
}

export interface IStore {
  history: IMessage[];
  isLoading: boolean;
}
