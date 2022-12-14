import React from 'react';
import Row from './row';

const Table = () => {
    let values = [
        {
            titulo: "Billy Eliot",
            duracion: 123,
            rating: 5,
            genero: ["Drama", "Comedia"],
            premios: 2
        },
        {
            titulo: "Alicia en el pais de las maravillas",
            duracion: 142,
            rating: 4.8,
            genero: ["Drama", "Accion", "Comedia"],
            premios: 3
        }
    ]


    return (
        <div className='container-fluid'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Duracion</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Premios</th>
                    </tr>
                </thead>
                <tbody>
                    {values.map(({titulo, duracion, rating, genero, premios}, i) => <Row titulo={titulo} duracion={duracion} rating={rating} genero={genero} premios={premios} key={titulo + i}/>)}
                </tbody>
                <tfoot>
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Duracion</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Premios</th>
                    </tr>
                </tfoot>
            </table>
        </div>

    );
}

export default Table;
