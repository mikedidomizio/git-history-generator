import {ItemProps, ItemWrapper} from "@/components/Item";
import clsx from "clsx";
import {ReactNode} from "react";
import {Arrow} from "@/components/Arrow";

export type CommitComponentProps = { commitComponent?: (props: CommitProps) => ReactNode }

export type CommitProps = Pick<ItemProps, 'bounce' | 'dimmed' | 'arrowTo' | 'id' | 'text' | 'type'> & CommitComponentProps

export const Commit = (props: CommitProps) => {
    if (props.id.startsWith("null")) {
        if (props.commitComponent) {
            return <props.commitComponent {...props} />
        }

        return <ItemWrapper id={props.id} classNames="invisible" />
    }

    if (props.commitComponent) {
        return <div id={props.id}><props.commitComponent {...props} /></div>
    }

    return <>
        <ItemWrapper id={props.id} classNames={clsx("rounded-2xl", props?.dimmed ? `bg-[#efefe780] text-[#786F6880]` : 'bg-[#efefe7] text-[#786F68]', props?.bounce ? 'animate-bounce' : null)}>
            {props.text}
        </ItemWrapper>
        {props.arrowTo?.map((arrow) => {
            return <Arrow color={props?.dimmed ? '#786F6880' : '#786F68'} key={arrow.to} arrow={arrow.to} dashedArrow={arrow.dashed || false} id={props.id} />
        })}
    </>
}
