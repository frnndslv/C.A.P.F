import { useState, useMemo } from 'react';
import {useNavigate} from 'react-router-dom';
import circulo from '../../assets/imagens/icone-cercle-noir.png'

function Circulo() {
  const navigate = useNavigate();
  const [raio, setRaio] = useState('');
  const [valor, setValor] = useState('');
  const [addOnArea, setAddOnArea] = useState('');
  const [resultado, setResultado] = useState('');

  const handleOnClickVolta = () => navigate('/');

  const calcArea = useMemo(() => {
    const pi = 3.14
    const resTemp = (raio * raio) * pi;
    const valorPercentual = addOnArea ? (resTemp * addOnArea) / 100 : 0;
    const resTotal = addOnArea ? resTemp + valorPercentual : 0;
    setResultado(addOnArea ? resTotal : resTemp);
    return addOnArea ? resTotal : resTemp;
  }, [raio, addOnArea]);
  
  const calcPreco = useMemo(() => {
      return resultado * valor;
  }, [valor, resultado]);


    return (
      <div className="App">
        <h1 className='title'>C.A.P.F-(Calculadora de Área e Preço por Figura.)</h1>
        <div className='btn-back' onClick={handleOnClickVolta}>
          {'<-Voltar'}
        </div>
        <div className='container'>
            Circulo
          <img src={circulo} alt="error1" title="Circulo" className= "Circulo" />
          <div>
            <div className='inputField'>
                Raio
                <input type="text" value={raio} onChange={e => setRaio(e.target.value)} name="altura" />
                m
            </div>
            <div className='inputField'>
                Acréscimo de percentual de Área
                <input type="text" value={addOnArea} onChange={e => setAddOnArea(e.target.value)} name="addOnArea" />
                {addOnArea}%
            </div>
            <div className='inputField'>
                Área
                {calcArea}
                m²
            </div>
            <div className='inputField'>
                Valor
                <input type="text" value={valor} onChange={e => setValor(e.target.value)} name="altura" />
            </div>
            <div className='inputField'>
                R$
                {calcPreco}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Circulo;