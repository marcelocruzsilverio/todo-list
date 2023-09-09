import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;

  @media (max-width: 768px) {
    display: block;
  }
`

export default EstiloGlobal

export const Main = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: auto;
`
export const ResultadoParagrafo = styled.p`
  display: block;
  margin-top: 16px;
  font-size: 18px;
  font-weight: bold;
`
export const CampoDeBusca = styled.input`
  border-radius: 8px;
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  border-color: #666666;
  color: #666666;
  width: 100%;
`

export const Botao = styled.button`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;

  @media (max-width: 768px) {
    margin-left: 8px;
  }
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
