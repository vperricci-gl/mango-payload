import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

import MangoohLogo from '@/images/mangooh-logo-white.svg'

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    // <img
    //   alt="Mangooh Logo"
    //   width={193}
    //   height={34}
    //   loading={loading}
    //   fetchPriority={priority}
    //   decoding="async"
    //   className={clsx('max-w-[9.375rem] w-full h-[34px]', className)}
    //   src={MangoohLogo}
    // />
    <Image
      alt="Mangooh Logo"
      src={MangoohLogo}
      // width={193}
      // height={34}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      // className={clsx('max-w-[9.375rem] w-full h-[34px]')}
      priority={priority === 'high' ? true : false}
      unoptimized={priority === 'low' ? true : false}
    />
  )
}
