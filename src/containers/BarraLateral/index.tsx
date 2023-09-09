import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import FiltroCard from '../../components/FiltroCard'
import { Botao, CampoDeBusca } from '../../styles'
import { CardContainer } from './styles'
import { Aside } from './styles'
import * as enums from '../../utils/enums/Importancia'

import { alterarTermo } from '../../store/reducers/filtro'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}

function BarraLateral({ mostrarFiltros }: Props) {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const navigate = useNavigate()

  return (
    <Aside>
      {mostrarFiltros ? (
        <>
          <CampoDeBusca
            type="text"
            placeholder="Buscar"
            value={termo}
            onChange={(e) => dispatch(alterarTermo(e.target.value))}
          />
          <CardContainer>
            <FiltroCard
              criterio="status"
              legenda="pendentes"
              classificacao={enums.Status.PENDENTE}
            />
            <FiltroCard
              criterio="status"
              legenda="concluídas"
              classificacao={enums.Status.CONCLUIDA}
            />
            <FiltroCard
              criterio="prioridade"
              legenda="urgentes"
              classificacao={enums.Prioridade.URGENTE}
            />
            <FiltroCard
              criterio="prioridade"
              legenda="importantes"
              classificacao={enums.Prioridade.IMPORTANTE}
            />
            <FiltroCard
              criterio="prioridade"
              legenda="normal"
              classificacao={enums.Prioridade.NORMAL}
            />
            <FiltroCard criterio="todas" legenda="todas" />
          </CardContainer>
        </>
      ) : (
        <Botao type="button" onClick={() => navigate('/')}>
          Voltar a lista de tarefas
        </Botao>
      )}
    </Aside>
  )
}

export default BarraLateral
