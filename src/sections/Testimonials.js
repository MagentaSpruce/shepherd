import Slider from '../components/Slider';
import Button from '../ui/Button';
const Testimonials = () => {
  return (
    <div className="bg-orange-600">
      <section
        className="w-[100vw] h-[117vh] max-w-[1200px] bg-orange-600 mx-auto
    xs:h-[128vh]
    xp:h-[116vh]
    sm:h-[120vh]
    ms:h-[115vh]
    mx:h-[85vh]
    ll:h-[145vh]
    xx:h-[145vh]
    rr:h-[120vh]
    gg:h-[100vh]
    "
      >
        <h2
          className="pt-2 text-center text-2xl  mb-2
      mx:text-3xl
      xx:text-5xl
      rr:text-6xl
      gg:text-7xl"
          style={{ fontFamily: "'Macondo', cursive" }}
        >
          Reader Reviews
        </h2>
        <Slider />
        <div
          className="border-4 border-amber-500 p-2 mt-[3vh] w-[70vw] max-w-[700px] mx-auto text-center rounded-lg 
      xp:mt-12"
        >
          <p
            className="sm:text-lg 
        mx:text-xl 
        xx:text-3xl
        rr:text-4xl
        gg:text-4xl"
          >
            100% of all author profits for every book sold will be expressly
            used for helping to win in the fight to #FreeAshley.
          </p>
        </div>
        <div
          className="mt-[1vh] w-[80vw] max-w-[450px] mx-auto flex flex-col text-center
      xp:mt-5"
        >
          <p
            className="sm:text-lg
        mx:text-xl 
        xx:text-2xl
        rr:text-2xl
        gg:text-3xl"
          >
            You can read about <i>her</i> story here:{' '}
          </p>
          <a
            className="mx-auto text-amber-400 tracking-wide mx:text-xl 
            xx:text-2xl
            rr:text-3xl"
            href="https://www.freeashley.org"
            target="_blank"
            rel="noreferrer"
          >
            Ashley Oosthuizen
          </a>
        </div>
        <div className="text-center">
          <a
            href="https://www.amazon.com/Shepherd-Bronze-Age-Tale-ebook/dp/B0C1T48ZCJ/ref=sr_1_1?crid=1690Z7O2D90Z6&keywords=tristan+nettles&qid=1682034884&sprefix=tristan+nettles%2Caps%2C113&sr=8-1"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              className="px-3 py-3 bg-orange-300  shadow-xl shadow-amber-500 text-orange-500 font-bold mb-[28vh] text-2xl text-center border-4 border-amber-500
          mt-7 rounded-xl hover:scale-110 active:scale-100 cursor-pointer transition-all
          sm:tracking-wide 
          mx:px-4 mx:py-4 mx:mt-10
          xx:text-5xl
          rr:text-6xl
          gg:text-6xl"
            >
              Buy Now
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
