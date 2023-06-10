import { useState } from "react";
import Image from "next/image";
import { FaList } from "react-icons/fa";
// import { FaGrip } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Stake() {
  const [activeStatus, setActiveStatus] = useState(false);

  const handleActive = () => {
    if (activeStatus === false) {
      setActiveStatus(true);
    } else activeStatus === true;
    {
      setActiveStatus(false);
    }
  };

  return (
    <div className="relative bg-[#172932]">
      <span className="circleBlur top-[-40px] left-1/2 -translate-x-1/2"></span>
      <div className="max-w-[1320px] w-full mx-auto">
        <section className="text-center pt-[80px] pb-[50px]">
          <h1 className="text-white font-bold text-[42px]">
            GETTING STARTED HYRA STAKING
          </h1>
        </section>
        <section className="pt-[50px]">
          <div className="mx-[10px] mt-0">
            <div className="flex flex-wrap items-end justify-between">
              <div className="items-centre flex flex-row">
                <div className="flex mb-md-0 mb-3">
                  <div className="flex items-center mr-12">
                    {/* <FaGrip /> */}
                    <FaList className="list text-[24px] text-[#107072] cursor-pointer" />
                  </div>
                  <div className="flex items-center p-0 mr-12 mb-0 min-h-[1.5rem]">
                    <input
                      type="checkbox"
                      role="switch"
                      // checked
                      className="stake-check"
                    />
                    <label className="text-white text-[16px] font-semibold">
                      Stake Only
                    </label>
                  </div>
                </div>
                <div className="">
                  <div className="inline-block border border-[#6cfff64d] rounded-[30px] p-0.5">
                    <input type="radio" className="btn-check" />
                    <label
                      htmlFor="option1"
                      className="text-white text-[16px] font-semibold pt-[3px] pb-[4px] px-[15px] mr-1 rounded-[30px] cursor-pointer active {activeStatus === true ? 'active' : 'none'}"
                      onClick={() => {
                        setActiveStatus(true);
                        console.log(activeStatus);
                      }}
                    >
                      Live
                    </label>
                    <input type="radio" className="btn-check" />
                    <label
                      htmlFor="option2"
                      className="text-white text-[16px] font-semibold pt-[3px] pb-[4px] px-[15px] rounded-[30px] cursor-pointer {activeStatus === true ? 'active' : 'none'}"
                      onClick={handleActive}
                    >
                      Finish
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="relative mr-12">
                  <label htmlFor="" className="mb-2 text-[16px] font-semibold">
                    Sort by
                  </label>
                  <div className="">
                    <select
                      className="sorting bg-[#388992] pr-[40px] pl-[15px] py-[8px] w-[170px] text-left border-none rounded-md outline-none"
                      // onChange={(e) => setSort(e.target.value)}
                    >
                      <option value="Hot" className="cursor-pointer py-2">
                        HOT
                      </option>
                      <option value="Apr" className="cursor-pointer py-2">
                        APR
                      </option>
                      <option value="Eearned" className="cursor-pointer py-2">
                        Eearned
                      </option>
                      <option value="Total" className="cursor-pointer py-2">
                        Total Staked
                      </option>
                      <option value="Lat" className="cursor-pointer py-2">
                        Latest
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="" className="mb-2 text-[16px] font-semibold">
                    Search
                  </label>
                  <div>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Search Pools"
                      className="bg-[#388992] pr-[40px] pl-[15px] py-[8px] w-[250px] text-left border-none rounded-md outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[40px]">
            <div className="flex p-[20px] border-b-[1px] border-[#c4c4c4]">
              <div className="flex flex-wrap w-1/3">
                <div className="flex max-w-full">
                  <div className="relative mr-[25px] w-[75px] h-[75px] rounded-[50%]">
                    <Image
                      src="https://dev.hyperaschain.com/img/icon-hyra.svg"
                      alt={"logo"}
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="max-w-full h-auto border-[2px] border-[#01FFF0] rounded-[50%] w-[70px]"
                      priority
                    />{" "}
                    <Image
                      src="https://dev.hyperaschain.com/img/icon-switch.svg"
                      alt={"logo"}
                      width="0"
                      height="0"
                      sizes="50vw"
                      className="max-w-full h-auto border-[2px] border-[#ff6dc4] rounded-[50%] w-[40px] -right-3 top-10 absolute"
                      priority
                    />
                  </div>
                </div>
                <div>
                  <h5 className="text-[22px] font-bold">Stake HYRA</h5>
                  <div className="text-[18px]">Stake, Earn - And more!</div>
                </div>
              </div>
              <div className="flex w-2/3">
                <div className="cell-1 flex flex-col">
                  <div className="text-[#01FFF0] mb-1.5 text-[18px]">
                    Hyperas Staked
                  </div>
                  <div className="font-bold">0.0</div>
                  <div className="font-bold">0 USD</div>
                </div>
                <div className="cell-2">
                  <div className="text-[#01FFF0] mb-1.5 text-[18px]">
                    Flexible APY
                  </div>
                  <div className="text-[16px]">15.67%</div>
                </div>
                <div className="cell-3">
                  <div className="text-[#01FFF0] mb-1.5 text-[18px]">
                    Locked APY
                  </div>
                  <div className="text-[16px]">Up to 17.48%</div>
                </div>
                <div className="cell-4">
                  <div className="text-[#01FFF0] mb-1.5 text-[18px]">
                    Total staked
                  </div>
                  <div className="text-[16px]">123,456,789 HYRA</div>
                </div>
                <div className="self-center">
                  <IoIosArrowDown className="text-[#01FFF0] text-[28px] cursor-pointer" />
                  {/* <Image
                      src="https://dev.hyperaschain.com/img/close-selec.png"
                      alt={"logo"}
                      width="0"
                      height="0"
                      sizes="100vw"
                    /> */}
                </div>
              </div>
            </div>

            <div className="flex p-[20px] border-b-[1px] border-[#c4c4c4]">
              <div className="flex flex-wrap w-1/3">
                <div className="flex max-w-full">
                  <div className="relative mr-[25px] w-[75px] h-[75px] rounded-[50%]">
                    <Image
                      src="https://dev.hyperaschain.com/img/icon-hyra.svg"
                      alt={"logo"}
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="max-w-full h-auto border-[2px] border-[#01FFF0] rounded-[50%] w-[70px]"
                      priority
                    />{" "}
                    <Image
                      src="https://dev.hyperaschain.com/img/icon-hyra.svg"
                      alt={"logo"}
                      width="0"
                      height="0"
                      sizes="50vw"
                      className="max-w-full h-auto border-[2px] border-[#01FFF0] rounded-[50%] w-[40px] -right-3 top-10 absolute"
                      priority
                    />
                  </div>
                </div>
                <div>
                  <h5 className="text-[22px] font-bold">Stake HYRA</h5>
                  <div className="text-[18px]">Stake, Earn - And more!</div>
                </div>
              </div>
              <div className="flex w-2/3">
                <div className="cell-1 flex flex-col">
                  <div className="text-[#01FFF0] mb-1.5 text-[18px]">
                    Hyperas Staked
                  </div>
                  <div className="font-bold">0.0</div>
                  <div className="font-bold">0 USD</div>
                </div>
                <div className="cell-2">
                  <div className="text-[#01FFF0] mb-1.5 text-[18px]">
                    Flexible APY
                  </div>
                  <div className="text-[16px]">15.67%</div>
                </div>
                <div className="cell-3">
                  <div className="text-[#01FFF0] mb-1.5 text-[18px]">
                    Locked APY
                  </div>
                  <div className="text-[16px]">Up to 17.48%</div>
                </div>
                <div className="cell-4">
                  <div className="text-[#01FFF0] mb-1.5 text-[18px]">
                    Total staked
                  </div>
                  <div className="text-[16px]">123,456,789 HYRA</div>
                </div>
                <div className="self-center">
                  <IoIosArrowDown className="text-[#01FFF0] text-[28px] cursor-pointer" />
                  {/* <Image
                    src="https://dev.hyperaschain.com/img/close-selec.png"
                    alt={"logo"}
                    width="0"
                    height="0"
                    sizes="100vw"
                  /> */}
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-5 pb-10">
            <a href="#" class="goTop flex justify-center cursor-pointer">
              <p className="text-[#01FFF0]">TO TOP</p>
              <IoIosArrowUp className="text-[#01FFF0] text-[28px] cursor-pointer" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Stake;
