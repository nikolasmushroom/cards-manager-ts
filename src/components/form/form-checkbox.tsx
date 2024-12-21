import { Checkbox, CheckboxProps } from '@/components/ui/checkbox'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

type Props<T extends FieldValues> = Omit<
  CheckboxProps,
  'checked' | 'name' | 'onCheckedChange' | 'onBlur'
> &
  UseControllerProps<T>
export const FormCheckbox = <T extends FieldValues>({ control, name, ...rest }: Props<T>) => {
  const {
    field: { value, onChange, ...field },
  } = useController({
    control,
    name,
  })
  return <Checkbox {...rest} {...field} onCheckedChange={onChange} checked={value} />
}
