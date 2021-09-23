import axios from "axios";
import React from "react";
import styled from "styled-components"

const DivPokemon = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
` 

export default class App extends React.Component {
  state = {
    pokemons: [],
    picture: ""
  };

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );
    this.setState({ pokemons: response.data.results });
    
  };

  getPokePicture = async (event) => {
    
    const url = event.target.value;
    const response = await axios.get(`${url}`);
    this.setState({ picture: response.data.sprites.front_default });
  };

  render() {
    const pokeList = this.state.pokemons.map((poke) => {
      return (
        <option key={poke.name} value={poke.url}>
          {poke.name}
        </option>
      );
    });
    return (
      <DivPokemon>
        <h1>Pokemons</h1>
        <select onChange={this.getPokePicture}>
        <option>Selecione um Pokemon</option>
        {pokeList}</select>
          
        {this.state.picture  &&
          <img src={this.state.picture} alt="Foto do Pokemon">
          </img>
        }
      </DivPokemon>
    );
  }
}
