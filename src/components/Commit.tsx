import Xarrow from "react-xarrows";
import {ItemProps} from "@/components/Item";
import clsx from "clsx";

export type CommitProps = Pick<ItemProps, 'dimmed' | 'arrowTo' | 'id' | 'text' | 'type'>

export const Commit = (props: CommitProps) => {
    return <>
        <div id={props.id} className={clsx("inline text-center w-[120px] p-1 px-8 rounded-2xl", props?.dimmed ? `bg-[#efefe780] text-[#786F6880]` : 'bg-[#efefe7] text-[#786F68]')}>{props.text}</div>
        {props.arrowTo?.map((arrow) => {
            return <Xarrow
              key={arrow}
              start={props.id}
              end={arrow}
              headSize={5}
              curveness={0}
              strokeWidth={2}
              color={props?.dimmed ? '#786F6880' : '#786F68'}
            />
        })}
    </>
}
