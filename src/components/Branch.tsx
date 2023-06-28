import {ItemProps, ItemWrapper} from "@/components/Item";
import {ReactNode} from "react";
import {Arrow} from "@/components/Arrow";

export type BranchComponentProps = { branchComponent?: (props: BranchProps) => ReactNode }

export type BranchProps = Pick<ItemProps, 'arrowTo' | 'id' | 'text' | 'type'> & BranchComponentProps

export const Branch = (props: BranchProps) => {
  if (props.id.startsWith("undefined")) {
    if (props.branchComponent) {
      return <props.branchComponent {...props} />
    }

    return <ItemWrapper id={props.id} classNames="invisible" />
  }

  if (props.branchComponent) {
    return <div id={props.id}><props.branchComponent {...props} /></div>
  }

  return <>
    <ItemWrapper id={props.id} classNames="bg-[#F44D27] text-[#E3D7D9]">
      {props.text}
    </ItemWrapper>
    {props.arrowTo?.map((arrow) => {
      return <Arrow key={arrow.to} arrow={arrow.to} dashedArrow={arrow.dashed || false} id={props.id} />
    })}
  </>
}
