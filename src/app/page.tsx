'use client'
import {ItemProps,} from "@/components/Item";
import {Timeline} from "@/components/Timeline";
import {CommitProps} from "@/components/Commit";
import {BranchProps} from "@/components/Branch";
import {Arrow} from "@/components/Arrow";

const Commit = (props: CommitProps) => {
  if (props.id.startsWith("undefined")) {
    return <div className="bg-transparent p-3" />
  }

  return <div className="bg-[#F05033] text-white rounded-full p-3">
    {props.text}
    {props.arrowTo?.map((arrow) => {
      return <Arrow strokeWidth={8} headSize={-1} color={props?.dimmed ? '#F05033' : '#F05033'} key={arrow.to} arrow={arrow.to} dashedArrow={arrow.dashed || false} id={props.id} />
    })}
  </div>
}

const Branch = (props: BranchProps) => {
  if (props.id.startsWith("undefined")) {
    return <div className="bg-transparent p-3" />
  }

  return <div className="bg-blue-600 text-white p-3">
    {props.text}
    {props.arrowTo?.map((arrow) => {
      return <Arrow headSize={-1} color={'#F05033'} key={arrow.to} arrow={arrow.to} dashedArrow={arrow.dashed || false} id={props.id} />
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

  const gitHistory2: (undefined | ItemProps)[][] = [
    [undefined, undefined, undefined, {
      id: 'B0',
      arrowTo: [{
        to: 'C2'
      }]
    }, {
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
    }], [undefined, undefined, {
      id: 'C3',
      arrowTo: [{
        to: 'C1'
      }]
    }, {
      id: 'C4',
      arrowTo: [{
        to: 'C3'
      }]
    }]]

  return (
    <main className="min-h-screen p-6">
      <h1 className="mb-10">Git History Generator</h1>

      <div className="mb-6">
        <h3>Base look</h3>
        <Timeline items={gitHistory} />
      </div>

      <div className="mb-6">
        <h3>Ability to add pass custom components to update branch, commit and links (arrows)</h3>
        <Timeline items={gitHistory2} commitComponent={Commit} branchComponent={Branch} />
      </div>
    </main>
  )
}
