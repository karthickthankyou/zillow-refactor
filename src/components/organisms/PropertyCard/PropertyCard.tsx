import Badge from 'src/components/atoms/Badge'
import Image from 'src/components/atoms/Image'

export interface IPropertyCardProps {}

const PropertyCard = ({}: IPropertyCardProps) => (
  <div>
    <Image
      className='rounded h-80'
      src='https://res.cloudinary.com/thankyou/image/upload/v1640617959/nike/house1_tmtonc.jpg'
      alt=''
    />

    <div className='mt-1 text-lg font-semibold'>$925,000</div>
    <div className='flex space-x-2 text-sm'>
      <div>6 bds</div>
      <div>2 ba</div>
      <div>1,884 sqft</div>
      <Badge size='sm'>House for sale</Badge>
    </div>
    <div className='mt-1 text-sm text-gray-500'>
      2368 62nd St, Brooklyn, NY 11204
    </div>
  </div>
)

export default PropertyCard
