import axios from 'axios';


export default {
  // Gets all users
  getAllUsers: function() {
    return axios.get('https://randomuser.me/api/?results=50&nat=us');
  },
  // Gets users by gender
  getUsersByGender: function(gender) {
    return axios.get('https://randomuser.me/api/?results=50&nat=us&gender=' + gender);
  },
};