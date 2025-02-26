import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { TextField, TextFieldProps } from '@/components/ui/textfield'

type Props<T extends FieldValues> = Omit<TextFieldProps, 'value' | 'name' | 'onChange'> &
  UseControllerProps<T>
export const FormTextField = <T extends FieldValues>({ control, name, ...rest }: Props<T>) => {
  const {
    field: { value = '', ...fieldProps },
    fieldState: { error, invalid },
  } = useController({
    control,
    name,
  })
  return <TextField {...rest} value={value} {...fieldProps} errorMessage={error?.message} />
}
