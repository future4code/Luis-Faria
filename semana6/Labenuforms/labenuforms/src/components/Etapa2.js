import styled from "styled-components";

const CentralizaDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

function Etapa2 () {
    return <CentralizaDiv>
        <h3>Etapa 2 - Informações do Ensino Superior</h3>
        <form>
            <label>
                <p>5. Qual curso?</p>
                <input type="text" name="name" />
            </label>
            <label>
                <p>6. Qual a unidade de ensino?</p>
                <input type="text" name="name" />
            </label>

        </form>
    </CentralizaDiv> 
}

export default Etapa2