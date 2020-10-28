import React from 'react';
import './style.css';
function ResultList(props) {
  return (
    <ol className='list-group'>
      <img src={ props.picture.large }/>
      <li className='list-group-items'>Name: <span>{ props.name.first } { props.name.last }</span></li>
      <li className='list-group-items'>Gender: <span>{ props.gender }</span></li>
      <li className='list-group-items'>Email: <span>{ props.email }</span></li>
      <li className='list-group-items'>Phone: <span>{ props.phone }</span></li>
      <li className='list-group-items'>location: <span>{ props.location.city }, { props.location.state }</span></li>
    </ol>
  )
}

export default React.memo(ResultList);
