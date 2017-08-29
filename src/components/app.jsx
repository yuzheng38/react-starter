import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import SearchBar from './search_bar.jsx';

class App extends Component {
/**  NO LONGER NEEDED
  constructor(props) {
    super(props);
    this.state = { fromSearchBar: "Hello React Starter!" };
    axios.get("http://localhost:3001/api/bittiger/params_fined/503")
      .then(response => {
        console.log(res.data.courseID);
      });
  }

  getResultFromSearchBar(term) {
    this.setState({ fromSearchBar: term });
  }
  */

  render() {
      return (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                {/* <SearchBar sendToApp={
                  (term) => {
                    this.getResultFromSearchBar(term);
                  }
                } /> */}

                <SearchBar />
              </div>
            </div>
            <div className="row">
              {/* <p>{this.state.fromSearchBar}</p> */}
              <p> {this.props.searchTerm} </p>
              {/* this is accessing the store */}
            </div>
          </div>
        </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm  // this matches state.searchTerm to this.props.searchTerm
  }
}

export default connect(mapStateToProps)(App);
