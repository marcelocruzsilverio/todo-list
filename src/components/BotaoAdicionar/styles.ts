import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const BotaoAdicionarTarefa = styled(Link)`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-color: ${variaveis.verde};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  font-size: 40px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 32px;
    width: 32px;
    font-size: 24px;
    position: fixed;
    bottom: 8px;
    right: 8px;
  }
`
