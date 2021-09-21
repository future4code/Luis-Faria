
import './App.css';
import styled from "styled-components"
import axios from "axios" 
import React from 'react';

const BotaoApagar = styled.button `
color: red;
cursor: pointer;
`

const EstilizacaoInput = styled.input `
  display: flexbox;
  margin-bottom: 20px;
`
const CadastroDiv = styled.div `
  display: flexbox;
  justify-content: center;
  
`
const headers = {
  headers: {
    Authorization: "luis-faria-maryam"
  }
};

export default class App extends React.Component {
  state = {
    nomeUsuario: "",
    emailUsuario: "",
    listaUsuarios: [],
    trocaTela: true
  }

  componentDidMount() {
    this.getAllUsers()
  }


  handleNomeUsuario = (event) => {
    this.setState({ nomeUsuario: event.target.value})
  }
  handleEmailUsuario = (event) => {
    this.setState({ emailUsuario: event.target.value})
  }
  botaoTrocaTela = () => {
  this.setState({trocaTela: !this.state.trocaTela})
  }
  createUser = () => {
    const url = 
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    const body = {
      name: this.state.nomeUsuario,
      email: this.state.emailUsuario
    }

    axios
      .post (url, body, headers)
      .then ((response) => {
        this.setState({nomeUsuario: ""})
        this.setState({emailUsuario: ""})
        alert("Usuário criado com sucesso!")
      })
      .catch ((error) => {
        alert(error.response.data.message)
      })
  }

  getAllUsers = () => {
    
    const url = 
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios
      .get(url, headers)
      .then((response) => {
        this.setState({listaUsuarios: response.data})
        console.log(response)
      })
  }

  deleteUser = (usuario) => { 
    const url = 
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id"
    const body ={
      id: usuario
    }
    axios
      .delete(url, body, headers)
      .then ((response) => {
        alert("Usuário deletado com sucesso!")
        let novoArray = this.state.listaUsuarios
        novoArray.filter(el => el.id !== usuario)
        this.setState({listaUsuarios: novoArray})
      })
      .catch ((error) => {
        alert(error.toString())
        console.log(error)
      })


  }
  
  
  render() {
    return (

    
      <div>
        
        <button onClick={this.botaoTrocaTela}>Aperte para trocar a tela</button>
        <CadastroDiv>
        {this.state.trocaTela?(<form> 
          <label>Nome: </label>
          <EstilizacaoInput 
          value={this.state.nomeUsuario}
          onChange={this.handleNomeUsuario}
          />
          <label>Email: </label>
          <EstilizacaoInput 
          value={this.state.emailUsuario}
          onChange={this.handleEmailUsuario}
          />
          <button onClick={this.createUser}>Salvar</button>
        </form> ): 
        (<div>
        <h1>Usuários cadastrados</h1>
        {this.state.listaUsuarios.map((usuario) => {
          return <li key={usuario.id}>{usuario.name} <BotaoApagar onClick={()=>this.deleteUser(usuario.id)}>X</BotaoApagar></li>
        } )} 
        </div>)}
        </CadastroDiv>
        
      </div>

      
    )
  }
}
