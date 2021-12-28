import { Popover } from '@headlessui/react'
import { syncBuiltinESMExports } from 'module'
import { useState } from 'react'
import Link from 'src/components/atoms/Link'
import PopoverParent, {
  PopoverButton,
  PopoverPanel,
} from 'src/components/molecules/PopoverMenuItem'

export interface INavbarProps {}

const menu = [
  {
    title: 'Buy',
    submenu: [
      {
        title: 'Homes for Sale',
        submenu: [
          'Homes for Sale',
          'Foreclosures',
          'For sale by owner',
          'Open houses',
          'New construction',
          'Coming soon',
          'Recent home sales',
          'All homes',
        ],
      },
      {
        title: 'Resources',
        submenu: ['Buyers Guide', 'Foreclosure center', 'Real estate app'],
      },
    ],
  },
  {
    title: 'Rent',
    submenu: [
      {
        title: 'Search for Rentals',
        submenu: [
          'Rental Buildings',
          'Apartments for rent',
          'Houses for rent',
          'All rental listings',
          'All rental buildings',
        ],
      },
      {
        title: 'Renter tools',
        submenu: [
          'Applications',
          'Payments',
          'Leases',
          'Affordability calculator',
          'Renters guide',
        ],
      },
    ],
  },
  {
    title: 'Sell',
    submenu: [
      {
        title: 'Resources',
        submenu: [
          'Explore your options',
          `See your home's Zestimate`,
          'Home values',
          'Sellers guide',
        ],
      },
      {
        title: 'Selling options',
        submenu: [
          'Sell with Zillow Offers',
          `Find a seller's agent`,
          'Post For Sale by Owner',
        ],
      },
    ],
  },
  {
    title: 'Home Loans',
    submenu: [
      {
        title: 'Shop mortgages',
        submenu: [
          'Mortgage lenders',
          'HELOC lenders',
          'Mortgage rates',
          'Refinance rates',
          'All mortgage rates',
        ],
      },
      {
        title: 'Calculators',
        submenu: [
          'Mortgage calculator',
          'Refinance calculator',
          'Affordability calculator',
          'Amortization calculator',
          'Debt-to-Income calculator',
        ],
      },
      {
        title: 'Resources',
        submenu: [
          'Lender reviews',
          'Mortgage learning center',
          'Mortgages app',
          'Lender resource center',
        ],
      },
    ],
  },
  {
    title: 'Agent finder',
    submenu: [
      {
        title: 'Looking for pros',
        submenu: [
          'Real estate agents',
          'Property managers',
          'Home inspectors',
          'Other pros',
          'Home improvement pros',
          'Home builders',
          'Real estate photographers',
        ],
      },
      {
        title: "I'm a pro",
        submenu: [
          'Agent advertising',
          'Agent resource center',
          'Create a free agent account',
          'Real estate business plan',
          'Real estate agent scripts',
          'Listing flyer templates',
        ],
      },
    ],
  },
]

const menu2 = [
  {
    title: 'Manage rentals',
    submenu: [
      {
        title: 'Rental Management Tools',
        submenu: [
          'My Listings',
          'Messages',
          'Applications',
          'Leases',
          'Payments',
        ],
      },
      {
        title: 'Learn more',
        submenu: [
          'Zillow Rental Manager',
          'Price My Rental',
          'Resource Center',
          'Help Center',
        ],
      },
    ],
  },
  { title: 'Advertise', submenu: [] },
  { title: 'Help', submenu: [] },
]

const Navbar = () => {
  const [hover, setHover] = useState(false)

  return (
    <nav className='fixed top-0 z-20 flex items-center justify-center w-full h-16 bg-white border-b-2 border-white shadow-sm border-opacity-30 bg-opacity-70 backdrop-filter backdrop-blur '>
      <div className='relative w-full'>
        <div className='container flex items-center justify-center w-full h-6 mx-auto'>
          <div className='hidden w-full py-2 md:flex'>
            <Popover.Group className='z-40 flex items-center space-x-4'>
              {menu.map((item, index) => (
                <PopoverParent key={item.title}>
                  <PopoverButton>{item.title}</PopoverButton>
                  <PopoverPanel className='w-full py-3'>
                    <div className='container flex gap-6 mx-auto'>
                      {item.submenu.map((subitem, subindex) => (
                        <div key={subitem.title}>
                          <div className='font-bold' key={subitem.title}>
                            {subitem.title}
                          </div>
                          {subitem.submenu.map((subsubitem) => (
                            <div key={subsubitem}>{subsubitem}</div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </PopoverPanel>
                </PopoverParent>
              ))}
            </Popover.Group>
            <Popover.Group className='z-40 flex items-center ml-auto space-x-4'>
              {menu2.map((item, index) => (
                <PopoverParent key={item.title}>
                  <PopoverButton>{item.title}</PopoverButton>
                  {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
                  <>
                    {item.submenu.length > 0 && (
                      <PopoverPanel className='w-full py-3'>
                        <div className='container flex flex-row-reverse gap-6 mx-auto'>
                          {item.submenu.map((subitem, subindex) => (
                            <div key={subitem.title}>
                              <div className='font-bold' key={subitem.title}>
                                {subitem.title}
                              </div>
                              {subitem.submenu?.map((subsubitem) => (
                                <div key={subsubitem}>{subsubitem}</div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </PopoverPanel>
                    )}
                  </>
                </PopoverParent>
              ))}
            </Popover.Group>
          </div>
          <Link href='/' className='absolute'>
            <img
              src='https://s.zillowstatic.com/pfs/static/z-logo-default.svg'
              className='w-full h-full'
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
