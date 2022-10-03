import React from 'react'
import styles from './Sliders.module.scss'
import Slider from "react-slick"
import img1 from '../../img/slider/sl-1.jpg'
import img2 from '../../img/slider/sl-2.jpg'
import img3 from '../../img/slider/sl-3.jpg'
import img4 from '../../img/slider/sl-4.jpg'
import img5 from '../../img/slider/sl-5.jpg'
import img6 from '../../img/slider/sl-6.jpg'


var settings = {
  dots: false,
  fade: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  swipe: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default function Sliders() {
  return (
    <div className={styles.slider}>
    <Slider {...settings}>
      <div>
        <img src={img1} alt="" />
        <h3>React Carousel 1</h3>
        <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Свою страну предупреждал, собрал взгляд лучше своих алфавит несколько переписали!</p>
        
      </div>
      <div>
        <img src={img2} alt="" />
        <h3>React Carousel 2</h3>
        <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Свою страну предупреждал, собрал взгляд лучше своих алфавит несколько переписали!</p>
        <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Заголовок, пустился на берегу! Пустился!</p>
      </div>
      <div>
        <img src={img3} alt="" />
        <h3>React Carousel 3</h3>
        <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Свою страну предупреждал, собрал взгляд лучше своих алфавит несколько переписали!</p>
        <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Заголовок, пустился на берегу! Пустился!</p>
      </div>
      <div>
        <img src={img4} alt="" />
        <h3>React Carousel 4</h3>
        <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Свою страну предупреждал, собрал взгляд лучше своих алфавит несколько переписали!</p>
        <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Свою страну предупреждал, собрал взгляд лучше своих алфавит несколько переписали!</p>
      </div>
      <div>
        <img src={img5} alt="" />
        <h3>React Carousel 5</h3>
        <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Свою страну предупреждал, собрал взгляд лучше своих алфавит несколько переписали!</p>
        <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Заголовок, пустился на берегу! Пустился!</p>
      </div>
      <div>
        <img src={img6} alt="" />
        <h3>React Carousel 6</h3>
        <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Свою страну предупреждал, собрал взгляд лучше своих алфавит несколько переписали!</p>
        <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Свою страну предупреждал, собрал взгляд лучше своих алфавит несколько переписали!</p>
      </div>
    </Slider>
    </div>
  )
}