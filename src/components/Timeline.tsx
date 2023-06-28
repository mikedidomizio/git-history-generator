import {Item, ItemProps} from "@/components/Item";
import {CommitComponentProps} from "@/components/Commit";
import {BranchComponentProps} from "@/components/Branch";

type TimelineProps = {
  items: (undefined | ItemProps)[][]
} & BranchComponentProps & CommitComponentProps

export const Timeline = ({ branchComponent, commitComponent, items }: TimelineProps) => {
  // the purpose of this is because Xarrow depends on DOM element ID, if we reuse the same data
  // we run into duplicate ids
  const randomTimelineKey = '--' + Math.random()

  return <div className="flex gap-8 flex-col">
    {items.map((nestedCommit, index) => {
      return <div className="flex gap-12" key={index}>{nestedCommit.map((commit, index) => {
        return <Item id={commit?.id ?? 'undefined-' + Math.random()} {...commit} branchComponent={branchComponent} commitComponent={commitComponent} key={index} uniqueKey={randomTimelineKey} />
      })}</div>
    })
    }
  </div>
}
