# Git History Generator

## Description

The purpose of this project (so far) is for me to be able to render git commits/branches similar to [git-scm.com](https://git-scm.com).

## Demo

https://git-history-generator.vercel.app/

## Comparison

Here is an [image on the Git website](https://git-scm.com/book/en/v2/Git-Branching-Rebasing) that shows a visualization of rebasing a branch.

Here it is here for reference:

![Git website showing rebase in image format](./docs/git-scm-rebase-image.png)

Here is the same representation in JSON format rendered by the project.

![Project showing visualization of rebase](./docs/git-visualizer-rebase-example.png)

### Data to have it render that

```tsx
const gitHistory = [
  [null, null, null, {
    dimmed: true,
    id: 'C4',
    text: 'C4',
    arrowTo: ['C2']
  }, {
    id: 'experiment',
    text: 'experiment',
    arrowTo: ['C4\''],
    type: 'branch'
  }],
  [{
    id: 'C0',
    text: 'C0',
  }, {
    id: 'C1',
    text: 'C1',
    arrowTo: ['C0']
  }, {
    id: 'C2',
    text: 'C2',
    arrowTo: ['C1']
  }, {
    id: 'C3',
    text: 'C3',
    arrowTo: ['C2']
  }, {
    id: 'C4\'',
    text: 'C4\'',
    arrowTo: ['C3']
  }
  ], [
    null, null, null, {
      id: 'master',
      text: 'master',
      arrowTo: ['C3'],
      type: 'branch'
    }
  ]]
```
