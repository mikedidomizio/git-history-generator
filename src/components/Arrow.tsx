import Xarrow, {refType} from "react-xarrows";

export type ArrowProps = {
  arrow: refType
  color?: string
  headSize? :number,
  dashedArrow: boolean
  id: refType
  strokeWidth?: number
}

export const Arrow = ({ arrow, color, dashedArrow, headSize, id, strokeWidth}: ArrowProps) => {
  return <Xarrow
    dashness={dashedArrow}
    start={id}
    end={arrow}
    headSize={headSize ?? 5}
    curveness={0}
    strokeWidth={strokeWidth ?? 2}
    color={color ?? '#786F68'}
  />
}
