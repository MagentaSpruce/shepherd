import TrinityHills from '../assets/trinityhills.png';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <section className="w-[100vw] max-w-[1200px] mx-auto h-[15vh] bg-orange-300  font-economica p-2">
      <div className="flex justify-around items-center">
        <div className="w-[70px] text-xs flex flex-col justify-center">
          <img
            src={TrinityHills}
            alt="Trinity Hills Publishing House Logo"
            className="w-[15vw] ml-1 pt-1"
          />
          <p className="">Trinity Hills Publishing</p>
        </div>
        <div className="font-bold font-playfair text-orange-600 text-center -mt-3">
          <h2 className="text-3xl">The Shepherd</h2>
          <h3>A Bronze Age Tale</h3>
        </div>
        <div>
          <p className="text-xs">#FreeAshley</p>
        </div>
      </div>
      <p className="text-center -mt-2 ml-2 text-sm text-orange-600">{year}</p>
    </section>
  );
};

export default Footer;
