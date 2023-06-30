import { describe, expect, test } from 'vitest'
import {buildMappedArrows} from "@/components/variants/AtlassianBranchArcher";

describe("Atlassian with Archer", () => {
  test('should return no arrows if none passed in', () => {
    const arrows = buildMappedArrows([])

    expect(arrows.length).toBe(0)
  })

  test('should return arrow with default target anchor being right and source anchor being left', () => {
    const arrows = buildMappedArrows([{
      to: 'B1'
    }])


    expect(arrows[0].sourceAnchor).toBe('left')
    expect(arrows[0].targetAnchor).toBe('right')
  })

  test('should return arrow with target anchor specified and source anchor specified', () => {
    const arrows = buildMappedArrows([{
      to: 'B1',
      sourceAnchor: 'bottom',
      targetAnchor: 'top'
    }])


    expect(arrows[0].sourceAnchor).toBe('bottom')
    expect(arrows[0].targetAnchor).toBe('top')
  })

})
