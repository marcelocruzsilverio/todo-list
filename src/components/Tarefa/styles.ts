import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Importancia'
import { Botao } from '../../styles'

// type TagProps = {
//   prioridade?: string
//   status?: string
// }

// function retornaCorDeFundo(props: TagProps): string {
//   if ('status' in props) {
//     if (props.status === 'pendente') return variaveis.amareloClaro
//     if (props.status === 'concluída') return variaveis.verde
//   } else if ('prioridade' in props) {
//     if (props.prioridade === 'urgente') return variaveis.vermelho
//     if (props.prioridade === 'importante') return variaveis.amareloEscuro
//   }

//   return '#ccc'
// }

// usando os enums
type TagProps = {
  $prioridade?: enums.Prioridade
  $status?: enums.Status
  $parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.$parametro === 'status') {
    if (props.$status === enums.Status.PENDENTE) return variaveis.amareloClaro
    if (props.$status === enums.Status.CONCLUIDA) return variaveis.verde
  } else {
    if (props.$prioridade === enums.Prioridade.URGENTE)
      return variaveis.vermelho
    if (props.$prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.amareloEscuro
  }

  return '#ccc'
}

export const CardTarefa = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-top: 40px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    /* align-items: center; */
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
  background-color: ${(props) => retornaCorDeFundo(props)};
`

export const DescricaoTarefa = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin: 16px 0;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid, rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

// aqui estou criando o BotaoSalvar que vai ter todas as propriedades do Botao estilizado
// export const BotaoSalvar = styled(Botao)`
//   background-color: ${variaveis.verde};
// `

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
