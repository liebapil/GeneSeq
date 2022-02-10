import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"







export default function SeqRender(props) {

  const [update, setUpdate] = useState(false)
  const [showForm, toggleShowForm] = useState(false)
  const [deleteSeq, setDeleteSeq] = useState('')
  const [geneName, setGeneName] = useState('')
  const [sequencesOne, setSequencesOne] = useState('')
  const [sequencesTwo, setSequencesTwo] = useState('')





  const handleupdate = async (e) => {
    e.preventDefault()
    setUpdate(true)
    await axios.put(`http://localhost:8000/gene/${props.id}`, {
      gene_name: geneName,
      sequence_one: sequencesOne,
      sequence_two: sequencesTwo
    })
    props.renderSeq()
    toggleShowForm(!showForm)
  }
  const handleDelete = async (e) => {
    e.preventDefault()
    await axios.delete(`http://localhost:8000/gene/${props.id}`)
    setDeleteSeq()
    props.renderSeq()
  }

  const handleEdit = (e) => {
    e.preventDefault()
    toggleShowForm(true)
  }

  return (
    <div className='seq_render'>
      <div>
        <div>
        <Link className='seq_link' to={`/mutation/${props.id}`}>
          <p className='gene_render'>Gene Name: {props.gene_name}</p>
          <p className='seq_render'>Sequence one: {props.sequence_one}</p>
          <p className='seq_render'>Sequence two: {props.sequence_two}</p>
        </Link>
        </div>
        <div className='form'>
        {showForm ?
          <form className='edit_gene' onSubmit={handleupdate}>
            <label className='gene_label' htmlFor='gene_name'>Gene Name</label>
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
              className='seq_input'
              name='sequenceOne'
              type='text'
              placeholder='sequence one'
              onChange={(e) => {
                setSequencesOne(e.target.value)
              }}
            />
            <label htmlFor='sequenceTwo'>Sequence two</label>
            <input
              className='seq_input'
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
            <button className='delete_button' onClick={handleDelete}>Delete</button>
            <button className='edit button' onClick={handleEdit}>Edit</button>
          </div>
        }
        </div>
      </div>
    </div>
  )
}
