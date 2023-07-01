import Card from "components/card";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
import { useMemo } from "react";
import Progress from "components/progress";

const ComplexTable = (props) => {
  const { columnsData, tableData, state, title } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);
  const initialState = useMemo(() => state, [state]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    initialState: {
      pageIndex = initialState.pageIndex,
      pageSize = initialState.pageSize,
    },
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
      <div class="relative flex items-center justify-between pt-4">
        <div class="text-xl font-bold text-navy-700 dark:text-white">
          {title}
        </div>
      </div>

      <div class="mt-8 overflow-x-scroll xl:overflow-hidden">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={index}
                    className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  >
                    <p className="text-xs tracking-wide text-gray-600">
                      {column.render("Header")}
                    </p>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data = "";
                    if (cell.column.Header === "NAME") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "STATUS") {
                      data = (
                        <div className="flex items-center gap-2">
                          <div className={`rounded-full text-xl`}>
                            {cell.value === "Approved" ? (
                              <MdCheckCircle className="text-green-500" />
                            ) : cell.value === "Disable" ? (
                              <MdCancel className="text-red-500" />
                            ) : cell.value === "Error" ? (
                              <MdOutlineError className="text-orange-500" />
                            ) : null}
                          </div>
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {cell.value}
                          </p>
                        </div>
                      );
                    } else if (cell.column.Header === "DATE") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "PROGRESS") {
                      data = <Progress width="w-[108px]" value={cell.value} />;
                    } else if (cell.column.Header === "SUBMIT") {
                      data = (
                        <div class="relative mt-4 mb-4 w-32 overflow-hidden">
                          <button
                            class=" text-w inline-flex  items-center rounded-lg bg-navy-400 py-2 px-4 font-bold text-white duration-300 hover:bg-navy-300 dark:bg-navy-400"
                            title="Submit"
                          >
                            <svg
                              fill="#FFF"
                              height="18"
                              viewBox="0 0 24 24"
                              width="18"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
                            </svg>
                            <input
                              class="pin-r pin-t absolute block w-full cursor-pointer py-2 px-4 opacity-0"
                              type="file"
                              name="documents[]"
                              accept="image/*"
                            />
                          </button>
                        </div>
                      );
                    } else if (cell.column.Header === "RESULT") {
                      data = <span>13 / 20</span>;
                    }
                    return (
                      <td
                        className="pt-[14px] pb-[18px] sm:text-[14px]"
                        {...cell.getCellProps()}
                        key={index}
                      >
                        {data}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className=" mt-5">
          <div class="flex flex-col items-center">
            <span class="text-sm text-gray-700 dark:text-gray-400">
              Showing{" "}
              <span class="font-semibold text-gray-900 dark:text-white">
                {" "}
                {pageIndex + 1}
              </span>{" "}
              of{" "}
              <span class="font-semibold text-gray-900 dark:text-white">
                {pageOptions.length}
              </span>{" "}
            </span>
            <div class="xs:mt-0 mt-2 inline-flex gap-5">
              <button
                class="inline-flex items-center rounded-lg bg-navy-400 px-4 py-2 text-sm font-medium text-white duration-300 hover:bg-navy-300 disabled:bg-navy-300 dark:border-navy-400 dark:bg-navy-400 dark:text-gray-400 dark:hover:bg-navy-300 dark:hover:text-white"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Start
              </button>
              <button
                class="inline-flex items-center rounded-lg bg-navy-400 px-4 py-2 text-sm font-medium text-white duration-300 hover:bg-navy-300 disabled:bg-navy-300 dark:border-navy-400 dark:bg-navy-400 dark:text-gray-400 dark:hover:bg-navy-300  dark:hover:text-white"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                Prev
              </button>
              <button
                class="inline-flex items-center rounded-lg bg-navy-400 px-4 py-2 text-sm font-medium text-white duration-300 hover:bg-navy-300 disabled:bg-navy-300 dark:border-navy-400 dark:bg-navy-400 dark:text-gray-400 dark:hover:bg-navy-300  dark:hover:text-white"
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <button
                class="inline-flex items-center rounded-lg bg-navy-400 px-4 py-2 text-sm font-medium text-white duration-300 hover:bg-navy-300 disabled:bg-navy-300 dark:border-navy-400 dark:bg-navy-400 dark:text-gray-400 dark:hover:bg-navy-300  dark:hover:text-white"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                End
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <select
                class="inline-flex items-center rounded-lg bg-navy-400 px-4 py-2 text-sm font-medium text-white outline-none duration-300 hover:bg-navy-300 disabled:bg-navy-300 dark:border-navy-400 dark:bg-navy-400 dark:text-gray-400 dark:hover:bg-navy-300  dark:hover:text-white"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* <span>
            | Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>{" "} */}
        </div>
      </div>
    </Card>
  );
};

export default ComplexTable;
