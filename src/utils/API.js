import axios from 'axios';


export default {
  // Gets random user every time load the page
  getRandomUser: function() {
    return axios.get('https://randomuser.me/api/?nat=us');
  },
  // Gets all users
  getAllUsers: function() {
    return axios.get('https://randomuser.me/api/?results=200&nat=us');
  },
  // Gets users by gender
  getUsersByGender: function(gender) {
    return axios.get('https://randomuser.me/api/?results=200&nat=us&gender=' + gender);
  },


};