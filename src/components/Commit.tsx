export type CommitProps = {
    id: string,
    text?: string
    arrowTo?: string
}

export const Commit = (props: CommitProps) => {
    return <div className="inline bg-[#efefe7] text-[#786F68] p-1 px-8 rounded-2xl">{props.text}</div>
}
