import React from 'react'
import {Box, Button, HStack, Heading, Stack, VStack, Input, Text} from '@chakra-ui/react';
import {AiOutlineSend} from 'react-icons/ai'
const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} p={'4'}>
          <Heading size='md' textTransform={'uppercase'} textAlign={['center', 'left']}>
            Subscribe To Our Channel
          </Heading>
          <HStack
          borderBottom={'2px solid white'}
          py={'2'}

          >
            <Input placeholder='Enter your Email...' border={'none'} borderRadius={'none'}
            outline={'none'}
            />
            <Button
            p={'0'}
            colorScheme={'purple'}
            variant={'ghost'}
            borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'}/>
            </Button>
          </HStack>
        </VStack>
        <VStack w={'full'}
         borderLeft={['none', '1px solid white']}
         borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
          video hub
          </Heading> 
          <Text>All rights received</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social media
          </Heading>
          <Button variant={'link'} colorScheme='whiteAlpha.100'>
            <a target={'blank'}href='http://youtube.com'> youTube</a>
          </Button>
          <Button variant={'link'} colorScheme='whiteAlpha.100'>
            <a target={'blank'}href='http://instagram.com'>Instagram</a>
          </Button>
          <Button variant={'link'} colorScheme='whiteAlpha.100'>
            <a target={'blank'}href='http://github.com'> GitHub</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  )
}

export default Footer