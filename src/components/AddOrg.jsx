import { Stack, Input, Button, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { nanoid } from 'nanoid'


function AddOrg({ addOrg }) {
  const toast = useToast()
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (name === '') {
      toast({
        title: 'Please enter Name',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
      return
    }

    const org = {
      id: nanoid(),
      name: name,
      url: url
    }

    addOrg(org)
    setName('')
    setUrl('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <Input
          mt = {3}
          value = {name}
          variant = 'outline'
          type = 'text'
          placeholder = 'Enter Name ...'
          onChange= {(e) => setName(e.target.value)} />

        <Input
          mt = {3}
          value = {url}
          variant = 'outline'
          type = 'text'
          placeholder = 'Enter Url ...'
          onChange= {(e) => setUrl(e.target.value)} />

        <Button type='submit'>Add Org</Button>
      </Stack>
    </form>
  )
}

export default AddOrg
