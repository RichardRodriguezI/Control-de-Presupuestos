import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

import { formatearFecha } from '../Helpers/Id';
import iconoAhorro from '../img/icono_ahorro.svg';
import iconoCasa from '../img/icono_casa.svg';
import iconoComida from '../img/icono_comida.svg';
import iconoGastos from '../img/icono_gastos.svg';
import iconoOcio from '../img/icono_ocio.svg';
import iconoSalud from '../img/icono_salud.svg';
import iconoSuscripciones from '../img/icono_suscripciones.svg';
import iconoGasto from '../img/nuevo-gasto.svg';


 const imagenesObj = {
    ahorro : iconoAhorro,
    casa : iconoCasa,
    comida : iconoComida,
    gastos : iconoGastos,
    ocio : iconoOcio,
    salud : iconoSalud,
    suscripciones : iconoSuscripciones,
    gasto : iconoGasto, 
 }

const Gasto = ({ gasto,setEditarGasto, eliminarGasto }) => {


const leadingActions = () => (
    <LeadingActions>
        <SwipeAction onClick={() => setEditarGasto(gasto)}>
            Editar
        </SwipeAction> 
    </LeadingActions>
)
const trailingActions = () => (
            <TrailingActions>
                <SwipeAction onClick={() => eliminarGasto(id)}
                  destructive={true}
                >
                    Eliminar
                </SwipeAction>
            </TrailingActions>
)



    const { categoria, nombre, cantidad, id,fecha } = gasto;
    return (  
         <SwipeableList>
            <SwipeableListItem 
             leadingActions={leadingActions()}
             trailingActions={trailingActions()}
            >
        <div className="gasto sombra">
            <div className="contenido-gasto">

                    <img 
                    src={imagenesObj[categoria]}
                    alt="icono del gasto"
                    />
                <div className="descripcion-gasto">
                    <p className="categoria">{categoria}</p>
                    <p className="nombre-gasto">{nombre}</p>
                    <p className="fecha-gasto">
                        Agregado el: {""}
                        <span>{formatearFecha(fecha)}</span>
                    </p>
             
                </div>
           
            </div>
            <p className="cantidad-gasto">${cantidad}</p> 
        </div>
        </SwipeableListItem>
        </SwipeableList>
    );
}
 
export default Gasto;