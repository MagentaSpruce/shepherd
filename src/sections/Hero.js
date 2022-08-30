import Button from '../ui/Button';
const Hero = () => {
  return (
    <div className="bg-orange-600 ">
      <header
        className="p-2 overflow-x-hidden overflow-y-hidden  text-center 
        
      "
      >
        <div className=" lg:text-lg">
          <p className=" font-economica text-orange-700 ">
            Written in dedication of{' '}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-orange-200 tracking-wide "
            >
              Ashley Oosthuizen
            </a>
          </p>
        </div>
        <div
          className=" pt-[10vh] mb-[31vh]
        sm:mb-[23vh]
        ms:mb-[19vh]
        mx:mb-[23vh]
        ll:-mt-28
        rr:-mt-20
        
        "
        >
          <h1
            className="text-5xl text-orange-700 font-playfair font-bold
          sm:mt-14
          
          mx:text-7xl mx:mt-24
          "
          >
            The Shepherd
          </h1>
          <h2
            className="text-amber-700  mb-[8vh] text-3xl
          mx:text-4xl"
          >
            A Bronze Age Tale
          </h2>
        </div>

        <div className="">
          <Button
            className="px-3 py-3 bg-orange-700 rounded-md shadow-xl shadow-orange-500 text-orange-300 font-bold mb-[28vh] text-2xl text-center hover:scale-110 active:scale-100 cursor-pointer transition-all
          xs:mb-[24vh] 
          xp:mb-[30vh]
          sm:tracking-wide sm:px-4 sm:py-4 sm:mb-[30vh]
          ms:mb-[29vh]
          mx:mb-[32vh]
          ll:mt-[0vh] ll:mb-[32vh]
          xx:px-3 rr:py-3
          
          "
          >
            Buy Now
          </Button>
        </div>
        <div
          className="text-orange-200
        lg:-mt-10
        ll:-mt-11
        xx:-mt-6
        "
        >
          <p>Authored by: Ashley Oosthuizen</p>
          <p>
            Published by:{' '}
            <a
              className="text-orange-600"
              href="https://google.com/"
              target="_blank"
              rel="noreferrer"
            >
              Who Knows Publishing
            </a>
          </p>
        </div>
      </header>
    </div>
  );
};

export default Hero;
