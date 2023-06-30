import {ItemProps, MakeArrowSafe} from "@/components/Item";
import {CommitProps} from "@/components/Commit";
import clsx from "clsx";
import {Arrow} from "@/components/Arrow";
import {Timeline} from "@/components/Timeline";

const Commit = (props: CommitProps & { circleBackgroundColour?: string }) => {
  if (props.id.startsWith("null")) {
    return <div className="bg-transparent p-3 border-4 border-transparent" />
  }

  return <div className={clsx("border-[#404040] border-t-4 border-l-4 border-r-4 border-b-4 rounded-full p-3", props.circleBackgroundColour)}>
    {props.text}
    {MakeArrowSafe(props.arrowTo).map((arrow) => {
      return <Arrow curveness={1} strokeWidth={4} headSize={-1} color="#404040" key={arrow.to} arrow={arrow.to} dashedArrow={arrow.dimmed || false} id={props.id} />
    })}
  </div>
}

const commitItemWithColour = (id: string, to?: string[], colour?: string): ItemProps => {
  return {
    commitComponent: (props: CommitProps) => <Commit {...props} circleBackgroundColour={colour} />,
    id: id,
    arrowTo: to?.map((item) => {
      return {
        to: item,
      }
    })
  }
}

const purpleCommit = (id: string, to?: string[]): ItemProps => {
  return commitItemWithColour(id, to, "bg-[#B18AE8]")
}

const blueCommit = (id: string, to?: string[]): ItemProps => {
  return commitItemWithColour(id, to, 'bg-[#B3E3FF]')
}

const greenCommit = (id: string, to?: string[]): ItemProps => {
  return commitItemWithColour(id, to, 'bg-[#4DD1A1]')
}

const gitHistory: (null | ItemProps)[][] = [
  [null, null,
    purpleCommit('B0', ['C1']),
    purpleCommit('B1', ['B0'])
  ],
  [
    blueCommit('C0'),
    blueCommit('C1', ['C0']),
    blueCommit('C2', ['C1']),
    blueCommit('C4', ['C2']),
    blueCommit('C5', ['C4']),
  ],
  [null, null, null, null,
    greenCommit('D1', ['C4']),
    greenCommit('D2', ['D1'])
  ]
]


export const AtlassianExample = () => {
  return <Timeline id="atlassian" items={gitHistory} commitComponent={Commit} />
}
