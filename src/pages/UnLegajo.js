import React, { useState, useEffect } from 'react';
import { Link, useParams, useResolvedPath } from 'react-router-dom';

const UnLegajo = () => {
    const { legajoId } = useParams();
    console.log(useParams());
    console.log(legajoId);

    const [expe, setExpe] = useState([]);
    const [partes, setPartes] = useState([]);
    const URL = `http://localhost:9090/mpasearch/getUnExpe/${legajoId}`
    const showData = async ()=> {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data.return[0])
        setExpe(data.return[0])
       }

    const URL2 = `http://localhost:9090/mpasearch/getPartesExpe/${legajoId}`
    const showPartes = async ()=> {
        const response = await fetch(URL2)
        const data = await response.json()
        console.log(data.return)
        setPartes(data.return)
        }
    
    useEffect(() => {
        showData();
        showPartes();
    }, []);

    return (
        <div>
            <h4>UN LEGAJO</h4>
            <h5>{legajoId}</h5>
            <Link to='/listado'>volver al listado</Link>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='row'>
                            <h4> Expediente Numero</h4>
                            <h2> {expe.nro_prev}</h2>
                        </div>
                        <div className='row'>
                        <div class="card text-center">
                            <div className="card-header">
                                LOCALIDAD : {expe.localidad_hecho}
                                <td></td>
                                {expe.localidad_hecho = "" ? expe.localidad_hecho : 'SIN LOCALIDAD'}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Detalle del hecho</h5>
                                <p className="card-text">Seccional donde se radico la denuncia.</p>
                                <a href="#" className="btn btn-primary">Ver ubicación</a>
                            </div>
                            <div className="card-footer text-muted">
                                {expe.prev_fecha}
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <div className='css-worwle'>
                            <h4> RELATO DEL  HECHO</h4>
                            {expe.relatos_hecho}
                         </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h4>Participantes</h4>
                        <table className='table table-bordered table-dark'>
                            <thead>
                                <tr>
                                    <th>NOMBRE</th>
                                    <th>DNI</th>
                                    <th>BARRIO</th>
                                </tr>
                            </thead>
                            <tbody>
                                {partes.map( (parte) => (
                                    <tr key={parte.idprev_ditital_partes}>
                                        <td>{parte.nombre}  {parte.apellido}</td>
                                        <td className='table-warning'>{parte.dni}</td>
                                        <td>{parte.barrio}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default UnLegajo;
