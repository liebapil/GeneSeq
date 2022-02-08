import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"

export default function Mutation(props) {
  //get seq
  const [gene, setGene] = useState({})
  const [geneName, setGeneName] = useState(gene.gene_name)
  const [sequencesOne, setSequencesOne] = useState(gene.sequence_one)
  const [sequencesTwo, setSequencesTwo] = useState(gene.sequence_two)
  const { id } = useParams()

  //get mutation 



   const getGene = async ()=>{

     const res = await axios.get(`http://localhost:8000/gene/${id}`)
     setGeneName(res.data.gene_name)
     setSequencesOne(res.data.sequence_one)
     setSequencesTwo(res.data.sequence_two)
     
   }
   useEffect(() => {
    getGene()
}, [])
   

  return (
  <div>
    <p>Gene name: {gene.gene_name}</p>
    <p>Sequence one: {gene.sequence_one} </p>
    <p>Sequence Two: {gene.sequence_two}</p>


  </div>)
}
