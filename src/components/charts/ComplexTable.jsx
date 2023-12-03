// @ts-nocheck
import Card from "components/card";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Input,
  Grid,
  GridItem,
  Divider,
} from "@chakra-ui/react";
import {
  MdCheckCircle,
  MdCancel,
  MdOutlineError,
  MdOutlineArrowDropDown,
} from "react-icons/md";
import { useMemo, useState } from "react";
import Progress from "components/progress";
import LevelBadge from "components/badge";
import { useDispatch } from "react-redux";
import {
  submitAssignment,
  getRecommendedItems,
  assignAssignmentMarks,
  getSubmittedAssignments,
} from "features/assessment/assessmentActions";
import { useForm } from "react-hook-form";

const ComplexTable = (props) => {
  const { columnsData, tableData, state, title, user } = props;
  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);
  const [selectedFile, setSelectedFile] = useState();
  const [isModal, setIsModal] = useState(false);
  const [selectedAssignmentId, setSelectedAssignmentId] = useState();
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const handleFileChange = (assignmentId, event) => {
    event.preventDefault();
    setSelectedFile(event.target.files[0]);
    setSelectedAssignmentId(assignmentId);
  };

  const handleUpload = async () => {
    if (selectedFile && selectedAssignmentId) {
      await dispatch(
        submitAssignment({
          file: selectedFile,
          user: user.id,
          assignmentId: selectedAssignmentId,
        })
      );
      await getAssingmnets();
      setSelectedFile(null);
      setSelectedAssignmentId(null);
    }
  };

  const getAssingmnets = async () => {
    let form = new FormData();
    form.append("currentUser", user.id);
    form.append("levelType", user.level);
    await dispatch(getRecommendedItems({ user: user.id }));
  };

  const onClickAssignMarks = (assignment) => {
    setSelectedAssignmentId(assignment);
    setIsModal(true);
  };

  const onAssignMarks = async (data) => {
    try {
      if (data) {
        await dispatch(
          assignAssignmentMarks({
            score: data.marks,
            assignmentId: selectedAssignmentId.assignment,
            user: selectedAssignmentId.user.id,
          })
        );
        await dispatch(getSubmittedAssignments({ user: user.id }));
        setIsModal(false);
        setSelectedAssignmentId(null);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
      <div className="relative flex items-center justify-between pt-4">
        {title && (
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            {title}
          </div>
        )}
      </div>

      <div className="mt-8 overflow-x-scroll xl:overflow-hidden">
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
                <tr
                  {...row.getRowProps()}
                  key={index}
                  className="  "
                  className={`text-danger duration-300 hover:bg-gray-100 ${
                    index % 2 === 1 ? "bg-gray-50" : ""
                  }`}
                >
                  {row.cells.map((cell, index) => {
                    let data = "";
                    if (cell.column.Header === "Assignment") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "Actions") {
                      data = (
                        <Menu>
                          <MenuButton
                            disabled={true}
                            as={Button}
                            rightIcon={<MdOutlineArrowDropDown />}
                          >
                            Actions
                          </MenuButton>
                          {!cell.value.score && (
                            <MenuList>
                              <MenuItem
                                onClick={() => onClickAssignMarks(cell.value)}
                              >
                                Assign Marks
                              </MenuItem>
                            </MenuList>
                          )}
                        </Menu>
                      );
                    } else if (cell.column.Header === "No") {
                      data = <p> {cell.value}</p>;
                    } else if (cell.column.Header === "Level") {
                      data = <LevelBadge level={cell.value} />;
                    } else if (
                      cell.column.Header === "Submited" ||
                      cell.column.Header === "Reviewed"
                    ) {
                      data = (
                        <div className="flex items-center gap-2">
                          <div className={`rounded-full text-xl`}>
                            {cell.value === "Submitted" ? (
                              <MdCheckCircle className="text-green-500" />
                            ) : cell.value === "pending" ? (
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
                    } else if (cell.column.Header === "Submitted File") {
                      data = (
                        <div className="relative mt-4 mb-4 flex w-20 justify-center overflow-hidden">
                          <a href={cell.value ?? ""}>
                            <button
                              className=" text-w inline-flex  items-center rounded-lg bg-green-400 py-2 px-4 font-bold text-white duration-300 hover:bg-green-300 disabled:bg-green-200 dark:bg-green-400"
                              disabled={!cell.value}
                              title={"Download Submitted File"}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                                />
                              </svg>
                            </button>
                          </a>
                        </div>
                      );
                    } else if (cell.column.Header === "Download Assignment") {
                      data = (
                        <div className="relative mt-4 mb-4 flex w-32 justify-center overflow-hidden">
                          <a href={cell.value ?? ""}>
                            <button
                              className=" text-w inline-flex  items-center rounded-lg bg-navy-400 py-2 px-4 font-bold text-white duration-300 hover:bg-navy-300 disabled:bg-green-200 dark:bg-navy-400"
                              disabled={!cell.value}
                              title={"Download Assignment File"}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                                />
                              </svg>
                            </button>
                          </a>
                        </div>
                      );
                    } else if (cell.column.Header === "Created Date") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "PROGRESS") {
                      data = <Progress width="w-[108px]" value={cell.value} />;
                    } else if (
                      cell.column.Header === "Submit" &&
                      !user.isAdmin
                    ) {
                      data = (
                        <div className=" mt-4 mb-4 flex w-32 items-center gap-4">
                          <button
                            className=" text-w relative inline-flex  w-16 cursor-pointer items-center justify-center rounded-lg bg-navy-400 py-2 px-4 font-bold text-white duration-300 hover:bg-navy-300 dark:bg-navy-400"
                            title="Select File"
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
                              className="pin-r pin-t absolute block w-full cursor-pointer py-2 px-4 opacity-0"
                              type="file"
                              name="file"
                              accept="application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel,
                              application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                              onChange={(e) => handleFileChange(cell.value, e)}
                            />
                          </button>
                          {selectedFile &&
                            selectedAssignmentId === cell.value && (
                              <button
                                className=" text-w inline-flex  cursor-pointer items-center justify-center rounded-lg bg-green-400 py-2 px-4 font-bold text-white duration-300 hover:bg-green-300 dark:bg-green-400"
                                onClick={handleUpload}
                              >
                                Upload
                              </button>
                            )}
                        </div>
                      );
                    } else if (
                      cell.column.Header === "Type" ||
                      cell.column.Header === "Name" ||
                      cell.column.Header === "Name" ||
                      cell.column.Header === "Obtained Marks" ||
                      cell.column.Header === "Total Marks" ||
                      cell.column.Header === "Submission Date" ||
                      cell.column.Header === "Student" ||
                      cell.column.Header === "Submitted Date" ||
                      cell.column.Header === "Result"
                    ) {
                      data = <span>{cell.value}</span>;
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
          <div className="flex flex-col items-center">
            <div className="xs:mt-0 mt-2 inline-flex gap-5">
              <button
                className="inline-flex items-center rounded-lg bg-navy-400 px-4 py-2 text-sm font-medium text-white duration-300 hover:bg-navy-300 disabled:bg-navy-300 dark:border-navy-400 dark:bg-navy-400 dark:text-gray-400 dark:hover:bg-navy-300 dark:hover:text-white"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Start
              </button>
              <button
                className="inline-flex items-center rounded-lg bg-navy-400 px-4 py-2 text-sm font-medium text-white duration-300 hover:bg-navy-300 disabled:bg-navy-300 dark:border-navy-400 dark:bg-navy-400 dark:text-gray-400 dark:hover:bg-navy-300  dark:hover:text-white"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Prev
              </button>
              <button
                className="inline-flex items-center rounded-lg bg-navy-400 px-4 py-2 text-sm font-medium text-white duration-300 hover:bg-navy-300 disabled:bg-navy-300 dark:border-navy-400 dark:bg-navy-400 dark:text-gray-400 dark:hover:bg-navy-300  dark:hover:text-white"
                onClick={() => nextPage(pageCount + 1)}
                disabled={!canNextPage}
              >
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                className="inline-flex items-center rounded-lg bg-navy-400 px-4 py-2 text-sm font-medium text-white duration-300 hover:bg-navy-300 disabled:bg-navy-300 dark:border-navy-400 dark:bg-navy-400 dark:text-gray-400 dark:hover:bg-navy-300  dark:hover:text-white"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                End
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModal}
        onClose={() => setIsModal(false)}
        size={"xl"}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onAssignMarks)}>
            <ModalHeader>Assign Marks</ModalHeader>
            <Divider />
            <ModalCloseButton />
            <ModalBody py={5}>
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <GridItem>
                  <Text fontSize="lg">Marks</Text>
                  <Input
                    {...register("marks", {
                      required: "Marks are required",
                      validate: {
                        withinRange: (value) => {
                          const marks = parseInt(value);
                          return (
                            (marks >= 0 && marks <= 10) ||
                            "Marks should be between 0 to 10"
                          );
                        },
                      },
                    })}
                  />
                  <span className="ml-1.5 mt-1.5 border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400">
                    {errors.marks && errors.marks?.message}
                  </span>
                </GridItem>
              </Grid>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="red"
                mr={3}
                size="lg"
                onClick={() => setIsModal(false)}
              >
                Close
              </Button>
              <Button size="lg" colorScheme="blue" type="submit">
                Save
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Card>
  );
};

export default ComplexTable;
