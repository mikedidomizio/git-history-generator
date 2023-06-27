import {Commit, CommitProps} from "@/components/Commit";
import {Branch, BranchProps} from "@/components/Branch";
import clsx from "clsx";
import {ReactNode} from "react";


export type ItemProps = {
  dimmed?: boolean
  id: string,
  text: string,
  arrowTo?: string[],
  type?: 'commit' | 'branch'
}

export const ItemWrapper = ({ children, classNames, id }: {children: ReactNode, classNames: string, id: string}) => {
  return <div id={id} className={clsx("inline text-center w-[120px] p-1 px-8", classNames)}>{children}</div>
}

export const Item = (props: ItemProps) => {
  if (props.type === 'branch') {
    return <Branch {...props}/>
  }

  return <Commit {...props}/>
}
