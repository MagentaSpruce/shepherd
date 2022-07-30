import img1 from '../assets/ShepherdHero.jpg';
import { GiBookCover } from 'react-icons/gi';
import { MdInfo, MdGrade } from 'react-icons/md';
const About = () => {
  return (
    <section className="w-[100vw] h-[100vh] max-w-[1200px] bg-red-200 mx-auto">
      <h1 className="text-center text-2xl font-economica font-bold underline underline-offset-2 pt-2">
        About
      </h1>
      <div
        className="p-2 text-center
      "
      >
        <div className="flex border border-black mb-4 ">
          <img src={img1} alt="" className="h-[20vh] w-[30vw]" />
          <p className="indent-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
            magni eos. Exercitationem hic impedit deserunt dolorem aliquam et
            nulla numquam?
          </p>
        </div>
        <div className="flex justify-between border border-black mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            temporibus sapiente non eligendi nihil qui ipsum neque repellat.
          </p>
          <img src={img1} alt="" className="h-[20vh] w-[30vw] " />
        </div>
        <div className="flex border border-black mb-4">
          <img src={img1} alt="" className=" h-[20vh] w-[30vw]" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            laborum maxime, eaque officiis quam quaerat omnis sed?
          </p>
        </div>
      </div>
      <h2 className="text-center">At a glance:</h2>
      <div className="flex justify-center gap-5 mt-[5vh]">
        <div className="flex flex-col justify-center items-center">
          <GiBookCover className="text-3xl" />
          <p>78000 words</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <GiBookCover className="text-3xl" />
          <p>78000 words</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <GiBookCover className="text-3xl" />
          <p>78000 words</p>
        </div>
      </div>
    </section>
  );
};

export default About;
