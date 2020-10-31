import React, {  useEffect, useState, Component } from 'react';
import API from '../../utils/API';
import GetFemaleUsers from '../GetFemaleUsers';
import GetMaleUsers from '../GetMaleUsers';
import Order from '../../components/Order';
import ResultList from '../../components/ResultList';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from '../../components/NavTabs';
import GetRandomUser from '../GetRandomUser';

// function GetAllUsers() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [viewGender, setViewGender] = useState(null);
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     return renderUserInfo();
//   }, []);

//   const renderUserInfo = () => {
//     API.getAllUsers()
//       .then(res => {
//         console.log('API', res.data.results)
//         return res.data.results;
//       })
//       .then(res => {

//         setIsLoaded(true);
//         setResults([res]);
//         console.log('isLoaded:', isLoaded);
//         console.log('Reaults:', results);
//       })
//       .catch(err => console.log(err));
//   }
//   if(isLoaded !== true) {
//     return <div>Loading</div>
//   } else {
//     return (<GetFemaleUsers value={ results }/>)
//   }
// }

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

  componentDidUpdate() {
    // this.renderUserInfo();
  }

  renderUserInfo = () => {
    API.getAllUsers()
      .then(res => {
        // console.log(res.data.results)
        return this.setState({
          order: 'age',
          isLoaded: true,
          results: res.data.results
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
          <Route exact path='/' render={ () => <GetRandomUser value={ results }/> }/>
          <Route exact path='/all' render={ () =>  (
            <>
            <h1>All Users</h1>
            <ResultList results={ results } />
            </>
          ) }/>
          <Route exact path='/male' render={ () => <GetMaleUsers value={ results } /> }/>
          <Route exact path='/female' render={ () => <GetFemaleUsers value={ results } /> }/>
          <Route exact path='/order' render={ () => <Order value={ results } /> }/>
        </Router>
    );
    }
  }
}

export default GetAllUsers
