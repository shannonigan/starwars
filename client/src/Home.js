import React from 'react';
import axios from 'axios';
import './Home.css';


class Home extends React.Component {
  state = {
    people: [],
  }
  
  async getPeople() {
    let planet = []

    await axios.get('https://swapi.co/api/people?page=1').then( res => {let {results} = res.data; this.setState({ people: results, }); console.log(res.data)})
    await axios.get('https://swapi.co/api/people?page=2').then( res => {let {results} = res.data; this.setState({ people: [...this.state.people, ...results], }); console.log(res.data)})
    

    // convert url into planet names, do so with logic math stuff

    // setplanet(planet)
   }

  componentDidMount(){
    this.getPeople()
  }

  render() {
    const {people} = this.state
    return (
      <>
        <div className="header">
          <p className="headtext"> STAR WARS </p>
        </div>
        <div className="body">
          {this.state.people.map(p => {

            return(
              <div key={p.url}>
                <p> {p.name} </p>
                <p> {p.homeworld} </p>
              </div>
            )
          })}
        </div>
      </>
    )
  } 
}
  

export default Home;


{/* <div className="row1">
            <div className="card">
              <p className="text"> person </p>
            </div>
            <div className="card">
              <p className="text"> person </p>
            </div>
            <div className="card">
              <p className="text"> person </p>
            </div>
            <div className="card">
              <p className="text"> person </p>
            </div>
          </div>
          
          <div className="row2">
            <div className="card">
              <p className="text"> person </p>
            </div>
            <div className="card">
              <p className="text"> person </p>
            </div>
            <div className="card">
              <p className="text"> person </p>
            </div>
            <div className="card">
              <p className="text"> person </p>
            </div>
          </div> */}