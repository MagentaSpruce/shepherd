import Button from '../ui/Button';
const Hero = () => {
  return (
    <>
      <header className="p-2 overflow-x-hidden overflow-y-hidden  text-center">
        <div className="font-thin">
          <p className=" font-economica text-orange-200 ">
            Written in dedication of{' '}
            <a
              href="https://www.freeashley.org"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-500 tracking-wide "
            >
              Ashley Oosthuizen
            </a>
          </p>
        </div>
        <div className=" pt-[10vh] mb-[31vh]">
          <h1 className="text-5xl text-orange-700 font-playfair font-bold">
            The Shepherd
          </h1>
          <h2 className="text-amber-700  mb-[8vh] text-3xl">
            A Bronze Age Tale
          </h2>
        </div>

        <div className="">
          <Button className="px-4 py-4 bg-orange-700 rounded-md shadow-md shadow-orange-500 text-orange-300 font-bold mb-[28vh] text-2xl text-center ">
            Buy now
          </Button>
        </div>
        <div className="text-orange-200">
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
