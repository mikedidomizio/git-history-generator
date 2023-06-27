import {Commit, CommitComponentProps, CommitProps} from "@/components/Commit";
import {Branch, BranchComponentProps} from "@/components/Branch";
import clsx from "clsx";
import {ReactNode} from "react";


export type ItemProps = {
  bounce?: boolean,
  dashedArrow?: boolean,
  dimmed?: boolean
  id: string,
  text?: string,
  arrowTo?: string[],
  type?: 'commit' | 'branch'
} & BranchComponentProps & CommitComponentProps

export const ItemWrapper = ({ children, classNames, id }: {children?: ReactNode, classNames?: string, id: string}) => {
  return <div id={id} className={clsx("inline text-center w-[120px] p-1 py-2", classNames)}>{children}</div>
}

export const Item = (props: ItemProps) => {
  if (props.type === 'branch') {
    return <Branch {...props}/>
  }

  return <Commit {...props} />
}
