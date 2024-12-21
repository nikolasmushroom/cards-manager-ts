import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { RadioGroup, RadioGroupProps } from '@/components/ui/radio'

type Props<T extends FieldValues> = Omit<RadioGroupProps, 'value' | 'name' | 'onChange'> &
  UseControllerProps<T>
export const FormRadioGroup = <T extends FieldValues>({ control, name, ...rest }: Props<T>) => {
  const {
    field: { value, onChange },
  } = useController({
    control,
    name,
  })
  return <RadioGroup {...rest} value={value} onValueChange={onChange} />
}
