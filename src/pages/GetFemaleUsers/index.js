import React, { Component } from 'react';
import API from '../../utils/API';
import ResultList from '../../components/ResultList';

class GetFemaleUsers extends Component {
  state = {
    isLoaded: false,
    results: []
  };

  componentDidMount() {
    // this.renderUserInfo();
    this.renderFemale();
  }

  renderFemale = () => {
    const arr = this.props.value.filter(info => info.gender === 'female');
    this.setState({
      isLoaded: true,
      results: arr
    })
  }

  // renderUserInfo = () => {
  //   API.getUsersByGender('female')
  //     .then(res => {
  //       this.setState({ results: res.data.results });
  //     })
  //     .catch(err => console.log(err));
  // }



  render() {
    const { isLoaded, results} = this.state
    while (isLoaded === false ) {
      return <h1>Loading</h1>
    }
    console.log(results);
    return (
      <>
      <h1>Female Users</h1>
      {/* <button>Female</button> */}

      <ResultList results={ results }/>
      </>
    )
  }
}

export default GetFemaleUsers