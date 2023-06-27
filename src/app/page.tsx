'use client'
import {ItemProps,} from "@/components/Item";
import {Timeline} from "@/components/Timeline";
import {CommitProps} from "@/components/Commit";
import {BranchProps} from "@/components/Branch";
import {Arrow} from "@/components/Arrow";

const Commit = (props: CommitProps) => {
  return <div id={props.id} className="bg-[#F05033] text-white rounded-full p-3">
    {props.text}
    {props.arrowTo?.map((arrow) => {
      return <Arrow color={props?.dimmed ? '#786F6880' : '#786F68'} key={arrow.to} arrow={arrow.to} dashedArrow={arrow.dashed || false} id={props.id} />
    })}
  </div>
}

const Branch = (props: BranchProps) => {
  return <div id={props.id} className="bg-blue-600 text-white p-3">
    {props.text}
    {props.arrowTo?.map((arrow) => {
      return <Arrow color={'#786F6880'} key={arrow.to} arrow={arrow.to} dashedArrow={arrow.dashed || false} id={props.id} />
    })}
  </div>
}

export default function Home() {
  const gitHistory: (undefined | ItemProps)[][] = [
    [undefined, undefined, undefined, {
      dimmed: true,
      id: 'C4',
      text: 'C4',
      arrowTo: [{
        to: 'C2'
      }]
    }, {
      id: 'experiment',
      text: 'experiment',
      arrowTo: [{
        to: 'C4\''
      }],
      type: 'branch'
    }],
    [{
      id: 'C0',
      text: 'C0',
    }, {
      id: 'C1',
      text: 'C1',
      arrowTo: [{
        to: 'C0'
      }]
    }, {
      id: 'C2',
      text: 'C2',
      arrowTo: [{
        to: 'C1'
      }]
    }, {
      id: 'C3',
      text: 'C3',
      arrowTo: [{
        to: 'C2'
      }],
    }, {
      bounce: true,
      id: 'C4\'',
      text: 'C4\'',
      arrowTo: [{
        to: 'C3'
      }]
    }
  ], [
    undefined, undefined, undefined, {
        id: 'master',
        text: 'master',
        arrowTo: [{
          to: 'C3'
        }],
        type: 'branch'
      }
    ]]

  return (
    <main className="min-h-screen p-6">
      <Timeline items={gitHistory} />
      <br/>
      <Timeline items={gitHistory} commitComponent={Commit} branchComponent={Branch} />
    </main>
  )
}
