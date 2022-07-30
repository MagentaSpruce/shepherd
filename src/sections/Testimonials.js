import Slider from '../components/Slider';

const Testimonials = () => {
  return (
    <section className="w-[100vw] h-[100vh] max-w-[1200px] bg-green-200 mx-auto">
      <h2 className="pt-2 text-center text-2xl">Book Reviews</h2>
      <Slider />
      <div className="border border-black p-2 mt-4 w-[95vw] mx-auto">
        <p>
          95% of the author profits for every book sold will be expressly used
          for helping in the fight to #FreeAshley
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
