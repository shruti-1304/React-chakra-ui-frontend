import { Button, Container, Heading, Input, Link, VStack, Text} from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <Container maxWidth={'container.xl'} h={'100vh'} p={'16'} >
       <VStack 
       alignItems={'stretch'}
       spacing={'8'}
       w={['full', '96']}
       m={'auto'}
       my={'16'}
       >
        <Heading>Welcome back</Heading>
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
        <Button variant={'link'} alignSelf={'flex-end'}>
            <Link top={'/forgetpassword'}>forget password </Link>
        </Button>

        <Button type='submit' colorScheme='purple'>
            Log in
        </Button>

        <Text textAlign={'right'}>New User?{' '}
        <Button variant={'link'} colorScheme='purple'>
           <Link top={'/signup'}>Sign Up</Link>
        </Button>
        </Text>
        
       </VStack>
    </Container>
  )
}

export default Login