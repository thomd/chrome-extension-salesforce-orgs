import React from 'react'
import { OrgsListItem } from '.'

function OrgsList({ items }) {
  return (
    <>
      {items.map(item => (
        <OrgsListItem key={item.id} org={item} />
      ))}
    </>
  )
}

export default OrgsList

