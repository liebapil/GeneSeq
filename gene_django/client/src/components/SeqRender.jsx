import React from 'react';
// import { Link } from 'react-router-dom'
import { useState } from "react"

export default function SeqRender(props) {
    const [update, setUpdate] = useState(false)
    const [showForm, toggleShowForm] = useState(false)
    const [deleteSeq, setDeleteSeq] = useState('')

    const handleupdate = async (e) =>{
        e.preventDefault()
    }

    return (
        <div >
            <div>
            {/* <Link className='seq_link' to={`http://localhost:8000/gene/${props.id}`}> */}
                <p>Gene Name: {props.gene_name}</p>
                <p>Sequence one: {props.sequence_one}</p>
                <p>Sequence two: {props.sequence_two}</p>
            {/* </Link> */}
                <button>Delete</button>
                <button>Edit</button>
            </div>
        </div>
    )
}
