import { useDispatch, useSelector } from 'react-redux'
import * as enums from '../../utils/enums/Importancia'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

type Props = {
  legenda: string
  criterio: 'status' | 'prioridade' | 'todas'
  classificacao?: enums.Prioridade | enums.Status
}

function FiltroCard({ legenda, criterio, classificacao }: Props) {
  const dispatch = useDispatch()
  const estadoFiltro = useSelector((state: RootReducer) => state.filtro)
  const estadoTarefas = useSelector((state: RootReducer) => state.tarefas)

  function verificaCardAtivo() {
    const mesmoCriterio = estadoFiltro.criterio === criterio
    const mesmaClassificacao = estadoFiltro.classificacao === classificacao

    return mesmoCriterio && mesmaClassificacao
  }

  function contarTarefas() {
    if (criterio === 'todas') return estadoTarefas.itens.length
    if (criterio === 'prioridade') {
      return estadoTarefas.itens.filter(
        (item) => item.prioridade === classificacao
      ).length
    }
    if (criterio === 'status') {
      return estadoTarefas.itens.filter((item) => item.status === classificacao)
        .length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        classificacao
      })
    )
  }

  const ativo = verificaCardAtivo()
  const contador = contarTarefas()

  return (
    <S.Card $ativo={ativo.toString()} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
