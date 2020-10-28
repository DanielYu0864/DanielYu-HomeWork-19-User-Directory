import React, { Component } from 'react'
import API from '../../utils/API';
import ResultList from '../ResultList';


class GetAllUsers extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.renderUserInfo();
  }

  renderUserInfo = () => {
    API.getAllUsers()
      .then(res => {
        this.setState({ results: res.data.results });
      })
      .catch(err => console.log(err));
  }

  createList = (results) => {
    results.map((e, i) => {
      console.log(e);
    })
  }

  render() {
    if(this.state.results.length < 50) {
      return <h1>Loading</h1>
    }
    const allResults = this.state.results;
    // console.log(allResults);


    return (
      <>
      <h1>All Users</h1>
      <ResultList
        results={ allResults }
      />
      </>
    );
  }
}

export default GetAllUsers
