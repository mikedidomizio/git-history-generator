import {Commit, CommitComponentProps} from "@/components/Commit";
import {Branch, BranchComponentProps} from "@/components/Branch";
import clsx from "clsx";
import {ReactNode} from "react";
import {ArrowComponentProps} from "@/components/Arrow";

type Arrow = {
  dashed?: boolean,
  to: string,
}

export type ItemProps = {
  bounce?: boolean,
  dimmed?: boolean
  id: string,
  text?: string,
  arrowTo?: Arrow[],
  type?: 'commit' | 'branch'
} & ArrowComponentProps & BranchComponentProps & CommitComponentProps

export const ItemWrapper = ({ children, classNames, id }: {children?: ReactNode, classNames?: string, id: string}) => {
  return <div id={id} className={clsx("inline text-center w-[120px] p-1 py-2", classNames)}>{children}</div>
}

export const Item = (props: ItemProps) => {
  const randomTimelineKey = Math.random()

  if (props.type === 'branch') {
    return <Branch uniqueKey={'' + randomTimelineKey} {...props}/>
  }

  return <Commit uniqueKey={'' + randomTimelineKey} {...props} />
}
