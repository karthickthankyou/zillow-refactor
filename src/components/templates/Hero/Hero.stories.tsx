import React from 'react'
import Image from 'src/components/atoms/Image'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Navbar from 'src/components/organisms/Navbar'
import BannerHomeLoan from 'src/components/organisms/BannerHomeLoan'
import BadgeCheckIcon from '@heroicons/react/outline/BadgeCheckIcon'
import Footer from 'src/components/organisms/Footer'
import Hero from './Hero'
import Cities from '../Cities'

export default {
  title: 'src/components/templates/Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = (args) => (
  <div>
    <Navbar />
    <Hero />
    <div className='container mx-auto space-y-24'>
      <Cities />
      <Cities />
      <Cities />
      <BannerHomeLoan
        title='Zillow Home Loans'
        description={
          <div>
            Get pre-approved and take a big step toward buying your new home.
          </div>
        }
        btnText='Request Pre approval'
      />
      <BannerHomeLoan
        reverse
        title='Find an Agent'
        src='https://res.cloudinary.com/thankyou/image/upload/v1640726673/nike/people/austin-distel-va_Opp86kfQ-unsplash_avexl4.jpg'
        description={
          <div>
            Zillow&apos;s directory of local real estate agents and brokers
            connects you with professionals who can help meet your needs.
          </div>
        }
        btnText='Find agents'
      />
      <BannerHomeLoan
        title='Zillow Rental Manager'
        description={
          <div>
            <ul>
              <li className='flex items-center gap-2'>
                <BadgeCheckIcon className='w-5 h-5 text-black' /> List your
                rental.
              </li>
              <li className='flex items-center gap-2'>
                <BadgeCheckIcon className='w-5 h-5 text-black' /> Screen
                tenants.
              </li>
              <li className='flex items-center gap-2'>
                <BadgeCheckIcon className='w-5 h-5 text-black' /> Sign a lease.
              </li>
              <li className='flex items-center gap-2'>
                <BadgeCheckIcon className='w-5 h-5 text-black' /> Get paid.
              </li>
            </ul>
            <div className='mt-2'>All in one place!</div>
          </div>
        }
        btnText='Post your first listing free'
      />
      <div className='flex flex-col items-center justify-center h-96'>
        <div className='text-4xl font-bold tracking-tighter text-luxury'>
          Most visited rental network
        </div>
        <div className='max-w-lg mt-4 text-center tex-gray-600'>
          Zillow Rentals is the most visited rental network with more than{' '}
          <strong className='whitespace-nowrap text-primary-500'>
            194 million
          </strong>{' '}
          average monthly unique users in Q2 2019.
        </div>
        <button
          className='px-8 py-3 mt-6 text-white uppercase rounded-full bg-primary-500' // bg-gradient-to-tr from-primary-400 to-primary-600
          type='button'
        >
          JOIN NOW
        </button>
      </div>
      <div>
        <Image
          className='h-12'
          src='https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/2/2020/05/Zillow_Sites2x-cd3144-c697dc-fbb28e.png'
        />
      </div>
    </div>
    <Footer className='mt-24' />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
