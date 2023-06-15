import Image from "next/image";

function Introduction() {
  return (
    <div className="relative intro ">
      <div className="circleBlur-1"></div>
      <div className="circleBlur-2"></div>
      {/* What is Hyperas Chain */}
      <section className="relative py-12">
        <div className="max-w-[1320px] w-full mx-auto">
          <div className="text-center">
            <h2 className="sectionHeading text-[34px] mb-6">
              What is Hyperas Chain?
            </h2>
            <p className="text-[16px]">
              Hyperas chain is a blockchain infrastructure that helps connect
              other blockchains. With our non-invasive cross-chain technology
              Hyperas chain operates as a data conduit, allowing cross-chain
              communications between public and private protocols. Hyperas chain
              can transfer both assets and data without requiring any change on
              participating blockchains. Our unified infrastructure helps
              solutions run on multiple platforms by enabling interoperability
              among them and making the implementation as straightforward as
              possible from the developer`&apos;`s perspective.
            </p>
          </div>
          <div className="flex mt-12">
            <div className="flex-[0_0_auto] w-1/4 px-[10px]">
              <div className="">
                <div className="roundPink">
                  <Image
                    src="https://dev.hyperaschain.com/img/compatibilty.png"
                    alt={"logo"}
                    width="71"
                    height="71"
                    sizes="100vw"
                    className="w-full h-full cursor-pointer"
                    priority
                  />
                </div>
                <h5 className="text-[20px] font-semibold my-3">Compatibilty</h5>
                <p>
                  Built to meet a large ecosystem, Hyperas chain is highly
                  compatible with many other Blockchains such as: ETH / BSC /
                  MATIC / FANTOM / TRON / ETC / POA / XDAI
                </p>
              </div>
            </div>
            <div className="flex-[0_0_auto] w-1/4 px-[10px]">
              <div className="">
                <div className="roundPink">
                  <Image
                    src="https://dev.hyperaschain.com/img/diversity.png"
                    alt={"logo"}
                    width="71"
                    height="71"
                    sizes="100vw"
                    className="w-full h-full cursor-pointer"
                    priority
                  />
                </div>
                <h5 className="text-[20px] font-semibold my-3">Diversity</h5>
                <p>
                  Hyperas Chain supports the digitization of a wide range of
                  assets such as equity, publicly traded bonds, real estate,
                  artwork, and more. and many other asset classes in the future.
                </p>
              </div>
            </div>
            <div className="flex-[0_0_auto] w-1/4 px-[10px]">
              <div className="">
                <div className="roundPink">
                  <Image
                    src="https://dev.hyperaschain.com/img/consensus-algorithm.png"
                    alt={"logo"}
                    width="71"
                    height="71"
                    sizes="100vw"
                    className="w-full h-full cursor-pointer"
                    priority
                  />
                </div>
                <h5 className="text-[20px] font-semibold my-3">
                  Consensus Algorithm
                </h5>
                <p>
                  Hyperas chain Apply Proof of Authority (PoA) consensus
                  algorithm, as well as ST20, SAP2022 protocol to its own
                  Blockchain platform. This algorithm promises high scalability
                  and performance.
                </p>
              </div>
            </div>
            <div className="flex-[0_0_auto] w-1/4 px-[10px]">
              <div className="">
                <div className="roundPink">
                  <Image
                    src="https://dev.hyperaschain.com/img/transparency.png"
                    alt={"logo"}
                    width="71"
                    height="71"
                    sizes="100vw"
                    className="w-full h-full cursor-pointer"
                    priority
                  />
                </div>
                <h5 className="text-[20px] font-semibold my-3">Transparency</h5>
                <p>
                  To meet government and corporate customers, Hyperas focuses on
                  Know Your Customer (KYC) to ensure security, transparency and
                  trust for all participants. join the ecosystem.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-lg-5 mt-12">
            <a
              href="https://dev.hyperaschain.com/overview"
              className="readmore font-semibold"
            >
              READ MORE
            </a>
          </div>
        </div>
      </section>

      {/* External Environment */}
      <section className="py-[50px]">
        <div className="max-w-[1320px] w-full mx-auto">
          <div className="text-center mb-6">
            <h2 className="sectionHeading text-[34px]">External Environment</h2>
          </div>
          <div className="text-center">
            <ul className="list-unstyled flex justify-evenly font-bold w-2/3 mx-auto pb-4 border-b border-b-[#55C6D0]">
              <li>All</li>
              <li>Real Eastate</li>
              <li>E-Com</li>
              <li>Healthcare</li>
              <li>Other</li>
            </ul>
          </div>
          <div className="flex justify-center mt-md-5 mt-12">
            <div className="w-1/6 px-2">
              <div className="flex flex-col h-full text-[#58595b] text-center px-[10px] pt-[30px] pb-[20px] rounded-md bg-gradient-to-r from-[#ffffffc9] to-[#ffffff] shadow-[17px_0_28px_#55c6d026] relative">
                <Image
                  src="https://dev.hyperaschain.com/img/pindias.png"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto cursor-pointer"
                  priority
                />
                <p className="">Digital Real Estate Exchange</p>
                <a
                  href="https://www.pindias.com"
                  target="_blank"
                  className="arrow"
                ></a>
              </div>
            </div>
            <div className="w-1/6 px-2">
              <div className="flex flex-col h-full text-[#58595b] text-center px-[10px] pt-[30px] pb-[20px] rounded-md bg-gradient-to-r from-[#ffffffc9] to-[#ffffff] shadow-[17px_0_28px_#55c6d026] relative">
                <Image
                  src="https://dev.hyperaschain.com/img/divega.png"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto cursor-pointer"
                  priority
                />
                <p className="">Reverse auction E-com Platform</p>
                <a
                  href="https://www.divega.com"
                  target="_blank"
                  className="arrow"
                ></a>
              </div>
            </div>
            <div className="w-1/6 px-2">
              <div className="flex flex-col h-full text-[#58595b] text-center px-[10px] pt-[30px] pb-[20px] rounded-md bg-gradient-to-r from-[#ffffffc9] to-[#ffffff] shadow-[17px_0_28px_#55c6d026] relative">
                <Image
                  src="https://dev.hyperaschain.com/img/rapitalbank.png"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto cursor-pointer"
                  priority
                />
                <p className="">Digital Banking</p>
                <a
                  href="https://www.rapitalbank.com"
                  target="_blank"
                  className="arrow"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Introduction;
