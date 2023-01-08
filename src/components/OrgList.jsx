import React from 'react'
import { VStack } from '@chakra-ui/react'
import { SortableList, SortableItem } from '@thaddeusjiang/react-sortable-list'
import { TiThSmall } from 'react-icons/ti'
import OrgListItem from './OrgListItem'

const DragHandler = (props) => (
  <div {...props}>
    <TiThSmall />
  </div>
)

function OrgList({ items, setItems, deleteOrg, editOrg }) {
  return (
    <SortableList items={items} setItems={setItems}>
      {({ items }) => (
        <VStack w='100%' color='grey.800'>
          {items.map((item) => (
            <SortableItem key={item.id} id={item.id} DragHandler={DragHandler}>
              <OrgListItem key={item.id} org={item} deleteOrg={deleteOrg} editOrg={editOrg} />
            </SortableItem>
          ))}
        </VStack>
      )}
    </SortableList>
  )
}

export default OrgList

