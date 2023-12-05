'use server'

import { revalidateTag } from 'next/cache'

export default async function revalidatorTag(tag: string) {
  revalidateTag(tag)
}
