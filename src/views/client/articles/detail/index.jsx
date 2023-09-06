import React from "react";
import Banner from "components/banner/Banner";

import NFt5 from "assets/img/nfts/Nft5.png";

import { useLocation } from "react-router-dom";

export default function StudentArticleDetail() {
  const location = useLocation();
  const { page } = location.state;
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
        {/* Banner */}
        <Banner header="Article Name" title="Description" image={NFt5} />

        <div className="py z-20 mt-5 grid  grid-cols-1 rounded-[20px] bg-white px-[30px] py-[30px] text-justify text-lg md:px-[64px] md:py-[56px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          officia maxime? Ipsam, quisquam delectus adipisci nam aliquid
          excepturi incidunt veritatis debitis quas sequi at dolor numquam
          fugiat! Doloremque, voluptatibus quo. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Consequatur maxime, error iste iusto
          doloremque eum amet, quae reiciendis impedit rem aut fugit obcaecati
          pariatur aperiam soluta, ut dolorem! At, aperiam. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Possimus, esse ut nisi illum
          minus natus fugiat repudiandae obcaecati modi incidunt expedita ea
          quibusdam excepturi porro magnam, quae exercitationem minima
          consequatur.
        </div>
      </div>
    </div>
  );
}
