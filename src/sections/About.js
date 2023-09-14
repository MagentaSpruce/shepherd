import img1 from '../assets/ShepherdHero.jpg';
import img2 from '../assets/general.jpg';
import img3 from '../assets/battle1.jpg';
import { GiBookCover } from 'react-icons/gi';
import { MdInfo } from 'react-icons/md';
import { GoPerson } from 'react-icons/go';
const About = () => {
  return (
    <div className="bg-orange-600">
      <section
        className="w-full max-w-screen-2xl h-screen bg-orange-600 mx-auto
        sm:h-[103vh]
      lg:h-[165vh]
      ll:h-[165vh]
      xx:h-[180vh]
      rr:h-[175vh]
      gg:h-[155vh]
      "
      >
        <h1
          className="text-center text-2xl font-economica font-bold pt-2 rr:mb-4
      mx:text-3xl mx:pt-4 
      xx:text-5xl
      rr:text-6xl
      gg:text-7xl"
          style={{ fontFamily: "'Macondo', cursive" }}
        >
          Synopsis
        </h1>
        <div
          className="p-2 text-center 
      "
        >
          <div className="flex border-amber-500 border-4 mb-4 rounded-md">
            <img
              src={img1}
              alt=""
              className="h-[20vh] w-[30vw] sepia brightness-110
            mx:w-[25vw]
            lg:h-[35vh]
            ll:w-[20vw]
            rr:w-[15vw]
            gg:w-[15vw]
            "
            />
            <p
              className="indent-2  mt-2 
          xp:mt-4 xp:px-2
          sm:text-lg sm:mt-2
          mx:text-2xl
          lg:mt-1
          ll:mt-4
          xx:mt-14
          
          rr:mt-10 rr:text-7xl 
          gg:mt-24 gg:text-7xl 
          xx:text-5xl

          "
              style={{ fontFamily: "'Amatic SC', cursive" }}
            >
              A young shepherd boy living between the no mans land of
              civilzation and beyond is taken and made slave by an invading army
              enroute to his homeland.
            </p>
          </div>
          <div className="flex justify-between border-amber-500 border-4 mb-4 rounded-md">
            <p
              className="
          p-1
          xp:mt-3
          sm:text-lg sm:mt-2
          ms:mt-3
          mx:text-2xl
          ll:mt-3
          xx:mt-8 xx:text-5xl
          rr:mt-10 rr:text-7xl
         gg:mt-20 gg:text-7xl
          "
              style={{ fontFamily: "'Amatic SC', cursive" }}
            >
              Led by an undefeated general with a penchant for cruelty, this
              unassuming adolescent careens his way into the commanders good
              graces through a witless charm.
            </p>
            <img
              src={img2}
              alt=""
              className="h-[20vh] w-[30vw] sepia-[.70]
            lg:h-[32vh]"
            />
          </div>
          <div className="flex  border-amber-500 border-4 mb-4 rounded-md ">
            <img
              src={img3}
              alt=""
              className=" h-[20vh] w-[30vw] sepia-[.55] 
              lg:h-[32vh]"
            />
            <p
              className="p-1 mt-1
            xp:mt-4
          sm:text-lg sm:mt-2
          ms:mt-3 ms:px-2
          mx:text-2xl
          ll:mt-4
          xx:mt-8 xx:text-5xl
          rr:mt-10 rr:text-7xl
          gg:mt-20 gg:text-7xl
          
          
          "
              style={{ fontFamily: "'Amatic SC', cursive" }}
            >
              Finding out only all too late that the little shepherd boy was not
              at all what he had seemed, the unconquerable general and his army
              are led to their doom.
            </p>
          </div>
        </div>
        <h3
          className="text-center text-2xl underline underline-offset-[3px] pt-2
        xs:pt-0
      ms:pt-0
      mx:text-3xl
      lg:mt-8 lg:mb-8
      xx:text-5xl
      rr:text-6xl
      gg:text-7xl"
          style={{ fontFamily: "'Macondo', cursive" }}
        >
          At a Glance
        </h3>
        <div
          className="flex justify-center gap-5 mt-[4vh] font-semibold
      mx:gap-16
      lg:justify-around"
        >
          <div className="flex flex-col justify-center items-center ">
            <GiBookCover
              className="text-5xl text-orange-300
          sm:text-6xl
          mx:text-7xl
          xx:text-10xl
          rr:text-11xl
          gg:text-11xl"
            />
            <p
              className="sm:text-lg 
              xx:text-4xl
              rr:text-5xl
              gg:text-5xl"
              style={{ fontFamily: "'Amatic SC', cursive" }}
            >
              78000+ words
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <MdInfo
              className="text-5xl text-orange-300
          sm:text-6xl
          mx:text-7xl
          xx:text-10xl
          rr:text-11xl
          gg:text-11xl"
            />
            <p
              className="sm:text-lg 
              xx:text-4xl
              rr:text-5xl
              gg:text-5xl"
              style={{ fontFamily: "'Amatic SC', cursive" }}
            >
              Historical Fiction
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <GoPerson
              className="text-5xl text-orange-300
          sm:text-6xl
          mx:text-7xl mx:justify-around
          xx:text-10xl
          rr:text-11xl
          gg:text-11xl"
            />
            <p
              className="sm:text-lg 
              xx:text-4xl
              rr:text-5xl
              gg:text-5xl"
              style={{ fontFamily: "'Amatic SC', cursive" }}
            >
              Ages 14+{' '}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
