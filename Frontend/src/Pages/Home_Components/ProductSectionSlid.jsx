import React from 'react'
import {Flex,Box,Image,Text, Button, Stack} from "@chakra-ui/react"
import './style.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Link} from "react-router-dom"
import bag from '../../assets/bag.png'


const items=[
    
  {
      id:1,
      src:"https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/4/x/a/nb140-evolve-24-hours-playtime-deep-bass-made-in-india-original-imagmhqpvxwaukgx.jpeg?q=70",
      title:"Aroma NB140 Evolve 24 Hours",
      price:"529"
  },
  {
      id:2,
      src:"https://rukminim2.flixcart.com/image/416/416/l3vxbbk0/headphone/b/v/u/-original-imagewuzqrqktf6m.jpeg?q=70",
      title:"boAt Rockerz 510 Super",
      price:"1,599"
  },
  {
      id:3,
      src:"https://rukminim2.flixcart.com/image/416/416/k7285u80/headphone/4/3/u/boat-rockerz-370-original-imafpdzhywghfabu.jpeg?q=70",
      title:"boAt Rockerz 370 Bluetooth Headset",
      price:"4,999"
  },
  {
      id:4,
      src:"https://rukminim2.flixcart.com/image/832/832/k5msb680/watch/f/c/y/ls2884-limestone-original-imafza4hjyh7hjha.jpeg?q=70",
      title:"Bleed Blue Day Watch",
      price:"8,979"
  },
  {
      id:5,
      src:"https://rukminim2.flixcart.com/image/612/612/kuwzssw0/watch/q/z/s/1-ls2820-limestone-men-original-imag7xhe6m4sccax.jpeg?q=70",
      title:"Bleed Blue Day and Date Functioning",
      price:"6,999"
  },
  {
      id:6,
      src:"https://rukminim2.flixcart.com/image/832/832/kk8mcnk0/watch/a/z/g/csd-326-blk-1-blk-casado-original-imafzmryb8bphzah.jpeg?q=70",
      title:"All Black Combo",
      price:"899"
  },

]

const responsive = {
superLargeDesktop: {
// the naming can be any, depends on you.
breakpoint: { max: 4000, min: 3000 },
items: 5
},
desktop: {
breakpoint: { max: 3000, min: 1024 },
items: 4
},
tablet: {
breakpoint: { max: 1024, min: 464 },
items: 2
},
mobile: {
breakpoint: { max: 464, min: 0 },
items: 1
}
};

const ProductSectionSlid = () => {

   

  return (
    <Stack className="menSec" direction={['column', 'row']} gap="3rem">
        <Box className="menBox">
            <Image className="menImage" src="https://media.tenor.com/qLw0pDcSIoQAAAAC/air-pods-pro-earphones.gif" />
            <Box style={{fontSize:'1.6rem', fontWeight:"bold"}}>Accessories</Box>
            <Link to="/shop"><Button style={{backgroundColor:"#0D6DD7",color:"#F3F3f3"}}>Show All Products</Button></Link>
        </Box>

        <Box style={{width:"70%"}} className="carouselBox">
            <Carousel responsive={responsive}>
             {
                items.map((item)=>(
                    <Box key={item.id} className="sellerBox" >
                        <Box className="imageBox"><Image src={item.src} alt="sellers" width="170px" /></Box>
                        <Box>
                            <Text fontSize="15px" color="#333333">{item.title}</Text>
                            <Flex justifyContent="center" alignItems="center" gap="1rem">
                                <Text fontSize="15px" fontWeight="semibold" color="#0D6DD7">₹ {item.price}</Text>
                                <Link to="/shop">
								<Button><Image src={bag} alt="cart" width="20px" /></Button>
								</Link>
                            </Flex>
                        </Box>
                    </Box>
                ))
             }
           </Carousel>
    </Box>
    </Stack>
  )
}

export default ProductSectionSlid