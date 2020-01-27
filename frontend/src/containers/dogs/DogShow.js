import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDogs } from '../../actions/dogs';
import DogHeader from '../../components/dogs/DogHeader';
import { DogsSidebar } from './DogsSidebar';
import Skills from '../skills/Skills';
import Notes from '../notes/Notes';

class DogShow extends Component {

  renderShowComponents = () => {
    if (this.props.loading && !this.props.dogs.length) {
      return <h3>Loading...</h3>
    } else {

      const { dogs, match } = this.props;
      const dog = dogs.find(dog => dog.id.toString() === match.params.dogId.toString());
      return(
        <>
          <DogHeader dog={dog} />
          <Skills dog={dog} />
          <Notes dogId={dog.id} />
          <DogsSidebar dogs={dogs} currentDogId={dog.id} />
        </>
      );
    }
  }

  render() {
    return(
      <div className="dog-show">
        {this.renderShowComponents()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dogs: state.dogs.dogs,
    loading: state.dogs.loading
  }
}

export default connect(mapStateToProps, { fetchDogs })(DogShow);
