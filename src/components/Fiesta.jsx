

const Fiesta = ({evento, setEvento, eliminarEvento}) => {


    const { fiesta, productor, email, whatsapp, fecha, detalles, id } = evento

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este evento');

        if(respuesta) {
            eliminarEvento(id)
        }
    }

    return (
        
        <div className=" mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700  uppercase ">Evento: <span className="font-normal normal-case">{fiesta}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase ">Productor: <span className="font-normal normal-case">{productor} </span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase ">Email: <span className="font-normal normal-case">{email}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase ">Whatsapp: <span className="font-normal normal-case">{whatsapp}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase ">Fecha: <span className="font-normal normal-case">{fecha}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase ">Detalles: <span className="font-normal normal-case">{detalles}</span></p>

            <div className="flex justify-between mt-10">
                <button type="button" className="bg-black py-2 px-10 hover:bg-gray-500 text-white font-bold uppercase rounded-lg "onClick={ () => setEvento(evento)} >Editar</button>
                <button type="button" className="bg-black py-2 px-10 hover:bg-gray-500 text-white font-bold uppercase rounded-lg "onClick={handleEliminar} >Eliminar</button>
            </div>

        </div>
   
    )
}

export default Fiesta
