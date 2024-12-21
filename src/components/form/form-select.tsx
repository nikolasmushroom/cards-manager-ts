import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { SelectCustom, SelectProps } from '@/components/ui/select'

type Props<T extends FieldValues> = Omit<SelectProps, 'value' | 'name' | 'onChange'> &
  UseControllerProps<T>
export const FormSelect = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  ...rest
}: Props<T>) => {
  const {
    field: { value, onChange },
  } = useController({
    control,
    name,
  })
  return <SelectCustom value={value} onValueChange={onChange} {...rest} />
}
