import React from 'react'

function AddressComp({location}) {
  const { number, name } = location.street;
  const { city, state } = location;
  // address list items component
  return <li className='list-group-items'>Address: { number } { name }</li>
}

export default AddressComp
