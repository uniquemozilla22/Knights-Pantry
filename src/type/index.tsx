interface IStepContent {
  title: string;
  descriptions: string;
}

export interface IStepData {
  id: number;
  title: string;
  image: string;
  position: number;
  content: Array<IStepContent>;
}

export type IChildren = string | JSX.Element | JSX.Element[];

export type ISteps = Array<IStepData>;
