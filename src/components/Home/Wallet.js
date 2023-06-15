import Image from "next/image";

function Wallet() {
  return (
    <section className="wallet bg-white py-12 border-y-2 border-[#01FFF0] relative z-[1]">
      <div className="max-w-[1320px] w-full mx-auto">
        <div className="flex justify-around">
          <div className="flex-[0_0_auto]">
            <a href="#">
              <Image
                src="https://dev.hyperaschain.com/img/logoHyraScan.png"
                alt={"logo"}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto cursor-pointer"
                priority
              />
            </a>
          </div>
          <div className="flex-[0_0_auto]">
            <a href="#">
              <Image
                src="https://dev.hyperaschain.com/img/logoHyraWallet.png"
                alt={"logo"}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto cursor-pointer"
                priority
              />
            </a>
          </div>
          <div className="flex-[0_0_auto]">
            <a href="#">
              <Image
                src="https://dev.hyperaschain.com/img/logoHyradex.png"
                alt={"logo"}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto cursor-pointer"
                priority
              />
            </a>
          </div>
          <div className="flex-[0_0_auto]">
            <a href="#">
              <Image
                src="https://dev.hyperaschain.com/img/logoHyraInvest.png"
                alt={"logo"}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto cursor-pointer"
                priority
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wallet;
