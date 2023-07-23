"use client"
import {ArrowType, ItemProps, MakeArrowSafe} from "@/components/Item";
import {CommitProps} from "@/components/Commit";
import clsx from "clsx";
import {Timeline} from "@/components/Timeline";
import {Arrow} from "@/components/Arrow";
import {useState} from "react";

const bumpId = (id: string): string => {
  const startingCharacter = id.charAt(0)
  const number = parseInt(id.substring(1))

  return startingCharacter + "" + (number + 1)
}

const Commit = (props: CommitProps & { circleBackgroundColour?: string }) => {
  if (props.id.startsWith("null")) {
    return <div className="bg-transparent p-3 border-4 border-transparent" />
  }

  let arrowColor = '#404040'
  let borderStyle = 'border-solid'
  let circleBackgroundColour = props.circleBackgroundColour

  if (props.arrowTo?.length) {
    if (props.arrowTo[0]) {
      if (typeof props.arrowTo[0] !== 'string' && props.arrowTo[0]?.dashed && props.circleBackgroundColour) {
        borderStyle = 'blinking'
      }
    }
  }

  return <div style={{ backgroundColor: circleBackgroundColour, borderColor: arrowColor }} className={
    clsx(`border-t-4 border-l-4 border-r-4 border-b-4 rounded-full p-3 border-solid`, borderStyle)}>
    {props.text}
    {MakeArrowSafe(props.arrowTo).map((arrow) => {
      return <Arrow curveness={1} strokeWidth={4} headSize={-1} color={arrowColor} key={arrow.to} arrow={arrow.to} dashedArrow={false} id={props.id} />
    })}
  </div>
}

const commitItemWithColour = (id: string, arrows?: ArrowType[] | string, colour?: string): ItemProps => {
  return {
    commitComponent: (props: CommitProps) => <Commit {...props} circleBackgroundColour={colour} />,
    id: id,
    arrowTo: MakeArrowSafe(arrows).map((item) => {
      return {
        dashed: item.dashed,
        to: item.to,
      }
    })
  }
}

const purpleCommit = (id: string, to?: ArrowType[] | string): ItemProps => {
  return commitItemWithColour(id, to, "#B18AE8")
}

const blueCommit = (id: string, to?: ArrowType[] | string): ItemProps => {
  return commitItemWithColour(id, to, '#B3E3FF')
}

const greenCommit = (id: string, to?: ArrowType[] | string): ItemProps => {
  return commitItemWithColour(id, to, '#4DD1A1')
}

const gitHistory: (null | ItemProps)[][] = [
  [null, null,
    purpleCommit('B0', [{
      to: 'C1',
      dashed: true,
    }]),
    purpleCommit('B1', [{
      to: 'B0',
      dashed: true,
    }])
  ],
  [
    blueCommit('C0'),
    blueCommit('C1', 'C0'),
    blueCommit('C2', 'C1'),
    blueCommit('C4', 'C2'),
    blueCommit('C5', 'C4'),
    purpleCommit('C6', 'C5'),
    purpleCommit('C7', 'C6')
  ],
  [null, null, null, null,
    greenCommit('D1', 'C4'),
    greenCommit('D2', 'D1')
  ]
]


const HackySolutionToSeeCommitsAdded = ({ state, setState }: { state: any, setState: any }) => {
  const handleAdd = () => {
    const tempGit = state
    const last = tempGit[2][tempGit[2].length - 1]

    tempGit[2].push(greenCommit(bumpId(last?.id ?? ''), last?.id))
    setState([
      ...tempGit
    ])
  }

  return  <button onClick={handleAdd}>Add Commit</button>
}

export const AtlassianExampleBlinking = () => {
  const [git, setGit] = useState(gitHistory)

  return <>
    <div>
      <HackySolutionToSeeCommitsAdded state={git} setState={setGit} />
      <Timeline id="atlassian-blinking" items={git} commitComponent={Commit} />
    </div>
  </>
}
