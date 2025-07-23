import {
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  SubmitBehavior,
} from "react-native";
import { FormDataType } from "../../utils/types";

type SubmitConfig = {
  returnKeyType: ReturnKeyTypeOptions;
  submitBehavior: SubmitBehavior;
  onSubmitEditing?: any;
};

export type TextFieldProps = {
  label: string;
  name: string;
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  keyboardType?: KeyboardTypeOptions;
  placeholder: string;
  ref: any;
  submitConfig: SubmitConfig;
};
