import { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Announcement } from "@/components/announcement"
import { ExamplesNav } from "@/components/examples-nav"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { buttonVariants } from "@/registry/new-york/ui/button"

export const metadata: Metadata = {
  title: "Examples",
  description: "Check out some examples app built using the components.",
}

interface ExamplesLayoutProps {
  children: React.ReactNode
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
  return (
    <>
      <div className="container relative">
        <PageHeader>
          <Announcement />
          <PageHeaderHeading className="hidden md:block">
            下面是一些例子
          </PageHeaderHeading>
          <PageHeaderHeading className="md:hidden">Examples</PageHeaderHeading>
          <PageHeaderDescription>
            Dashboard (仪表盘), cards (卡片), authentication
            (身份验证)，使用这些组件构建的一些示例。将此作为构建您自己的指南。
          </PageHeaderDescription>
          <PageActions>
            <Link
              href="/docs"
              className={cn(buttonVariants(), "rounded-[6px]")}
            >
              快速开始
            </Link>
            <Link
              href="/components"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-[6px]"
              )}
            >
              组件
            </Link>
          </PageActions>
        </PageHeader>
        <section>
          <ExamplesNav />
          <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl">
            {children}
          </div>
        </section>
      </div>
    </>
  )
}
