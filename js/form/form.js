import React, { Component }                                         from 'react';
import {
    Jumbotron,
    Button,
    FormGroup,
    Label,
    Input,
    Form,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
}                                                                   from 'reactstrap';
import { Link }                                                     from 'react-router-dom';

const items = [
    {
      id: 1,
      altText: 'Question 1',
      caption: 'Will you be my Valentine?'
    },
    {
      id: 2,
      altText: 'Question 2',
      caption: 'Sushi or Thai?'
    },
    {
      id: 3,
      altText: 'Question 3',
      caption: 'Flowers or Chocolate?'
    }
  ];

export default class Questionaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
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
        this.setState({
            activeIndex: nextIndex
        });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({
            activeIndex: nextIndex
        });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({
            activeIndex: newIndex
        });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
              <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={item.id}
              >
                <CarouselCaption captionText={item.altText} captionHeader={item.caption} />
              </CarouselItem>
            );
        });
        return (
            <Jumbotron>
                    <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                        autoPlay={false}
                        interval={false}
                    >
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>
                    {/*  */}
            </Jumbotron>
        );
    }
}