import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardBody
} from 'reactstrap';
import image1 from '../assets/images/IMG_0856.jpeg'; 
import image2 from '../assets/images/IMG_1242-650x650.jpg'; 
import image3 from '../assets/images/IMG_3005.jpeg'; 
import image4 from '../assets/images/IMG_0618-650x488.jpg'; 
import image5 from '../assets/images/IMG_0818-650x488.jpg'; 
import image6 from '../assets/images/IMG_0862-1.jpeg'; 
import image7 from '../assets/images/IMG_1797-488x650.jpg'; 
import image8 from '../assets/images/IMG_4713-488x650.jpg'; 
import image9 from '../assets/images/IMG_4755.jpeg'; 
import image10 from '../assets/images/IMG_5023.jpeg'; 

const items = [
  {
    src:  image1,
    altText: 'alternative Text',
    caption: 'caption 1'
  },
  {
    src: image2,
    altText: 'alternative Text',
    caption: 'caption 2'
  },
  {
    src: image3,
    altText: 'alternative Text',
    caption: 'caption 3'
  },
  {
    src: image4,
    altText: 'alternative Text',
    caption: 'caption 4'
  },
  {
    src: image5,
    altText: 'alternative Text',
    caption: 'caption 5'
  },
  {
    src: image6,
    altText: 'alternative Text',
    caption: 'caption 6'
  },
  {
    src: image7,
    altText: 'alternative Text',
    caption: 'caption 7'
  },
  {
    src: image8,
    altText: 'alternative Text',
    caption: 'caption 8'
  },
  {
    src: image9,
    altText: 'alternative Text',
    caption: 'caption 9'
  },
  {
    src: image10,
    altText: 'alternative Text',
    caption: 'caption 10'
  }
];

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
       
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
             
            <img src={item.src} alt={item.altText}  style={{height:'300px',boxShadow:'2px 2px 15px #000'}}/>
            
            <CarouselCaption captionText={item.caption} captionHeader={item.caption}   />
          </CarouselItem>
         
      
      );
    });

    return (
      <Container>
        <Row className="row-first">
        
          <Col className="" style={{textAlign:"center"}}>
            <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
          </Col>
          
        </Row>
      </Container>
     
    );
  }

}

export default Gallery;
