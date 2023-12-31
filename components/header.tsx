import * as React from 'react'
import Link from 'next/link'

import {
  IconNextChat,
  IconSeparator,
} from '@/components/ui/icons'

export async function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
      (
          <Link href="/" target="_blank" rel="nofollow">
            <IconNextChat className="w-6 h-6 mr-2 dark:hidden" inverted />
            <IconNextChat className="hidden w-6 h-6 mr-2 dark:block" />
          </Link>
        )
        <div className="flex items-center">
          <IconSeparator className="w-6 h-6 text-muted-foreground/50" />
        </div>
      </div>
    </header>
  )
}
