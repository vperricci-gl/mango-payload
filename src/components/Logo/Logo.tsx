import React from 'react'
import Image from 'next/image'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <Image
      alt="Mangooh Logo"
      src="/images/mangooh-logo-white.svg"
      width={325}
      height={50}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      // className={clsx('max-w-[9.375rem] w-full h-[34px]')}
      priority={priority === 'high' ? true : false}
      unoptimized={priority === 'low' ? true : false}
    />
  )
}
