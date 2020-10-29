import React, { Component } from 'react'
import API from '../../utils/API';
import GetFemaleUsers from '../GetFemaleUsers';
import ResultList from '../ResultList';


class GetAllUsers extends Component {
  constructor(props) {
    super(props)

    this.state = {
       error: null,
       isLoaded: false,
       results: []
    }
  }


  componentDidMount() {
    this.renderUserInfo();
  }

  renderUserInfo = () => {
    API.getAllUsers()
      .then(res => {
        // console.log(res.data.results)
        this.setState({
          isLoaded: true,
          results: res.data.results
        });
        // console.log(this.state.isLoaded)
      })
      .catch(err => console.log(err));
  }

  createList = (results) => {
    results.map((e, i) => {
      console.log(e);
    })
  }

  render() {
    const {isLoaded, results} = this.state;
    if(isLoaded === false) {
      return <div>Loading ...</div>
    } else {
      return (
        <>
        <h1>All Users</h1>
        <ResultList
          results={ results }
        />
        {/* <GetFemaleUsers value={ results }/> */}
        </>
    );
    }
  }
}

export default GetAllUsers
