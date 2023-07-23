"use client"
import Xarrow, {refType} from "react-xarrows";

export type ArrowProps = {
  arrow: refType
  color?: string
  curveness?: number
  headSize? :number,
  dashedArrow: boolean
  id: refType
  strokeWidth?: number
}

/**
 * @deprecated Use React-Archer implementation
 * @param arrow
 * @param curveness
 * @param color
 * @param dashedArrow
 * @param headSize
 * @param id
 * @param strokeWidth
 * @constructor
 */
export const Arrow = ({ arrow, curveness, color, dashedArrow, headSize, id, strokeWidth}: ArrowProps) => {
  return <Xarrow
    dashness={dashedArrow}
    start={id}
    end={arrow}
    headSize={headSize ?? 5}
    curveness={curveness ?? 0}
    strokeWidth={strokeWidth ?? 2}
    color={color ?? '#786F68'}
  />
}
