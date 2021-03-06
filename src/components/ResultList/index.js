import React from 'react'
import './style.css'
import NameComp from '../NameComp'
import ImageComp from '../ImageComp';
import GenderComp from '../GenderComp';
import EmailComp from '../EmailComp';
import PhoneComp from '../PhoneComp';
import AddressComp from '../AddressComp';
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
  // Result List component will functional loop through the array and render the list component
  return (
    <>
      {
        results.map((result, i) => (
          <ul className='list-group' key={ result.id.value } >
            <li className='list-group-items'>ID: { result.id.value }</li>
            <ImageComp src={result.picture.large}/>
            <NameComp value={ result.name }/>
            <GenderComp gender={ result.gender }/>
            <li className='list-group-items'>Birthday: <span>{ count1To10(result.dob.date) }</span></li>
            <EmailComp email={ result.email }/>
            <PhoneComp phone={ result.phone }/>
            <AddressComp location={ result.location }/>
          </ul>
        ))
      }
    </>
  )
}

export default AllResultList;
