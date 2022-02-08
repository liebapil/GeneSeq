import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function Sequence() {
  const [geneName, setGeneName] = useState('')
  const [sequences, setSequences] = useState('')
  const [submit, setSubmit] = useState(false);

  const postGene = async (e) => {
    e.preventDefault()
    if(submit === true){
      return
    }
    setSubmit(true)
    const res = await axios.post(`http://localhost:8000/gene/`, {
      gene_name: geneName,
      sequence: sequences
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
        <label htmlFor='sequence'>Sequence</label>
        <input
          name='sequence'
          type='text'
          placeholder='sequence' 
          onChange={(e) => {
            setSequences(e.target.value)
        }}
          />
          <button>Submit</button>
      </form>

    </div>
  );
}
