// @ts-nocheck
import React, { useEffect } from "react";
import Banner from "components/banner/Banner";
import NftBanner1 from "assets/img/nfts/NftBanner1.png";
import { progressColumns } from "./variables/progressColumns";
import ComplexTable from "components/charts/ComplexTable";
import { useSelector, useDispatch } from "react-redux";
import { selectAssesments, selectCurrentUser } from "store";
import { useState } from "react";
import { getProgressReport } from "features/assessment/assessmentActions";
import { formatDate } from "helper/stringHelpers";

export default function StudentProgressReport() {
  const { progressReport } = useSelector(selectAssesments);
  const { user } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);
  const initialState = {
    pageSize: 5,
    pageIndex: 0,
  };

  useEffect(() => {
    const unsubscribe = () => {
      dispatch(getProgressReport({ user: user.id }));
    };
    unsubscribe();
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = () => {
      if (progressReport && progressReport.result) {
        let tableData = progressReport.result.map((d, index) => {
          return {
            ...d,
            index: index + 1,
            reviewed: d.marks ? "Submitted" : "pending",
            marks: d.marks ? d.marks : "Not checked",
            submittedDate: d.submittedDate ? formatDate(d.submittedDate) : "-",
          };
        });
        setTableData(tableData);
      }
    };
    unsubscribe();
    return unsubscribe;
  }, [progressReport]);

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
        {/* Banner */}
        <Banner
          header="Progress report will show you the progress of your assessments"
          title="Check your attempted assessments results"
          image={NftBanner1}
        />

        <div className="mt-5 grid grid-cols-1">
          <ComplexTable
            columnsData={progressColumns}
            tableData={tableData}
            state={initialState}
            title="Progress Report"
            user={user}
          />
        </div>
      </div>
    </div>
  );
}
