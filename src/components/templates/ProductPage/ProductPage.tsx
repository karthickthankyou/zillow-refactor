import Image from 'src/components/atoms/Image'
import Link from 'src/components/atoms/Link'

export interface IProductPageProps {}

const ProductPage = () => (
  <div className='container mx-auto bg-gray-100'>
    <div className='grid grid-cols-6 grid-rows-2 gap-3 overflow-hidden h-112'>
      <div className='col-span-3 row-span-2 overflow-hidden rounded-lg '>
        <Image
          className='h-full transition-all ease-in-out transform hover:scale-110'
          alt=''
          src='https://res.cloudinary.com/thankyou/image/upload/v1640726401/nike/cities/denys-nevozhai-k5w21D7PgMk-unsplash_zz2obf.jpg'
        />
      </div>
      <Image
        className='h-full row-span-2 rounded-lg'
        alt=''
        src='https://res.cloudinary.com/thankyou/image/upload/v1640726401/nike/cities/denys-nevozhai-k5w21D7PgMk-unsplash_zz2obf.jpg'
      />
      <Image
        className='h-full col-span-2 rounded-lg'
        alt=''
        src='https://res.cloudinary.com/thankyou/image/upload/v1640726401/nike/cities/denys-nevozhai-k5w21D7PgMk-unsplash_zz2obf.jpg'
      />
      <Image
        className='h-full rounded-lg'
        alt=''
        src='https://res.cloudinary.com/thankyou/image/upload/v1640726401/nike/cities/denys-nevozhai-k5w21D7PgMk-unsplash_zz2obf.jpg'
      />
      <Image
        className='h-full rounded-lg'
        alt=''
        src='https://res.cloudinary.com/thankyou/image/upload/v1640726401/nike/cities/denys-nevozhai-k5w21D7PgMk-unsplash_zz2obf.jpg'
      />
    </div>
    <div className='grid grid-cols-3 gap-3'>
      <div className='col-span-2'>
        <div className='grid grid-cols-3 gap-3 py-3 mt-3 text-base bg-white rounded-lg'>
          <div className='font-light text-center'>
            <div className='font-semibold'>Bedrooms</div>9 bd
          </div>
          <div className='font-light text-center'>
            <div className='font-semibold'>Bathrooms</div>7 ba
          </div>
          <div className='font-light text-center'>
            <div className='font-semibold'>Square Feet</div>
            4200 sq ft
          </div>
        </div>
        <div className='max-w-lg text-lg leading-loose text-gray-800'>
          Incredible Three Family Dwelling With Contemporary Stone Detailing,
          Unrivaled Curb Appeal Sits On Well-Kept Property In A Desirable
          Neighborhood. A Bright Entryway Welcomes You To The Main Floor, Second
          Floor Or Third Floor Units With Rich Hardwood Floors, Impeccable
          Molding, And Designer Details Throughout. Entertain Guests In The
          Large And Inviting Living Areas With Gorgeous Sun Lit Rooms And Sleek
          Kitchens/ Bathrooms. Great Opportunity For Families And Or Investors
          Looking For Income Producing Assets. Come Check It Out!
        </div>
        <div>
          <div className='mt-4 mb-2 text-2xl'>Facts and features</div>
          Incredible Three Family Dwelling With Contemporary Stone Detailing,
          Unrivaled Curb Appeal Sits On Well-Kept Property In A Desirable
          Neighborhood. A Bright Entryway Welcomes You To The Main Floor, Second
          Floor Or Third Floor Units With Rich Hardwood Floors, Impeccable
          Molding, And Designer Details Throughout. Entertain Guests In The
          Large And Inviting Living Areas With Gorgeous Sun Lit Rooms And Sleek
          Kitchens/ Bathrooms. Great Opportunity For Families And Or Investors
          Looking For Income Producing Assets. Come Check It Out!
        </div>
      </div>

      <div className='col-span-1 mt-3'>
        <div className='sticky top-0 p-3 bg-white rounded-lg'>
          <h2 className='font-mono text-3xl tracking-tighter'>$1,998,888</h2>
          <div className='mt-3'>111-61 44th Ave, Corona, NY 11368</div>
          <div className='mt-6'>
            <div>Est. payment: $9,031/mo</div>
            <Link className='block mt-1 text-primary-600' href='/'>
              Get pre-qualified
            </Link>
          </div>
          <button
            className='w-full px-3 py-3 mt-3 rounded-md bg-luxury'
            type='button'
          >
            Contact an agent
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default ProductPage
