import { useState, useEffect } from 'react'
import Header from './componentes/Header';
import Modal from './componentes/Modal';
import ListadoGastos from './componentes/ListadoGastos';
import Filtros from './componentes/Filtros';
import { generarId } from './Helpers/Id';
import ImgBtn from './img/nuevo-gasto.svg';


function App() {
const [presupuesto, setPresupuesto] = useState(
Number(localStorage.getItem("presupuesto")) ?? 0
);
const [isvalidPresupueso, setIsvalidPresupuesto] = useState(false);
const [modal, setModal ] = useState(false);

const [filtro, setFiltro] = useState("")
const [gastosFiltrados, setGastosFiltrados] = useState([])

const [modalAnimar, setmodalAnimar] = useState(false);
const [gastos, setGastos] = useState(
  localStorage.getItem('gastos')  ?  JSON.parse(localStorage.getItem('gastos')) :  []
);

const [editarGasto, setEditarGasto] = useState({})

useEffect(() => {
  if(Object.keys(editarGasto).length > 0) {
    setModal(true);
    
    setTimeout(() => {
        setmodalAnimar(true);
    }, 300);
  }
}, [editarGasto])


const guardarGastos = gasto => {
  if(gasto.id) {
   // Editar Gasto
   const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState )
   setGastos(gastosActualizados);
   setEditarGasto({})
  } else {
    //Nuevo Gasto
    gasto.id = generarId();
    setGastos([...gastos, gasto])
  }

      
  setmodalAnimar(false);

  setTimeout(() => {
      setModal(false)   
  }, 300);

}
const eliminarGasto = id => {
  const gastosActualizados = gastos.filter( gasto => gasto.id !== id );

  setGastos(gastosActualizados)
}


useEffect(() => {
  localStorage.setItem("presupuesto", presupuesto)
}, [presupuesto])

useEffect(() => {
  if(filtro) {
    const filtrados = gastos.filter( gasto => gasto.categoria === filtro )
    setGastosFiltrados(filtrados);  
  }
})
useEffect( () => {
  localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
},[gastos] )

useEffect( () => {
  const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0

  if(presupuestoLS > 0) {
    setIsvalidPresupuesto(true);
  }
}, [] )




const handleNuevoGasto = () => {
  setModal(true);
  setEditarGasto({})
  setTimeout(() => {
      setmodalAnimar(true);
  }, 300);
}

  return (

<div className={ modal ? 'fijar' : ''}> 

<Header
      gastos={gastos}
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isvalidPresupueso={isvalidPresupueso}
      setIsvalidPresupuesto={setIsvalidPresupuesto}
      setGastos={setGastos}
      />

                      


{isvalidPresupueso && (
    <>
    <main>
      <Filtros 
      filtro={filtro}
      setFiltro={setFiltro}
  
      />
      <ListadoGastos 
      gastos={gastos}
      setEditarGasto={setEditarGasto}
      eliminarGasto={eliminarGasto}
      gastosFiltrados={gastosFiltrados}
      filtro={filtro}
      />
    </main>
    <div className="nuevo-gasto">
         <img 
          src={ImgBtn}
          alt="icono nuevo gasto"
          onClick={handleNuevoGasto}
         />
        </div>
    </>
    
   
      )}

          {modal && <Modal 
          setModal={setModal}
          modalAnimar={modalAnimar}
          setmodalAnimar={setmodalAnimar}
          guardarGastos={guardarGastos}
          editarGasto={editarGasto}
          setEditarGasto={setEditarGasto}
          />}
  
</div>
                                         
      
  )
}

export default App
