import React from "react";
import styled from 'styled-components'

const DivCardPequeno = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`
const ImagemLogo = styled.img `
    width: 30px;
`
const PropNome = styled.h4 `
padding: 10px;
`



function CardPequeno(props) {
    return (
        <DivCardPequeno>
            <ImagemLogo src={ props.imagem } />
            <PropNome>{ props.nome }</PropNome>
            <p>{ props.descricao }</p>
            
        </DivCardPequeno>

    )
}

export default CardPequeno