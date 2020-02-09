import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import {
  addDog,
  removeDog,
  fetchDogs,
  showDogForm,
  hideDogForm
} from '../../actions/dogs';
import DogShow from './DogShow';
import DogForm from '../../components/dogs/DogForm';
import DogFormButton from '../../components/dogs/DogFormButton';
import Dog from '../../components/dogs/Dog';
import { NavBar } from '../../components/NavBar';

class Dogs extends Component {

  componentDidMount() {
    let nodes = document.querySelectorAll('.preload')

    if (!this.props.dogs.length) {
      this.props.fetchDogs()
    }
    setTimeout(() => {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].classList.remove('preload');
      }
    }, 600)
  }

  renderDogs = dogs => {
    if (this.props.loading && !this.props.dogs.length) {
      return <h3>Loading...</h3>
    } else {
      return dogs.map(dog => {
        return <Dog key={dog.id} dog={dog} removeDog={this.props.removeDog} />
      });
    }
  }

  renderDogForm = () => {
    return this.props.dogFormShowing ?
      <DogForm addDog={this.props.addDog} toggleDogForm={() => this.toggleDogForm(true)}/> :
      <DogFormButton toggleDogForm={this.toggleDogForm} />
  }

  toggleDogForm = dogFormShowing => {
    return dogFormShowing ? this.props.hideDogForm() : this.props.showDogForm()
  }

  render() {
    const { dogs, match } = this.props;
    return(
      <div className="dogs">
        <NavBar />

        <Route exact path={match.url} render={() => {
          return(
            <>
              <div className="dog-stats-accent preload">
                <div className="dog-stats">

                  <h3>My Pack</h3>
                  <p>{this.props.dogs.length} Dogs</p>
                </div>
              </div>


              <div className="dog-cards-container preload">
                {this.renderDogForm()}
                {this.renderDogs(dogs)}
              </div>
            </>
          );
        }} />

        <Route exact path={`${match.url}/:dogId`} render={routerProps => <DogShow {...routerProps} />} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dogs: state.dogs.dogs,
    dogFormShowing: state.dogs.dogFormShowing,
    loading: state.dogs.loading
  }
}

export default connect(mapStateToProps, {
  addDog,
  removeDog,
  fetchDogs,
  hideDogForm,
  showDogForm
})(Dogs)
