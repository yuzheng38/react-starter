import React, {Component} from 'react';
import './search_bar.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { trackSearchTerm } from '../actions/track_search_item.jsx';

class SearchBar extends Component {
  render() {
    return (
      <form className="input-group search-bar" onSubmit={(e) => {
        e.preventDefault();
      }}>
        <i className="input-group-addon glyphicon glyphicon-search" aria-hidden="true"></i>
        <input className="form-control"
                
                onChange={
                  (event) => {
                    // this.setState({term: event.target.value});
                    // this.props.sendToApp(event.target.value);
                    this.props.trackSearchTerm(event.target.value);  // this is using redux action.. it's this.props.action
                    // because of bindActionCreators below.
                  }
                }
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">Search</button>
          </span>
          {/* <p>{this.state.term}</p> */}
      </form>
    );
  }
}

function mapDispathToProps(dispatch) {
  return bindActionCreators( { trackSearchTerm }, dispatch);
}

export default connect(null, mapDispathToProps)(SearchBar);
