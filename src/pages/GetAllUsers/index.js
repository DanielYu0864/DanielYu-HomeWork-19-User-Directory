import React, {  useEffect, useState, Component } from 'react';
import API from '../../utils/API';
import GetFemaleUsers from '../GetFemaleUsers';
import GetMaleUsers from '../GetMaleUsers';
import Order from '../../components/Order';
import ResultList from '../../components/ResultList';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from '../../components/NavTabs';
import GetRandomUser from '../GetRandomUser';
import './style.css';


class GetAllUsers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      order: 'age',
      error: null,
      isLoaded: false,
      viewByGendr: null,
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
        const arr = res.data.results.sort((a, b) => {
          const idA = a.id.value[0];
          const idB = b.id.value[0];
          return idA - idB;
        });
        return this.setState({
          order: 'age',
          isLoaded: true,
          results: arr
        });
        // console.log(this.state.isLoaded)
      })
      .catch(err => console.log(err));
  }

  render() {
    const {isLoaded, results, order} = this.state;
    if(isLoaded === false) {
      return <div>Loading ...</div>
    } else {
      return (

        <Router>
          <NavTabs/>
          <Route exact path='/all' render={ () =>  (
            <>
            <h1>All Users</h1>
            <ResultList results={ results } />
            </>
          ) }/>
          <Route exact path='/male' render={ () => <GetMaleUsers value={ results } /> }/>
          <Route exact path='/female' render={ () => <GetFemaleUsers value={ results } /> }/>
          <Route exact path='/order' render={ () => <Order value={ results } /> }/>
          <Route path='*' render={ () => <GetRandomUser value={ results }/> }/>
        </Router>
    );
    }
  }
}

export default GetAllUsers
