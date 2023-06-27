import Xarrow from "react-xarrows";
import {ItemProps} from "@/components/Item";

export type BranchProps = Pick<ItemProps, 'arrowTo' | 'id' | 'text' | 'type'>

export const Branch = (props: BranchProps) => {
  return <>
    <div id={props.id} className="inline bg-[#F44D27] w-[120px] text-center text-[#E3D7D9] p-1 px-8">{props.text}</div>
    {props.arrowTo?.map((arrow) => {
      return <Xarrow
        key={arrow}
        start={props.id}
        end={arrow}
        headSize={5}
        curveness={0}
        strokeWidth={2}
        color="#786F68"
      />
    })}
  </>
}
