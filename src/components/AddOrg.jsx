import {
  Stack,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
} from '@chakra-ui/react'

import React, { useState } from 'react'
import { nanoid } from 'nanoid'


function AddOrg({ addOrg }) {
  const [name, setName] = useState('')
  const [nameMissing, setNameMissing] = useState(false)
  const [url, setUrl] = useState('')
  const [urlMissing, setUrlMissing] = useState(false)

  const handleSubmit = ev => {
    ev.preventDefault()

    if (name === '') {
      setNameMissing(true)
    }

    if (url === '') {
      setUrlMissing(true)
    }

    if (nameMissing || urlMissing) {
      return
    }

    addOrg({
      id: nanoid(),
      name: name,
      url: url
    })

    setName('')
    setNameMissing(false)
    setUrl('')
    setUrlMissing(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>

        <Input
          size='sm'
          value={name}
          variant='outline'
          type='text'
          isInvalid={nameMissing}
          errorBorderColor='crimson'
          placeholder='Enter Name ...'
          onChange={ev => setName(ev.target.value)} />

        <InputGroup size='sm'>
          <InputLeftAddon children='https://' />
          <Input
            value={url}
            variant='outline'
            type='text'
            isInvalid={urlMissing}
            errorBorderColor='crimson'
            placeholder='Enter Url ...'
            onChange={ev => setUrl(ev.target.value)} />
        </InputGroup>

        <Button size='sm' type='submit'>Add Org</Button>

      </Stack>
    </form>
  )
}

export default AddOrg
