import { Stack, Input, Button, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { nanoid } from 'nanoid'


function AddOrg({ addOrg }) {
  const toast = useToast()
  const [value, setValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (value === '') {
      toast({
        title: 'Please enter the text.',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      })
      return
    }

    const org = {
      id: nanoid(),
      text: value
    }

    addOrg(org)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={5}>
        <Input
          mt = {5}
          value = {value}
          variant = 'outline'
          type = 'text'
          placeholder = 'Enter Org ...'
          onChange= {(e) => setValue(e.target.value)} />
        <Button type='submit'>Add Org</Button>
      </Stack>
    </form>
  )
}

export default AddOrg
