import Image from "next/image";

import "./Home.module.scss";

function Banner() {
  return (
    <section className="bannerHome">
      <div className="max-w-[1320px] w-full mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-[0_0_auto] w-auto">
            <h1 className="sectionHeading mb-0 text-[48px]">
              Hyperas Chain<p></p>
            </h1>
            <h3 className="text-[38px] font-thin">The chain of hyper assets</h3>
            <div className="flex pt-10">
              <div className="flex-[0_0_auto] w-1/2">
                <a
                  href="#"
                  className="d-block btn text-[16px] font-semibold py-4 px-5 bg-[#0C94B0] shadow-[0px_4px_13px_#55C6D0] rounded-md"
                >
                  Smart Contract
                </a>
              </div>
              <div className="flex-[0_0_auto] w-1/2">
                <a
                  href="#"
                  className="d-block btn text-[16px] font-semibold py-4 px-5 bg-[#EC008C] shadow-[0px_4px_13px_#55C6D0] rounded-md"
                >
                  White Paper
                </a>
              </div>
            </div>
            <div className="pt-10 pl-2 small">
              <a href="#" className="flex">
                <span className="underline decoration-solid font-medium mr-4">
                  Audited by
                </span>{" "}
                <Image
                  src="https://dev.hyperaschain.com/img/certiklogo.png"
                  alt={"logo"}
                  width="80"
                  height="0"
                  sizes="100vw"
                  className="cursor-pointer"
                  priority
                />
              </a>
            </div>
          </div>
          <div className="col-md text-center">
            <Image
              src="https://dev.hyperaschain.com/img/bannerRight.png"
              alt={"logo"}
              width="0"
              height="0"
              sizes="10vw"
              className="w-full h-auto cursor-pointer"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
