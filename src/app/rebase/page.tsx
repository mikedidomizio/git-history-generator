"use client"
import {ArrowType, ItemProps, MakeArrowSafe} from "@/components/Item";
import {CommitProps} from "@/components/Commit";
import clsx from "clsx";
import {Arrow} from "@/components/Arrow";
import {Timeline} from "@/components/Timeline";
import {useEffect, useState} from "react";


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
        borderStyle = 'blinking-fast'
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

const gitHistoryBefore: (null | ItemProps)[][] = [
  [null, null,
    purpleCommit('B0', 'C1'),
    purpleCommit('B1', 'B0')
  ],
  [
    blueCommit('C0'),
    blueCommit('C1', 'C0'),
    blueCommit('C2', 'C1'),
    blueCommit('C4', 'C2')
  ],
]

const gitHistoryBeforeBlinking: (null | ItemProps)[][] = [
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
    blueCommit('C4', 'C2')
  ],
]

const gitHistoryDuring: (null | ItemProps)[][] = [
  [null, null, null, null, purpleCommit('B0', [{
    to: 'C4',
    dashed: true,
  }]),
    purpleCommit('B1', [{
      to: 'B0',
      dashed: true,
    }])]
  ,[
    blueCommit('C0'),
    blueCommit('C1', 'C0'),
    blueCommit('C2', 'C1'),
    blueCommit('C4', 'C2'),
  ],
]

const gitHistoryAfter: (null | ItemProps)[][] = [
  [null, null, null, null, purpleCommit('B0', 'C4'),
    purpleCommit('B1', 'B0')],
  [
    blueCommit('C0'),
    blueCommit('C1', 'C0'),
    blueCommit('C2', 'C1'),
    blueCommit('C4', 'C2'),
  ],
]

export default function Page() {
  const [show, setShow] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setShow(show => {
        if (show >= 4) {
          return 0
        }

        return show + 1
      })
    }, 2000)
  }, [])

  return (
    <main className="min-h-screen p-6">
      <div className="h-[300px] w-[600px] flex items-end">
        {show === 0 ? <Timeline id="before" items={gitHistoryBefore} commitComponent={Commit} /> : null}
        {show === 1 ? <Timeline id="beforeRemoval" items={gitHistoryBeforeBlinking} commitComponent={Commit} /> : null}
        {show === 2 ? <Timeline id="during" items={gitHistoryDuring} commitComponent={Commit} /> : null}
        {show === 3 ? <Timeline id="afterAddition" items={gitHistoryDuring} commitComponent={Commit} /> : null}
        {show === 4 ? <Timeline id="after" items={gitHistoryAfter} commitComponent={Commit} /> : null}
      </div>
    </main>
  )
}
