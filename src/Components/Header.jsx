import React from 'react'

import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack
} from '@chakra-ui/react'
import { BiMenuAltLeft } from "react-icons/bi"
import { Link } from 'react-router-dom';
const Header = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <>
            <Button
                pos={'fixed'}
                zIndex={'overlay'}
                left={'4'}
                top={'4'}
                colorScheme='purple'
                p={0}
                h={'10'}
                w={'10'}
                borderRadius={'full '}
                onClick={onOpen}
            >
                <BiMenuAltLeft size={'20'} />
            </Button>
            <Drawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} placement='right'>

                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>video hub</DrawerHeader>
                    <DrawerBody>

                        <VStack alignItems={'flex-start'}>

                            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                                <Link to='/'>Home</Link>
                            </Button>

                            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                                <Link to='/videos'>Videos</Link>
                            </Button>

                             <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                                <Link to='/videos?category = free'>Free Videos</Link>
                            </Button>

                             <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                                <Link to='/upload'>Upload video</Link>
                            </Button> 

                        </VStack>
                        <HStack position={"absolute"} bottom ={'10'} w={'full'} justifyContent={'space-evenly'}>

                            <Button onClick={onClose} colorScheme='purple'>
                                <Link to={'login'}>Log in</Link>
                            </Button>

                            <Button  onClick={onClose} variant={'outline'} colorScheme='purple'>
                                <Link to={'signup'}>Sign in</Link>
                            </Button>

                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header