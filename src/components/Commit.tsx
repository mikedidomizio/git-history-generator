import {ArrowType, ItemProps, ItemWrapper, MakeArrowSafe} from "@/components/Item";
import clsx from "clsx";
import {ReactElement, ReactNode} from "react";
import {Arrow} from "@/components/Arrow";
import {RelationType} from "react-archer/lib/types";
import {ArcherElement} from "react-archer";

export type CommitComponentProps = {
    commitComponent?: <T extends CommitProps>(props: T) => ReactNode
}

const buildMappedArrows = (arrowTo: ArrowType[]): RelationType[] => {
    return arrowTo.map((arrow) => {
        return {
            targetId: arrow.to,
            targetAnchor: arrow.targetAnchor ?? 'right',
            sourceAnchor: arrow.sourceAnchor ?? 'left',
            style: {strokeColor: '#404040', strokeWidth: 4, endShape: {
                    circle: {
                        radius: -1,
                    },
                },
            },
        }
    })
}

const ArcherElementWithArrows = ({ children, id, arrowTo }: { children: ReactElement, id: string, arrowTo: ArrowType[]  }) => {
    const arrowArr: RelationType[] = buildMappedArrows(arrowTo)

    return <ArcherElement
      id={id}
      relations={arrowArr ?? []}>
        {children}
    </ArcherElement>
}

export type CommitProps = Pick<ItemProps, 'bounce' | 'dashed' | 'arrowTo' | 'id' | 'text' | 'type'> & CommitComponentProps

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

    if(MakeArrowSafe(props.arrowTo)) {
        return <ItemWrapper id={props.id} classNames={clsx("rounded-2xl", props?.dashed ? `bg-[#efefe780] text-[#786F6880]` : 'bg-[#efefe7] text-[#786F68]', props?.bounce ? 'animate-bounce' : null)}>
            {props.text}
        </ItemWrapper>
    }

    return <>
        <ArcherElementWithArrows id={props.id} arrowTo={MakeArrowSafe(props.arrowTo)}>
            <ItemWrapper id={props.id} classNames={clsx("rounded-2xl", props?.dashed ? `bg-[#efefe780] text-[#786F6880]` : 'bg-[#efefe7] text-[#786F68]', props?.bounce ? 'animate-bounce' : null)}>
                {props.text}
            </ItemWrapper>
        </ArcherElementWithArrows>
    </>
}
