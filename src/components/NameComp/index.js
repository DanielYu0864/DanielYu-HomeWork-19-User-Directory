import React from 'react'

function NameComp(props) {
  const { first, last } = props.value
  return <li className ='list-group-items'>Name: { first } { last }</li>
}

export default NameComp
