import Image from "next/image";

function Information() {
  return (
    <div className="bgGalaxy">
      <div className="max-w-[1320px] w-full mx-auto">
        <div className=" flex justify-center">
          <div className="boxIframe w-1/2">
            <div className="videoManager relative w-full">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Hi5P5wN2kqs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
        <section className="py-[50px] px-0 text-white">
          <div className="text-center">
            <h2 className="text">Technology Advantages</h2>
          </div>
          <div className="flex flex-wrap mt-12">
            <div className="w-1/4 px-[6px] ">
              <div className="inline-block border border-[#fc5cd9] rounded-[50%] p-[14px] bg-[#c40075db] shadow-[0px_4px_13px_#EC008C]">
                <Image
                  src="https://dev.hyperaschain.com/img/icon-4.png"
                  alt=""
                  width={55}
                  height={55}
                />
              </div>
              <h5 className="my-4 font-semibold text-[1.25rem]">Fast</h5>
              <p className="mb-4">
                Block generation time 2s Testnet block time 3s Testnet
                validators: 3 Mainnet block time 2s Mainnet validators: 7
              </p>
            </div>
            <div className="w-1/4 px-[6px]">
              <div className="inline-block border border-[#fc5cd9] rounded-[50%] p-[14px] bg-[#c40075db] shadow-[0px_4px_13px_#EC008C]">
                <Image
                  src="https://dev.hyperaschain.com/img/icon-4.png"
                  alt=""
                  width={55}
                  height={55}
                />
              </div>
              <h5 className="my-4 font-semibold text-[1.25rem]">
                Hight Capacity
              </h5>
              <p className="mb-4">
                Large block size (up to 50 MB) can execute over 50,000 (TPS)
                transactions per second Salable up to 210,000 (TPS)
              </p>
            </div>
            <div className="w-1/4 px-[6px]">
              <div className="inline-block border border-[#fc5cd9] rounded-[50%] p-[14px] bg-[#c40075db] shadow-[0px_4px_13px_#EC008C]">
                <Image
                  src="https://dev.hyperaschain.com/img/icon-4.png"
                  alt=""
                  width={55}
                  height={55}
                />
              </div>
              <h5 className="my-4 font-semibold text-[1.25rem]">
                Cost-Effective
              </h5>
              <p className="mb-4">Low gas fee: 0.00001$</p>
            </div>
            <div className="w-1/4 px-[6px]">
              <div className="inline-block border border-[#fc5cd9] rounded-[50%] p-[14px] bg-[#c40075db] shadow-[0px_4px_13px_#EC008C]">
                <Image
                  src="https://dev.hyperaschain.com/img/icon-4.png"
                  alt=""
                  width={55}
                  height={55}
                />
              </div>
              <h5 className="my-4 font-semibold text-[1.25rem]">Superity</h5>
              <p className="mb-4">
                Specialized for large and complex smart contracts
              </p>
            </div>
          </div>
        </section>
        <section></section>
      </div>
    </div>
  );
}

export default Information;
