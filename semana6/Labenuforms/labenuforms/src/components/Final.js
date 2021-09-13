import styled from "styled-components";

const CentralizaDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

function Final () {
    return <CentralizaDiv> 
        <h3>O Formulário Acabou</h3>
        <p>Muito obrigado por participar! Entraremos em contrato!</p>
    </CentralizaDiv>
}

export default Final