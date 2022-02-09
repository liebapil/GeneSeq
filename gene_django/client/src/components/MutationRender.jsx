import React from 'react';

export default function MutationRender(props) {
  return( 
  <div>
      <p>Mutation: {props.mutation}</p>
      <p>hydrophobic and hydrophilic: {props.hphob_hphil}</p>
      <p>protonate: {props.protonate}</p>
  </div>
  )
}
