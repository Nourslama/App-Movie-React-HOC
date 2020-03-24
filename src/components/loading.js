import React, { Component } from 'react'
import Movie from './MovieContainers'
import Spinner from './spinner'

const ListWithLoading = Spinner(Movie);

export default class App extends React.Component {
    constructor(props) {
        super(props)
 this. state = {
    loading: false,
    repos: null
  }
  


};
  componentDidMount() {
   
    this.setState({ loading: true });
    fetch(`https://api.github.com/users/farskid/repos`)
      .then(json => json.json())
      .then(repos => {setTimeout(() => {
        this.setState({ loading: false, repos: repos })},5000)
      });
  }
render() {
    return (
      <ListWithLoading isLoading={this.state.loading} repos={this.state.repos} />
    )
  }
}
