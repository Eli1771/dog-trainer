import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import {
  addDog,
  removeDog,
  fetchDogs,
  showDogForm,
  hideDogForm
} from '../../actions/dogs'
import DogShow from './DogShow';
import DogForm from '../../components/dogs/DogForm';
import DogFormButton from '../../components/dogs/DogFormButton';
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

  renderDogForm = () => {
    return this.props.dogFormShowing ?
      <DogForm addDog={this.props.addDog} /> :
      <DogFormButton toggleDogForm={this.toggleDogForm} />
  }

  toggleDogForm = dogFormShowing => {
    return dogFormShowing ? this.props.hideDogForm() : this.props.showDogForm()
  }

  render() {
    const { dogs, match } = this.props;
    return(
      <div className="dogs component">
        <NavBar />

        <Route exact path={match.url} render={() => {
          return(
            <div className="dog-cards-container">
              {this.renderDogForm()}
              {this.renderDogs(dogs)}
            </div>
          );
        }} />

        <Route exact path={`${match.url}/:dogId`} render={routerProps => <DogShow {...routerProps} dogs={dogs} />} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dogs: state.dogs,
    dogFormShowing: state.dogFormShowing
  }
}

export default connect(mapStateToProps, {
  addDog,
  removeDog,
  fetchDogs,
  hideDogForm,
  showDogForm
})(Dogs)
