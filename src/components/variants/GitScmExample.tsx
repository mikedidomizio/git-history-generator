"use client"
import {ItemProps, MakeArrowSafe} from "@/components/Item";
import {Timeline} from "@/components/Timeline";
import {ArcherContainer, ArcherElement} from "react-archer";
import {CommitProps} from "@/components/Commit";
import {BranchProps} from "@/components/Branch";
import {Arrow} from "@/components/Arrow";

const ArcherElementWithArrows = ({ children, id, to }: any) => {
  return <ArcherElement
    key={to}
    id={id}
    relations={[
      {
        targetId: to,
        targetAnchor: 'right',
        sourceAnchor: 'left',
        style: { strokeColor: '#8F8981', strokeWidth: 1.4 },
      },
    ]}
  >
    {children}
  </ArcherElement>
}

const Commit = (props: CommitProps) => {
  if (props.id.startsWith("null")) {
    return <div className="bg-transparent p-3 px-9 min-w-[140px]" />
  }

  if (MakeArrowSafe(props.arrowTo).length) {
    return <ArcherElementWithArrows id={props.id} to={MakeArrowSafe(props.arrowTo)[0].to}>
      <div className="bg-[#EFEFE7] text-[#60544D] rounded-full p-3 px-9 min-w-[140px]">
        {props.text}
      </div>
    </ArcherElementWithArrows>
  }

  return <ArcherElement id={props.id}>
    <div className="bg-[#EFEFE7] text-[#60544D] rounded-full p-3 px-9 min-w-[140px]">
      {props.text}
    </div>
  </ArcherElement>
}

const Branch = (props: BranchProps) => {
  if (props.id.startsWith("null")) {
    return <div className="bg-transparent p-3 px-9 min-w-[140px]" />
  }

  return <div className="bg-blue-600 text-white p-3 px-9 min-w-[140px]">
    {props.text}
    {MakeArrowSafe(props.arrowTo).map((arrow) => {
      return <Arrow headSize={-1} color={'#F05033'} key={arrow.to} arrow={arrow.to} dashedArrow={arrow.dashed || false} id={props.id} />
    })}
  </div>
}

const gitHistory: (null | ItemProps)[][] = [
  [null, null, null, {
    dashed: true,
    id: 'C4',
    text: 'C4',
    arrowTo: 'C2'
  }, {
    id: 'experiment',
    text: 'experiment',
    arrowTo: 'C4\'',
    type: 'branch'
  }],
  [{
    id: 'C0',
    text: 'C0',
  }, {
    id: 'C1',
    text: 'C1',
    arrowTo: 'C0'
  }, {
    id: 'C2',
    text: 'C2',
    arrowTo: 'C1'
  }, {
    id: 'C3',
    text: 'C3',
    arrowTo: 'C2',
  }, {
    bounce: true,
    id: 'C4\'',
    text: 'C4\'',
    arrowTo: 'C3'
  }
  ], [
    null, null, null, {
      id: 'master',
      text: 'master',
      arrowTo: 'C3',
      type: 'branch'
    }
  ]]

export const GitScmExample = () => {
  // @ts-ignore
  return <ArcherContainer><Timeline id="git-scm222" items={gitHistory}  commitComponent={Commit} branchComponent={Branch}/></ArcherContainer>
}
