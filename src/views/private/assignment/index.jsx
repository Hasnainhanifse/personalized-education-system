// @ts-nocheck
import React, { useEffect } from "react";
import Banner from "components/banner/Banner";
import NftBanner1 from "assets/img/nfts/NftBanner1.png";
import { columnsData } from "./variables/columnsData";
import ComplexTable from "components/charts/ComplexTable";
import { useSelector, useDispatch } from "react-redux";
import { selectAllAssignments, selectCurrentUser } from "store";
import { getAssignments } from "features/assessment/assessmentActions";
import { useState } from "react";
import { formatDate } from "helper/stringHelpers";

export default function StudentAssignment() {
  const { assignment } = useSelector(selectAllAssignments);
  const { user } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);
  const initialState = {
    pageSize: 5,
    pageIndex: 0,
  };

  useEffect(() => {
    const unsubscribe = () => {
      let form = new FormData();
      form.append("currentUser", user.id);
      form.append("levelType", user.level);

      dispatch(getAssignments({ currentUser: user.id, levelType: user.level }));
    };
    unsubscribe();
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = () => {
      if (assignment && assignment.result) {
        let tData = assignment.result.map((d) => {
          let submittedFile =
            d &&
            d.studentAssignments &&
            d.studentAssignments.find((a) => a.user === user.id)?.submittedFile;
          return {
            submittedFile: submittedFile ?? "",
            name: d.name.toUpperCase(),
            level: d.level ?? "",
            dateCreated: formatDate(d.dateCreated),
            status:
              d &&
              d.studentAssignments &&
              d.studentAssignments.find((a) => a.user === user.id)
                ? "Submitted"
                : "pending",
            Submit: d._id ?? "",
            downloadAssignment: d.file ?? "",
          };
        });
        setTableData(tData);
      }
    };
    unsubscribe();
    return unsubscribe;
  }, [assignment]);

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
            columnsData={columnsData}
            tableData={tableData}
            state={initialState}
            title="Assignments"
            user={user}
          />
        </div>
      </div>
    </div>
  );
}
