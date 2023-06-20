import Image from "next/image";

function GuildLine() {
  return (
    <div className="px-0 pt-10 pb-20 bg-[#172932] relative">
      <div className="max-w-[1320px] w-full mx-auto">
        <section className="py-12">
          <div className="text-center pt-20">
            <h1 className="text-[54px] font-bold mb-12">GUILDLINE</h1>
            <p className="text-[16px]">
              A decentralized exchange where cryptocurrencies and other digital
              assets (NFTs) are listed. Hyra Dex is considered a great step
              forward in the mission of currency liberalization, decentralized
              crypto-assets of the Hyperas Chain ecosystem...
            </p>
          </div>
        </section>
        <section className="text-center py-12">
          <div className="flex flex-wrap">
            <div className="max-w-full w-1/4 steps">
              <div className="roundPink">
                <Image
                  src="https://dev.hyperaschain.com/img/icon-step-1.png"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto cursor-pointer"
                  priority
                />
              </div>
              <h3 className="relative my-6 text-[22px] font-medium step">
                Step 1
              </h3>
              <p className="px-4 mb-4">
                Fill out the registration form to send us information.
              </p>
            </div>
            <div className="max-w-full w-1/4 steps">
              <div className="roundPink">
                <Image
                  src="https://dev.hyperaschain.com/img/icon-step-2.png"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto cursor-pointer"
                  priority
                />
              </div>
              <h3 className="relative my-6 text-[22px] font-medium step">
                Step 2
              </h3>
              <p className="px-4 mb-4">
                Hyperas conducts internal of project information before
                proceeding to digitize assets.
              </p>
            </div>
            <div className="max-w-full w-1/4 steps">
              <div className="roundPink">
                <Image
                  src="https://dev.hyperaschain.com/img/icon-step-3.png"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto cursor-pointer"
                  priority
                />
              </div>
              <h3 className="relative my-6 text-[22px] font-medium step">
                Step 3
              </h3>
              <p className="px-4 mb-4">Digitize assets through Hyperas Chain</p>
            </div>
            <div className="max-w-full w-1/4 steps">
              <div className="roundPink">
                <Image
                  src="https://dev.hyperaschain.com/img/icon-step-4.png"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto cursor-pointer"
                  priority
                />
              </div>
              <h3 className="relative my-6 text-[22px] font-medium step">
                Step 4
              </h3>
              <p className="px-4 mb-4">
                Publish digital assets to appropriate platforms depending on the
                needs of the project.
              </p>
            </div>
          </div>
        </section>
        <section className="bgGrad rounded-xl p-1">
          <div className="inner rounded-xl">
            <div className="flex flex-wrap">
              <div className="w-1/2 ml-[50%] flex-[0_0_auto]">
                <h3 className="sectionHeading text-[34px] mb-6">
                  Contact Hyperas
                </h3>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control text-white bg-[#61717bb3] p-4 border-none resize-none"
                    placeholder="Your Name*"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control text-white bg-[#61717bb3] p-4 border-none resize-none"
                    placeholder="Your Email*"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="form-control text-white bg-[#61717bb3] p-4 border-none resize-none"
                    placeholder="Message*"
                    rows="6"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="text-[16px] px-5 py-4 w-full cursor-pointer btnGrad"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default GuildLine;
