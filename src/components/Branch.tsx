import {ItemProps, ItemWrapper} from "@/components/Item";
import {ReactNode} from "react";
import {Arrow} from "@/components/Arrow";

export type BranchComponentProps = { branchComponent?: (props: BranchProps) => ReactNode }

export type BranchProps = Pick<ItemProps, 'arrowTo' | 'dashedArrow' | 'id' | 'text' | 'type'> & BranchComponentProps

export const Branch = (props: BranchProps) => {
  if (props.branchComponent) {
    return <props.branchComponent {...props} />
  }

  return <>
    <ItemWrapper id={props.id} classNames="bg-[#F44D27] w-[120px] text-[#E3D7D9]">
      {props.text}
    </ItemWrapper>
    {props.arrowTo?.map((arrow) => {
      return <Arrow key={arrow} arrow={arrow} dashedArrow={props.dashedArrow || false} id={props.id} />
    })}
  </>
}
