import React from 'react'
import './style.css'
function AllResultList(props) {
  const count1To10 = (string) => {
    // make birthday readable
    let output = '';
    for(let i = 0 ;i < 10; i++ ) {
      output += string[i]
    }
    return output
  }
  const results = props.results;
  return (
    <>
      {
        results.map((result, i) => (
          <ul className='list-group' key={ result.id.value } >
            <li className='list-group-items'>ID: { result.id.value }</li>
            <img src={ result.picture.large }/>
            <li className='list-group-items'>Name: <span>{result.name.first} {result.name.last}</span></li>
            <li className='list-group-items'>Gender: <span>{ result.gender }</span></li>
            <li className='list-group-items'>Birthday: <span>{ count1To10(result.dob.date) }</span></li>
            <li className='list-group-items'>Email: <span>{ result.email }</span></li>
            <li className='list-group-items'>Phone: <span>{ result.phone }</span></li>
        <li className='list-group-items'>Address: <span>{ result.location.street.number } { result.location.street.name } { result.location.city }, { result.location.state }</span></li>
          </ul>
        ))
      }
    </>
  )
}

export default AllResultList;
