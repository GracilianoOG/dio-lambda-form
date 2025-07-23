import { TextFieldProps } from "../TextField/types";

export type TextAreaProps = {
  numberOfLines: number;
  maxLength: number;
} & TextFieldProps;
