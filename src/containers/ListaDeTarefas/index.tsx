import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { Main, ResultadoParagrafo } from '../../styles'
import Tarefa from '../../components/Tarefa'
// import * as enums from '../../utils/enums/Importancia'

// criei o tipo tarefas e exportei para reducer
// export type Tarefas = {
//   id: number
//   titulo: string
//   prioridade: enums.Prioridade
//   status: enums.Status
//   descricao: string
// }

// const tarefas = [
//   {
//     titulo: 'Estudar TypeScript',
//     descricao: 'Ver a aula 3 da EBAC',
//     prioridade: enums.Prioridade.IMPORTANTE,
//     status: enums.Status.PENDENTE
//   },
//   {
//     titulo: 'Pagar a conta de internet',
//     descricao: 'Baixar fatura no gmail',
//     // prioridade: 'urgente',
//     // status: 'concluída'
//     prioridade: enums.Prioridade.URGENTE,
//     status: enums.Status.CONCLUIDA
//   },
//   {
//     titulo: 'Ir para a academia',
//     descricao: 'Fazer treino B',
//     // prioridade: 'importante',
//     // status: 'pendente'
//     prioridade: enums.Prioridade.IMPORTANTE,
//     status: enums.Status.PENDENTE
//   }
// ]

function ListaDeTarefas() {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, classificacao } = useSelector(
    (state: RootReducer) => state.filtro
  )

  function filtraTarefas() {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) =>
          item.titulo.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === classificacao
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === classificacao
        )
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const funcaoFiltraTarefas = filtraTarefas()

  return (
    <Main>
      <ResultadoParagrafo>
        {termo
          ? `Busncado por: "${termo}"`
          : ' Digite a palavra chave no campo de busca!'}
      </ResultadoParagrafo>

      <ResultadoParagrafo>
        {funcaoFiltraTarefas.length} tarefa(s) marcada(s) como: {criterio}{' '}
        {classificacao}
      </ResultadoParagrafo>

      <ul>
        {funcaoFiltraTarefas.map((t) => (
          <li key={t.id}>
            <Tarefa
              id={t.id}
              titulo={t.titulo}
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </Main>
  )
}

export default ListaDeTarefas
