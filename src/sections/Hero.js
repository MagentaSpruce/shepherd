import Button from '../ui/Button';
const Hero = () => {
  return (
    <>
      <header className="p-2 overflow-x-hidden overflow-y-hidden  text-center">
        <div className="font-thin">
          <p className=" font-economica text-zinc-200 ">
            Written in dedication of{' '}
            <a
              href="https://www.freeashley.org"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-400 tracking-wide "
            >
              Ashley Oosthuizen
            </a>
          </p>
        </div>
        <div className=" pt-[10vh]">
          <h1 className="text-5xl text-orange-700 font-playfair font-bold">
            The Shepherd
          </h1>
          <h2 className="text-amber-700  mb-[8vh] text-3xl">
            A Bronze Age Tale
          </h2>
        </div>
        <h3 className="text-amber-700 mb-[17vh] font-semibold text-xl ">
          The first in a trilogy series
        </h3>
        <div className="">
          <Button className="px-4 py-3 bg-orange-700 rounded-md text-orange-300 font-bold mb-[31vh] text-2xl">
            Buy now
          </Button>
        </div>
        <div className="text-zinc-200">
          <p>Authored by: Tristan Nettles</p>
          <p>
            Published by:{' '}
            <a
              className="text-yellow-500"
              href="https://trinityhillspublishing.com/"
              target="_blank"
              rel="noreferrer"
            >
              Trinity Hills Publishing
            </a>
          </p>
        </div>
      </header>
    </>
  );
};

export default Hero;
