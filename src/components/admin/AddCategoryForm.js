import React, { useState } from "react";

const AddCategoryForm = () => {
  const [category, setCategory] = useState();

  const handleAddCategory = async (e) => {
    try {
      e.preventDefault();

      const response = await fetch("/api/combinedapi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          apiName: "addcategory",
          category,
        }),
      });

      const { error, result } = await response.json();

      if (error !== undefined) {
        console.log("add Category error:", error);
      }
      setCategory("");
    } catch (error) {
      console.error("add Category operation error", error);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex first-letter:card w-full bg-base-100">
          <form className="card-body items-center">
            <h1 className="font-bold">Add Category</h1>
            <div className="max-w-sm">
              <label className="form-control  w-full">
                <div className="label ">
                  <span className="label-text font-bold ">Category</span>
                </div>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Life"
                  className="input input-bordered w-full  font-bold"
                />
              </label>
              <div className="flex justify-center col-span-2 mt-3">
                <button
                  onClick={(e) => handleAddCategory(e)}
                  className="btn w-24 bg-[#dc2626] text-white"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCategoryForm;
