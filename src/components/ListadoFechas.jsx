import Fiesta from "./Fiesta"



const ListadoFechas = ({eventos, setEvento, eliminarEvento}) => {


    return (

        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            { eventos && eventos.length ? (
                <>

                    <h2 className="font-black text-3xl text-center text-white">Listado Fechas</h2>
                    <p className="text-xl mt-5 mb-10 text-center text-white">Administra tu <span className="text-gray text-gray-500 font-bold">Agenda</span></p>
                    
                    { eventos.map( evento => (
                        <Fiesta 
                            key = {evento.id}
                            evento={evento}
                            setEvento={setEvento}
                            eliminarEvento={eliminarEvento}
                        />
                    ))}

                </>

            ) : (
                <>
                    <h2 className="font-black text-3xl text-center text-white">No hay Eventos</h2>
                    <p className="text-xl mt-5 mb-10 text-center text-white">Comienza agregando eventos <span className="text-gray text-gray-500 font-bold">y apareceran en este lugar</span></p>
                    
                </>
            )  }


            
            
        </div>
    
         
       
    )
}

export default ListadoFechas
