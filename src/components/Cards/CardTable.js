import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../../context/Context.js";

// components
import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardTable({ color }) {
  const { user } = useContext(Context);
  const [categoriesList, setCategoriesList] = useState([]);

  const populateInitialCategoryList = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/category", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          userId: user.userId,
        },
      });
      const data = await response.json();
      setCategoriesList(data.list); // Assuming the API returns an object with a 'list' property
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  useEffect(() => {
    if (user) {
      populateInitialCategoryList();
    }
  }, [user]);

  useEffect(() => {
    console.log("Updated Categories list: ", categoriesList);
  }, [categoriesList]);

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Card Tables
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Category Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Description
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Status
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Users
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Action
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {categoriesList.length > 0 ? (
                categoriesList.map((category, index) => (
                  <tr key={category.categoryId}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <span
                        className={
                          "ml-3 font-bold" +
                          (color === "light"
                            ? "text-blueGray-600"
                            : "text-white")
                        }
                      >
                        {category.categoryName}{" "}
                        {/* Assuming 'name' is a field */}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {category.description}{" "}
                      {/* Assuming 'description' is a field */}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                      {/* Assuming 'status' is a field */}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex">
                        {/* Render users or avatars related to the category here */}
                        {category.user.userName}
                      </div>
                    </td>
                    {/* <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">100%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                            <div
                              style={{ width: "100%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td> */}
                    <td className="text-balance text-xl ml-3">
                      {/* <TableDropdown /> */}
                      <span
                        className="
                        text-blueGray-500
                        border-blueGray-100
                        align-middle
                        font-bold"
                        onClick={() => {
                          alert("Hi");
                        }}
                      >
                        +{"       "}
                      </span>
                      <span
                        className="
                        p-2
                        text-blueGray-500
                        border-blueGray-100
                        align-middle
                        font-bold"
                        onClick={() => {
                          alert("Hi2");
                        }}
                      >
                        {" "}
                        i
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-xs p-4">
                    No categories available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

// CardTable.propTypes = {
//   color: PropTypes.oneOf(["light", "dark"]),
// };
