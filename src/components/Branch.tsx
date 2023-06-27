import Xarrow from "react-xarrows";
import {ItemProps, ItemWrapper} from "@/components/Item";

export type BranchProps = Pick<ItemProps, 'arrowTo' | 'id' | 'text' | 'type'>

export const Branch = (props: BranchProps) => {
  return <>
    <ItemWrapper id={props.id} classNames="bg-[#F44D27] w-[120px] text-[#E3D7D9]">
      {props.text}
    </ItemWrapper>
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
