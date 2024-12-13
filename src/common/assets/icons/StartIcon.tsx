import { SVGProps, Ref, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g id="Layer 2">
      <g id="start-icon">
        <path
          id="Vector"
          d="M8 1.33447C6.68146 1.33447 5.39252 1.72547 4.2962 2.45801C3.19987 3.19055 2.34539 4.23174 1.8408 5.44992C1.33622 6.66809 1.20419 8.00853 1.46143 9.30174C1.71866 10.5949 2.3536 11.7828 3.28595 12.7152C4.2183 13.6475 5.40619 14.2825 6.6994 14.5397C7.9926 14.7969 9.33305 14.6649 10.5512 14.1603C11.7694 13.6558 12.8106 12.8013 13.5431 11.7049C14.2757 10.6086 14.6667 9.31968 14.6667 8.00114C14.6667 7.12566 14.4942 6.25875 14.1592 5.44992C13.8242 4.64108 13.3331 3.90615 12.714 3.28709C12.095 2.66804 11.3601 2.17697 10.5512 1.84194C9.74238 1.50691 8.87548 1.33447 8 1.33447ZM8 13.3345C6.94516 13.3345 5.91402 13.0217 5.03696 12.4356C4.15989 11.8496 3.47631 11.0167 3.07264 10.0421C2.66897 9.06758 2.56336 7.99522 2.76914 6.96066C2.97493 5.92609 3.48288 4.97578 4.22876 4.2299C4.97464 3.48402 5.92495 2.97607 6.95952 2.77028C7.99408 2.5645 9.06644 2.67011 10.041 3.07378C11.0155 3.47745 11.8485 4.16104 12.4345 5.0381C13.0205 5.91516 13.3333 6.94631 13.3333 8.00114C13.3333 9.41563 12.7714 10.7722 11.7712 11.7724C10.771 12.7726 9.41449 13.3345 8 13.3345Z"
        />

        <path
          id="Vector_2"
          d="M8.22666 4.9674C8.06331 4.81687 7.85932 4.71765 7.64004 4.68209C7.42077 4.64654 7.19588 4.6762 6.99333 4.7674C6.7967 4.84694 6.62825 4.9833 6.5095 5.15905C6.39075 5.3348 6.32709 5.54196 6.32666 5.75407V10.2474C6.32709 10.4595 6.39075 10.6667 6.5095 10.8424C6.62825 11.0182 6.7967 11.1545 6.99333 11.2341C7.13784 11.2996 7.29464 11.3337 7.45333 11.3341C7.73927 11.3328 8.01467 11.226 8.22666 11.0341L10.6667 8.7874C10.7758 8.68747 10.8629 8.56593 10.9226 8.43049C10.9822 8.29506 11.013 8.14871 11.013 8.00074C11.013 7.85276 10.9822 7.70641 10.9226 7.57098C10.8629 7.43555 10.7758 7.314 10.6667 7.21407L8.22666 4.9674ZM7.66666 9.73407V6.2674L9.53999 8.00074L7.66666 9.73407Z"
        />
      </g>
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
