# 22-create-order-history-page

## Install Packages

npm i query-string --legacy-peer-deps

## update lib/utils.ts

```ts
import qs from 'query-string'

export function formUrlQuery({
  params,
  key,
  value,
}: {
  params: string
  key: string
  value: string | null
}) {
  const currentUrl = qs.parse(params)

  currentUrl[key] = value

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  )
}
```

## update lib/actions/order.actions.ts

```ts
-import { AVAILABLE_DELIVERY_DATES } from '../constants'
import { AVAILABLE_DELIVERY_DATES, PAGE_SIZE } from '../constants'
// GET
export async function getMyOrders({
  limit,
  page,
}: {
  limit?: number
  page: number
}) {
  limit = limit || PAGE_SIZE
  await connectToDatabase()
  const session = await auth()
  if (!session) {
    throw new Error('User is not authenticated')
  }
  const skipAmount = (Number(page) - 1) * limit
  const orders = await Order.find({
    user: session?.user?.id,
  })
    .sort({ createdAt: 'desc' })
    .skip(skipAmount)
    .limit(limit)
  const ordersCount = await Order.countDocuments({ user: session?.user?.id })

  return {
    data: JSON.parse(JSON.stringify(orders)),
    totalPages: Math.ceil(ordersCount / limit),
  }
}
```

## create components/shared/pagination.tsx

```ts
'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

import { formUrlQuery } from '@/lib/utils'

import { Button } from '../ui/button'

type PaginationProps = {
  page: number | string
  totalPages: number
  urlParamName?: string
}

const Pagination = ({ page, totalPages, urlParamName }: PaginationProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const onClick = (btnType: string) => {
    const pageValue = btnType === 'next' ? Number(page) + 1 : Number(page) - 1

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: urlParamName || 'page',
      value: pageValue.toString(),
    })

    router.push(newUrl, { scroll: true })
  }
  return (
    <div className='flex gap-2'>
      <Button
        size='lg'
        variant='outline'
        className='w-28'
        onClick={() => onClick('prev')}
        disabled={Number(page) <= 1}
      >
        Previous
      </Button>
      <Button
        size='lg'
        variant='outline'
        className='w-28'
        onClick={() => onClick('next')}
        disabled={Number(page) >= totalPages}
      >
        Next
      </Button>
    </div>
  )
}

export default Pagination
```

## create app/(root)/account/orders/page.tsx

```ts

```

## npm run build

## update env variables on vercel

## commit changes and push to GitHub

## go to https://nextjs-amazona.vercel.app
