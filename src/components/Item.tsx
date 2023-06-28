import {Commit, CommitComponentProps} from "@/components/Commit";
import {Branch, BranchComponentProps} from "@/components/Branch";
import clsx from "clsx";
import {ReactNode} from "react";

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
} & BranchComponentProps & CommitComponentProps

export const ItemWrapper = ({ children, classNames, id }: {children?: ReactNode, classNames?: string, id: string}) => {
  return <div id={id} className={clsx("inline text-center w-[120px] p-1 py-2", classNames)}>{children}</div>
}

export const Item = (props: ItemProps & { uniqueKey: string }) => {
  const updateWithUnique = props.arrowTo?.map(arrow => ({
    ...arrow,
    to: arrow.to + props.uniqueKey
  }))
  const idWithUnique = props.id + props.uniqueKey

  if (props.type === 'branch') {
    return <Branch {...props} id={idWithUnique} arrowTo={updateWithUnique} />
  }

  return <Commit {...props} id={idWithUnique} arrowTo={updateWithUnique} />
}
