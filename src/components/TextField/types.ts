import { KeyboardTypeOptions } from "react-native";
import { FormDataType } from "../../utils/types";

export type TextFieldProps = {
  label: string;
  name: string;
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  keyboardType: KeyboardTypeOptions;
  placeholder: string;
};
