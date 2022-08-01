import TrinityHills from '../assets/trinityhills.png';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-orange-300">
      <section
        className="w-[100vw] max-w-[1200px] mx-auto h-[15vh] bg-orange-300  font-economica p-2
    xs:h-[17vh]
    xp:h-[15vh]
    ms:h-[20vh]
    ll:h-[32vh]
    xx:h-[27vh]
    "
      >
        <div
          className="flex justify-around items-center
      mx:justify-between mx:mt-6"
        >
          <div
            className="w-[70px] text-xs flex flex-col justify-center
        mx:w-[200px] mx:text-base"
          >
            <img
              src={TrinityHills}
              alt="Trinity Hills Publishing House Logo"
              className="w-[15vw] ml-1 pt-1
            sm:mt-2
            mx:ml-6 
            ll:w-[10vw] ll:ml-7
            xx:ml-5
            
            "
              onClick={() => window.open('https://trinityhillspublishing.com/')}
            />
            <p
              className="sm:ml-1 sm:mt-1
            mx:mr-5
          "
            >
              Trinity Hills Publishing
            </p>
          </div>
          <div
            className="font-bold font-playfair text-orange-600 text-center -mt-3
        mx:mr-20
       "
          >
            <h2
              className="text-3xl
          mx:text-5xl "
            >
              The Shepherd
            </h2>
            <h3 className="mx:text-xl">A Bronze Age Tale</h3>
          </div>
          <div>
            <p
              className="text-xs
          mx:text-xl
          ll:mr-5"
            >
              #FreeAshley
            </p>
          </div>
        </div>
        <p
          className="text-center -mt-2 ml-2 text-sm text-orange-600
      mx:ml-8"
        >
          {year}
        </p>
      </section>
    </div>
  );
};

export default Footer;
