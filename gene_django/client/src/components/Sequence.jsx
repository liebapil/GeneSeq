import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function Sequence() {
  const [geneName, setGeneName] = useState('')
  const [sequencesOne, setSequencesOne] = useState('')
  const [sequencesTwo, setSequencesTwo] = useState('')
  const [submit, setSubmit] = useState(false);

  const postGene = async (e) => {
    e.preventDefault()
    if (submit === true) {
      return
    }
    setSubmit(true)
    const res = await axios.post(`http://localhost:8000/gene/`, {
      gene_name: geneName,
      sequence_one: sequencesOne,
      sequence_Two: sequencesTwo
    })
    console.log(res)
  }

  return (
    <div>
      <form className='post_gene' onSubmit={postGene}>
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
        <button>Submit</button>
      </form>

    </div>
  );
}
