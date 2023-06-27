'use client'
import {Item, ItemProps} from "@/components/Item";

export default function Home() {
  const gitSchema: (undefined | ItemProps)[][] = [
    [{
      id: 'a1',
      text: 'a1',
      arrowTo: ['b1'],
    }, {
      id: 'a2',
      text: 'a2',
      arrowTo: ['b1']
    }, {
      dimmed: true,
      id: 'a3',
      text: 'a3',
      arrowTo: ['a2']
    }],
    [
      {
        id: 'b1',
        text: 'b1',
      }
    ]
  , [
      undefined,undefined, {
        arrowTo: ['b1'],
        id: 'master',
        text: 'master',
        type: 'branch'
      }
    ]
  ]

  return (
    <main className="min-h-screen">
      <div className="flex gap-5 flex-col">
      {gitSchema.map((nestedCommit, index) => {
        return <div className="flex gap-10" key={index}>{nestedCommit.map((commit) => {
          return commit ? <Item key={commit.id} {...commit} /> : null
        })}</div>
      })
      }
      </div>
    </main>
  )
}
