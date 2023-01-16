import React from 'react'
import { VStack, HStack } from '@chakra-ui/react'
import { OrgsListItemEditable, SortableList, SortableItem } from '.'

function OrgsListEditable({ items, setItems, deleteOrg, editOrg }) {
  return (
    <SortableList items={items} setItems={setItems}>
      {({ items }) => (
        <VStack w='100%' color='grey.800'>
          {items.map((item) => (
            <SortableItem key={item.id} id={item.id}>
              <OrgsListItemEditable key={item.id} org={item} deleteOrg={deleteOrg} editOrg={editOrg} />
            </SortableItem>
          ))}
        </VStack>
      )}
    </SortableList>
  )
}

export default OrgsListEditable

