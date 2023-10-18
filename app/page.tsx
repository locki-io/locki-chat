'use client'

import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { useSearchParams } from 'next/navigation'

export const runtime = 'edge'

export default function IndexPage() {
  const id = nanoid()
  const initMsgid = nanoid();
  const searchParams = useSearchParams()
  const initMsg = searchParams?.get('string')

  return (
    <Chat
      id={id}
      blenderMsg={initMsg || ''}
    />
  )
}
