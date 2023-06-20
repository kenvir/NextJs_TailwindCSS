import Image from "next/image";

function Validator() {
  return (
    <div className="validator">
      <span className="circleBlur-1"></span>
      <div className="max-w-[1320px] w-full mx-auto relative">
        <section className="text-center py-12">
          <h1 className="text-[54px] font-bold mb-12">HYPERAS VALIDATOR</h1>
        </section>
        <section className="py-12">
          <div className="flex flex-wrap justify-center">
            <div className="w-1/3">
              <div className="numberWrap">
                <div className="numberItem">
                  <div className="text-gradient text-[55px] pb-3 font-bold">
                    1,234
                  </div>
                  <div className="text-[18px] pb-3 font-bold">
                    Current number of validators on mainnet
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <div className="numberWrap">
                <div className="numberItem">
                  <div className="text-gradient text-[55px] pb-3 font-bold">
                    34
                  </div>
                  <div className="text-[18px] pb-3 font-bold">
                    Current Superminority
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/5">
              <div className="docsWrap d-flex flex-column">
                <h3 className="text-[22px] font-bold mb-4">Get Started</h3>
                <p className="mb-4">
                  Go here for documentation related to all things Validator,
                  from validator requirements, to troubleshooting.
                </p>
                <div className="text-end">
                  <a href="#" className="text-[#01FFF0] font-semibold">
                    Go to docs <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-2/5">
              <div className="docsWrap d-flex flex-column bgright">
                <h3 className="text-[22px] font-bold mb-4">
                  Validator Explorer
                </h3>
                <p className="mb-4">
                  View the current list of validators, their ranking by stake
                  amount, and information about commission below.
                </p>
                <div className="text-end">
                  <a href="#" className="text-[#01FFF0] font-semibold">
                    Go to docs <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center text-center p-0">
          <Image
            src="https://dev.hyperaschain.com/img/cube.png"
            alt={"logo"}
            width="265"
            height="185"
            sizes="100vw"
            priority
            className="imgCube"
          />
        </section>
        <section className="text-center relative z-[1] py-[50px]">
          <h2 className="sectionHeading text-[34px] mb-4">
            What is Validator with PoA-based networks?
          </h2>
          <p className="text-[16px] pb-6 mb-6">
            In PoA-based networks, transactions and blocks are validated by
            approved accounts, known as validators. Validators run software
            allowing them to put transactions in blocks. The process is
            automated and does not require validators to be constantly
            monitoring their computers. It, however, does require maintaining
            the computer (the authority node) uncompromised.
          </p>
          <a href="#" className="px-5 py-4 btnGrad mt-5">
            Become Validator
          </a>
        </section>
      </div>
    </div>
  );
}

export default Validator;
