import styled from 'styled-components'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 16px;
`
export const Aside = styled.div`
  padding: 16px;
  background-color: #eee;
  height: 100vh;

  @media (max-width: 768px) {
    height: auto;
  }
`
