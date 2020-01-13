import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addDog, removeDog } from '../actions/dogs'
import DogForm from '../components/DogForm';
import Dog from '../components/Dog';

class Dogs extends Component {
  renderDogs = dogs => {
    return dogs.map(dog => {
      return <Dog key={dog.id} dog={dog} removeDog={this.props.removeDog} />
    });
  }

  render() {
    const { dogs, addDog } = this.props;
    
    return(
      <div className="dogs component">
        All dogs
        <DogForm addDog={addDog} />
        {this.renderDogs(dogs)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dogs: state.dogs
  }
}

export default connect(mapStateToProps, { addDog, removeDog })(Dogs)
