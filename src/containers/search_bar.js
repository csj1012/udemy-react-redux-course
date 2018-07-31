import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    // map the value of the input to this.state.term

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    // "this" is our instance of SearchBar.
    // It has a function called onInputChange.
    // bind the existing function to "this" and then replace the existing function with the bound version.
    // This is called "binding the context."

  }

  // All DOM event handlers come with an event object (this is vanilla JS)
  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();

    // Fetch the weather data.
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite US cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    )
  }
}

// This causes the action creator to get bound to the dispatch (?) to make sure it flows down to the middleware adn then teh reducers.
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// mapDispatchToProps is second arg here because that's where it goes when passing a dispatch-mapping function
export default connect(null, mapDispatchToProps)(SearchBar);
