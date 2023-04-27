import { useState, useMemo } from 'react';
import {useNavigate} from 'react-router-dom';
import quadrado from '../../assets/imagens/Quadrado-Formas-PNG.png';

function Quadrado() {
    const navigate = useNavigate();
    const [lado, setLado] = useState('');
    const [valor, setValor] = useState('');
    const [addOnArea, setAddOnArea] = useState('');
    const [resultado, setResultado] = useState('');

    const handleOnClickVolta = () => navigate('/');

    const calcArea = useMemo(() => {
        const resTemp = lado * lado;
        const valorPercentual = addOnArea ? (resTemp * addOnArea) / 100 : 0;
        const resTotal = addOnArea ? resTemp + valorPercentual : 0;
        setResultado(addOnArea ? resTotal : resTemp);
        return addOnArea ? resTotal : resTemp;
    }, [lado, addOnArea]);
    
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
            Quadrado
            <img src={quadrado} alt="error1" title="Quadrado" className= "Quadrado" />
            <div>
                <div className='inputField'>
                    Lado
                    <input className='input' type="text" value={lado} onChange={e => setLado(e.target.value)} name="altura" />
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
  
  export default Quadrado;
  