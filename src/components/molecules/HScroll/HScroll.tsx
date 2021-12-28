import { createContext, ReactElement, useContext, useMemo } from 'react'

// import { HiOutlineChevronRight } from '@react-icons/all-files/hi/HiOutlineChevronRight'
import { useScroll } from 'src/hooks'

export interface IHScrollProps {
  children: ReactElement[]
  className?: string
}

const ScrollContext = createContext([] as any)

export const useScrollContext = () => {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error(
      `A composite Scroll component cannot be rendered outside of the parent HScroll component.`
    )
  }
  return context
}

const RightArrow = ({
  children,
  className,
  distance = -120,
}: {
  children: ReactElement
  distance?: number
  className?: string
}) => {
  const { scrollPos, scroll } = useScrollContext()
  const show = scrollPos[0] > 0
  return (
    <div>
      <button
        type='button'
        className={`${className} ${
          show ? 'opacity-100' : 'opacity-10 cursor-auto'
        }`}
        onClick={() => scroll(distance)}
      >
        {children}
      </button>
    </div>
  )
}

const LeftArrow = ({
  children,
  className,
  distance = 120,
}: {
  children: ReactElement
  className?: string
  distance?: number
}) => {
  const { scrollPos, scroll } = useScrollContext()
  const show = scrollPos[1] > 0
  return (
    <div>
      <button
        type='button'
        className={`${className} ${
          show ? 'opacity-100' : 'opacity-10 cursor-auto'
        }`}
        onClick={() => scroll(distance)}
      >
        {children}
      </button>
    </div>
  )
}
const HScrollBody = ({
  children,
  className,
}: {
  children: ReactElement[]
  className?: string
}) => {
  const { scrollEl, scrollListener } = useScrollContext()

  return (
    <div
      ref={scrollEl}
      onScroll={scrollListener}
      className={`flex py-3 space-x-2 overflow-x-scroll snap-x snap-mandatory scrollbar-hide ${className}`}
    >
      {children.map((child) => (
        <div key={child.props.key} className='flex-shrink-0 snap-start'>
          {child}
        </div>
      ))}
    </div>
  )
}

const HScroll = ({ children, className }: IHScrollProps) => {
  const [scrollPos, scrollEl, scrollListener, scroll] = useScroll()

  const value = useMemo(
    () => ({
      scrollPos,
      scrollEl,
      scrollListener,
      scroll,
    }),
    [scroll, scrollEl, scrollListener, scrollPos]
  )
  return (
    <div className={`relative ${className} mb-12`}>
      <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
    </div>
  )
}

HScroll.LeftArrow = LeftArrow
HScroll.RightArrow = RightArrow
HScroll.Body = HScrollBody

export default HScroll
