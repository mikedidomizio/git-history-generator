import {Item, ItemProps} from "@/components/Item";
import {CommitComponentProps} from "@/components/Commit";
import {BranchComponentProps} from "@/components/Branch";

type TimelineProps = {
  id: string,
  items: (null | ItemProps)[][]
} & BranchComponentProps & CommitComponentProps

export const Timeline = ({ branchComponent, commitComponent, id, items }: TimelineProps) => {
  // the purpose of this is because Xarrow depends on DOM element ID, if we reuse the same data
  // we run into duplicate ids
  // we use base64 because it properly renders over Math.random()
  const randomTimelineKey = id + '--' + btoa(JSON.stringify(items))

  return <div className="flex gap-8 flex-col">
    {items.map((nestedCommit, index) => {
      return <div className="flex gap-12" key={index}>{nestedCommit.map((commit, index) => {
        return <Item branchComponent={branchComponent} commitComponent={commitComponent} id={commit?.id ?? 'null-' + btoa(JSON.stringify(items))} {...commit} key={index} uniqueKey={randomTimelineKey} />
      })}</div>
    })
    }
  </div>
}
