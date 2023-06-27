import Xarrow from "react-xarrows";

export type BranchProps = {
  id: string,
  text?: string
  arrowTo?: string
}

export const Branch = (props: BranchProps) => {
  return <>
    <div id={props.id} className="inline bg-[#F44D27] w-[120px] text-center text-[#E3D7D9] p-1 px-8">{props.text}</div>
    {props.arrowTo ?
      <Xarrow
        start={props.id}
        end={props.arrowTo}
        headSize={5}
        curveness={false as unknown as number}
        strokeWidth={2}
        color="#786F68"
      />
      : null}
  </>
}
