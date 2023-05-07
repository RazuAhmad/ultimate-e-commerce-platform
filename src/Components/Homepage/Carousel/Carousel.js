import React from 'react'
import { Carousel } from 'react-daisyui';
import images from "../../../images/favicon.ico"

function CarouselComponent() {
  
  return (
    <Carousel className="w-64 rounded-box">
    <Carousel.Item
      src={images}
      alt="Videogame Poster"
    />
    <Carousel.Item
      src={images}
      alt="Videogame Poster"
    />
    <Carousel.Item
      src=""
      alt="Videogame Poster"
    />
    <Carousel.Item
      src=""
      alt="Videogame Poster"
    />
    <Carousel.Item
      src=""
      alt="Videogame Poster"
    />
    <Carousel.Item
      src=""
      alt="Videogame Poster"
    />
    <Carousel.Item
      src=""
      alt="Videogame Poster"
    />
  </Carousel>
  )
}

export default CarouselComponent