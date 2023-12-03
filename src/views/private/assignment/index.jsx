// @ts-nocheck
import React, { useEffect } from "react";
import Banner from "components/banner/Banner";
import NftBanner1 from "assets/img/nfts/NftBanner1.png";
import { studentAssignmentColumns } from "./variables/studentAssignmentColumns";
import { adminAssignmentColumns } from "./variables/adminAssignmentColumns";
import { adminSubmittedAssignmentColumns } from "./variables/adminSubmittedAssignmentColumns";
import ComplexTable from "components/charts/ComplexTable";
import { useSelector, useDispatch } from "react-redux";
import { selectAllAssignments, selectCurrentUser } from "store";
import {
  getRecommendedItems,
  getAssignments,
  getSubmittedAssignments,
} from "features/assessment/assessmentActions";
import { useState } from "react";
import { formatDate } from "helper/stringHelpers";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function StudentAssignment() {
  const { assignment, submittedAssignments } =
    useSelector(selectAllAssignments);
  const { user } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);
  const [submittedTableData, setSubmittedTableData] = useState([]);
  const initialState = {
    pageSize: 5,
    pageIndex: 0,
  };

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (user.isAdmin) {
        dispatch(getAssignments());
        dispatch(getSubmittedAssignments({ user: user.id }));
      } else {
        getAssingmnets();
      }
    }
    return () => {
      isSubscribed = false;
    };
  }, []);

  const getAssingmnets = () => {
    let form = new FormData();
    form.append("currentUser", user.id);
    form.append("levelType", user.level);
    dispatch(getRecommendedItems({ user: user.id }));
  };

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (assignment && assignment.length && !user.isAdmin) {
        let tData = assignment.map((d, index) => {
          let submittedFile =
            d &&
            d.studentAssignments &&
            d.studentAssignments.find((a) => a.user === user.id)?.submittedFile;
          return {
            index: index + 1,
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

      if (
        assignment &&
        assignment.result &&
        assignment.result.length &&
        user.isAdmin
      ) {
        let tData = assignment.result.map((d, index) => {
          return {
            index: index + 1,
            name: d.name.toUpperCase(),
            level: d.level ?? "",
            dateCreated: formatDate(d.dateCreated),
            downloadAssignment: d.file ?? "",
          };
        });
        setTableData(tData);
      }
    }
    return () => {
      isSubscribed = false;
    };
  }, [assignment]);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (submittedAssignments && submittedAssignments.length && user.isAdmin) {
        let tData = submittedAssignments.map((d, index) => {
          return {
            index: index + 1,
            student: d.user ? d.user.firstName : "-",
            level: d.user ? d.user.level : "-",
            name: d.name ? d.name.toUpperCase() : "-",
            submittedDate: d.submittedDate ? formatDate(d.submittedDate) : "-",
            submittedFile: d.submittedFile ? d.submittedFile : "",
            score: d.score ? d.score : "-",
            totalMarks: 10,
            actions: d,
          };
        });
        setSubmittedTableData(tData);
      }
    }

    return () => {
      isSubscribed = false;
    };
  }, [submittedAssignments]);

  const StudentView = () => {
    return (
      <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
        <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
          {/* Banner */}
          <Banner
            header="Submit your assignments and get notified with your skill level"
            title="Recommended assignments are the best tool to enhance your skills"
            image={NftBanner1}
          />

          {assignment && (
            <div className="mt-5 grid grid-cols-1">
              <ComplexTable
                columnsData={studentAssignmentColumns}
                tableData={tableData}
                state={initialState}
                title="Assignments"
                user={user}
              />
            </div>
          )}
          {!assignment && (
            <div className="z-20 mt-5 grid grid-cols-1 rounded-md bg-white py-5 pl-5">
              <p className="text-lg">
                No assignment available yet, please enroll course first
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const AdminView = () => {
    return (
      <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
        <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
          <Tabs variant="soft-rounded" colorScheme="blue">
            <TabList className=" mt-5 px-5">
              <Tab>Assignments</Tab>
              <Tab>Submitted Assignments</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className="mt-5 grid grid-cols-1 ">
                  <ComplexTable
                    columnsData={adminAssignmentColumns}
                    tableData={tableData}
                    state={initialState}
                    user={user}
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <div className="mt-5 grid grid-cols-1 ">
                  <ComplexTable
                    columnsData={adminSubmittedAssignmentColumns}
                    tableData={submittedTableData}
                    state={initialState}
                    user={user}
                  />
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    );
  };

  switch (user.isAdmin) {
    case true:
      return <AdminView />;
    case false:
      return <StudentView />;
  }
}
