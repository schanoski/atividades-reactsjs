import React, {useEffect, useState} from 'react'

import useStore from './somaReducer'

function ReducerHook() {

  const [numero, setNumero] = useState('')
  const [segundoNumero, setSegundoNumero] = useState('')

  const [store, dispatch] = useStore()

  const somar = () =>{
    const numeroInt = parseInt(numero);
    const segundoNumeroInt = parseInt(segundoNumero);

    dispatch({
        type: 'SOMA',
        payload: numeroInt + segundoNumeroInt
    })
  }


  const subtrair = () =>{
    const numeroInt = parseInt(numero);
    const segundoNumeroInt = parseInt(segundoNumero);

    dispatch({
        type: 'SUBTRACAO',
        payload: numeroInt - segundoNumeroInt
    })
  }

  return (
    <div>
      Número1: <br/>
      <input type="text" value={numero} onChange={e => setNumero(e.target.value)} />
      <br/>
      Número2: <br/>
      <input type="text" value={segundoNumero} onChange={e => setSegundoNumero(e.target.value)} />
      <br/>
      <button onClick={somar}>Somar</button>
      <button onClick={subtrair}>Subtrair</button>
      <br/>
      Resultado: <br/>
      <input type="text" value={store.resultado} />
    </div>
  );
}

export default ReducerHook;
