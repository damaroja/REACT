


import { useState } from "react"
import Mensaje from "./Mensaje"


const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [alerta, setAlerta] = useState({})



    const handleSubmit = e => {
        e.preventDefault()
        if (!Number(presupuesto) || Number(presupuesto) < 1) {
            setAlerta({
                msg: 'El presupuesto es incorrecto',
                tipo: 'error'
            })
            setTimeout(() => {
                setAlerta({})
            }, 3000);
            setIsValidPresupuesto(false)
            return
            
        }
        setIsValidPresupuesto(true)
    }



  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario" onSubmit={handleSubmit}>
        { alerta.msg ? <Mensaje alerta={alerta} /> : null }
            <div className="campo">
                <label htmlFor="presupuesto">
                    Ingresar presupuesto
                    <input
                        type="number"
                        className="nuevo-presupuesto "
                        placeholder="Ingresar presupuesto"
                        id="presupuesto"
                        min="0"
                        value={presupuesto}
                        onChange={e => setPresupuesto(e.target.value)}
                    />
                </label>
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Definir presupuesto" 
            />

        </form>
    </div>
  )
}

export default NuevoPresupuesto