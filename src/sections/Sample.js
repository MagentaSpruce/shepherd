import Embedder from '../components/Embedder';

const Sample = () => {
  return (
    <section className="w-[100vw] h-[100vh] max-w-[1200px] bg-orange-600 mx-auto">
      <h2 className="text-center pt-2 text-2xl mb-2 font-medium">
        Read an excerpt:
      </h2>
      <div className="w-[95vw] max-w-[800px] h-[90vh] bg-yellow-200 mx-auto rounded-md">
        <Embedder
        // source="https://docs.google.com/document/d/1wukTZxD-AaalhSqJC5UlWg4e1_wnsmr9hgpg942LNE4/edit?usp=sharing"
        />
      </div>
    </section>
  );
};

export default Sample;
