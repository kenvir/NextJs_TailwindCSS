import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

import Image from "next/image";

import { logo } from "@/src/assets/imgs/logo.png";
import Link from "next/link";

function Header() {
  return (
    <header className="flex flex-col w-full bg-black">
      <div className="flex max-w-full h-16 border-b-[1px]">
        <div className="flex items-center justify-end w-full h-full pr-40">
          <div className="flex items-center justify-evenly w-1/6 text-white">
            <FaFacebook className="cursor-pointer text-[22px]" />
            <FaInstagram className="cursor-pointer text-[22px]" />
            <FaPinterest className="cursor-pointer text-[22px]" />
            <FaTwitter className="cursor-pointer text-[22px]" />
          </div>
          <span className="text-[16px] font-semibold cursor-pointer">FAQ</span>
        </div>
      </div>
      <div className="flex items-center justify-between max-w-[1320px] w-full h-16 mx-auto">
        <a href="/" className="">
          <Image
            src="https://dev.hyperaschain.com/img/logo.png"
            alt={"logo"}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto cursor-pointer"
            priority
          />
        </a>
        <nav className="flex items-center h-full">
          <ul className="flex items-center text-white h-full">
            <li className="flex items-center group p-3 font-bold text-[16px] h-full cursor-pointer mr-1">
              <span className="flex items-center">
                Technology <TiArrowSortedDown />
              </span>
              <ul className="absolute hidden group-hover:block top-32 bg-blue-100 text-black py-3 pl-3 pr-6 rounded-md font-semibold cursor-default z-10">
                <li className="m-2">
                  <Link
                    href="/OverView"
                    className="hover:border-b-2 hover:border-b-red-500 duration-75"
                  >
                    Overview
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/Stake"
                    className="hover:border-b-2 hover:border-b-red-500 duration-75"
                  >
                    Stake
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/"
                    className="hover:border-b-2 hover:border-b-red-500 duration-75"
                  >
                    Roadmap
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/"
                    className="hover:border-b-2 hover:border-b-red-500 duration-75"
                  >
                    Whitepaper
                  </Link>
                </li>
              </ul>
            </li>
            <li className="flex items-center group p-3 font-bold text-[16px] h-full cursor-pointer mr-1">
              <span className="flex items-center">
                Ecosystem <TiArrowSortedDown />
              </span>
              <ul className="absolute hidden group-hover:block top-32 bg-blue-100 text-black py-3 pl-3 pr-6 rounded-md font-semibold cursor-default z-10">
                <li className="p-2">
                  <Link
                    href="/"
                    className="hover:border-b-2 hover:border-b-red-500 duration-75"
                  >
                    Testnet
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/"
                    className="hover:border-b-2 hover:border-b-red-500 duration-75"
                  >
                    Mainnet
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/"
                    className="hover:border-b-2 hover:border-b-red-500 duration-75"
                  >
                    Hyra Wallet
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/"
                    className="hover:border-b-2 hover:border-b-red-500 duration-75"
                  >
                    Hyra Dex
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/"
                    className="hover:border-b-2 hover:border-b-red-500 duration-75"
                  >
                    Hyra Invest
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/"
                    className="hover:border-b-2 hover:border-b-red-500 duration-75"
                  >
                    NFT Market Place
                  </Link>
                </li>
              </ul>
            </li>
            <li className="flex items-center group p-3 font-bold text-[16px] h-full cursor-pointer mr-1">
              <span className="flex items-center">
                External Environment <TiArrowSortedDown />
              </span>
              <ul className="absolute hidden group-hover:block top-32 bg-blue-100 text-black py-3 pl-3 pr-6 rounded-md font-semibold cursor-default z-10">
                <li className="p-2">
                  <Link
                    href="/"
                    className="hover:border-b-2 hover:border-b-red-500 duration-75"
                  >
                    Pindias
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/"
                    className="hover:border-b-2 hover:border-b-red-500 duration-75"
                  >
                    Divega
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/"
                    className="hover:border-b-2 hover:border-b-red-500 duration-75"
                  >
                    RapitalBank
                  </Link>
                </li>
              </ul>
            </li>
            <li className="flex items-center group p-3 font-bold text-[16px] h-full cursor-pointer mr-1">
              <span className="flex items-center">
                Resources <TiArrowSortedDown />
              </span>
              <ul className="absolute hidden group-hover:block top-32 bg-blue-100 text-black py-3 pl-3 pr-6 rounded-md font-semibold cursor-default z-10">
                <li className="p-2">
                  <Link
                    href="/BrandKit"
                    className="hover:border-b-2 hover:border-b-red-500 duration-75"
                  >
                    Brand Kit
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/"
                    className="hover:border-b-2 hover:border-b-red-500 duration-75"
                  >
                    Blog
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/GuildLine"
                    className="hover:border-b-2 hover:border-b-red-500 duration-75"
                  >
                    Guildline
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/Validator"
                    className="hover:border-b-2 hover:border-b-red-500 duration-75"
                  >
                    Become Validator
                  </Link>
                </li>
              </ul>
            </li>
            <li className="flex items-center group p-3 font-bold text-[16px] h-full cursor-pointer mr-1">
              <span className="flex items-center">
                Company <TiArrowSortedDown />
              </span>
              <ul className="absolute hidden group-hover:block top-32 bg-blue-100 text-black py-3 pl-3 pr-6 rounded-md font-semibold cursor-default z-10">
                <li className="p-2">
                  <Link
                    href="/AboutUs"
                    className="hover:border-b-2 hover:border-b-red-500 duration-75"
                  >
                    About us
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/Community"
                    className="hover:border-b-2 hover:border-b-red-500 duration-75"
                  >
                    Community
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/FAQ"
                    className="hover:border-b-2 hover:border-b-red-500 duration-75"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/Contact"
                    className="hover:border-b-2 hover:border-b-red-500 duration-75"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="flex">
          <div className="flex items-center">
            <button className="text-white font-semibold p-3 bg-[#EC008C] hover:shadow-[0_2px_20px_0_rgba(0,0,0,0.3)] hover:shadow-[#EC008C] rounded-md duration-150">
              Buy Hyra
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
