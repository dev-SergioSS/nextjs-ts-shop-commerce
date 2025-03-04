import Link from 'next/link'
import React from 'react'
import { Title } from './title'
import { Button } from '../ui'
import { Plus } from 'lucide-react'

interface Props {
  className?: string
  name: string
  id: number
  price: number
  imageUrl: string
}

export const ProductCard: React.FC<Props> = ({
  className,
  name,
  id,
  imageUrl,
  price,
}) => {
  return (
    <div className={className}>
      <Link href='/product/1'>
        <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
          <img
            className='w-[215px] h-[215px]'
            src={imageUrl}
            alt={name}
          />
        </div>

        <Title
          text={name}
          size='sm'
          className='mb-1 mt-3 font-bold'
        />

        <p className='text-sm text-gray-400'>
          Chicken, mozzarella, cheddar and parmesan cheeses, cheese sauce,
          tomatoes, alfredo sauce, garlic
        </p>

        <div className='flex justify-between items-center mt-4'>
          <span className='text-[20px]'>
            от <b>{price} ₽</b>
          </span>

          <Button
            variant='secondary'
            className='text-base font-bold'>
            <Plus
              size={20}
              className='mr-1'
            />
            Добавити
          </Button>
        </div>
      </Link>
    </div>
  )
}
