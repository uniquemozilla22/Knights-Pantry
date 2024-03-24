interface IStepContent {
  title: string;
  description: string;
}

export interface IStepData {
  user: any;
  title: string;
  description: Array<IStepContent>;
  image: string;
  position: number;
}

export interface IStepTitle {
  title: string;
  id: number;
}

export type IChildren = string | JSX.Element | JSX.Element[];

export type ISteps = Array<IStepData>;
