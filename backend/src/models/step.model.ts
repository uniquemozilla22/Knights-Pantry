import { model, Schema, Types } from "mongoose";

export interface IStepDescription {
  title: string;
  description: string;
}

export interface IStep {
  message: string;
  user: any;
  title: string;
  description: Array<IStepDescription>;
  image: string;
  position: number;
}

const stepSchema = new Schema<IStep>(
  {
    message: { type: String, required: true },
    user: { type: Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    description: [
      {
        title: { type: String, required: false },
        description: { type: String, required: true },
      },
    ],
    image: { type: String, required: true },
    position: { type: Number, require: true },
  },
  { timestamps: true }
);

const Step = model<IStep>("Step", stepSchema);

export default Step;
