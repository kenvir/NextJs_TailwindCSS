import Partner from "../components/Home/Partner";

import Image from "next/image";

function AboutUs() {
  return (
    <div className="relative bg-[#172932]">
      <span className="circleBlur-1"></span>
      <div className="max-w-[1320px] w-full mx-auto">
        <section className="text-center py-12">
          <h1 className="text-[54px] font-bold">ABOUT US</h1>
        </section>
        <section className="py-12">
          <div className="container-lg">
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="w-1/2 order-1 rounded-xl flex-1">
                <Image
                  src="https://dev.hyperaschain.com/img/hyperas-about-2.jpg"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto cursor-pointer rounded-xl"
                  priority
                />
              </div>
              <div className=" w-1/2 order-2 flex-1">
                <h3 className="text-gradient text-[26px] font-semibold mb-3">
                  Our Mission
                </h3>
                <p className="text-[18px] font-extralight">
                  We choose to go with partners who share the same business
                  ecosystem and corporate culture value system. We work with
                  major service providers to blockchainise conventional business
                  models.{" "}
                </p>
                <p className="text-[18px] font-extralight">
                  Our mission is to build a reliable blockchain platform that
                  will form the backbone of the large-scale tokenization of
                  decentralized assets in the future economy.{" "}
                </p>
                <p className="text-[18px] font-extralight">
                  With the rise of technology the world has become smaller and
                  more connected than at any point in human history.{" "}
                </p>
                <p className="text-[18px] font-extralight">
                  {" "}
                  We firmly believe that the continuation of this process will
                  lead to the emergence of a new understanding of shared goals,
                  creating demand for a new model of transparent decentralized
                  ownership.{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-6 pt-12 mt-8">
              <div className="w-1/2 order-1 flex-1">
                <h3 className="text-gradient text-[26px] font-semibold mb-3">
                  Our Vision
                </h3>
                <p className="text-[18px] font-extralight">
                  We choose to go with partners who share the same business
                  ecosystem and corporate culture value system. We work with
                  major service providers to blockchainise conventional business
                  models.{" "}
                </p>
                <p className="text-[18px] font-extralight">
                  <strong>HYPERAS chain</strong> is the first decentralized
                  interoperable and self-optimised blockchain infrastructure. We
                  aim to push the current boundaries by solving one of the most
                  prominent challenges facing blockchain technology -
                  fragmentation of the blockchain ecosystems.
                </p>
                <p className="text-[18px] font-extralight">
                  Our goal is to create a unified platform that combines all
                  participants collective strengths to lay the foundation for
                  global blockchain mass adoption.{" "}
                </p>
              </div>
              <div className="w-1/2 order-1 rounded-xl flex-1">
                <Image
                  src="https://dev.hyperaschain.com/img/hyperas-about-1.jpg"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto cursor-pointer rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section className="teamElement text-center pt-12">
          <div className="container-lg">
            <h2 className="sectionHeading text-[34px] font-bold mb-4">
              Core Team
            </h2>
            <div className="flex justify-center items-center">
              <div className="w-1/6">
                <div className="mb-4 mb-md-0">
                  <Image
                    src="https://dev.hyperaschain.com/img/team-guiko-k.png"
                    alt={"logo"}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="max-w-[200px] w-full h-auto cursor-pointer"
                    priority
                  />
                  <h6 className="text-[18px] font-semibold">GUIKO K</h6>
                  <div className="font-extralight">Technology Advisor</div>
                  <div className="social">
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-1/6">
                <div className="mb-4 mb-md-0">
                  <Image
                    src="https://dev.hyperaschain.com/img/team-frank-n-hawkins.png"
                    alt={"logo"}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="max-w-[200px] w-full h-auto cursor-pointer"
                    priority
                  />
                  <h6 className="text-[18px] font-semibold">FRANK N.HAWKINS</h6>
                  <div className="font-extralight">Finance Advisor</div>
                  <div className="social">
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-1/6">
                <div className="mb-4 mb-md-0">
                  <Image
                    src="https://dev.hyperaschain.com/img/team-francesco.png"
                    alt={"logo"}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="max-w-[200px] w-full h-auto cursor-pointer"
                    priority
                  />
                  <h6 className="text-[18px] font-semibold">FRANCESCO</h6>
                  <div className="font-extralight">CTO</div>
                  <div className="social">
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="blur-2"></span>
        </section>
        <section className="teamElement text-center pt-12">
          <div className="container-lg">
            <h2 className="sectionHeading text-[34px] font-bold mb-4">
              Advisors
            </h2>
            <div className="flex flex-wrap justify-center items-center">
              <div className="w-1/6"></div>
              <div className="w-1/6">
                <div className="mb-4">
                  <Image
                    src="https://dev.hyperaschain.com/img/team-tranquangtrung.png"
                    alt={"logo"}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="max-w-[200px] w-full h-auto cursor-pointer"
                    priority
                  />
                  <h6 className="text-[18px] font-semibold">
                    TRAN QUANG TRUNG
                  </h6>
                  <div className="font-extralight">Growth Advisor</div>
                  <div className="social">
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-1/6">
                <div className="mb-4">
                  <img
                    src="https://dev.hyperaschain.com/img/team-steve-truong.png"
                    alt=""
                  />
                  <h6 className="text-[18px] font-semibold">STEVE TRUONG</h6>
                  <div className="font-extralight">
                    Managing Director PHI Group Advisor
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-1/6">
                <div className="mb-4">
                  <img
                    src="https://dev.hyperaschain.com/img/team-frank-n-hawkins.png"
                    alt=""
                  />
                  <h6 className="text-[18px] font-semibold">FRANK N.HAWKINS</h6>
                  <div className="font-extralight">Finance Advisor</div>
                  <div className="social">
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-1/6">
                <div className="mb-4">
                  <img
                    src="https://dev.hyperaschain.com/img/team-michael-bennett.png"
                    alt=""
                  />
                  <h6 className="text-[18px] font-semibold">MICHAEL BENNETT</h6>
                  <div className="font-extralight">
                    Investment &amp; Partnership Advisor
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-1/6"></div>
              <div className="w-1/6">
                <div className="mb-4">
                  <img
                    src="https://dev.hyperaschain.com/img/team-guiko-k.png"
                    alt=""
                  />
                  <h6 className="text-[18px] font-semibold">GUIKO K</h6>
                  <div className="font-extralight">Technology Advisor</div>
                  <div className="social">
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-1/6">
                <div className="mb-4">
                  <img
                    src="https://dev.hyperaschain.com/img/team-tam-t-bui.png"
                    alt=""
                  />
                  <h6 className="text-[18px] font-semibold">TAM T.BUI</h6>
                  <div className="font-extralight">
                    CEO PHI Group Operation Advisor
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section>
        <Partner />
      </section>
    </div>
  );
}

export default AboutUs;
