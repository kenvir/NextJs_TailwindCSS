import Image from "next/image";
import "./OverView.module.scss";

function OverView() {
  return (
    <div>
      <section className="banner">
        <h1 className="text-white text-[46px] font-semibold">OVERVIEW</h1>
      </section>
      <section className="mt-[-100px] pt-[50px] pb-[250px]">
        <div className="max-w-[1320px] w-full mx-auto">
          <div className="text-center">
            <h2 className="sectionHeading">Ecosystem</h2>
          </div>
          <div className="content flex">
            <div className="content-item max-w-full w-1/2">
              <div className="item item-1 h-full relative py-[40px] pl-[80px] pr-[200px] text-justify">
                <div className="text-right mb-4">
                  <Image
                    src="https://dev.hyperaschain.com/img/logoHyraScan.png"
                    alt=""
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-[130px] h-auto"
                  />
                </div>
                <div className="text-[17px] text-[#58595B]">
                  The blockchain ledger of Hyperas Chain, where to keep track of
                  transactions in and out of smart contracts, cryptocurrency
                  transactions, cryptographic assets (NFT).
                </div>
              </div>
            </div>
            <div className="content-item max-w-full w-1/2">
              <div className="item item-2 h-full relative py-[40px] pr-[80px] pl-[200px] text-justify">
                <div className="text-right mb-4">
                  <Image
                    src="https://dev.hyperaschain.com/img/logoHyraScan.png"
                    alt=""
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-[130px] h-auto"
                  />
                </div>
                <div className="text-[17px] text-[#58595B]">
                  The blockchain ledger of Hyperas Chain, where to keep track of
                  transactions in and out of smart contracts, cryptocurrency
                  transactions, cryptographic assets (NFT).
                </div>
              </div>
            </div>
          </div>
          <Image
            src="	https://dev.hyperaschain.com/img/icon-hyperas.png"
            alt=""
            width="0"
            height="0"
            sizes="100vw"
            className="mx-auto my-[-80px] w-[200px] h-auto"
          />
          <div className="content flex mt-[80px]">
            <div className="content-item max-w-full w-1/2">
              <div className="item item-1 h-full relative py-[40px] pl-[80px] pr-[200px] text-justify">
                <div className="text-right mb-4">
                  <Image
                    src="https://dev.hyperaschain.com/img/logoHyraScan.png"
                    alt=""
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-[130px] h-auto"
                  />
                </div>
                <div className="text-[17px] text-[#58595B]">
                  The blockchain ledger of Hyperas Chain, where to keep track of
                  transactions in and out of smart contracts, cryptocurrency
                  transactions, cryptographic assets (NFT).
                </div>
              </div>
            </div>
            <div className="content-item max-w-full w-1/2">
              <div className="item item-2 h-full relative py-[40px] pr-[80px] pl-[200px] text-justify">
                <div className="text-right mb-4">
                  <Image
                    src="https://dev.hyperaschain.com/img/logoHyraScan.png"
                    alt=""
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-[130px] h-auto"
                  />
                </div>
                <div className="text-[17px] text-[#58595B]">
                  The blockchain ledger of Hyperas Chain, where to keep track of
                  transactions in and out of smart contracts, cryptocurrency
                  transactions, cryptographic assets (NFT).
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OverView;
