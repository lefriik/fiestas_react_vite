import { useState, useEffect } from "react";
import Error from './Error'


const Formulario = ({eventos, setEventos, evento, setEvento}) => {

    const [fiesta, setFiesta] = useState('');
    const [productor, setProductor] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [fecha, setFecha] = useState('');
    const [detalles, setDetalles] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if( Object.keys(evento).length > 0 ) {
            setFiesta(evento.fiesta)
            setProductor(evento.productor)
            setEmail(evento.email)
            setWhatsapp(evento.whatsapp)
            setFecha(evento.fecha)
            setDetalles(evento.detalles)
        }else {
            console.log('no hay nada')
        }
    }, [evento])

    

    const generarId = () => {

        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)

        return random + fecha

    }


    const handleSubmit = (e) => {
        e.preventDefault();

        // Validacion del formulario
        if([ fiesta, productor, email, whatsapp, fecha, detalles ].includes('')) {

            setError(true)
            return;
        }

        setError(false)

        // Objeto de Eventos
        const objetoEvento = {
            fiesta, 
            productor, 
            email, 
            whatsapp, 
            fecha, 
            detalles
        }


        if(evento.id) {
            // Editando el registro
            objetoEvento.id = evento.id
            const eventosActualizados = eventos.map( eventoState => eventoState.id === evento.id ? objetoEvento : eventoState )           
            setEventos(eventosActualizados)
            setEvento({})
        
        }else {
            // Nuevo registro
            objetoEvento.id = generarId();
            setEventos([...eventos, objetoEvento]);
        }

        

        // Reiniciar el form
        setFiesta('')
        setProductor('')
        setEmail('')
        setWhatsapp('')
        setFecha('')
        setDetalles('')

      
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
           <h2 className="font-black text-3xl text-center text-white">Fechas</h2> 

            <p className="text-lg mt-5 text-center mb-10 text-white">Añade Eventos y <span className="text-gra text-gray-500 font-bold">Administralos</span></p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

                { error && <Error mensaje= 'Todos los campos son obligatorios' /> }
                <div className="mb-5">
                    <label htmlFor="evento" className="block text-gray-700 uppercase font-bold ">Evento</label>
                    <input id="evento" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre del Evento" value={fiesta} onChange={ (e) => setFiesta(e.target.value) } />
                </div>
                <div className="mb-5">
                    <label htmlFor="productor" className="block text-gray-700 uppercase font-bold ">Productor </label>
                    <input id="productor" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre del Productor" value={productor} onChange={ (e) => setProductor(e.target.value) } />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold ">Email </label>
                    <input id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="Email del Productor" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div className="mb-5">
                    <label htmlFor="telefono" className="block text-gray-700 uppercase font-bold ">Whatsapp </label>
                    <input id="telefono" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="number" placeholder="Telefono" value={whatsapp} onChange={ (e) => setWhatsapp(e.target.value) }/>
                </div>
                <div className="mb-5">
                    <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold ">Fecha </label>
                    <input id="fecha" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" value={fecha} onChange={ (e) => setFecha(e.target.value) } />
                </div>
                <div className="mb-5">
                    <label htmlFor="detalles" className="block text-gray-700 uppercase font-bold ">Detalles </label>
                    <textarea id="detalles" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Detalles del Evento" value={detalles} onChange={ (e) => setDetalles(e.target.value) }/>
                </div>

                <input type="submit" className="bg-black  w-full p-3 text-white font-bold uppercase hover:bg-gray-500 cursor-pointer transition-all rounded-lg" value={ evento.id ? 'Editar Evento' : 'Agregar Evento' } />
            </form>
        </div>
    )
}

export default Formulario
