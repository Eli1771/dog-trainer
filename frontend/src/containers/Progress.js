import React, { Component } from 'react';
import { connect } from 'react-redux';

import { NavBar } from '../components/NavBar';

class Progress extends Component {
  render() {
    console.log(this.props.notes);
    return(
      <div>
        <NavBar />
        <div>Progress Log</div>
        <div className='note-links-container'>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes.notes
  }
}

export default connect()(Progress);
