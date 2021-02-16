import {FieldInputProps, FieldMetaState} from 'react-final-form';
import {TextInputProps} from 'react-native';

export type TextFieldProps = FieldInputProps<string> &
  FieldMetaState<string> & {
    hidden?: boolean;
    label?: string;
    requiredLabel?: string;
    nextField?: React.RefObject<TextInputProps>;
    placeholderTextColor?: string;
    placeholder?: string;
    multiline?: boolean;
    withReset?: boolean;
    onReset?: () => void;
  };
