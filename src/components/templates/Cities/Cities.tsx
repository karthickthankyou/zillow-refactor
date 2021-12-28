import HScroll from 'src/components/molecules/HScroll'
import CityCard from 'src/components/organisms/CityCard'

export interface ICitiesProps {}

const Cities = () => (
  <div className='my-12'>
    <div className='flex items-center justify-between'>
      <div>
        <div className='text-3xl tracking-tight'>Buy a home</div>
        <p className='max-w-lg mt-3 text-gray-800'>
          Find your place with an immersive photo experience and the most
          listings, including things you won’t find anywhere else.
        </p>
      </div>
      <button
        type='button'
        className='px-4 py-2 border rounded-full text-primary-600 hover:text-white hover:bg-primary-500 border-primary-600'
      >
        Search homes
      </button>
    </div>
    <HScroll className='mt-2'>
      <HScroll.RightArrow className='absolute left-0 h-full '>
        <div className='flex items-center justify-center w-6 h-6 bg-white rounded-full'>
          &lt;
        </div>
      </HScroll.RightArrow>
      <HScroll.LeftArrow className='absolute right-0 h-full'>
        <div className='flex items-center justify-center w-6 h-6 bg-white rounded-full'>
          &gt;
        </div>
      </HScroll.LeftArrow>
      <HScroll.Body className='gap-3 mb-12'>
        <CityCard />
        <CityCard
          title='San Fransisco'
          src='https://res.cloudinary.com/thankyou/image/upload/v1640725349/nike/cities/maarten-van-den-heuvel-gZXx8lKAb7Y-unsplash_llua9m.jpg'
        />
        <CityCard
          title='Chicago'
          src='https://res.cloudinary.com/thankyou/image/upload/v1640725977/nike/cities/sawyer-bengtson-tnv84LOjes4-unsplash_yl9elq.jpg'
        />
        <CityCard
          title='Los Angeles'
          src='https://res.cloudinary.com/thankyou/image/upload/v1640726401/nike/cities/denys-nevozhai-k5w21D7PgMk-unsplash_zz2obf.jpg'
        />
        <CityCard />
      </HScroll.Body>
    </HScroll>
  </div>
)

export default Cities
