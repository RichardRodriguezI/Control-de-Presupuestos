import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({presupuesto, setPresupuesto, setIsvalidPresupuesto, isvalidPresupueso, gastos,setGastos}) => {



    return (  
        <header>
                     <h1>Planificador de Gastos</h1>
                { isvalidPresupueso ?  (
                   <ControlPresupuesto 
                   presupuesto={presupuesto}
                   gastos={gastos}
                   setGastos={setGastos}
                   setPresupuesto={setPresupuesto}
                   setIsvalidPresupuesto={setIsvalidPresupuesto}
                   />
                
                ) :  (      
                          <NuevoPresupuesto
                          presupuesto={presupuesto}
                          setPresupuesto={setPresupuesto}
                          setIsvalidPresupuesto={setIsvalidPresupuesto}
                    />
                 )}


        </header>
    );
}
 
export default Header;