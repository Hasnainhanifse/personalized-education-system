import React from "react";

const Banner1 = (props) => {
  const { header, title, image } = props;
  return (
    <div
      className="flex w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px]"
      style={{ backgroundImage: `url(${image})` }}
    >
      {header && title && (
        <div className="w-full">
          <h4 className="mb-[14px] max-w-full text-xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
            {header}
          </h4>
          <p className="mb-[40px] max-w-full text-base font-medium text-[#E3DAFF] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
            {title}
          </p>
        </div>
      )}
    </div>
  );
};

export default Banner1;
