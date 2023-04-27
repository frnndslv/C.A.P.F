import { useState, useMemo } from 'react';
import {useNavigate} from 'react-router-dom';
import triangulo from '../../assets/imagens/triangulo-equilatero-8.png'

function Triangulo() {
  const navigate = useNavigate();
  const [altura, setAltura] = useState('');
  const [base, setBase] = useState('');
  const [valor, setValor] = useState('');
  const [addOnArea, setAddOnArea] = useState('');
  const [resultado, setResultado] = useState('');

  const handleOnClickVolta = () => navigate('/');

  const calcArea = useMemo(() => {
    const resTemp = (base * altura) / 2;
    const valorPercentual = addOnArea ? (resTemp * addOnArea) / 100 : 0;
    const resTotal = addOnArea ? resTemp + valorPercentual : 0;
    setResultado(addOnArea ? resTotal : resTemp);
    return addOnArea ? resTotal : resTemp;
  }, [altura, base, addOnArea]);
  
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
            Triangulo
          <img src={triangulo} alt="error1" title="Triangulo" className= "Triangulo" />
          <div>
            <div className='inputField'>
                Base
                <input className='input' type="text" value={base} onChange={e => setBase(e.target.value)} name="altura" />
                m
                Altura
                <input className='input' type="text" value={altura} onChange={e => setAltura(e.target.value)} name="largura" />
                m
            </div>
            <div className='inputField'>
                Acréscimo de percentual de Área
                <input className='input' type="text" value={addOnArea} onChange={e => setAddOnArea(e.target.value)} name="addOnArea" />
                {addOnArea}%
            </div>
            <div className='inputField'>
                Área
                {calcArea}
                m²
            </div>
            <div className='inputField'>
                Valor
                <input className='input' type="text" value={valor} onChange={e => setValor(e.target.value)} name="altura" />
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
  
  export default Triangulo;