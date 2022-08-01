import Slider from '../components/Slider';

const Testimonials = () => {
  return (
    <section
      className="w-[100vw] h-[100vh] max-w-[1200px] bg-orange-600 mx-auto
    xs:h-[110vh]
    xp:h-[100vh]
    sm:h-[95vh]"
    >
      <h2 className="pt-2 text-center text-2xl font-semibold mb-2">
        Reader Reviews
      </h2>
      <Slider />
      <div
        className="border-4 border-amber-500 p-2 mt-[2vh] w-[70vw] max-w-[400px] mx-auto text-center rounded-lg
      xp:mt-12"
      >
        <p className="sm:text-lg">
          95% of all author profits for every book sold will be expressly used
          for helping to win in the fight to #FreeAshley.
        </p>
      </div>
      <div
        className="mt-[1vh] w-[80vw] max-w-[400px] mx-auto flex flex-col text-center
      xp:mt-5"
      >
        <p className="sm:text-lg">
          You can read about <i>her</i> story here:{' '}
        </p>
        <a
          className="mx-auto text-amber-400 tracking-wide"
          href="www.freeashley.org"
          target="_blank"
          rel="noreferrer"
        >
          freeashley.org
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
