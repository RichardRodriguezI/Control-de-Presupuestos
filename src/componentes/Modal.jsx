import { useState,useEffect } from 'react';
import CerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje';

const Modal = ({setModal, modalAnimar,setmodalAnimar, guardarGastos, editarGasto , setEditarGasto}) => {



    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [cantidad, setCantidad] = useState(0)
    const [fecha, setFecha ] = useState("");
    const [id, setId ] = useState("");
    const [mensaje, setMensaje] = useState("")


    useEffect (() => {
        if(Object.keys(editarGasto).length > 0) {
           setNombre(editarGasto.nombre);
           setCantidad(editarGasto.cantidad);
           setCategoria(editarGasto.categoria);
           setFecha(editarGasto.fecha);
           setId(editarGasto.id);
          }
    }, [])

    const handleFormulario = e => {
        e.preventDefault();
        if([nombre, categoria, cantidad].includes("") ) {
             setMensaje('Todos los Campos son Obligatorios');

             setTimeout(() => {
                setMensaje("")
             }, 3000);

             return;
        }
        guardarGastos({nombre, cantidad, categoria,id,fecha})
    }

    const ocultarModal = () => {
        setmodalAnimar(false);
        setEditarGasto({})
        setTimeout(() => {
            setModal(false)
        }, 300);
    }

    return ( 
        <div className="modal">
                    <p>Desde Moddal</p>
                    <div className="cerrar-modal">
                        <img 
                        src={CerrarBtn}
                        alt="cerrar modal"
                        onClick={ocultarModal}
                        className="cursor-pointer"

                        />
                    </div>

                    <form 
                     onSubmit={handleFormulario}
                    className={ `formulario ${modalAnimar ? "animar" : "cerrar"}` }>
                        <legend>{editarGasto.nombre ? "Editar Gasto" :  "Nuevo Gasto"}
 </legend>
                        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje> }
                        <div className="campo">
                            <label htmlFor="nombre">Nombre Gasto</label>

                            <input
                            id='nombre'
                            type="text"
                            placeholder="añade el Nombre del Gasto"
                            value={nombre}
                            onChange={ e => setNombre(e.target.value) }
                            />
                            </div>
                        <div className="campo">
                        <label htmlFor="cantidad">Cantidad</label>

                         <input
                        id='cantidad'
                        type="number"
                        placeholder="Añade La cantidad del Gasto: ej.300"
                        value={cantidad}
                        onChange={ e => setCantidad(Number(e.target.value)) }
                        />
                        </div>

                        <div className="campo">
                            <label htmlFor="categoria">Categoria</label>
                            <select  id="categoria"
                                value={categoria}
                             onChange={ e => setCategoria(e.target.value) }              
                            >
                                <option value="">-- Seleccione</option>
                                <option value="ahorro">Ahorro</option>
                                <option value="comida">Comida</option>
                                <option value="casa"> Casa</option>
                                <option value="gasto">Gastos</option>
                                <option value="ocio">Ocio</option>
                                <option value="suscripciones">Suscripciones</option>
                            </select>
                        </div>
                        

                        <input 
                        type="submit" 
                        value={editarGasto.nombre ? "Guardar Cambios" : "Añadir Gasto"}
                        />
                    </form>
        </div>
     );
}
 
export default Modal;