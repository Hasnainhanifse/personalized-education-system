import ComplexTable from "components/charts/ComplexTable";
import { useMemo } from "react";

export default function StaffQuiz() {
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
    <>
      <div className="mt-5 grid grid-cols-1">
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
          state={initialState}
          title="Quiz"
        />
      </div>
    </>
  );
}
