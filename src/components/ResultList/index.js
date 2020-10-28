import React from 'react'
import './style.css'
function AllResultList(props) {

  const results = props.results;
  console.log(props.results)
  return (
    // <h1>List</h1>
    <>
      {
        results.map((result, i) => (
          <ul className='list-group' key={ result.id.value } >
            <li className='list-group-items'>List { i + 1 }</li>
            <img src={ result.picture.large }/>
            <li className='list-group-items'>Name: <span>{result.name.first} {result.name.last}</span></li>
            <li className='list-group-items'>Gender: <span>{ result.gender }</span></li>
            <li className='list-group-items'>Email: <span>{ result.email }</span></li>
            <li className='list-group-items'>Phone: <span>{ result.phone }</span></li>
            <li className='list-group-items'>location: <span>{ result.location.city }, { result.location.state }</span></li>
          </ul>
        ))
      }
    </>
  )
}

export default AllResultList;
