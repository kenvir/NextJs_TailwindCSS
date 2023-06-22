function Community() {
  return (
    <div className="community">
      {/* <div className="circleBlur-1"></div>
      <div className="circleBlur-2"></div> */}
      <div className="max-w-[1320px] w-full mx-auto">
        <section className="text-center pt-20 pb-12">
          <h1 className="text-[54px] font-bold">Community</h1>
        </section>
        <section className="pt-12">
          <div className="flex justify-center text-center">
            <div className="w-3/5">
              <h2 className="sectionHeading text-[34px] font-bold">
                Official Hyperas chain Channels
              </h2>
              <p className="text-[17px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
              <div className="flex flex-wrap justify-center text-center">
                <div className="w-1/3">
                  <a
                    href="https://t.me/hyperaschainchannel"
                    target="blank"
                    className="my-5 inline-block"
                  >
                    <img
                      src="https://dev.hyperaschain.com/img/telegram.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-1/3">
                  <a
                    href="https://www.linkedin.com/company/hyperaschainofficial"
                    target="blank"
                    className="my-5 inline-block"
                  >
                    <img
                      src="https://dev.hyperaschain.com/img/linkedin.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-1/3">
                  <a
                    href="https://twitter.com/hyperaschain"
                    target="blank"
                    className="my-5 inline-block"
                  >
                    <img
                      src="https://dev.hyperaschain.com/img/twitter.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-1/3">
                  <a
                    href="https://www.facebook.com/hyperaschain"
                    target="blank"
                    className="my-5 inline-block"
                  >
                    <img
                      src="https://dev.hyperaschain.com/img/facebook.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-1/3">
                  <a
                    href="https://github.com/hyperaschain-com"
                    target="blank"
                    className="my-5 inline-block"
                  >
                    <img
                      src="https://dev.hyperaschain.com/img/github.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-1/3">
                  <a
                    href="https://www.youtube.com/channel/UC76gQwZQzZS4cPKYUOvnABQ"
                    target="blank"
                    className="my-5 inline-block"
                  >
                    <img
                      src="https://dev.hyperaschain.com/img/youtube.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-12 text-center">
          <h2 className="sectionHeading text-[34px] font-bold">
            Upcoming Event
          </h2>
          <div className="overflow-x-auto">
            <table className="table align-middle text-white text-left w-full">
              <thead>
                <tr className="relative">
                  <th></th>
                  <th>Event</th>
                  <th>Time</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr className="relative">
                  <td>
                    <img
                      src="https://dev.hyperaschain.com/img/event-img.png"
                      alt=""
                    />
                  </td>
                  <td className="font-bold text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </td>
                  <td className="text-[18px]">20.04.2022</td>
                  <td className="font-bold text-[18px]" title="Online">
                    Online
                  </td>
                </tr>
                <tr className="relative">
                  <td>
                    <img
                      src="https://dev.hyperaschain.com/img/event-img.png"
                      alt=""
                    />
                  </td>
                  <td className="font-bold text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </td>
                  <td className="text-[18px]">20.04.2022</td>
                  <td className="font-bold text-[18px]" title="Offline">
                    Offline
                  </td>
                </tr>
                <tr className="relative">
                  <td>
                    <img
                      src="https://dev.hyperaschain.com/img/event-img.png"
                      alt=""
                    />
                  </td>
                  <td className="font-bold text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </td>
                  <td className="text-[18px]">20.04.2022</td>
                  <td className="font-bold text-[18px]" title="Online">
                    Online
                  </td>
                </tr>
                <tr className="relative">
                  <td>
                    <img
                      src="https://dev.hyperaschain.com/img/event-img.png"
                      alt=""
                    />
                  </td>
                  <td className="font-bold text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </td>
                  <td className="text-[18px]">20.04.2022</td>
                  <td className="font-bold text-[18px]" title="Online">
                    Online
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <a href="#">SEE MORE</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Community;
