
const Mensaje = ({alerta}) => {

    const {msg, tipo} = alerta

  return (
    <>
    <div className={`alerta ${tipo}`}>{msg}</div>
    </>
  )
}

export default Mensaje