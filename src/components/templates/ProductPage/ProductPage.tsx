import Mapbox from 'src/components/organisms/Mapbox'
import PropertyCard from 'src/components/organisms/PropertyCard'

export interface IProductPageProps {}

const ProductPage = ({}: IProductPageProps) => (
  <div>
    <div className='py-3 shadow-md'>Hello World</div>
    <div className='flex gap-5'>
      <div className='flex-1 hidden lg:block'>
        <div className='sticky top-0 col-span-1 overflow-hidden rounded'>
          <Mapbox
            latitude={0.4}
            longitude={109.3}
            zoom={12}
            markers={[
              { latitude: 42.360081, longitude: -71.0583 },
              { latitude: 42.360081, longitude: -71.0585 },
            ]}
            className='h-screen'
          />
        </div>
      </div>
      <div className='grid flex-1 grid-cols-1 col-span-1 gap-5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'>
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  </div>
)

export default ProductPage
