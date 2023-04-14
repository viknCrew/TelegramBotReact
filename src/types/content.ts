export interface IInputFields {
  name: string;
  dashboard: string;
  content: IContent[];
}

export interface IContent {
  name: string;
  type: TContentType;
  // callback: void;
}

export enum ContentType {
  Button = "Button",
  Input = "Input",
}

export type TContentType = ContentType.Button | ContentType.Input;
