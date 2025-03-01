export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Dealio-shop'
export const APP_SLOGAN = process.env.APP_SLOGAN || 'Spend less, enjoy more.'
export const APP_DESCRIPTION =
  process.env.DESCRIPTION ||
  'Dealio-Shop is a modern e-commerce platform offering a wide range of high-quality cosmetics. Shop top beauty products with a seamless and user-friendly experience.'
export const PAGE_SIZE = Number(process.env.PAGE_SIZE || 9)
export const FREE_SHIPPING_MIN_PRICE = Number(
  process.env.FREE_SHIPPING_MIN_PRICE || 35
)
export const APP_LOGO = '/images/logo.png'
export const APP_COPYRIGHT =
  process.env.NEXT_PUBLIC_APP_COPYRIGHT ||
  `Copyright © 2025 ${APP_NAME}. All rights reserved.`

export const AVAILABLE_PAYMENT_METHODS = [
  {
    name: 'Cash On Delivery',
    commission: 0,
    isDefault: true,
    disabled: false,
  },
  {
    name: 'Online Payment',
    commission: 0,
    isDefault: true,
    disabled: true,
  },
]
export const DEFAULT_PAYMENT_METHOD =
  process.env.DEFAULT_PAYMENT_METHOD || 'PayPal'

export const AVAILABLE_DELIVERY_DATES = [
  {
    name: 'Tomorrow',
    daysToDeliver: 1,
    shippingPrice: 12.9,
    freeShippingMinPrice: 0,
  },
  {
    name: 'Next 3 Days',
    daysToDeliver: 3,
    shippingPrice: 6.9,
    freeShippingMinPrice: 0,
  },
  {
    name: 'Next 5 Days',
    daysToDeliver: 5,
    shippingPrice: 4.9,
    freeShippingMinPrice: 35,
  },
]
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

export const SENDER_EMAIL = process.env.SENDER_EMAIL || 'dealing.lk@gmail.com'
export const SENDER_NAME = process.env.SENDER_NAME || APP_NAME

export const USER_ROLES = ['Admin', 'User']
