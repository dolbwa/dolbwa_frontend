import { getTime } from '@/api/time'
import LocationComponent from './component'

type Props = {
  params: {
    location: string
  }
  searchParams: {
    name: string
  }
}

export function generateMetadata({ params, searchParams }: Props) {
  return {
    title: `${params.location}`,
    description: `${searchParams.name}의 시간을 알려드립니다.`,
  }
}

export default async function Location({ searchParams }: Props) {
  const response = await getTime('Seoul')

  return <LocationComponent searchParams={searchParams} response={response} />
}
