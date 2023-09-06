import {
  MdSupervisedUserCircle,
  MdVerifiedUser,
  MdLibraryBooks,
} from "react-icons/md";

import Widget from "components/widget/Widget";
import ComplexTable from "components/charts/ComplexTable";
import { useMemo } from "react";

const Dashboard = () => {
  const initialState = {
    pageSize: 5,
    pageIndex: 0,
  };

  const columnsDataComplex = useMemo(() => {
    return [
      {
        Header: "NAME",
        accessor: "name",
      },
      {
        Header: "EMAIL",
        accessor: "email",
      },
      {
        Header: "AGE",
        accessor: "age",
      },
      {
        Header: "BIRTHDAY",
        accessor: "birthday",
      },
    ];
  }, []);

  const tableDataComplex = useMemo(() => {
    return [
      {
        name: "Hasnain",
        email: "hasnain@gmail.com",
        age: "29",
        birthday: "24.Jan.2021",
      },
      {
        name: "Nouman",
        email: "nouman@gmail.com",
        age: "26",
        birthday: "24.Jan.2021",
      },
      {
        name: "Waqar",
        email: "waqar@gmail.com",
        age: "25",
        birthday: "24.Jan.2021",
      },
    ];
  }, []);

  return (
    <div>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3">
        <Widget
          icon={<MdSupervisedUserCircle className="h-7 w-7" />}
          title={"Students"}
          subtitle={"20"}
        />
        <Widget
          icon={<MdVerifiedUser className="h-6 w-6" />}
          title={"Teachers"}
          subtitle={"10"}
        />
        <Widget
          icon={<MdLibraryBooks className="h-7 w-7" />}
          title={"Courses"}
          subtitle={"2"}
        />
      </div>

      <div className="mt-5 grid grid-cols-1">
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
          state={initialState}
          title="Teachers"
        />
      </div>

      <div className="mt-5 grid grid-cols-1">
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
          state={initialState}
          title="Students"
        />
      </div>
    </div>
  );
};

export default Dashboard;
