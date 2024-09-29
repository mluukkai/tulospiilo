import { getCurrentCorretDate } from '@/app/util';
import { redirect } from 'next/navigation'

export default async function Page({ params: { team } }: { params: { team: string } }) {
  const date = getCurrentCorretDate()

  redirect(`/${team}/${date}`)
}