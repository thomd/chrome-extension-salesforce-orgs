import React from 'react'
import { VStack } from '@chakra-ui/react'
import { SortableList, SortableItem } from '@thaddeusjiang/react-sortable-list'
import { TiThSmall } from 'react-icons/ti'
import OrgsListItem from './OrgsListItem'

const DragHandler = (props) => (
  <div {...props}>
    <TiThSmall />
  </div>
)

function OrgsList({ items, setItems, deleteOrg, editOrg }) {
  return (
    <SortableList items={items} setItems={setItems}>
      {({ items }) => (
        <VStack w='100%' color='grey.800'>
          {items.map((item) => (
            <SortableItem key={item.id} id={item.id} DragHandler={DragHandler}>
              <OrgsListItem key={item.id} org={item} deleteOrg={deleteOrg} editOrg={editOrg} />
            </SortableItem>
          ))}
        </VStack>
      )}
    </SortableList>
  )
}

export default OrgsList

