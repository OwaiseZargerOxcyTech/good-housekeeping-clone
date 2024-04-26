import React, { useState } from "react";

const AddCategoryForm = () => {
  const [category, setCategory] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [selectedIsActive, setSelectedIsActive] = useState("");

  const handleIsActiveChange = (event) => {
    setSelectedIsActive(event.target.value);
  };

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
          title,
          description,
          selectedIsActive,
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
          <form className="card-body">
            <h1 className="pt-4 text-center text-3xl font-semibold">
              Add Category
            </h1>
            <div>
              <label className="form-control  w-full">
                <div className="label ">
                  <span className="label-text font-bold ">Category</span>
                </div>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Life"
                  className="input input-bordered w-full  placeholder-gray-500"
                />
              </label>

              <label className="form-control  w-full">
                <div className="label ">
                  <span className="label-text font-bold ">Title</span>
                </div>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                  className="input input-bordered w-full  placeholder-gray-500"
                />
              </label>

              <label className="form-control  w-full">
                <div className="label ">
                  <span className="label-text font-bold ">
                    Meta description
                  </span>
                </div>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Meta description"
                  className="input input-bordered w-full  placeholder-gray-500"
                />
              </label>

              <label className="form-control font-bold w-full">
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

              <div className="flex justify-end col-span-2 mt-3">
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
