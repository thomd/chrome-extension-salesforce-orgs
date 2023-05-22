import React, { Fragment } from 'react'
import { OrgsListItem } from '.'

function OrgsList({ items }) {
  return (
    <Fragment>
      {items.map(item => (
        <OrgsListItem key={item.id} org={item} />
      ))}
    </Fragment>
  )
}

export default OrgsList

