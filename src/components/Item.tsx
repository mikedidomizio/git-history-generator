"use client"
import {Commit, CommitComponentProps} from "@/components/Commit";
import {Branch, BranchComponentProps} from "@/components/Branch";
import clsx from "clsx";
import {ReactNode} from "react";
import {ArcherElement} from "react-archer";

export type ArrowType = {
  className?: string
  dashed?: boolean,
  sourceAnchor?: 'top' | 'right' | 'bottom' | 'left'
  targetAnchor?: 'top' | 'right' | 'bottom' | 'left'
  to: string,
}

export type ItemProps = {
  bounce?: boolean,
  dashed?: boolean
  id: string,
  text?: string,
  arrowTo?: ArrowType[] | string,
  type?: 'commit' | 'branch'
} & BranchComponentProps & CommitComponentProps


export const MakeArrowSafe = (arrows?: ArrowType[] | string): ArrowType[] => {
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

const updateArrowPropWithUnique = (arrows: ArrowType[] | string, uniqueKey: string): ArrowType[] => {
  const arrowsFormatted = MakeArrowSafe(arrows)

  return arrowsFormatted.map(arrow => ({
    ...arrow,
    to: arrow.to + uniqueKey
  }))
}


export const ItemWrapper = ({ children, classNames, id }: {children?: ReactNode, classNames?: string, id: string}) => {
  return <ArcherElement id={id}>
        <div className={clsx("inline text-center w-[120px] p-1 py-2", classNames)}>{children}</div>
  </ArcherElement>
}

export const Item = (props: ItemProps & { uniqueKey: string }) => {
  const updateWithUnique = updateArrowPropWithUnique(props.arrowTo ?? [], props.uniqueKey)

  const idWithUnique = props.id + props.uniqueKey

  if (props.type === 'branch') {
    return <Branch {...props} id={idWithUnique} arrowTo={updateWithUnique} />
  }

  return <Commit {...props} id={idWithUnique} arrowTo={updateWithUnique} />
}
