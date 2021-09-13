import styled from "styled-components";

const CentralizaDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

function Etapa3() {
    return <CentralizaDiv>
        <h3>Etapa 3 - Informações Gerais de Ensino</h3>
        <form>
            <label>
                <p>5. Por que você não terminou um curso de graduação</p>
                <input type="text" name="name" />
            </label>
            <label>
                <p>6. Você fez algum curso complementar?</p>
                <input type="text" name="name" />
            </label>
        </form>
    </CentralizaDiv>
}

export default Etapa3