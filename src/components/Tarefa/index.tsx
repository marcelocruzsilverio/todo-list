import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './styles'
import { Botao } from '../../styles'

// import * as enums from '../../utils/enums/Importancia'

import { alteraStatus, remover, salvar } from '../../store/reducers/tarefas'
import { useDispatch } from 'react-redux'
import TarefaClass from '../../models/Tarefa'
import { BotaoSalvar } from '../../styles'

import * as enums from '../../utils/enums/Importancia'

type Props = TarefaClass

// type Props = {
//   id: number
//   titulo: string
//   //como as propriedades prioridade e status foram transformadas em enums, precisamos alterar aqui também
//   // prioridade: string
//   // status: string
//   prioridade: enums.Prioridade
//   status: enums.Status
//   descricao: string
// }

function Tarefa({ id, titulo, prioridade, status, descricao }: Props) {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricaoTarefa, setDescricaoTarefa] = useState('')

  function handleClick() {
    // aqui estamos passando o estaEditando para verdadeiro
    setEstaEditando((estaEditando) => !estaEditando)
    // aqui o textarea está recebendo a descrição que está lá no objeto no estado inicial
    setDescricaoTarefa(descricao)
  }

  useEffect(
    function () {
      if (descricao.length >= 0) {
        // aqui o textarea está recebendo a descrição que está lá no objeto no estado inicial, caso exista uma descrição preenchida
        setDescricaoTarefa(descricao)
      }
    },
    [descricao]
  )

  function alteraStatusTarefa(ev: ChangeEvent<HTMLInputElement>) {
    dispatch(alteraStatus({ id, finalizado: ev.target.checked }))
  }

  return (
    <S.CardTarefa>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alteraStatusTarefa}
        />
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag $parametro="prioridade" $prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag $parametro="status" $status={status}>
        {status}
      </S.Tag>
      <S.DescricaoTarefa
        disabled={!estaEditando}
        value={descricaoTarefa}
        onChange={(e) => setDescricaoTarefa(e.target.value)}
      />
      {estaEditando ? (
        <>
          <BotaoSalvar
            onClick={() => {
              dispatch(
                salvar({
                  descricao: descricaoTarefa,
                  id,
                  prioridade,
                  status,
                  titulo
                })
              )
              setEstaEditando(false)
            }}
          >
            Salvar
          </BotaoSalvar>
          <S.BotaoCancelarRemover onClick={handleClick}>
            Cancelar
          </S.BotaoCancelarRemover>
        </>
      ) : (
        <>
          <Botao onClick={handleClick}>Editar</Botao>
          <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
            Remover
          </S.BotaoCancelarRemover>
        </>
      )}
    </S.CardTarefa>
  )
}

export default Tarefa
