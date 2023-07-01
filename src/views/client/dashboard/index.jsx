import React from "react";
import MiniCalendar from "components/calendar/MiniCalendar";
import PieChartCard from "components/charts/PieChartCard";
import ProgessGraph from "components/charts/progessGraph";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import { columnsDataComplex } from "./variables/columnsData";
import Widget from "components/widget/Widget";
import ComplexTable from "components/charts/ComplexTable";
import tableDataComplex from "./variables/tableDataComplex.json";

const StudentDashboard = () => {
  const initialState = {
    pageSize: 5,
    pageIndex: 0,
  };
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4">
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Level"}
          subtitle={"Beginner"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Enrolled Courses"}
          subtitle={"5"}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Pending Quiz"}
          subtitle={"1"}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Pending Assignments"}
          subtitle={"2"}
        />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-4">
        <PieChartCard title="Assignment" color="#ff726f" />
        <PieChartCard title="Quiz" color="#ff726f" />
        <PieChartCard title="Exams" color="#ff726f" />
        <MiniCalendar />
      </div>
      <div className="mt-5 grid grid-cols-1">
        <ProgessGraph />
      </div>
      <div className="mt-5 grid grid-cols-1">
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
          state={initialState}
          title="Enrolled Courses List"
        />
      </div>
    </div>
  );
};

export default StudentDashboard;
