interface IStepContent {
  title: string;
  description: string;
}

export interface IStepData {
  id: number;
  title: string;
  image: string;
  position: number;
  content: Array<IStepContent>;
}

export interface IStepTitle {
  title: string;
  id: number;
}

export type IChildren = string | JSX.Element | JSX.Element[];

export type ISteps = Array<IStepData>;
