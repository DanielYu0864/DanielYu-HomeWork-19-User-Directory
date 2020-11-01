import React, { Component } from 'react';
import ResultList from '../../components/ResultList';

class GetFemaleUsers extends Component {
  state = {
    isLoaded: false,
    results: []
  };

  componentDidMount() {
    this.renderFemale();
    }
  // filter for only female user
  renderFemale = () => {
    const arr = this.props.value.filter(info => info.gender === 'female');
    this.setState({
      isLoaded: true,
      results: arr
    })
  }

  render() {
    const { isLoaded, results} = this.state
    while (isLoaded === false ) {
      return <h1>Loading</h1>
    }
    console.log(results);
    return (
      <>
      <h1>Female Users</h1>
      <ResultList results={ results }/>
      </>
    )
  }
}

export default GetFemaleUsers