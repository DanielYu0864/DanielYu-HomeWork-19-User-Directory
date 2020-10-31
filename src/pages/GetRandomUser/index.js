
import React, { Component } from 'react';
import API from '../../utils/API';
import ResultList from '../../components/ResultList';


class GetRandomUser extends Component {
  state = {
    result: []
  };

  componentDidMount() {
    if(this.props) {
      this.renderUserInfo();
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  renderUserInfo = () => {
    const arr = this.props.value
    let random = this.getRandomInt(arr.length);
    // console.log(random);
    this.setState({ result: arr[random] });
  }

  render() {
    if(this.state.result.length === 0) {
      return <h1>Loading</h1>
    }
    const { result } = this.state;
    console.log(result)

    return (
      <div>
        <h1>Random User</h1>
        <ResultList results={ [result] }/>
      </div>
    )
  }
}

export default GetRandomUser;
