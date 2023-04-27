import { useState, useMemo } from 'react';
import {useNavigate} from 'react-router-dom';
import trapesio from '../../assets/imagens/trapesio.png'

function Trapesio() {
  const navigate = useNavigate();
    const [altura, setAltura] = useState('');
    const [bmenor, setBMenor] = useState('');
    const [bmaior, setBMaior] = useState('');
    const [addOnArea, setAddOnArea] = useState('');
    const [valor, setValor] = useState('');
    const [resultado, setResultado] = useState('');

    const handleOnClickVolta = () => navigate('/');

    const calcArea = useMemo(() => {
        const resTemp = ((bmenor + bmaior) / 2) * altura;
        const valorPercentual = addOnArea ? (resTemp * addOnArea) / 100 : 0;
        const resTotal = addOnArea ? resTemp + valorPercentual : 0;
        setResultado(addOnArea ? resTotal : resTemp);
        return addOnArea ? resTotal : resTemp;
    }, [bmenor, bmaior, altura, addOnArea]);
    
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
            Trapesio
          <img src={trapesio} alt="error1" title="Trapesio" className= "Trapesio" />
          <div>
            <div className='inputField'>
                Base menor
                <input type="text" value={bmenor} onChange={e => setBMenor(e.target.value)} name="altura" />
                m
                Base maior
                <input type="text" value={bmaior} onChange={e => setBMaior(e.target.value)} name="largura" />
                m
                Altura
                <input type="text" value={altura} onChange={e => setAltura(e.target.value)} name="largura" />
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
  
  export default Trapesio;