import React from "react";
import Banner from "components/banner/Banner";
import NFt2 from "assets/img/nfts/Nft2.png";
import NFt4 from "assets/img/nfts/Nft4.png";
import NFt3 from "assets/img/nfts/Nft3.png";
import NFt5 from "assets/img/nfts/Nft5.png";
import NftCard from "components/card/NftCard";

export default function StudentCourses() {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
        {/* Banner */}
        <Banner
          header="Select your course based on interests"
          title="Recommended courses are the best way to get your goals"
          image={NFt5}
        />

        {/* available quiz Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Available Courses
          </h4>
        </div>

        {/* quiz card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-5">
          <NftCard title="Beginner HTML quiz 1" author="Hasnain" image={NFt3} />
          <NftCard title="Beginner HTML quiz 1" author="Hasnain" image={NFt3} />
          <NftCard title="Beginner HTML quiz 1" author="Hasnain" image={NFt3} />
          <NftCard title="Beginner HTML quiz 1" author="Hasnain" image={NFt3} />
          <NftCard title="Beginner HTML quiz 1" author="Hasnain" image={NFt3} />
          <NftCard title="Beginner HTML quiz 1" author="Hasnain" image={NFt3} />
          <NftCard title="Beginner HTML quiz 1" author="Hasnain" image={NFt3} />
          <NftCard title="Beginner HTML quiz 1" author="Hasnain" image={NFt3} />
        </div>

        {/* recommended quiz setion */}

        {/* available recommended quiz Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Recommended Courses
          </h4>
        </div>

        {/* quiz card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-5">
          <NftCard title="Beginner HTML quiz 1" author="Hasnain" image={NFt5} />
          <NftCard title="Beginner HTML quiz 1" author="Hasnain" image={NFt4} />
          <NftCard title="Beginner HTML quiz 1" author="Hasnain" image={NFt2} />
        </div>
      </div>
    </div>
  );
}
