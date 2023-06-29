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
  arrowTo?: Arrow[] | string,
  type?: 'commit' | 'branch'
} & BranchComponentProps & CommitComponentProps


export const MakeArrowSafe = (arrows?: Arrow[] | string): Arrow[] => {
  if (typeof arrows === "string") {
    return [{
      dashed: false,
      to: arrows
    }]
  }

  if (arrows) {
    return arrows
  }

  return []
}

const updateArrowPropWithUnique = (arrows: Arrow[] | string, uniqueKey: string): Arrow[] => {
  const arrowsFormatted = MakeArrowSafe(arrows)

  return arrowsFormatted.map(arrow => ({
    ...arrow,
    to: arrow.to + uniqueKey
  }))
}


export const ItemWrapper = ({ children, classNames, id }: {children?: ReactNode, classNames?: string, id: string}) => {
  return <div id={id} className={clsx("inline text-center w-[120px] p-1 py-2", classNames)}>{children}</div>
}

export const Item = (props: ItemProps & { uniqueKey: string }) => {
  const updateWithUnique = updateArrowPropWithUnique(props.arrowTo ?? [], props.uniqueKey)

  const idWithUnique = props.id + props.uniqueKey

  if (props.type === 'branch') {
    return <Branch {...props} id={idWithUnique} arrowTo={updateWithUnique} />
  }

  return <Commit {...props} id={idWithUnique} arrowTo={updateWithUnique} />
}
