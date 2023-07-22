"use client"
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
      return <Arrow curveness={0.5} strokeWidth={4} headSize={-1} color="#404040" key={arrow.to} arrow={arrow.to} dashedArrow={arrow.dashed || false} id={props.id} />
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

const redCommit = (id: string, to?: string[]): ItemProps => {
  return commitItemWithColour(id, to, 'bg-[#FE8364]')
}

const turquoiseCommit = (id: string, to?: string[]): ItemProps => {
  return commitItemWithColour(id, to, 'bg-[#4ED3D5]')
}

const gitHistory: (null | ItemProps)[][] = [
  [blueCommit('A0'), null, null, null, blueCommit('A1', ['A0', 'B0'])],
  [null, redCommit('B0', ['A0'])],
  [...new Array(7).fill(null), turquoiseCommit('C0'), turquoiseCommit('C1')],
  [null, purpleCommit('D0', ['A0']), purpleCommit('D1', ['D0']), null, purpleCommit('D2', ['D1'])],
  [null, turquoiseCommit('E0', ['D0']), null, turquoiseCommit('E1', ['E0'])],
]


export const AtlassianBranchExample = () => {
  return <Timeline id="atlassian-branch" items={gitHistory} commitComponent={Commit} />
}
