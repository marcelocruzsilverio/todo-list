import styled from 'styled-components'

// import { Props } from '.'

// como nos estilos só preciso da propriedade ativo, vou criar um novo tipo que omite as outras duas contador e legenda
// type ApenasAtivo = Omit<Props, 'contador' | 'legenda'>

type Props = {
  $ativo: string
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid
    ${({ $ativo }) => ($ativo === 'true' ? '#1e90ff' : '#a1a1a1')};
  background-color: ${({ $ativo }) => ($ativo === 'true' ? '#fff' : '#fcfcfc')};
  color: ${({ $ativo }) => ($ativo === 'true' ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
