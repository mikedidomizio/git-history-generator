import Xarrow from "react-xarrows";

export type CommitProps = {
    id: string,
    text?: string
    arrowTo?: string
}

export const Commit = (props: CommitProps) => {
    return <>
        <div id={props.id} className="inline bg-[#efefe7] text-[#786F68] p-1 px-8 rounded-2xl">{props.text}</div>

        {props.arrowTo ?
          <Xarrow
            start={props.id}
            end={props.arrowTo}
            headSize={5}
            strokeWidth={2}
            color="#786F68"
          />
        : null}
    </>
}
