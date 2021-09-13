import React from 'react'
import styled from 'styled-components'

const CentralizaDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
    

export default class Etapa1 extends React.Component {
    state = {
        escolaridade: 0
    }
    render() {
        return <CentralizaDiv>
            <h3> Etapa 1 - Dados Gerais</h3>
            <form>
                <label>
                    <p>1. Qual o seu nome?</p>
                    <input type="text" name="name" />
                </label>
                <label>
                    <p>2. Qual a sua idade?</p>
                    <input type="text" name="name" />
                </label>
                <label>
                    <p>3. Qual o email?</p>
                    <input type="text" name="name" />
                </label>
                <label>
                    <p>4. Qual a sua escolaridade?</p>
                    <select onChange={(event)=>{this.setState({escolaridade: event.target.value})}} value={this.state.escolaridade} >
                        <option value="0">Ensino médio incompleto</option>
                        <option value="1">Ensino médio completo</option>
                        <option value="2">Ensino superior incompleto</option>
                        <option value="3">Ensino superior completo</option>
                    </select>
                    
                </label>
            </form>

        </CentralizaDiv>
    }
}



