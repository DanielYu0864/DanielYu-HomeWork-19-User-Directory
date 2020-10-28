import React, { Component } from 'react';
import API from '../../utils/API';
import ResultList from '../ResultList';

class GetFemaleUsers extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.renderUserInfo();
  }

  renderUserInfo = () => {
    API.getUsersByGender('female')
      .then(res => {
        this.setState({ results: res.data.results });
      })
      .catch(err => console.log(err));
  }

  // displayByGender = (allInfo, g) => {
  //   const gender = allInfo.filter(info => info.gender === g);
  //   this.setState({ resluts: gender });
  // }

  render() {
    while (this.state.results.length < 25 ) {
      return <h1>Loading</h1>
    }
    const allResults = this.state.results;
    console.log(allResults);
    return (
      <>
      <h1>Female Users</h1>
      <div id='resultList'>
      </div>
      <ResultList
        results={ allResults }
      />
      </>
    )
  }
}

export default GetFemaleUsers