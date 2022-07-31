import Slider from '../components/Slider';

const Testimonials = () => {
  return (
    <section className="w-[100vw] h-[100vh] max-w-[1200px] bg-green-200 mx-auto">
      <h2 className="pt-2 text-center text-2xl">Book Reviews</h2>
      <Slider />
      <div className="border border-black p-2 mt-[2vh] w-[60vw] max-w-[400px] mx-auto">
        <p>
          95% of all author profits for every book sold will be expressly used
          for helping to win in the fight to #FreeAshley.
        </p>
      </div>
      <div className="mt-[1vh] w-[80vw] max-w-[400px] mx-auto flex flex-col">
        <p>
          You can read about <i>her</i> story here:{' '}
        </p>
        <a
          className="mx-auto"
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
