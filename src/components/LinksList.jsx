import React, { Fragment } from 'react'
import { LinksListItem } from '.'

function LinksList({ defaultLinks, links }) {
  return (
    <Fragment>
      {defaultLinks.links.map(link => (
        <LinksListItem key={link.id} link={link} />
      ))}
      {links.map(link => (
        <LinksListItem key={link.id} link={link} />
      ))}
    </Fragment>
  )
}

export default LinksList
