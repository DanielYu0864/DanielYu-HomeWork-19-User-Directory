import React, { Component } from 'react'
import ResultList from '../ResultList';
export class Order extends Component {
  state = {
    isLoaded: false,
    results: []
  };

  componentDidMount(props) {
    this.orderByAgeYtoO();
  }


  orderByAgeOtoY = () => {
    // order user by age
    const arr = this.props.value.sort((a, b) => {
      const ageA = a.dob.age;
      const ageB = b.dob.age;
      return ageB - ageA;
    });
    // console.log(arr);
    this.setState({
      order: 'age',
      isLoaded: true,
      results: arr
    })
  }

  orderByAgeYtoO = () => {
    // order user by age
    const arr = this.props.value.sort((a, b) => {
      const ageA = a.dob.age;
      const ageB = b.dob.age;
      return ageA - ageB;
    });
    // console.log(arr);
    this.setState({
      order: 'ageYtoO',
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
        <h1>Order By Age</h1>
        <ResultList results={ results }/>
      </>
    )
  }
}

export default Order
