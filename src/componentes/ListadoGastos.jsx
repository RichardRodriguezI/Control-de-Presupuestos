import Gasto from './Gasto';
const ListadoGastos = ({gastos, setEditarGasto, eliminarGasto, filtro, gastosFiltrados}) => {
    return ( 
        <div className="listado-gastos contenedor">
         
           { filtro ? (
              <>
                   <h2>{gastosFiltrados.length ? 'Gastos' : 'No Hay Gastos En estas Categoria'}</h2>
                   {gastosFiltrados.map ( gasto => (
                <Gasto 
                key={gasto.id}
                gasto={gasto}
                setEditarGasto={setEditarGasto}
                eliminarGasto={eliminarGasto}
                />
             ) )}
              </>
           )  : (
            <>
            <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos'}</h2>
            {gastos.map ( gasto => (
         <Gasto 
         key={gasto.id}
         gasto={gasto}
         setEditarGasto={setEditarGasto}
         eliminarGasto={eliminarGasto}
         />
      ) )}
       </>
           )  }
  
        </div>

     );
}
 
export default ListadoGastos;