import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { addDog, removeDog, fetchDogs } from '../../actions/dogs'
import DogShow from './DogShow';
import DogForm from '../../components/dogs/DogForm';
import Dog from '../../components/dogs/Dog';
import { NavBar } from '../../components/NavBar';

class Dogs extends Component {

  componentDidMount() {
    this.props.fetchDogs()
  }

  renderDogs = dogs => {
    return dogs.map(dog => {
      return <Dog key={dog.id} dog={dog} removeDog={this.props.removeDog} />
    });
  }

  render() {
    const { dogs, addDog, match } = this.props;
    return(
      <div className="dogs component">
        <NavBar />
        <DogForm addDog={addDog} />

        <Route exact path={match.url} render={() => this.renderDogs(dogs)} />
        <Route exact path={`${match.url}/:dogId`} render={routerProps => <DogShow {...routerProps} dogs={dogs} />} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dogs: state.dogs
  }
}

export default connect(mapStateToProps, { addDog, removeDog, fetchDogs })(Dogs)
