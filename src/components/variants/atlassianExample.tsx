import {ItemProps} from "@/components/Item";
import {CommitProps} from "@/components/Commit";
import clsx from "clsx";
import {Arrow} from "@/components/Arrow";
import {Timeline} from "@/components/Timeline";

const Commit = (props: CommitProps & { circleClasses?: string }) => {
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

const gitHistory: (null | ItemProps)[][] = [
  [null, null, null, {
    commitComponent: (props) => <Commit {...props} circleClasses="bg-[#B18AE8]" />,
    id: 'B0',
    arrowTo: [{
      to: 'C2'
    }]
  }, {
    commitComponent: (props) => <Commit {...props} circleClasses="bg-[#B18AE8]" />,
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
    commitComponent: (props) => <Commit {...props} circleClasses="bg-[#4DD1A1]" />,
    id: 'C3',
    arrowTo: [{
      to: 'C1'
    }]
  }, {
    commitComponent: (props) => <Commit {...props} circleClasses="bg-[#4DD1A1]" />,
    id: 'C4',
    arrowTo: [{
      to: 'C3'
    }]
  }]]


export const atlassian = () => {
  return <Timeline items={gitHistory} commitComponent={(props: CommitProps) => <Commit {...props} />} />
}
