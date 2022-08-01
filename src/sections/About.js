import img1 from '../assets/ShepherdHero.jpg';
import img2 from '../assets/general.jpg';
import img3 from '../assets/battle1.jpg';
import { GiBookCover } from 'react-icons/gi';
import { MdInfo, MdGrade } from 'react-icons/md';
import { GoPerson } from 'react-icons/go';
const About = () => {
  return (
    <section className="w-[100vw] max-w-[600px] h-[100vh] bg-orange-600 mx-auto">
      <h1 className="text-center text-2xl font-economica font-bold pt-2 ">
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
            className="h-[20vh] w-[30vw] sepia brightness-110"
          />
          <p className="indent-2  mt-2">
            A young shepherd boy living between the no mans land of civilzation
            and beyond is taken and made slave by an invading army enroute to
            his homeland.
          </p>
        </div>
        <div className="flex justify-between border-amber-500 border-4 mb-4 rounded-md">
          <p
            className="
          p-1"
          >
            Led by an undefeated general with a penchant for cruelty, this
            unassuming adolescent careens his way into the commanders good
            graces through a witless charm.
          </p>
          <img src={img2} alt="" className="h-[20vh] w-[30vw] sepia-[.70]" />
        </div>
        <div className="flex  border-amber-500 border-4 mb-4 rounded-md">
          <img src={img3} alt="" className=" h-[20vh] w-[30vw] sepia-[.55]" />
          <p className="p-1 mt-1">
            Finding out only all too late that the little shepherd boy was much
            more than what he seemed, the unconquerable general is led into his
            doom.
          </p>
        </div>
      </div>
      <h3 className="text-center text-2xl underline underline-offset-[6px] pt-2">
        At a glance
      </h3>
      <div className="flex justify-center gap-5 mt-[4vh] font-semibold">
        <div className="flex flex-col justify-center items-center ">
          <GiBookCover className="text-5xl text-orange-300" />
          <p>78000+ words</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <MdInfo className="text-5xl text-orange-300" />
          <p>Historical Fiction</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <GoPerson className="text-5xl text-orange-300" />
          <p>Ages 14+ </p>
        </div>
      </div>
    </section>
  );
};

export default About;
