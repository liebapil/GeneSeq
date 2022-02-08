import React from 'react';
import { Link } from 'react-router-dom'

export default function SeqRender(props) {
    return (
        <div >
            <Link className='seq_link' to={`http://localhost:8000/gene/${props.id}`}>
                <p>Gene Name: {props.gene_name}</p>
                <p>Sequence one: {props.sequence_one}</p>
                <p>Sequence two: {props.sequence_two}</p>
            </Link>

        </div>
    )
}
