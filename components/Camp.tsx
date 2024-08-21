import Image from "next/image";

interface CampProps {
  backgroundImage: string;

}

const Pump = ({ backgroundImage }: CampProps) => {
  return (
    <div
      className="pumpContainer"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="pumpContent">
        
        <div className="text-white">
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[500px] xl:h-[640px]">
        <Pump
          backgroundImage="/img1.jpg"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-custom-blue p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Need Fuel</strong> And Reliable Service?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            At Pulikkal Fuels, we understand the importance of a smooth journey. Whether you're a daily commuter or a long-distance traveler, our commitment is to provide you with high-quality fuel and exceptional service. Trust us to keep you moving with confidence.
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
