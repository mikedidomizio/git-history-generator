import {Item, ItemProps, ItemWrapper} from "@/components/Item";
import {CommitComponentProps} from "@/components/Commit";
import {BranchComponentProps} from "@/components/Branch";

type TimelineProps = {
  items: (undefined | ItemProps)[][]
} & BranchComponentProps & CommitComponentProps

export const Timeline = ({ branchComponent, commitComponent, items }: TimelineProps) => {
  return <div className="flex gap-8 flex-col">
    {items.map((nestedCommit, index) => {
      return <div className="flex gap-12" key={index}>{nestedCommit.map((commit) => {
        return commit ? <Item branchComponent={branchComponent} commitComponent={commitComponent} key={commit.id} {...commit} /> : <ItemWrapper id={'' + Math.random()} />
      })}</div>
    })
    }
  </div>
}
