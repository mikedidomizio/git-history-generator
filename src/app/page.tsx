'use client'
import {Item, ItemProps, ItemWrapper} from "@/components/Item";

export default function Home() {
  const gitHistory: (undefined | ItemProps)[][] = [
    [undefined, undefined, undefined, {
      dimmed: true,
      id: 'C4',
      text: 'C4',
      arrowTo: ['C2']
    }, {
      id: 'experiment',
      text: 'experiment',
      arrowTo: ['C4\''],
      type: 'branch'
    }],
    [{
      id: 'C0',
      text: 'C0',
    }, {
      id: 'C1',
      text: 'C1',
      arrowTo: ['C0']
    }, {
      id: 'C2',
      text: 'C2',
      arrowTo: ['C1']
    }, {
      id: 'C3',
      text: 'C3',
      arrowTo: ['C2']
    }, {
      bounce: true,
      id: 'C4\'',
      arrowTo: ['C3']
    }
  ], [
    undefined, undefined, undefined, {
        id: 'master',
        text: 'master',
        arrowTo: ['C3'],
        type: 'branch'
      }
    ]]

  return (
    <main className="min-h-screen p-6">
      <div className="flex gap-5 flex-col">
      {gitHistory.map((nestedCommit, index) => {
        return <div className="flex gap-10" key={index}>{nestedCommit.map((commit) => {
          return commit ? <Item key={commit.id} {...commit} /> : <ItemWrapper id={'' + Math.random()} />
        })}</div>
      })
      }
      </div>
    </main>
  )
}
