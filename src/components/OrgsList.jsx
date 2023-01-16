import React from 'react'
import { OrgsListItem } from '.'

function OrgsList({ items, deleteOrg, editOrg }) {
  return (
    <>
      {items.map(item => (
          <OrgsListItem key={item.id} org={item} deleteOrg={deleteOrg} editOrg={editOrg} />
      ))}
    </>
  )
}

export default OrgsList

