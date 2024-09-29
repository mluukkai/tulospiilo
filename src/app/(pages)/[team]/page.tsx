import { getDate } from '@/app/util';
import { redirect } from 'next/navigation'

export default async function Page({ params: { team } }: { params: { team: string } }) {
  const date = getDate()

  redirect(`/${team}/${date}`)
}