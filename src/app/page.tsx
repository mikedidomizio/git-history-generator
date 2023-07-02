'use client'
import {AtlassianBranchExample} from "@/components/variants/AtlassianBranchExample";
import {AtlassianExample} from "@/components/variants/AtlassianExample";
import {TraditionalExample} from "@/components/variants/TraditionalExample";
import {GitScmExample} from "@/components/variants/GitScmExample";
import {AtlassianExampleDimmed} from "@/components/variants/AtlassianExampleDimmed";
import Link from "next/link";
import {ReactNode} from "react";
import {AtlassianExampleBlinking} from "@/components/variants/AtlassianExampleBlinking";

import { ArcherContainer, ArcherElement } from 'react-archer';
import {AtlassianBranchArcher} from "@/components/variants/AtlassianBranchArcher";

const StylizedLink = ({ children, to }: { children: ReactNode, to: string }) => {
    return <Link className="underline hover:no-underline" target="_blank" href={to}>{children}</Link>
}

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="mb-10">Git History Generator</h1>

      <div className="flex flex-col gap-y-10">

        <div>
          <h3 className="mb-4">
            <StylizedLink to="https://git-scm.com/book/en/v2/Git-Branching-Rebasing">Zero configuration (git-scm.com)</StylizedLink>
          </h3>

          <StylizedLink to="https://github.com/mikedidomizio/git-history-generator/blob/main/src/components/variants/GitScmExample.tsx">Code</StylizedLink>
          <GitScmExample />
        </div>

        <div>
          <h3 className="mb-4">Git</h3>

          <StylizedLink to="https://github.com/mikedidomizio/git-history-generator/blob/main/src/components/variants/TraditionalExample.tsx">Code</StylizedLink>
          <ArcherContainer strokeColor="red">
            <TraditionalExample />
          </ArcherContainer>
        </div>

        <div>
          <h3 className="mb-4">
            <StylizedLink to="https://www.atlassian.com/git/tutorials/using-branches">Atlassian</StylizedLink>
          </h3>
          <StylizedLink to="https://github.com/mikedidomizio/git-history-generator/blob/main/src/components/variants/AtlassianExample.tsx">Code</StylizedLink>
          <AtlassianExample />
        </div>

        <div>
          <h3 className="mb-4">
            <StylizedLink to="https://www.atlassian.com/git/tutorials/using-branches">Atlassian Dashed</StylizedLink>
          </h3>
          <StylizedLink to="https://github.com/mikedidomizio/git-history-generator/blob/main/src/components/variants/AtlassianExampleDimmed.tsx">Code</StylizedLink>
          <AtlassianExampleDimmed />
        </div>

        <div>
          <h3 className="mb-4">
            <StylizedLink to="https://www.atlassian.com/git/tutorials/using-branches">Atlassian Blinking</StylizedLink>
          </h3>
          <StylizedLink to="https://github.com/mikedidomizio/git-history-generator/blob/main/src/components/variants/AtlassianExampleBlinking.tsx">Code</StylizedLink>
          <AtlassianExampleBlinking />
        </div>

        <div>
          <h3 className="mb-4">
            <StylizedLink to="https://www.atlassian.com/git/tutorials/using-branches">Atlassian Branch (with xarrows, cannot specify anchor points, moved to react archer)</StylizedLink>
          </h3>
          <StylizedLink to="https://github.com/mikedidomizio/git-history-generator/blob/main/src/components/variants/AtlassianExample.tsx">Code</StylizedLink>
          <AtlassianBranchExample />
        </div>

        <div>
          <h3 className="mb-4">
            <StylizedLink to="https://www.atlassian.com/git/tutorials/using-branches">Atlassian Archer</StylizedLink>
          </h3>
          <StylizedLink to="https://github.com/mikedidomizio/git-history-generator/blob/main/src/components/variants/AtlassianBranchArcher.tsx">Code</StylizedLink>
          <AtlassianBranchArcher />
        </div>

      </div>

    </main>
  )
}
