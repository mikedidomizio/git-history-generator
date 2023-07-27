"use client"
import {ArrowType, ItemProps, MakeArrowSafe} from "@/components/Item";
import {CommitProps} from "@/components/Commit";
import clsx from "clsx";
import {Arrow} from "@/components/Arrow";
import {Timeline} from "@/components/Timeline";
import {useEffect, useState} from "react";

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

const redCommit = (id: string, to?: ArrowType[] | string): ItemProps => {
  return commitItemWithColour(id, to, '#ff3d3d')
}

const unknownCommit = (id: string, to?: ArrowType[] | string): ItemProps => {
  return commitItemWithColour(id, to, '#c7c7c7')
}

const greenCommit = (id: string, to?: ArrowType[] | string): ItemProps => {
  return commitItemWithColour(id, to, '#4DD1A1')
}

const gitBisectBase: (null | ItemProps)[][] = [
  [
    greenCommit('B0', ),
    unknownCommit('B1', 'B0'),
    unknownCommit('B2', 'B1'),
    unknownCommit('B3', 'B2'),
    unknownCommit('B4', 'B3'),
    unknownCommit('B5', 'B4'),
    unknownCommit('B6', 'B5'),
    unknownCommit('B7', 'B6'),
    unknownCommit('B8', 'B7'),
    redCommit('B9', 'B8'),
  ],
]

const gitBisectStart: (null | ItemProps)[][] = [
  [
    greenCommit('B0', ),
    unknownCommit('B1', 'B0'),
    unknownCommit('B2', 'B1'),
    unknownCommit('B3', 'B2'),
    unknownCommit('B4', [{
      to: 'B3',
      dashed: true,
    }]),
    unknownCommit('B5', 'B4'),
    unknownCommit('B6', 'B5'),
    unknownCommit('B7', 'B6'),
    unknownCommit('B8', 'B7'),
    redCommit('B9', 'B8'),
  ],
]

const gitBisectContinue: (null | ItemProps)[][] = [
  [
    greenCommit('B0', ),
    greenCommit('B1', 'B0'),
    greenCommit('B2', 'B1'),
    greenCommit('B3', 'B2'),
    greenCommit('B4', 'B3'),
    unknownCommit('B5', 'B4'),
    unknownCommit('B6', 'B5'),
    unknownCommit('B7', 'B6'),
    unknownCommit('B8', 'B7'),
    redCommit('B9', 'B8'),
  ],
]

const gitBisectContinue2: (null | ItemProps)[][] = [
  [
    greenCommit('B0', ),
    greenCommit('B1', 'B0'),
    greenCommit('B2', 'B1'),
    greenCommit('B3', 'B2'),
    greenCommit('B4', 'B3'),
    unknownCommit('B5', 'B4'),
    unknownCommit('B6', [{
      to: 'B5',
      dashed: true,
    }]),
    unknownCommit('B7', 'B6'),
    unknownCommit('B8', 'B7'),
    redCommit('B9', 'B8'),
  ],
]

const gitBisectContinue3: (null | ItemProps)[][] = [
  [
    greenCommit('B0', ),
    greenCommit('B1', 'B0'),
    greenCommit('B2', 'B1'),
    greenCommit('B3', 'B2'),
    greenCommit('B4', 'B3'),
    greenCommit('B5', 'B4'),
    greenCommit('B6', 'B5'),
    unknownCommit('B7', 'B6'),
    unknownCommit('B8', 'B7'),
    redCommit('B9', 'B8'),
  ],
]

const gitBisectContinue4: (null | ItemProps)[][] = [
  [
    greenCommit('B0', ),
    greenCommit('B1', 'B0'),
    greenCommit('B2', 'B1'),
    greenCommit('B3', 'B2'),
    greenCommit('B4', 'B3'),
    greenCommit('B5', 'B4'),
    greenCommit('B6', 'B5'),
    unknownCommit('B7', 'B6'),
    unknownCommit('B8', [{
      to: 'B7',
      dashed: true,
    }]),
    redCommit('B9', 'B8'),
  ],
]

const gitBisectContinue5: (null | ItemProps)[][] = [
  [
    greenCommit('B0', ),
    greenCommit('B1', 'B0'),
    greenCommit('B2', 'B1'),
    greenCommit('B3', 'B2'),
    greenCommit('B4', 'B3'),
    greenCommit('B5', 'B4'),
    greenCommit('B6', 'B5'),
    unknownCommit('B7', 'B6'),
    redCommit('B8', 'B7'),
    redCommit('B9', 'B8'),
  ],
]

const gitBisectContinue6: (null | ItemProps)[][] = [
  [
    greenCommit('B0', ),
    greenCommit('B1', 'B0'),
    greenCommit('B2', 'B1'),
    greenCommit('B3', 'B2'),
    greenCommit('B4', 'B3'),
    greenCommit('B5', 'B4'),
    greenCommit('B6', 'B5'),
    unknownCommit('B7', [{
      to: 'B6',
      dashed: true,
    }]),
    redCommit('B8', 'B7'),
    redCommit('B9', 'B8'),
  ],
]


const gitBisectContinue7: (null | ItemProps)[][] = [
  [
    greenCommit('B0', ),
    greenCommit('B1', 'B0'),
    greenCommit('B2', 'B1'),
    greenCommit('B3', 'B2'),
    greenCommit('B4', 'B3'),
    greenCommit('B5', 'B4'),
    greenCommit('B6', 'B5'),
    redCommit('B7', 'B6'),
    redCommit('B8', 'B7'),
    redCommit('B9', 'B8'),
  ],
]

export default function Page() {
  const [show, setShow] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setShow(show => {
        if (show >= 8) {
          return 0
        }

        return show + 1
      })
    }, 2000)
  }, [])

  return (
    <main className="min-h-screen p-6">
      <div className="h-[300px] w-[600px] flex items-end">
        {show === 0 ? <Timeline id="bisect" items={gitBisectBase} commitComponent={Commit} /> : null}
        {show === 1 ? <Timeline id="bisect" items={gitBisectStart} commitComponent={Commit} /> : null}
        {show === 2 ? <Timeline id="bisect" items={gitBisectContinue} commitComponent={Commit} /> : null}
        {show === 3 ? <Timeline id="bisect" items={gitBisectContinue2} commitComponent={Commit} /> : null}
        {show === 4 ? <Timeline id="bisect" items={gitBisectContinue3} commitComponent={Commit} /> : null}
        {show === 5 ? <Timeline id="bisect" items={gitBisectContinue4} commitComponent={Commit} /> : null}
        {show === 6 ? <Timeline id="bisect" items={gitBisectContinue5} commitComponent={Commit} /> : null}
        {show === 7 ? <Timeline id="bisect" items={gitBisectContinue6} commitComponent={Commit} /> : null}
        {show === 8 ? <Timeline id="bisect" items={gitBisectContinue7} commitComponent={Commit} /> : null}
      </div>
    </main>
  )
}
