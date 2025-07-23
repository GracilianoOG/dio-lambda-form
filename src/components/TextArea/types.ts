import { KeyboardTypeOptions } from "react-native";
import { FormDataType } from "../../utils/types";

export type TextAreaProps = {
  label: string;
  name: string;
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  keyboardType?: KeyboardTypeOptions;
  placeholder: string;
  numberOfLines: number;
  maxLength: number;
};
