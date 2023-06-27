import {ItemProps, ItemWrapper} from "@/components/Item";
import {ReactNode} from "react";
import {Arrow, ArrowComponentProps} from "@/components/Arrow";

export type BranchComponentProps = { branchComponent?: (props: BranchProps) => ReactNode }

export type BranchProps = Pick<ItemProps, 'arrowTo' | 'id' | 'text' | 'type'> & ArrowComponentProps & BranchComponentProps

export const Branch = (props: BranchProps) => {
  if (props.branchComponent) {
    console.log('in here')
    return <props.branchComponent {...props} />
  }

  console.log('not here')

  return <>
    <ItemWrapper id={props.id} classNames="bg-[#F44D27] w-[120px] text-[#E3D7D9]">
      {props.text}
    </ItemWrapper>
    {props.arrowTo?.map((arrow) => {
      return <Arrow key={arrow.to} arrow={arrow.to} dashedArrow={arrow.dashed || false} id={props.id} />
    })}
  </>
}
