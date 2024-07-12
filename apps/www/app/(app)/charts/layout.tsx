import { Metadata } from "next"
import Link from "next/link"

import { Announcement } from "@/components/announcement"
import { ChartsNav } from "@/components/charts-nav"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Button } from "@/registry/new-york/ui/button"

export const metadata: Metadata = {
  title: "Beautiful Charts",
  description:
    "Built using Recharts. Copy and paste into your apps. Open Source.",
}

export default function ChartsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>漂亮的图表</PageHeaderHeading>
        <PageHeaderDescription>
          基于 Recharts 构建、复制粘贴到你的应用中、开源。
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <a href="#charts">浏览图表</a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/docs/components/chart">文档</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <div className="container py-4">
            <ChartsNav />
          </div>
        </div>
      </div>
      <div className="container-wrapper">
        <div className="container py-6">
          <section id="charts" className="scroll-mt-20">
            {children}
          </section>
        </div>
      </div>
    </>
  )
}
