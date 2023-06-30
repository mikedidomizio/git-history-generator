import {Timeline} from "@/components/Timeline";
import {ItemProps, MakeArrowSafe} from "@/components/Item";
import {CommitProps} from "@/components/Commit";
import {Arrow} from "@/components/Arrow";
import {BranchProps} from "@/components/Branch";
import {ArcherElement} from "react-archer";


const ArcherElementWithArrows = ({ children, id, to }: any) => {
  return <ArcherElement
    key={to}
    id={id}
    relations={[
      {
        targetId: to,
        targetAnchor: 'right',
        sourceAnchor: 'left',
        style: { strokeColor: 'blue', strokeWidth: 1 },
      },
    ]}
  >
    {children}
  </ArcherElement>
}

const Commit = (props: CommitProps) => {
  if (props.id.startsWith("null")) {
    return <div className="bg-transparent p-3" />
  }

  if (MakeArrowSafe(props.arrowTo).length) {
    return <ArcherElementWithArrows id={props.id} to={MakeArrowSafe(props.arrowTo)[0].to}>
      <div className="bg-[#F05033] text-white rounded-full p-3">
        {props.text}
      </div>
    </ArcherElementWithArrows>
  }

  return <ArcherElement id={props.id}>
    <div className="bg-[#F05033] text-white rounded-full p-3">
      {props.text}
    </div>
  </ArcherElement>
}

const Branch = (props: BranchProps) => {
  if (props.id.startsWith("null")) {
    return <div className="bg-transparent p-3" />
  }

  return <div className="bg-blue-600 text-white p-3">
    {props.text}
    {MakeArrowSafe(props.arrowTo).map((arrow) => {
      return <Arrow headSize={-1} color={'#F05033'} key={arrow.to} arrow={arrow.to} dashedArrow={arrow.dashed || false} id={props.id} />
    })}
  </div>
}

const gitHistory: (null | ItemProps)[][] = [
  [null, null, null, {
    id: 'B0',
    arrowTo: 'C2'
  }, {
    id: 'B1',
    arrowTo: 'B0'
  }],
  [{
    id: 'C0',
  }, {
    id: 'C1',
    arrowTo: 'C0'
  }, {
    id: 'C2',
    arrowTo: 'C1'
  }], [null, null, {
    id: 'C3',
    arrowTo: 'C1'
  }, {
    id: 'C4',
    arrowTo: 'C3'
  }], [
    null, null,
    {
      id: 'D4',
      arrowTo: 'C1'
    }
  ]]

export const TraditionalExample = () => {
  return <Timeline id="git" items={gitHistory} commitComponent={Commit} branchComponent={Branch} />
}
