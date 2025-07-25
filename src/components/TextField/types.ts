import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  SubmitBehavior,
  TextInput,
  TextInputSubmitEditingEventData,
} from "react-native";
import { FormDataType } from "../../utils/types";

type SubmitConfig = {
  returnKeyType: ReturnKeyTypeOptions;
  submitBehavior: SubmitBehavior;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
};

export type TextFieldProps = {
  label: string;
  name: string;
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  keyboardType?: KeyboardTypeOptions;
  placeholder: string;
  ref?: React.Ref<TextInput>;
  submitConfig: SubmitConfig;
};
