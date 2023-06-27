import Xarrow, {refType} from "react-xarrows";
import {ReactNode} from "react";

export type ArrowComponentProps = { arrowComponent?: (props: ArrowProps) => ReactNode }

export type ArrowProps = {
  arrow: refType
  color?: string
  dashedArrow: boolean
  id: refType
}

export const Arrow = ({ arrow, color, dashedArrow, id}: ArrowProps) => {
  console.log('in original arrow', arrow, dashedArrow, id, color)
  return <Xarrow
    dashness={dashedArrow}
    start={id}
    end={arrow}
    headSize={5}
    curveness={0}
    strokeWidth={2}
    color={color ? color : '#786F68'}
  />
}
