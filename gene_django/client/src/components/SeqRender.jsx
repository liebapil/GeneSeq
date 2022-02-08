import axios from 'axios';
import React from 'react';
// import { Link } from 'react-router-dom'
import { useState } from "react"
import { useParams } from "react-router-dom"


export default function SeqRender(props) {
    const [update, setUpdate] = useState(false)
    const [showForm, toggleShowForm] = useState(false)
    const [deleteSeq, setDeleteSeq] = useState('')
    const [geneName, setGeneName] = useState('')
    const [sequencesOne, setSequencesOne] = useState('')
    const [sequencesTwo, setSequencesTwo] = useState('')
    const { id } = useParams()

    const handleupdate = async (e) =>{
        e.preventDefault()
        setUpdate(true)
        await axios.post(`http://localhost:8000/gene/`,{
            gene_name: geneName,
            sequence_one: sequencesOne,
            sequence_two: sequencesTwo
        })
        toggleShowForm(!showForm)
    }
    const handleDelete = async (e) => {
        e.preventDefault()
        await axios.delete(`http://localhost:8000/gene/${id}`)
        setDeleteSeq()
        
    }

    const handleEdit = (e) => {
        e.preventDefault()
        toggleShowForm(true)
    }
    
    return (
        <div >
            <div>
            {/* <Link className='seq_link' to={`http://localhost:8000/gene/${props.id}`}> */}
                <p>Gene Name: {props.gene_name}</p>
                <p>Sequence one: {props.sequence_one}</p>
                <p>Sequence two: {props.sequence_two}</p>
            {/* </Link> */}
                {showForm?
                 <form className='edit_gene' onSubmit={handleupdate}>
                 <label htmlFor='gene_name'>Gene Name</label>
                 <input
                   name='gene_name'
                   type='text'
                   placeholder='gene name'
                   onChange={(e) => {
                     setGeneName(e.target.value)
                   }}
                 />
                 <label htmlFor='sequenceOne'>Sequence one</label>
                 <input
                   name='sequenceOne'
                   type='text'
                   placeholder='sequence one'
                   onChange={(e) => {
                     setSequencesOne(e.target.value)
                   }}
                 />
                 <label htmlFor='sequenceTwo'>Sequence two</label>
                 <input
                   name='sequenceTwo'
                   type='text'
                   placeholder='sequence Two'
                   onChange={(e) => {
                     setSequencesTwo(e.target.value)
                   }}
                 />
                 <input className="submit-edit" type="submit" />
               </form>
                :
                <div>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleEdit}>Edit</button>
                </div>
                }
            </div>
        </div>
    )
}
