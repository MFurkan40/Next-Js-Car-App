'use client'

import { CustomButton } from '@components'
import { useRouter } from 'next/navigation'

const ResetButton = () => {
  const router = useRouter()

  const handleResetSearch = () => {
    const resetPath = '/'

    router.push(resetPath, { scroll: false })
  }

  return (
    <div>
      <CustomButton
        title='Reset Search'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
        handleClick={handleResetSearch}
      />
    </div>
  )
}

export default ResetButton
