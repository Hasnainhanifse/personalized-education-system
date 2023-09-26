import React from "react";
import Banner from "components/banner/Banner";
import NftBanner1 from "assets/img/nfts/NftBanner1.png";
import { columnsDataComplex } from "./variables/columnsData";
import ComplexTable from "components/charts/ComplexTable";
import tableDataComplex from "./variables/tableDataComplex.json";

export default function StudentAssignment() {
  const initialState = {
    pageSize: 5,
    pageIndex: 0,
  };
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
        {/* Banner */}
        <Banner
          header="Submit your assignments and get notified with your skill level"
          title="Recommended assignments are the best tool to enhance your skills"
          image={NftBanner1}
        />

        <div className="mt-5 grid grid-cols-1">
          <ComplexTable
            columnsData={columnsDataComplex}
            tableData={tableDataComplex}
            state={initialState}
            title="Assignments"
          />
        </div>
      </div>
    </div>
  );
}
