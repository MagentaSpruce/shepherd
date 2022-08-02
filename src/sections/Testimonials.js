import Slider from '../components/Slider';
import Button from '../ui/Button';
const Testimonials = () => {
  return (
    <div className="bg-orange-600">
      <section
        className="w-[100vw] h-[117vh] max-w-[1200px] bg-orange-600 mx-auto
    xs:h-[128vh]
    xp:h-[108vh]
    sm:h-[110vh]
    ms:h-[115vh]
    mx:h-[85vh]
    ll:h-[145vh]
    xx:h-[110vh]
    "
      >
        <h2
          className="pt-2 text-center text-2xl font-semibold mb-2
      mx:text-3xl"
        >
          Reader Reviews
        </h2>
        <Slider />
        <div
          className="border-4 border-amber-500 p-2 mt-[3vh] w-[70vw] max-w-[400px] mx-auto text-center rounded-lg 
      xp:mt-12"
        >
          <p
            className="sm:text-lg 
        mx:text-xl"
          >
            95% of all author profits for every book sold will be expressly used
            for helping to win in the fight to #FreeAshley.
          </p>
        </div>
        <div
          className="mt-[1vh] w-[80vw] max-w-[400px] mx-auto flex flex-col text-center
      xp:mt-5"
        >
          <p
            className="sm:text-lg
        mx:text-xl"
          >
            You can read about <i>her</i> story here:{' '}
          </p>
          <a
            className="mx-auto text-amber-400 tracking-wide mx:text-xl"
            href="www.freeashley.org"
            target="_blank"
            rel="noreferrer"
          >
            freeashley.org
          </a>
        </div>
        <div className="text-center">
          <Button
            className="px-3 py-3 bg-orange-300  shadow-xl shadow-amber-500 text-orange-500 font-bold mb-[28vh] text-2xl text-center border-4 border-amber-500
          mt-7 rounded-xl
          sm:tracking-wide hover:scale-105 active:scale-100
          mx:px-4 mx:py-4 mx:mt-10"
          >
            Buy Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
