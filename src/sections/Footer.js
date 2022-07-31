import TrinityHills from '../assets/trinityhills.png';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <section className="w-[100vw] max-w-[1200px] mx-auto h-[15vh] bg-red-400  font-economica p-2">
      <div className="flex justify-around items-center">
        <div className="w-[90px] text-sm flex flex-col justify-center">
          <img
            src={TrinityHills}
            alt="Trinity Hills Publishing House Logo"
            className="w-[15vw] ml-1"
          />
          <p>Trinity Hills Publishing</p>
        </div>
        <div className="font-bold font-playfair">
          <h2 className="text-xl">The Shepherd</h2>
          <h3>A Bronze Age Tale</h3>
        </div>
        <div>
          <p className="text-sm">#FreeAshley</p>
        </div>
      </div>
      <p className="text-center -mt-4">{year}</p>
    </section>
  );
};

export default Footer;
