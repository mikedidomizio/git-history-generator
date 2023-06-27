import {Commit, CommitProps} from "@/components/Commit";


export default function Home() {
  const commits: CommitProps[][] = [
    [{
      id: 'a1',
      text: 'a1',
    }, {
      id: 'a2',
      text: 'a2',
    }],
    [
      {
        id: 'b1',
        text: 'b1',
      }
    ]
  ]

  return (
    <main className="min-h-screen">
      <div className="flex gap-10 flex-col">
      {commits.map((nestedCommit, index) => {
        return <div className="flex gap-10" key={index}>{nestedCommit.map((commit) => {
            return <Commit key={commit.id} {...commit}/>
        })}</div>
      })
      }
      </div>
    </main>
  )
}
