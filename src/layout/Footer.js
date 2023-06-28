import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";

import { logo } from "@/src/assets/imgs/logo.png";

function Footer() {
  return (
    <footer className="flex-col w-full">
      <div className="max-w-full h-16 bg-[#EC008C]">
        <div className="flex items-center justify-between max-w-[1320px] w-full h-full mx-auto">
          <div>
            <Image
              src="https://dev.hyperaschain.com/img/logoFooter.png"
              alt={"logo"}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="flex items-center justify-evenly w-1/4 text-white">
            <FaFacebook className="cursor-pointer text-[24px]" />
            <FaInstagram className="cursor-pointer text-[24px]" />
            <FaPinterest className="cursor-pointer text-[24px]" />
            <FaTwitter className="cursor-pointer text-[24px]" />
            <FaLinkedin className="cursor-pointer text-[24px]" />
            <FaGithub className="cursor-pointer text-[24px]" />
          </div>
        </div>
      </div>
      <div className="max-w-full bg-[#d4007e] text-white">
        <div className="flex justify-between max-w-[1320px] w-full mx-auto pt-[50px]">
          <div className="w-1/3">
            <div>
              <h2 className="font-semibold mb-2 text-[20px]">
                HYPERAS CHAIN LTD
              </h2>
              <span className="flex font-semibold text-[16px]">
                Address:
                <p className="font-thin text-[17px]">
                  &ensp;10 Anson Road # 11-20 International Plaza Singapore
                  (079903)
                </p>
              </span>
            </div>
            <ul className="mt-4">
              <li className="group py-3 font-bold text-[18px] mr-1">
                <span className="flex items-center">Company</span>
                <ul className="  text-white rounded-md font-thin text-[16px]">
                  <li className="py-2">
                    <Link
                      href="/"
                      className="hover:border-b-2 hover:border-b-red-500 duration-75"
                    >
                      About us
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="/"
                      className="hover:border-b-2 hover:border-b-red-500 duration-75"
                    >
                      Community
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="/"
                      className="hover:border-b-2 hover:border-b-red-500 duration-75"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="/"
                      className="hover:border-b-2 hover:border-b-red-500 duration-75"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex w-2/3">
            <ul className="flex w-full justify-around">
              <li className="group p-3 font-bold text-[18px] mr-1">
                <span className="flex items-center">Technology</span>
                <ul className="  text-white rounded-md font-thin text-[16px]">
                  <li className="my-2">
                    <Link
                      href="/"
                      className="hover:border-b-2 hover:border-b-red-500 duration-75"
                    >
                      Overview
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="/"
                      className="hover:border-b-2 hover:border-b-red-500 duration-75"
                    >
                      Stake
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="/"
                      className="hover:border-b-2 hover:border-b-red-500 duration-75"
                    >
                      Roadmap
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="/"
                      className="hover:border-b-2 hover:border-b-red-500 duration-75"
                    >
                      Whitepaper
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group p-3 font-bold text-[18px] mr-1">
                <span className="flex items-center">Ecosystem</span>
                <ul className=" text-white rounded-md font-thin text-[16px]">
                  <li className="py-2">
                    <Link
                      href="/"
                      className="hover:border-b-2 hover:border-b-red-500 duration-75"
                    >
                      Testnet
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="/"
                      className="hover:border-b-2 hover:border-b-red-500 duration-75"
                    >
                      Mainnet
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="/"
                      className="hover:border-b-2 hover:border-b-red-500 duration-75"
                    >
                      Hyra Wallet
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="/"
                      className="hover:border-b-2 hover:border-b-red-500 duration-75"
                    >
                      Hyra Dex
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="/"
                      className="hover:border-b-2 hover:border-b-red-500 duration-75"
                    >
                      Hyra Invest
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group p-3 font-bold text-[18px] mr-1">
                <span className="flex items-center">External Environment</span>
                <ul className="  text-white rounded-md font-thin text-[16px]">
                  <li className="py-2">
                    <Link
                      href="/"
                      className="hover:border-b-2 hover:border-b-red-500 duration-75"
                    >
                      Pindias
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="/"
                      className="hover:border-b-2 hover:border-b-red-500 duration-75"
                    >
                      Divega
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="/"
                      className="hover:border-b-2 hover:border-b-red-500 duration-75"
                    >
                      RapitalBank
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group p-3 font-bold text-[18px] mr-1">
                <span className="flex items-center">Resources</span>
                <ul className="  text-white rounded-md font-thin text-[16px]">
                  <li className="py-2">
                    <Link
                      href="/"
                      className="hover:border-b-2 hover:border-b-red-500 duration-75"
                    >
                      Brand Kit
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="/"
                      className="hover:border-b-2 hover:border-b-red-500 duration-75"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="/"
                      className="hover:border-b-2 hover:border-b-red-500 duration-75"
                    >
                      Guildeline
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="/"
                      className="hover:border-b-2 hover:border-b-red-500 duration-75"
                    >
                      Become Validator
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center max-w-[1320px] w-full mx-auto mt-[50px] border-t-[1px]">
          <span className="font-thin mt-2">
            Copyright © 2021 - 2022 Hyperaschain.com. All rights reserved.
          </span>
          <span className="font-thin mb-2">
            Privacy Notice | Legal | Status | Cookie Preferences
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
