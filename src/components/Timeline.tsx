import {Item, ItemProps, ItemWrapper} from "@/components/Item";
import {CommitComponentProps} from "@/components/Commit";
import {BranchComponentProps} from "@/components/Branch";
import {ArrowComponentProps} from "@/components/Arrow";

type TimelineProps = {
  items: (undefined | ItemProps)[][]
} & ArrowComponentProps & BranchComponentProps & CommitComponentProps

export const Timeline = ({ arrowComponent, branchComponent, commitComponent, items }: TimelineProps) => {
  const randomTimelineKey = Math.random()

  return <div className="flex gap-8 flex-col">
    {items.map((nestedCommit, index) => {
      return <div className="flex gap-12" key={index}>{nestedCommit.map((commit) => {
        return commit ? <Item {...commit} arrowComponent={arrowComponent} branchComponent={branchComponent} commitComponent={commitComponent} key={commit.id}  uniqueKey={'' + randomTimelineKey} /> : <ItemWrapper id={'' + Math.random()} />
      })}</div>
    })
    }
  </div>
}
