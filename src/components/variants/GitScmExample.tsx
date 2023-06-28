import {ItemProps} from "@/components/Item";
import {Timeline} from "@/components/Timeline";

const gitHistory: (null | ItemProps)[][] = [
  [null, null, null, {
    dimmed: true,
    id: 'C4',
    text: 'C4',
    arrowTo: [{
      to: 'C2'
    }]
  }, {
    id: 'experiment',
    text: 'experiment',
    arrowTo: [{
      to: 'C4\''
    }],
    type: 'branch'
  }],
  [{
    id: 'C0',
    text: 'C0',
  }, {
    id: 'C1',
    text: 'C1',
    arrowTo: [{
      to: 'C0'
    }]
  }, {
    id: 'C2',
    text: 'C2',
    arrowTo: [{
      to: 'C1'
    }]
  }, {
    id: 'C3',
    text: 'C3',
    arrowTo: [{
      to: 'C2'
    }],
  }, {
    bounce: true,
    id: 'C4\'',
    text: 'C4\'',
    arrowTo: [{
      to: 'C3'
    }]
  }
  ], [
    null, null, null, {
      id: 'master',
      text: 'master',
      arrowTo: [{
        to: 'C3'
      }],
      type: 'branch'
    }
  ]]

export const GitScmExample = () => {
  return <Timeline id="git-scm" items={gitHistory} />
}
