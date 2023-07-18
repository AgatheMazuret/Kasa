import "../Carousel/carousel.scss";  // Importation des styles du composant Carousel
import React, { useState } from "react";  // Importation de React et useState

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);  // Déclaration d'un état pour stocker l'index de la diapositive actuelle
  const length = slides.length;  // Récupération de la longueur du tableau des diapositives

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);  // Passage à la diapositive suivante en mettant à jour l'état current
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);  // Passage à la diapositive précédente en mettant à jour l'état current
  };

  const display = slides.length <= 1 ? 'none' : 'block';  // Détermination de la valeur d'affichage du bouton de navigation en fonction du nombre de diapositives

  return (
    <div className='carrousel'>
      {slides.map((l, index) => {
        return (
          <div className={index === current ? 'slide-active' : 'slide'} key={index}>
            <div className='carteImageCarrousel' style={{ backgroundImage: `url(${l})` }}>

              <div className='partPrev'>
                <span onClick={prevSlide} style={{ display: display }} className='prev'><i className="fa-sharp fa-solid fa-chevron-left"></i></span> {/* Bouton de diapositive précédente */}
              </div>
              <div className='counterImage'>
                <p className="counter">{current + 1} / {slides.length}</p>  {/* Affichage du numéro de la diapositive actuelle et du total des diapositives*/}
              </div>
              <div className='partNext'>
                <span onClick={nextSlide} style={{ display: display }} className='next'><i className="fa-sharp fa-solid fa-chevron-right"></i></span>  {/* Bouton de diapositive suivante */}
              </div>

            </div>
          </div>
        )
      })}
    </div>
  )
};

export default Carousel;
