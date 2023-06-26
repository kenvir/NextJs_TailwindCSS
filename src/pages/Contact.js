import Image from "next/image";

function Contact() {
  return (
    <div className="contact">
      <div className="max-w-[1320px] w-full mx-auto">
        <section className="text-center py-12">
          <h1 className="text-[54px] font-bold">CONTACT</h1>
          <p className="intro">Get in touch with the Hyperas team</p>
        </section>
        <section className="flex justify-between py-12">
          <div className="w-[30%] cursor-pointer">
            <div className="numberWrap relative">
              <div className="roundPink absolute left-1/2 -top-10 -translate-x-1/2 z-[1]">
                <Image
                  src="https://dev.hyperaschain.com/img/Vector-contact.png"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto cursor-pointer"
                  priority
                />
              </div>
              <div className="numberItem text-center">
                <div className="text-gradient text-[24px] pb-3 font-bold">
                  For General Chat
                </div>
                <div className="text-[16px] pb-3 font-normal">
                  Join the Telegram
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] cursor-pointer">
            <div className="numberWrap relative">
              <div className="roundPink absolute left-1/2 -top-10 -translate-x-1/2 z-[1]">
                <Image
                  src="	https://dev.hyperaschain.com/img/Framecontact.png"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto cursor-pointer"
                  priority
                />
              </div>
              <div className="numberItem text-center">
                <div className="text-gradient text-[24px] pb-3 font-bold">
                  For Press Inquiries
                </div>
                <div className="text-[16px] pb-3 font-normal">
                  Please fill out this Form
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] cursor-pointer">
            <div className="numberWrap relative">
              <div className="roundPink absolute left-1/2 -top-10 -translate-x-1/2 z-[1]">
                <Image
                  src="https://dev.hyperaschain.com/img/Framecontact1.png"
                  alt={"logo"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto cursor-pointer"
                  priority
                />
              </div>
              <div className="numberItem text-center">
                <div className="text-gradient text-[24px] pb-3 font-bold">
                  For All Other Enquiries
                </div>
                <div className="text-[16px] pb-3 font-normal">
                  Hyperas.com/faq
                </div>
              </div>
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

export default Contact;
