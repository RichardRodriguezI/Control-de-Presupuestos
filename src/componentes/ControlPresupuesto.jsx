import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import swal from "sweetalert";

const ControlPresupuesto = ({gastos, presupuesto, setPresupuesto, setGastos, setIsvalidPresupuesto}) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado ] = useState(0);
    const [porcentaje, setPorcentaje ] = useState(0)
  
   useEffect( () => {
        const totalGasto = gastos.reduce( (total, gasto) =>  gasto.cantidad + total, 0);

        const totalDisponible = presupuesto - totalGasto
       
        setDisponible(totalDisponible);
        setGastado(totalGasto);

        // Calcular Porcentje Gastado
        const nuevoPorcentaje = (( ( presupuesto - totalDisponible  ) / presupuesto  ) * 100).toFixed(2);
        setTimeout( () => {
            setPorcentaje(nuevoPorcentaje)
        }, 1500 )
    }, [gastos])
   
    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }
    const handleResetApp = () => {
     swal({
        title: "Resetear",
        text: "(Estas Seguro de resetear la app?",
        icon: "warning",
        buttons: ["No", "Si"]
     }).then( respuesta => {
        if(respuesta === true) {
            swal({
            text: "El Archivo se ha borrado con exito",
            icon: "success", timer:"2000"
     })
            setPresupuesto(0)
            setGastos([])
            setIsvalidPresupuesto(false)
        }
     })


    }

    return (  
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
                <div>
                    <CircularProgressbar
                    styles={buildStyles( {
                        pathColor: porcentaje > 100 ? "#DC2626" :"#3B82F6" ,
                        trailColor: "#F5F5F5",
                        textColor: porcentaje > 100 ? "#DC2626" :"#3B82F6" ,
                    } )}
                     value={porcentaje}
                     text={`${porcentaje}% Gastado`}
                    />
                </div>
                <div className="contenido-presupuesto">
                    <button
                    className="reset-app"
                    type="button"
                    onClick={handleResetApp}
                    >
                        Resetear App
                    </button>
                    <p>
                        <span>Presupuesto:</span> {formatearCantidad(Number(presupuesto))}
                    </p>

                    <p className={`${disponible < 0 ? "negativo" : ""}`}>
                        <span>Disponible:</span> {formatearCantidad(disponible)}
                    </p>


                    <p>
                        <span>Gastado:</span> {formatearCantidad(gastado)}
                    </p>

                </div>
        </div>
    );
}
 
export default ControlPresupuesto;