import {useState, useEffect} from 'react'

function Filtros({filtro, setFiltro}) {
  return (
   <div className="filtros sombra contenedor">
        <form>
        <div className='campo'>
            <label > Filtrar Gastos</label>
        <select  id="categoria"
                                value={filtro}
                                onChange={ e => setFiltro(e.target.value) }              
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
    </form>
   </div>
  )
}

export default Filtros