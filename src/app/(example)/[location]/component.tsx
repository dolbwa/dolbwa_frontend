'use client'

import Button from '@/components/Button'
import { loadingState } from '@/store/loadingState'
import revalidatorTag from '@/utils/revalidatorTag'
import { useSetRecoilState } from 'recoil'

type Props = {
  searchParams: {
    name: string
  }
  response: any
}

export default function LocationComponent({ searchParams, response }: Props) {
  const setloadingState = useSetRecoilState(loadingState)

  const onClickButton = async () => {
    setloadingState(true)
    await revalidatorTag('time')
    setloadingState(false)
  }

  return (
    <>
      <div>
        {searchParams.name}의 시간: {response.dateTime}
      </div>
      <div>
        <Button onClick={onClickButton}>데이터 재검증하기</Button>
      </div>
    </>
  )
}
