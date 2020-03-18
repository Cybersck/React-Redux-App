import React from 'react';
import { Input } from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import Header from './components/Header';
// import AddedFeatures from './components/AddedFeatures';
// import AdditionalFeatures from './components/AdditionalFeatures';
// import Total from './components/Total';

import {connect} from 'react-redux';

import {getData} from './actions/featureActions';


const App = (props) => {

  let submit = () => {
    axios.get('https://www.boredapi.com/api/activity')
      .then(res => {
        props.getData(res.data.activity)
        })
        .catch(err => {
          window.alert(err);
      })
  }

  return (

    <div className="boxes">
      <button onClick={() => submit()}>Search</button>
      <br />
      <div className="box">
        <h1>What to do today: <br/>{props.res}</h1>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, {getData})(App);
