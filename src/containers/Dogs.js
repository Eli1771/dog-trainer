import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addDog } from '../actions/dogs'
import DogForm from '../components/DogForm';
import Dog from '../components/Dog';

class Dogs extends Component {
  render() {
    const { dogs, addDog } = this.props;
    console.log('rendering!', dogs);
    return(
      <div className="dogs component">
        All dogs
        <DogForm addDog={addDog}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dogs: state.dogs
  }
}

export default connect(mapStateToProps, { addDog })(Dogs)
