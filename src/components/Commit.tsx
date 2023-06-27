import Xarrow from "react-xarrows";
import {ItemProps} from "@/components/Item";

export type CommitProps = Omit<ItemProps, 'type'>

export const Commit = (props: CommitProps) => {
    return <>
        <div id={props.id} className="inline bg-[#efefe7] text-[#786F68] text-center w-[120px] p-1 px-8 rounded-2xl">{props.text}</div>
        {props.arrowTo?.map((arrow) => {
            return <Xarrow
              key={arrow}
              start={props.id}
              end={arrow}
              headSize={5}
              curveness={false as unknown as number}
              strokeWidth={2}
              color="#786F68"
            />
        })}
    </>
}
