import { Button, Container, Heading, Input, Link, VStack, Text, Avatar} from '@chakra-ui/react'
import React from 'react'

const Signup = () => {
  return (
    <Container maxWidth={'container.xl'} h={'100vh'} p={'16'} >
       <VStack 
       alignItems={'stretch'}
       spacing={'8'}
       w={['full', '96']}
       m={'auto'}
       my={'16'}
       >
        <Heading>VIDEO HUB</Heading>
        <Avatar alignSelf={'center'} boxSize={'32'}/>
        <Input
        placeholder={'Name'}
        type={'text'}
        required
        focusBorderColor={'purple.500'}
        />
        <Input
        placeholder={'Enter Email here....'}
        type={'email'}
        required
        focusBorderColor={'purple.500'}
        />
         <Input
        placeholder={'Password...'}
        type={'text'}
        required
        focusBorderColor={'purple.500'}
        />
        <Button type='submit' colorScheme='purple'>
            Sign Up 
        </Button>

        <Text textAlign={'right'}>Already Signed Up?{' '}
        <Button variant={'link'} colorScheme='purple'>
           <Link top={'/login'}>Log in</Link>
        </Button>
        </Text>
        
       </VStack>
    </Container>
  )
}

export default Signup