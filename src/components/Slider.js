import { useEffect, useState } from 'react';
import data from '../data/data';
import Button from '../ui/Button';
// import styles from './Slider.module.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

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
    }, 7000);

    return () => {
      clearInterval(timer);
    };
  }, [index]);

  return (
    <section
      className="w-[90vw]  mx-auto p-2 max-w-2xl bg-amber-500 h-[485px] text-center rounded-lg font-rubik
    ms:h-[420px] "
    >
      <div
        className="h-[450px] w-[90%]  max-w-xl bg-orange-300 flex relative mx-auto overflow-hidden mt-2 rounded-lg
      ms:h-[385px]"
      >
        {data.map((person, personIndex) => {
          const { image, name, quote, id } = person;
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
              <img
                className="rounded-full border-2 mt-2 mb-1 border-amber-500"
                src={image}
                alt={name}
              />
              <h2
                className="mb-2 font-semibold
              mx:text-xl mx:mb-1"
              >
                {name}
              </h2>

              <p
                className="px-3
              mx:px-6 mx:text-xl"
              >
                {quote}
              </p>
            </article>
          );
        })}
        <div
          className="flex justify-between h-[3rem] gap-[50vw] mt-44 z-10
        xp:gap-[49vw]
        sm:gap-[50.5vw]
        ms:gap-[58vw]
        mx:gap-[60.5vw]
        ll:gap-[45.5vw]
        xx:gap-[36.2vw]
        rr:gap-[25vw]
        "
        >
          <Button
            className="p-3 ml-2 rounded-md bg-amber-500 text-orange-700 hover:scale-105 active:scale-100 
            xp:ml-4"
            onClick={() => setIndex(index - 1)}
          >
            <BsChevronLeft />
          </Button>
          <Button
            className="p-3 bg-amber-500 rounded-md text-orange-700 cursor-pointer hover:scale-105 active:scale-100"
            onClick={() => setIndex(index + 1)}
          >
            <BsChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
