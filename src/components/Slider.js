import { useEffect, useState } from 'react';
import data from '../data/data';
// import styles from './Slider.module.css';

const Slider = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastSlide = people.length - 1;
    if (index < 0) {
      setIndex(lastSlide);
    }
    if (index > lastSlide) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="w-[90vw] mx-auto p-2 max-w-2xl bg-blue-300 text-center">
      <div className="h-[450px] w-[80%]  max-w-xl bg-red-300 flex relative mx-auto overflow-hidden mt-4 ">
        {data.map((person, personIndex) => {
          const { image, name, title, quote, id } = person;
          let className = 'nextSlide';
          if (index === personIndex) {
            className = 'activeSlide';
          }
          if (
            index === personIndex - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            className = 'prevSlide';
          }
          return (
            <article key={id} className={className}>
              <img className="rounded-full" src={image} alt="" />
              <h2>{name}</h2>
              <h4>{title}</h4>
              <p>{quote}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Slider;
