
import React, { Component } from 'react';
import API from '../../utils/API';
import ResultList from '../ResultList';


class GetRandomUser extends Component {
  state = {
    result: []
  };

  componentDidMount() {
    this.renderUserInfo();
  }

  renderUserInfo = () => {
    API.getAllUsers()
      .then(res => {
        console.log(res.data.results);
        this.setState({ result: res.data.results[0] })
      })
      .catch(err => console.log(err));
  }

  render() {
    if(this.state.result.length === 0) {
      return <h1>Loading</h1>
    }

    const { result } = this.state;
    return (
      <div>
        <h1>Random User</h1>
        <ResultList results={ [result] }/>
      </div>
    )
  }
}

export default GetRandomUser;
