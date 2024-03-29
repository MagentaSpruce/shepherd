import HistriaBooks from '../assets/histria.png';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-orange-300">
      <section
        className="w-[100vw] max-w-[1800px] mx-auto h-[15vh] bg-orange-300  font-economica p-2
    xs:h-[17vh]
    sm:h-[19vh]
    xp:h-[15vh]
    ms:h-[20vh]
    ll:h-[32vh]
    xx:h-[35vh]
    rr:h-[30vh]
    gg:h-[25vh]
    "
      >
        <div
          className="flex justify-around items-center
      mx:justify-between mx:mt-6 "
        >
          <div
            className="w-[70px] text-xs flex flex-col justify-center
        mx:w-[200px] mx:text-base"
          >
            <img
              src={HistriaBooks}
              alt="Histria Books Publishing Logo"
              className="w-[15vw] ml-1 pt-1
            sm:mt-2
            mx:ml-6 
            ll:w-[10vw] ll:ml-7
            xx:ml-5
            
            "
              onClick={() => window.open('https://histriabooks.com/')}
            />
            <p
              className="sm:ml-1 sm:mt-1
            mx:mr-5
          "
            >
              {/* Histria Books */}
            </p>
          </div>
          <div
            className="font-bold font-playfair text-orange-600 text-center -mt-3
        mx:mr-20
       "
          >
            <h2
              className="text-3xl
          mx:text-5xl 
          xx:text-6xl
          rr:text-7xl"
            >
              The Shepherd
            </h2>
            <h3
              className="mx:text-xl 
            xx:text-3xl
            rr:text-4xl"
            >
              A Bronze Age Tale
            </h3>
          </div>
          <div>
            <p
              className="text-xs
          mx:text-xl
          ll:mr-5 
          xx:text-3xl
          rr:text-4xl"
            >
              #FreeAshley
            </p>
          </div>
        </div>
        <p
          className="text-center -mt-2 ml-2 text-sm text-orange-600
      mx:ml-8
      xx:ml-6 
      xx:text-2xl
      rr:text-3xl"
        >
          {year}
        </p>
      </section>
    </div>
  );
};

export default Footer;
