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
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
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
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                  priority
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
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                  priority
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
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                  priority
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
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                  priority
                />
              </div>
              <h5 className="my-4 font-semibold text-[1.25rem]">Superity</h5>
              <p className="mb-4">
                Specialized for large and complex smart contracts
              </p>
            </div>
          </div>
        </section>
        <section className="py-50px]">
          <div className="text-center">
            <h2 className="text">Road Map</h2>
          </div>
          <div className="mt-[200px] mb-[50px]">
            <div className="flex flex-wrap">
              <div className="roadmap relative w-2/12">
                <h4 className="text-[22px] text-center mb-[-30px] font-semibold text-white">
                  Q4. 2021
                </h4>
                <div className="img relative">
                  <span className="line"></span>
                  <Image
                    src="https://dev.hyperaschain.com/img/icon-roadmap-pink.png"
                    alt=""
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="block w-full h-auto mt-0 mb-[30px] mx-auto relative z-1"
                    priority
                  />
                </div>
                <ul className="pr-[10px] ml-[15px] text-[14px] text-white list-disc">
                  <li className="mb-[8px]">
                    Complete the legal records of Metaway Holdings member
                    companies
                  </li>
                  <li className="mb-[8px]">
                    Coduct mergers and acquisions (M&A) among member companies
                  </li>
                  <li>
                    Development of distinct Blockchain platform and products in
                    the ecosystem
                  </li>
                </ul>
              </div>
              <div className="roadmap relative w-2/12">
                <h4 className="text-[22px] text-center mb-[-30px] font-semibold text-white">
                  Q4. 2021
                </h4>
                <div className="img relative">
                  <span className="line"></span>
                  <Image
                    src="https://dev.hyperaschain.com/img/icon-roadmap-pink.png"
                    alt=""
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="block w-full h-auto mt-0 mb-[30px] mx-auto relative z-1"
                    priority
                  />
                </div>
                <ul className="pr-[10px] ml-[15px] text-[14px] text-white list-disc">
                  <li className="mb-[8px]">
                    R60 realated to Hyperas Chain (testnest)
                  </li>
                  <li className="mb-[8px]">Launch of Hyperas Scan (V1)</li>
                  <li>Launch of testing version of Pindias Website (V1)</li>
                </ul>
              </div>
              <div className="roadmap relative w-2/12">
                <h4 className="text-[22px] text-center mb-[-30px] font-semibold text-white">
                  Q4. 2021
                </h4>
                <div className="img relative">
                  <span className="line"></span>
                  <Image
                    src="https://dev.hyperaschain.com/img/icon-roadmap-pink.png"
                    alt=""
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="block w-full h-auto mt-0 mb-[30px] mx-auto relative z-1"
                    priority
                  />
                </div>
                <ul className="pr-[10px] ml-[15px] text-[14px] text-white list-disc">
                  <li className="mb-[8px]">Launch of Hyperas Chain (Mainet)</li>
                  <li className="mb-[8px]">Launch of Hyperas Wallet</li>
                  <li className="mb-[8px]">Launch of Hyperas NFT</li>
                  <li>Launch of official version Pindias (V2)</li>
                </ul>
              </div>
              <div className="roadmap relative w-2/12">
                <h4 className="text-[22px] text-center mb-[-30px] font-semibold text-white">
                  Q4. 2021
                </h4>
                <div className="img relative">
                  <span className="line"></span>
                  <Image
                    src="https://dev.hyperaschain.com/img/icon-roadmap-blue.png"
                    alt=""
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="block w-full h-auto mt-0 mb-[30px] mx-auto relative z-1"
                    priority
                  />
                </div>
                <ul className="pr-[10px] ml-[15px] text-[14px] text-white list-disc">
                  <li className="mb-[8px]">
                    Launch of Divega reverse aution e-commerce platform (V2)
                  </li>
                  <li>Launch of Pindias app for Android & IOS (V2)</li>
                </ul>
              </div>
              <div className="roadmap relative w-2/12">
                <h4 className="text-[22px] text-center mb-[-30px] font-semibold text-white">
                  Q4. 2021
                </h4>
                <div className="img relative">
                  <span className="line"></span>
                  <Image
                    src="https://dev.hyperaschain.com/img/icon-roadmap-blue.png"
                    alt=""
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="block w-full h-auto mt-0 mb-[30px] mx-auto relative z-1"
                    priority
                  />
                </div>
                <ul className="pr-[10px] ml-[15px] text-[14px] text-white list-disc">
                  <li className="mb-[8px]">
                    Support of digitization of assets on Hyperas NFT
                  </li>
                  <li>
                    Support for trading and fundrasing via NFT Hyperas Dex
                    Market
                  </li>
                </ul>
              </div>
              <div className="roadmap relative w-2/12">
                <h4 className="text-[22px] text-center mb-[-30px] font-semibold text-white">
                  Q4. 2021
                </h4>
                <div className="img relative">
                  <Image
                    src="https://dev.hyperaschain.com/img/icon-roadmap-blue.png"
                    alt=""
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="block w-full h-auto mt-0 mb-[30px] mx-auto relative z-1"
                    priority
                  />
                </div>
                <ul className="pr-[10px] ml-[15px] text-[14px] text-white list-disc">
                  <li className="mb-[8px]">
                    Support of digitization of assets on Hyperas NFT
                  </li>
                  <li>
                    Support for trading and fundrasing via NFT Hyperas Dex
                    Market
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Information;
