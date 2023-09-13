import Button from '../ui/Button';
import HeroImg from '../assets/hero.jpg';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={`${styles.heroContainer}bg-orange-600 h-[100vh]`}>
      <div className={styles.background}></div>
      <img
        src={HeroImg}
        alt="The Shepherd - A Bronze Age Tale Book Cover"
        className={styles.bookCover}
      />

      <header
        className="p-2 overflow-x-hidden overflow-y-hidden  text-center 
        
      "
      >
        <div className=" lg:text-lg">
          <p className=" font-economica text-orange-700 ">
            Written in dedication of{' '}
            <a
              href="https://www.freeashley.org"
              target="_blank"
              rel="noreferrer"
              className="text-white tracking-wide "
            >
              Ashley Oosthuizen
            </a>
          </p>
        </div>
        <div
          className=" relative pt-[10vh] mb-[31vh]
        sm:mb-[23vh]
        ms:mb-[19vh]
        mx:mb-[23vh]
        ll:-mt-28
        rr:-mt-20
        
        "
        >
          <h1
            className="text-5xl text-orange-700 font-playfair font-bold invisible
          sm:mt-14
          
          mx:text-7xl mx:mt-24
          "
          >
            The Shepherd
          </h1>
          <h2
            className="text-amber-700 invisible mb-[8vh] text-3xl
          mx:text-4xl"
          >
            A Bronze Age Tale
          </h2>
        </div>

        <div
          className="text-orange-200 invisible
        lg:-mt-10
        ll:-mt-11
        xx:-mt-6
        "
        >
          <p>Authored by: Tristan Nettles</p>
          <p>
            Published by:{' '}
            <a
              className="text-orange-600"
              href="https://histriabooks.com/"
              target="_blank"
              rel="noreferrer"
            >
              Histria Books
            </a>
          </p>
        </div>
      </header>
      <div className={styles.buyButtonContainer}>
        <a
          href="https://www.amazon.com/Shepherd-Bronze-Age-Tale-ebook/dp/B0C1T48ZCJ/ref=sr_1_1?crid=1690Z7O2D90Z6&keywords=tristan+nettles&qid=1682034884&sprefix=tristan+nettles%2Caps%2C113&sr=8-1"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          <Button
            className={`${styles.buyButton}px-3 py-3 xxs:py-3 xxs:px-4 bg-orange-700 rounded-md shadow-xl shadow-orange-500 text-orange-300 font-bold mb-[28vh] text-2xl text-center hover:scale-110 active:scale-100 cursor-pointer transition-all
         
          sm:tracking-wide  sm:
          
          `}
          >
            Buy Now
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
