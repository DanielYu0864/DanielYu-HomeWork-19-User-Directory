import React, { Component } from 'react';
import API from '../../utils/API';
import ResultList from '../ResultList';

class GetUsersByGender extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.renderUserInfo();
  }

  renderUserInfo = () => {
    API.getUsersByGender('male')
      .then(res => {
        // const gender = res.data.results.filter(info => info.gender === 'male');
        // console.log(gender);
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
      <h1>Male Users</h1>
      {/* <button onClick={ () => this.displayByGender(allResults, 'male')}>Male</button>
      <button onClick={ () => this.displayByGender(allResults, 'female')}>Female</button> */}
      <div id='resultList'>
      </div>
      <ResultList
        results={ allResults }
      />
      </>
    )
  }
}

export default GetUsersByGender
