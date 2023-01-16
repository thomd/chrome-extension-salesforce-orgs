import React, { Fragment } from 'react'
import { VStack, Divider } from '@chakra-ui/react'
import { OrgsListItemEditable, SortableList, SortableItem } from '.'

function OrgsListEditable({ items, setItems, deleteOrg, editOrg }) {
  return (
    <SortableList items={items} setItems={setItems}>
      {({ items }) => (
        <VStack w='100%' color='gray.800'>
          {items.map((item) => (
            <Fragment key={item.id}>
              <SortableItem id={item.id}>
                <OrgsListItemEditable org={item} deleteOrg={deleteOrg} editOrg={editOrg} />
              </SortableItem>
              <Divider orientation='horizontal' _last={{ display: 'none' }} />
            </Fragment>
          ))}
        </VStack>
      )}
    </SortableList>
  )
}

export default OrgsListEditable

