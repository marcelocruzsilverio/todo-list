import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, Main, ResultadoParagrafo as Titulo } from '../../styles'
import { CampoDeBusca } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Importancia'
// import Tarefa from '../../models/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

function Formulario() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridadeDaTarefa, setPrioridadeDaTarefa] = useState(
    enums.Prioridade.NORMAL
  )

  // const id = Number(crypto.randomUUID())
  // console.log(id)

  const cadastrarTarefa = (e: FormEvent) => {
    e.preventDefault()
    // const tarefaParaAdicionar = new Tarefa(
    //   titulo,
    //   prioridadeDaTarefa,
    //   enums.Status.PENDENTE,
    //   descricao,
    //   9
    // )

    const tarefaParaAdicionar = {
      titulo,
      prioridade: prioridadeDaTarefa,
      status: enums.Status.PENDENTE,
      descricao
    }

    dispatch(cadastrar(tarefaParaAdicionar))
    navigate('/')
  }

  return (
    <Main>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <CampoDeBusca
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <CampoDeBusca
          as="textarea"
          placeholder="Descrição da tarefa"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                type="radio"
                name="prioridade"
                id={prioridade}
                value={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
                onChange={(e) =>
                  setPrioridadeDaTarefa(e.target.value as enums.Prioridade)
                }
              />
              <label htmlFor={prioridade}> {prioridade}</label>
            </Opcao>
          ))}
          {/* <input name="prioridade" type="radio" id="urgente" />{' '}
          <label htmlFor="urgente">Urgente</label>
          <input name="prioridade" type="radio" id="importante" />{' '}
          <label htmlFor="importante">Importante</label>
          <input name="prioridade" type="radio" id="normal" />{' '}
          <label htmlFor="normal">Normal</label> */}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </Main>
  )
}

export default Formulario
