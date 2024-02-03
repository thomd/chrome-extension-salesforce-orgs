import React, { Fragment } from 'react'
import { VStack, Divider } from '@chakra-ui/react'
import { OrgsListItemEditable, SortableList, SortableItem } from '.'

function OrgsListEditable({ orgs, setOrgs }) {
  return (
    <SortableList items={orgs} setItems={setOrgs}>
      {({ orgs: items }) => (
        <VStack w='100%' color='gray.800'>
          {orgs.map(org => (
            <Fragment key={org.id}>
              <SortableItem id={org.id}>
                <OrgsListItemEditable org={org} orgs={orgs} setOrgs={setOrgs} />
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
