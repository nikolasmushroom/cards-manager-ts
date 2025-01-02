import * as Slider from '@radix-ui/react-slider'
import s from './slider.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
import { Typography } from '../typography'

export type SliderCustomProps = {
  onValueChange?: (value: number[]) => void
  value: number[] | string[]
  max?: number
  min?: number
  step?: number
} & ComponentPropsWithoutRef<typeof Slider.Root>
export const SliderCustom = ({
  value,
  className,
  onValueChange,
  disabled,
  step = 1,
  max = 10,
  min = 1,
  ...rest
}: SliderCustomProps) => {
  const classNames = {
    root: clsx(s.Root, className),
  }
  return (
    <div className={s.sliderContainer}>
      <div className={s.boxContainer}>
        <Typography variant={'Body1'}>{value[0]}</Typography>
      </div>
      <form>
        <Slider.Root
          className={classNames.root}
          defaultValue={[2, 10]}
          max={max}
          min={min}
          step={step}
          disabled={disabled}
          value={value}
          onValueChange={onValueChange}
          {...rest}
        >
          <Slider.Track className={s.Track}>
            <Slider.Range className={s.Range} />
          </Slider.Track>
          <Slider.Thumb className={s.Thumb} />
          <Slider.Thumb className={s.Thumb} />
        </Slider.Root>
      </form>
      <div className={s.boxContainer}>
        <Typography variant={'Body1'}>{value[1]}</Typography>
      </div>
    </div>
  )
}
