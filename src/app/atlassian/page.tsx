'use client'
import {ItemProps,} from "@/components/Item";
import {Timeline} from "@/components/Timeline";
import {CommitProps} from "@/components/Commit";
import {BranchProps} from "@/components/Branch";
import {Arrow} from "@/components/Arrow";
import clsx from "clsx";

const Commit = (props: CommitProps & { circleClasses: string }) => {
  if (props.id.startsWith("null")) {
    return <div className="bg-transparent p-3 border-4 border-transparent" />
  }

  return <div className={clsx("bg-[#B3E3FF] border-[#404040] border-t-4 border-l-4 border-r-4 border-b-4 rounded-full p-3", props.circleClasses)}>
    {props.text}
    {props.arrowTo?.map((arrow) => {
      return <Arrow curveness={1} strokeWidth={4} headSize={-1} color="#404040" key={arrow.to} arrow={arrow.to} dashedArrow={arrow.dashed || false} id={props.id} />
    })}
  </div>
}

const CommitWithCircleClasses = (props: CommitProps & { circleClasses: string }) => {
  return <Commit {...props} circleClasses={props.circleClasses} />
}

const Branch = (props: BranchProps) => {
  if (props.id.startsWith("null")) {
    return <div className="bg-transparent p-3" />
  }

  return <div className="bg-blue-600 text-white p-3">
    {props.text}
    {props.arrowTo?.map((arrow) => {
      return <Arrow headSize={-1} color={'#F05033'} key={arrow.to} arrow={arrow.to} dashedArrow={arrow.dashed || false} id={props.id} />
    })}
  </div>
}

export default function Atlassian() {
  const gitHistory2: (null | ItemProps)[][] = [
    [null, null, null, {
      commitComponent: (props) => <CommitWithCircleClasses {...props} circleClasses="bg-[#B18AE8]" />,
      id: 'B0',
      arrowTo: [{
        to: 'C2'
      }]
    }, {
      commitComponent: (props) => <CommitWithCircleClasses {...props} circleClasses="bg-[#B18AE8]" />,
      id: 'B1',
      arrowTo: [{
        to: 'B0'
      }]
    }],
    [{
      id: 'C0',
    }, {
      id: 'C1',
      arrowTo: [{
        to: 'C0'
      }]
    }, {
      id: 'C2',
      arrowTo: [{
        to: 'C1'
      }]
    }], [null, null, {
      commitComponent: (props) => <CommitWithCircleClasses {...props} circleClasses="bg-[#4DD1A1]" />,
      id: 'C3',
      arrowTo: [{
        to: 'C1'
      }]
    }, {
      commitComponent: (props) => <CommitWithCircleClasses {...props} circleClasses="bg-[#4DD1A1]" />,
      id: 'C4',
      arrowTo: [{
        to: 'C3'
      }]
    }]]

  return (
    <main className="min-h-screen p-6">
      <h1 className="mb-10">Git History Generator</h1>

      <div className="flex flex-col gap-y-10">

        <div>
          <h3 className="mb-4">Atlassian style</h3>
          <Timeline items={gitHistory2} commitComponent={Commit} branchComponent={Branch} />
        </div>

      </div>

    </main>
  )
}
