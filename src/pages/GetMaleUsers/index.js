import React, { Component } from 'react';
import API from '../../utils/API';
import ResultList from '../../components/ResultList';

class GetMaleUsers extends Component {
  state = {
    isLoaded: false,
    results: []
  };

  componentDidMount() {
    this.renderFemale();
  }

  renderFemale = () => {
    const arr = this.props.value.filter(info => info.gender === 'male');
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
    // console.log(results);
    return (
      <>
      <h1>Female Users</h1>
      <ResultList results={ results }/>
      </>
    )
  }
}

export default GetMaleUsers
