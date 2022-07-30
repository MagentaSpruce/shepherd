import Button from '../ui/Button';
const Hero = () => {
  return (
    <>
      <header className="p-2 overflow-x-hidden overflow-y-hidden  text-center">
        <div className="">
          <p className=" font-economica">
            Written in dedication of{' '}
            <a
              href="https://www.freeashley.org"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-700"
            >
              Ashley Oosthuizen
            </a>
          </p>
        </div>
        <div className=" pt-[10vh]">
          <h1 className="text-5xl text-amber-700 font-playfair font-bold">
            The Shepherd
          </h1>
          <h2 className="text-yellow-600 underline underline-offset-4 mb-[5vh] text-2xl">
            A Bronze Age Tale
          </h2>
        </div>
        <blockquote className="text-amber-700 mb-[15vh] font-light text-xl ">
          A fantastically written epic adventure
        </blockquote>
        <div className="">
          <Button className="px-4 py-3 bg-amber-400 rounded-md text-amber-900 font-bold mb-[37vh] text-2xl">
            Buy now
          </Button>
        </div>
        <div className="text-white">
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
