import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="w-full flex flex-col items-centre">
        {/* {top section} */}
        <div className="bg-[#805AD5] h-[397px] text-gray-50 pt-[88px]  pl-6 w-full">
          <h1 className="text-3xl lg:text-5xl leading-10 font-extrabold text-gray-50">
            Simple pricing for your business
          </h1>
          <p className="text-xl font-normal text-gray-50 opacity[84] py-5 mb-4">
            Plans that are carefully crafted to suit your business.
          </p>
        </div>

        {/* middle section */}

        <div className="absolute top-[254px] mx-6  ">
          {/* first section */}
          <div className="flex flex-col lg:flex-row lg:justify-centre mx-auto  ">
            <div className="pt-9 px-12  bg-[#F0EAFB] min-w-[382px] text-center rounded-t-lg lg:rounded-l-lg  lg:rounded-tr-none">
              <span className="block mt-4 mb-3 text-2xl font-extrabold ">
                Premium PRO
              </span>
              <p className="text-2xl font-extrabold">$329</p>
              <p className="mb-8 text-gray-900 font-medium">billed just once</p>
              <button className="bg-[#805AD5] text-gray-50 px-[75px] py-3 rounded-lg mb-7">
                Get Started
              </button>
            </div>
            {/*second Section*/}

            <div className="pl-4 bg-white shadow-lg">
              <p className="mb-6 mt-10">
                Access these features when you get this pricing package <br />
                for your business.
              </p>
              <div className="flex justify-start pl-2 gap-x-3 py-1">
                <Image
                  src={require("../../public/Group 172.svg")}
                  alt="click"
                  width={22}
                  height={22}
                />
                <span className="text-gray-700 text-lg">
                  International calling and messaging API
                </span>
              </div>
              <div className="flex justify-start pl-2 gap-x-3 py-1">
                <Image
                  src={require("../../public/Group 172.svg")}
                  alt="click"
                  width={22}
                  height={22}
                />
                <span className="text-gray-700 text-lg">
                  International calling and messaging API
                </span>
              </div>
              <div className="flex justify-start pl-2 gap-x-3 py-1">
                <Image
                  src={require("../../public/Group 172.svg")}
                  alt="click"
                  width={22}
                  height={22}
                />
                <span className="text-gray-700 text-lg">
                  International calling and messaging API
                </span>
              </div>
              <div className="flex justify-start pl-2 gap-x-3 py-1 mb-10">
                <Image
                  src={require("../../public/Group 172.svg")}
                  alt="click"
                  width={22}
                  height={22}
                />
                <span className="text-gray-700 text-lg ">
                  International calling and messaging API
                </span>
              </div>
            </div>
          </div>
          {/* bottom section */}
          <div className="pl-2 lg:flex lg:justify-centre lg:gap-x-6">
            <div className="mt-8 flex justify-start gap-x-2 ">
              <Image
                src={require("../../public/Group.svg")}
                alt="pics"
                width={40}
                height={40}
              />
              <p className="text-gray-900 font-bold">
                30 days money back <br /> Guarantee
              </p>
            </div>
            <div className="mt-8 flex justify-start gap-x-2 ">
              <Image
                src={require("../../public/Group (1).svg")}
                alt="pics"
                width={40}
                height={40}
              />
              <p className="text-gray-900 font-bold">
                No setup fees <br />
                100% hassle-free
              </p>
            </div>
            <div className="mt-8 flex justify-start gap-x-2 ">
              <Image
                src={require("../../public/Group (2).svg")}
                alt="pics"
                width={40}
                height={40}
              />
              <p className="text-gray-900 font-bold">
                30 days money back <br /> Guarantee
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
