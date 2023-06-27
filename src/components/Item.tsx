import {Commit, CommitProps} from "@/components/Commit";
import {Branch, BranchProps} from "@/components/Branch";


export type ItemProps = {
  id: string,
  text: string,
  arrowTo?: string[],
  type?: 'commit' | 'branch'
}

export const Item = (props: ItemProps) => {
  if (props.type === 'branch') {
    return <Branch {...props}/>
  }

  return <Commit {...props}/>
}
