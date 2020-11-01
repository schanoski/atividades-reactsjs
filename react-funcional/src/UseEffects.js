import React, {useEffect, useState} from 'react'

function UseEffect() {

  const [numero, setNumero] = useState('')
  const [segundoNumero, setSegundoNumero] = useState('')
  const [resultado, setResultado] = useState()

  const somar = () =>{
    const numeroInt = parseInt(numero);
    const segundoNumeroInt = parseInt(segundoNumero);

    setResultado(numeroInt + segundoNumeroInt)
  }

  useEffect( () =>{
    console.log('variável número ', numero)
  })

  return (
    <div>
      Número1: <br/>
      <input type="text" value={numero} onChange={e => setNumero(e.target.value)} />
      <br/>
      Número2: <br/>
      <input type="text" value={segundoNumero} onChange={e => setSegundoNumero(e.target.value)} />
      <br/>
      <button onClick={somar}>Somar</button><br/>
      Resultado: <br/>
      <input type="text" value={resultado} />
    </div>
  );
}

export default UseEffect;
