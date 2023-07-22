"use client"
import {ArrowType, ItemProps, MakeArrowSafe} from "@/components/Item";
import {CommitProps} from "@/components/Commit";
import clsx from "clsx";
import {Timeline} from "@/components/Timeline";
import {ArcherContainer, ArcherElement} from "react-archer";
import {ReactElement, useEffect, useRef, useState} from "react";
import {RelationType} from "react-archer/lib/types";

type ToType = (string | ArrowType)[]

export const buildMappedArrows = (arrowTo: ArrowType[]): RelationType[] => {
  return arrowTo.map((arrow) => {
    return {
      className: arrow.className,
      targetId: arrow.to,
      targetAnchor: arrow.targetAnchor ?? 'right',
      sourceAnchor: arrow.sourceAnchor ?? 'left',
      style: {strokeColor: '#404040', strokeWidth: 4,
        endShape: {
          circle: {
            radius: -1,
          },
        },
      },
    }
  })
}

export const ArcherElementWithArrows = ({ children, id, arrowTo }: { children: ReactElement, id: string, arrowTo: ArrowType[]  }) => {
  const arrowArr: RelationType[] = buildMappedArrows(arrowTo)

  return <ArcherElement
    id={id}
    relations={arrowArr ?? []}>
    {children}
  </ArcherElement>
}

const Commit = (props: CommitProps & { circleBackgroundColour?: string }) => {
  if (props.id.startsWith("null")) {
    return <div className="bg-transparent p-3 border-4 border-transparent" />
  }


  if (MakeArrowSafe(props.arrowTo).length) {
    return <ArcherElementWithArrows id={props.id} arrowTo={MakeArrowSafe(props.arrowTo)}>
      <div className={clsx("border-[#404040] border-t-4 border-l-4 border-r-4 border-b-4 rounded-full p-3", props.circleBackgroundColour, MakeArrowSafe(props.arrowTo)[0].className)}>
        {props.text}
      </div>
    </ArcherElementWithArrows>
  }

  return <ArcherElement id={props.id}>
    <div className={clsx("border-[#404040] border-t-4 border-l-4 border-r-4 border-b-4 rounded-full p-3", props.circleBackgroundColour)}>
      {props.text}
    </div>
  </ArcherElement>
}

const commitItemWithColour = (id: string, to?: ToType, colour?: string): ItemProps => {
  return {
    commitComponent: (props: CommitProps) => <Commit {...props} circleBackgroundColour={colour} />,
    id: id,
    arrowTo: to?.map((item: string | ArrowType) => {
      if (typeof item === "string") {
        return {
          to: item,
        }
      }

      return item
    })
  }
}

const purpleCommit = (id: string, to?: ToType): ItemProps => {
  return commitItemWithColour(id, to, "bg-[#B18AE8]")
}

const blueCommit = (id: string, to?: ToType): ItemProps => {
  return commitItemWithColour(id, to, 'bg-[#B3E3FF]')
}

const greenCommit = (id: string, to?: ToType): ItemProps => {
  return commitItemWithColour(id, to, 'bg-[#4DD1A1]')
}

const redCommit = (id: string, to?: ToType): ItemProps => {
  return commitItemWithColour(id, to, 'bg-[#FE8364]')
}

const turquoiseCommit = (id: string, to?: ToType): ItemProps => {
  return commitItemWithColour(id, to, 'bg-[#4ED3D5]')
}

const gitHistory: (null | ItemProps)[][] = [
  [blueCommit('A0'), null, null, null, blueCommit('A1', ['A0', 'B0']), null, null , null, blueCommit('A2', ['A1'])],
  [...new Array(7).fill(null), turquoiseCommit('C0', ['D3']), turquoiseCommit('C1', ['C0', {
    to: 'A2',
    sourceAnchor: 'top',
    targetAnchor: 'bottom'
  }])],
  [null, purpleCommit('D0', ['A0']), purpleCommit('D1', ['D0']), null, purpleCommit('D2', ['D1']), null, purpleCommit('D3', ['D2', 'F1']), null, null,  purpleCommit('D4', ['D3', 'C1'])],
  [null, null, null, null, greenCommit('F0', ['D1']), greenCommit('F1', ['F0'])],
  [null, greenCommit('E0', [{
    to: 'D0',
    sourceAnchor: 'top',
    targetAnchor: 'bottom'
  }]), null, greenCommit('E1', ['E0']), greenCommit('E2', ['E1']), greenCommit('E3', [{
    to: 'E2',
    className: 'blinking'
  }])],
]


export const AtlassianBranchArcher = () => {
  const ref = useRef(false)
  const [rand, setRand] = useState(1)

  useEffect(() => {
    if (!ref.current) {
      ref.current = true
      setRand(rand + 1)
    }
  }, [rand])


  // @ts-ignore
  return <ArcherContainer key={rand}>
      <Timeline id="atlassian-branch-2" items={gitHistory} commitComponent={Commit} />
    </ ArcherContainer>
}
