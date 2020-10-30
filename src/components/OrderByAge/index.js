import React, { Component } from 'react'
import ResultList from '../ResultList';
export class OrderByAge extends Component {
  state = {
    isLoaded: false,
    results: []
  };

  componentDidMount() {
    this.orderByAge();
  }

  orderByAge = () => {
    // order user by age
    const arr = this.props.value.sort((a, b) => {
      const ageA = a.dob.age;
      const ageB = b.dob.age;
      return ageA - ageB;
    });
    // console.log(arr);
    this.setState({
      isLoaded: true,
      results: arr
    })
  };

  render() {
    const { isLoaded, results} = this.state
    while (isLoaded === false ) {
      return <h1>Loading...</h1>
    }
    // console.log(results);
    return (
      <>
        <div>Order By Age</div>
        <ResultList results={ results }/>
      </>
    )
  }
}

export default OrderByAge
