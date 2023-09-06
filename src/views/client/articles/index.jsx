import React from "react";
import Banner from "components/banner/Banner";
import NFt3 from "assets/img/nfts/Nft3.png";
import NFt5 from "assets/img/nfts/Nft5.png";
import NftCard from "components/card/NftCard";
import { PATHS, LINKS } from "types/global";

export default function StudentArticles() {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
        {/* Banner */}
        <Banner
          header="Articles"
          title="There are variety of articles to read."
          image={NFt5}
        />

        {/* available quiz Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Available Articles
          </h4>
        </div>

        {/* quiz card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-5">
          <NftCard
            title="Beginner HTML quiz 1"
            author="Hasnain"
            image={NFt3}
            permalinkText="Read More"
            permalink={`${LINKS.LINK_ARTICLES}/12`}
            page={PATHS.PATH_ARTICLES}
          />

          <NftCard
            title="Beginner HTML quiz 1"
            author="Hasnain"
            image={NFt3}
            permalinkText="Read More"
          />
          <NftCard
            title="Beginner HTML quiz 1"
            author="Hasnain"
            image={NFt3}
            permalinkText="Read More"
          />
          <NftCard
            title="Beginner HTML quiz 1"
            author="Hasnain"
            image={NFt3}
            permalinkText="Read More"
          />
          <NftCard
            title="Beginner HTML quiz 1"
            author="Hasnain"
            image={NFt3}
            permalinkText="Read More"
          />
          <NftCard
            title="Beginner HTML quiz 1"
            author="Hasnain"
            image={NFt3}
            permalinkText="Read More"
          />
          <NftCard
            title="Beginner HTML quiz 1"
            author="Hasnain"
            image={NFt3}
            permalinkText="Read More"
          />
          <NftCard
            title="Beginner HTML quiz 1"
            author="Hasnain"
            image={NFt3}
            permalinkText="Read More"
          />
        </div>

        {/* available recommended quiz Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Recommended Articles
          </h4>
        </div>

        {/* articles card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-5">
          <NftCard
            title="Article 1"
            author="Hasnain"
            image={NFt5}
            permalinkText="Read More"
          />
          <NftCard
            title="Article 2"
            author="Hasnain"
            image={NFt5}
            permalinkText="Read More"
          />
          <NftCard
            title="Article 3"
            author="Hasnain"
            image={NFt5}
            permalinkText="Read More"
          />
        </div>
      </div>
    </div>
  );
}
