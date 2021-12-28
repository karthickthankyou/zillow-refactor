import { SearchIcon } from '@heroicons/react/outline'
import { ComponentType } from 'react'
import Select, { components, DropdownIndicatorProps } from 'react-select'
import tw from 'twin.macro'

export interface ISearchBoxProps {
  className?: string
}

const customStyles = {
  option: (provided, state) => tw`p-3 hover:bg-white`,

  control: () =>
    tw`z-10 flex p-3 bg-white rounded-md shadow-md backdrop-filter backdrop-blur bg-opacity-80`,
  menu: (provided) => ({
    ...provided,
    ...tw`bg-white rounded-md shadow-md backdrop-filter backdrop-blur bg-opacity-80`,
  }),
  base: (provided) => ({ ...provided, ...tw`z-0` }),
}

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const DropdownIndicator = (props) =>
  components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <SearchIcon className='w-5 h-5 text-black' aria-hidden='true' />
    </components.DropdownIndicator>
  )

const SearchBox = ({ className }: ISearchBoxProps) => (
  <Select
    className={`${className} z-0`}
    menuPosition='fixed'
    isClearable
    isSearchable
    placeholder='Enter an address, neighborhood, city, or ZIP code'
    styles={customStyles}
    options={options}
    components={{ DropdownIndicator, IndicatorSeparator: () => null }}
  />
)

export default SearchBox
