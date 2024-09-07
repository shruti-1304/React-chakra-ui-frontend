import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return (
   <Container size={'container.xl'} p={'16'} h={'100vh'} >
       <VStack color={'purple'} h={'full'} justifyContent={'center'}
       >
        <AiOutlineCloudUpload size={'2max'}/>
        <form>
            <HStack>
                <Input 
                required 
                type='file'
                css={{
                   '&::file-selector-button':{
                     border:'none',
                     width: 'calc(100%  + 40px)',
                     height:'100%',
                     marginLeft: '-20px',
                    color:'purple',
                    backgroundColor:'white',
                     cursor:'pointer',
                     zIndex:'2'
                   }
                }}
                />
                <Button colorScheme='purple' type='submit'>Upload </Button>
            </HStack>
        </form>
       </VStack>
   </Container>
  )
}

export default Upload