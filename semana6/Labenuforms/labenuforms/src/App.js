import logo from './logo.svg';
import './App.css';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'
import styled from 'styled-components'
import React from 'react';

const CentralizaDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
const Botao = styled.button `
    margin-top: 20px;
`


export default class App extends React.Component {
  state = { 
    etapa: 1, 
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1/>;
      case 2: 
        return <Etapa2/>;
      case 3: 
        return <Etapa3/>;
      case 4:
        return <Final/>;

    }
  }

  irParaProximaEtapa = () => {
    this.setState({etapa: this.state.etapa +1})
  }
  
  render() {
    return <CentralizaDiv>
      {this.renderizaEtapa()}
      {this.state.etapa < 4 && (<Botao onClick={()=> {this.irParaProximaEtapa()}} name="button">Próxima Etapa</Botao>)}
    
    </CentralizaDiv>
  }
}

