import {Item, ItemProps, ItemWrapper} from "@/components/Item";

type TimelineProps = {
  items: (undefined | ItemProps)[][]
}
export const Timeline = ({ items }: TimelineProps) => {
  return <div className="flex gap-8 flex-col">
    {items.map((nestedCommit, index) => {
      return <div className="flex gap-12" key={index}>{nestedCommit.map((commit) => {
        return commit ? <Item key={commit.id} {...commit} /> : <ItemWrapper id={'' + Math.random()} />
      })}</div>
    })
    }
  </div>
}
