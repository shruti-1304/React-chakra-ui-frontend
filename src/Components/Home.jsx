import { Box, Container, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Image} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import img1 from '../Assets/img1.jpg';
import img2 from '../Assets/img2.jpg';
import img3 from '../Assets/img3.jpg';
import img4 from '../Assets/4.jpg';
import img5 from '../Assets/5.png'
//import { transform } from 'framer-motion'
const headingoptions ={
    pos:'absolute',
    top:'50%',
    left:'50%',
    transform : 'translate(-50%, -50%)',
    p:'4'
    
}
const Home = () => {
  return (
    <Box>
     <MyCarousel/>
     <Container minH={['50vh','100vh']} maxW={'Container.xl'} p='16'>
      <Heading textTransform={'uppercase'} py={'2'} borderBottom={'2px solid black'} w={'fit-content'}
      m={'auto'}>
      Visit Services

      </Heading>
      <Stack
      h='full'
      p={'4'}
      alignItems={'center'}
      direction={['column', 'row']}
      >
      <Image src={img5} alt='page not found' h={['40', '400']} filter={'hue-rotate(-130deg)'}/>
      <Text letterSpacing={"widest"} lineHeight={'190%'} p={['4', '16']} textAlign={'center'}> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim temporibus illo similique molestias, quia ducimus magnam nobis consectetur rem, earum quae. Eos expedita veritatis iure blanditiis cupiditate id aut, ipsa molestias numquam odio iusto aspernatur eius velit amet dolores fugit officiis error dignissimos reprehenderit? Ullam placeat voluptatibus expedita cumque cum fugit maiores? Explicabo assumenda doloremque reprehenderit veritatis odio! Totam tenetur a incidunt cumque aliquid, voluptatem quasi. Dicta quisquam in, quod nihil obcaecati architecto consequatur, labore vel doloribus cupiditate voluptatibus maiores earum rem fugit beatae sequi ipsa ab, molestiae accusantium? Vitae veritatis deserunt eligendi odio quidem dolor eveniet facere ab.
      </Text>
      </Stack>
     </Container>
    </Box>
  )
};

const MyCarousel = ()=>(
    <Carousel autoPlay infiniteLoop interval = {1000}showStatus = {'flase'} showThumbs={'false'}>
     <Box w={'full '} h={'100vh'} >
        <Image src={img1} h={['100vh', 'full']}  objectFit='cover'/>
        <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingoptions} size={['2xl', '4xl']} > Night Sights</Heading>
     </Box>

     <Box w={'full '} h={'100vh'} >
        <Image src={img2} h={['100vh', 'full']} objectFit='cover'/>
        <Heading bgColor={"whiteAlpha.500"} color={'black'} {...headingoptions} size={['2xl', '4xl']} >Mountains view</Heading>
     </Box>

     <Box w={'full '} h={'100vh'} >
        <Image src={img3} h={['100vh', 'full']} objectFit='cover'/>
        <Heading bgColor={"whiteAlpha.500"} color={'black'} {...headingoptions} size={['2xl', '4xl']} > Landscapes </Heading>
     </Box>
     
     <Box w={'full '} h={'100vh'} >
        <Image src={img4} h={['100vh', 'full']} objectFit='cover'/>
        <Heading bgColor={"blackAlpha.400"} color={'white'} {...headingoptions} size={['2xl', '4xl']} >Beauty is Night </Heading>
        
   </Box>


    </Carousel>
)

export default Home