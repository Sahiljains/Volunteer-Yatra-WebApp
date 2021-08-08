import { useState } from 'react'

import arrow from '../assets/buttons/left-blog-shift.png'

const Dropdown = ({ className, options, defaultOption }) => {
  const [active, setActive] = useState(defaultOption)
  const [open, setOpen] = useState(false)
  return (
    <div className={className}>
      <div className='dropdown'>
        <div className='default-option cursor green-blue text-medium' onClick={() => setOpen(!open)}>
          {active} <img src={arrow} alt='' className={`dropdown-arrow ${open ? 'rotate' : ''}`} />
        </div>
        {open &&
          options &&
          options.map(
            (option, i) =>
              option !== active && (
                <div
                  className='option cursor green-blue text-medium'
                  key={i}
                  onClick={() => {
                    setActive(option)
                    setOpen(false)
                  }}>
                  {option}
                </div>
              )
          )}
      </div>
    </div>
  )
}

Dropdown.defaultProps = {
  className: '',
  options: [],
  defaultOption: '',
}

export default Dropdown
