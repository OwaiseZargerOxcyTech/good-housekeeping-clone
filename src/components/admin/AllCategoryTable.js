"use client";
import { useEffect, useMemo, useState } from "react";
import React from "react";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import CommonTable from "../../../CommonElements/CommonTable";

const AllCategoryTable = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [category, setCategory] = useState("");
  const [selectedId, setSelectedId] = useState();
  const [selectedIsActive, setSelectedIsActive] = useState("");
  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Category Name",
        size: 150,
        Cell: ({ cell }) => (
          <div style={{ whiteSpace: "normal", wordBreak: "break-word" }}>
            {cell.getValue()}
          </div>
        ),
      },

      {
        accessorKey: "is_active",
        header: "Is Active?",
        size: 150,
        Cell: ({ cell }) => (
          <div style={{ whiteSpace: "normal", wordBreak: "break-word" }}>
            {cell.getValue()}
          </div>
        ),
      },

      {
        accessorKey: "action",
        header: "ACTIONS",
        size: 80,
        Cell: ({ row }) => (
          <div>
            <button className="mr-2">
              <PencilIcon
                onClick={() => {
                  document.getElementById("update_modal").showModal();
                  handleCategoryEdit(row);
                }}
                className="h-5 w-5 text-green-500"
              />
            </button>
            <button>
              <TrashIcon
                onClick={() => {
                  document.getElementById("delete_modal").showModal();
                  handleCategoryDelete(row);
                }}
                className="h-5 w-5 text-red-500"
              />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const handleGetCategories = async (e) => {
    try {
      const response = await fetch("/api/combinedapi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          apiName: "getcategories",
        }),
      });

      const { error, result } = await response.json();

      if (error !== undefined) {
        console.log("Categories Get error:", error);
      }
      setCategoriesData(result);
    } catch (error) {
      console.error("Categories Get operation error", error);
    }
  };

  useEffect(() => {
    handleGetCategories();
  }, []);

  const handleIsActiveChange = (event) => {
    setSelectedIsActive(event.target.value);
  };

  const handleCategoryEdit = async (row) => {
    setSelectedId(row.original.id);
    setCategory(row.original.name);
    setSelectedIsActive(row.original.is_active);
  };

  const handleCategoryUpdate = async (e) => {
    try {
      e.preventDefault();

      const response = await fetch("/api/combinedapi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          apiName: "updatecategory",
          selectedId,
          category,
          selectedIsActive,
        }),
      });

      const { error, result } = await response.json();

      if (error !== undefined) {
        console.log("Category Updated error:", error);
      }
      handleGetCategories();

      const updateDialog = document.getElementById("update_modal");
      if (updateDialog) {
        updateDialog.close();
      }
    } catch (error) {
      console.error("Category Update operation error", error);
    }
  };

  const handleCategoryDelete = (row) => {
    setSelectedId(row.original.id);
  };

  const deleteCategory = async () => {
    try {
      const response = await fetch("/api/combinedapi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ apiName: "deletecategory", selectedId }),
      });

      const { error, result } = await response.json();

      if (error !== undefined) {
        console.log("Delete Category error:", error);
      }
      handleGetCategories();
    } catch (error) {
      console.error("category delete operation error", error);
    }
  };

  return (
    <>
      <div>
        <CommonTable columns={columns} data={categoriesData} minRows={10} />
      </div>
      <dialog id="update_modal" className="modal">
        <div className="modal-box w-12/12 max-w-6xl md:w-6/12 md:max-w-md">
          <h3 className="font-bold text-lg">Update Category</h3>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <input
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input input-bordered w-full placeholder-gray-500"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Is Active?</span>
            </div>
          </label>

          <select
            onChange={handleIsActiveChange}
            value={selectedIsActive || ""}
            className="select select-bordered w-full"
          >
            <option disabled value="">
              Select state?
            </option>
            <option>active</option>
            <option>inactive</option>
            {selectedIsActive === "" && (
              <option disabled style={{ display: "none" }}>
                Select state?
              </option>
            )}
          </select>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={handleCategoryUpdate}
                className="btn mr-4 bg-[#dc2626] hover:bg-[#dc2626] text-white"
              >
                Save
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="delete_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Delete Category</h3>
          <p className="py-4">
            Are you sure you want to delete this category ?
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={deleteCategory}
                className="btn mr-4 bg-[#dc2626] hover:bg-[#dc2626] text-white"
              >
                Delete
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AllCategoryTable;
