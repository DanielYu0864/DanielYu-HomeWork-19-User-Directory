import React, { Component } from 'react'
import Order from '../Order'

export class OrderList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      results: []
    }
  }


  componentDidMount() {
    this.initialSetup();
  }

  componentDidUpdate() {
    this.checkOrder();
  }

  checkOrder = (order) => {
    const arr = this.state.results
    switch (order) {
      case 'ageYtoO':
        return this.setState({
          order: 'ageYtoO',
          results: arr
        });
      case 'ageOtoY':
        return this.setState({
          order: 'ageOtoY',
          results: arr
        });
    };
  }

  initialSetup = () => {
    // order user by age
    const arr = this.props.value;
    // console.log(arr);
    this.setState({
      order: 'ageYtoO',
      isLoaded: true,
      results: arr
    })
  };


  render() {
    const { isLoaded, results, order} = this.state
    while (isLoaded === false ) {
      return <h1>Loading...</h1>
    }

    return (
      <>
          <button onClick={ () => this.checkOrder('ageYtoO') }>Young to Old</button>
          <button onClick={ () => this.checkOrder('ageOtoY') }>Old to Young</button>
        <Order value={results} order={ order }/>
      </>
    )
  }
}

export default OrderList
