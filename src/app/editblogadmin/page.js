"use client";
import React from "react";
import { useState, useRef, useEffect, forwardRef } from "react";
import "suneditor/dist/css/suneditor.min.css";
import dynamic from "next/dynamic";
import SideNav from "@/components/sidebar/SideNav";
import Footer from "@/components/footer/Footer";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import CryptoJS from "crypto-js";

const DynamicSunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const decryptID = (encryptedID, secretKey) => {
  const bytes = CryptoJS.AES.decrypt(encryptedID, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [slug, setSlug] = useState("");
  const [imageName, setImageName] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUserName, setSelectedUserName] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const [authorId, setAuthorId] = useState();
  const [categoryId, setCategoryId] = useState();
  const [previousimage, setPreviousImage] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [blog, setBlog] = useState();
  const [blogLiveId, setBlogLiveId] = useState(null);

  const { data: session, status } = useSession();

  const searchParams = useSearchParams();

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const encryptedID = searchParams.get("encryptedID");

        const blogID = decryptID(encryptedID, "thisissecret");

        const published = searchParams.get("published");

        const response = await fetch("/api/fetchblog", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ blogID, published }),
        });

        const { error, result } = await response.json();

        if (error !== undefined) {
          console.log("Blog fetchingerror:", error);
        }
        setBlog(result);
      } catch (error) {
        console.error("fetch blog operation error", error);
      }
    };

    getBlogData();

    const fetchData = async () => {
      try {
        const response = await fetch("/api/getusers", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const { error, result } = await response.json();

        if (error !== undefined) {
          console.log("Users Get error:", error);
        }
        setUsers(result);
      } catch (error) {
        console.error("Users Get operation error", error);
      }
    };

    const fetchCategories = async () => {
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
        setCategories(result);
      } catch (error) {
        console.error("Categories Get operation error", error);
      }
    };

    fetchData();
    fetchCategories();
  }, []);

  useEffect(() => {
    if (blog && users.length > 0) {
      setTitle(blog.title);
      setDesc(blog.description);
      setContent(blog.content);
      setImage(blog.image);
      setSlug(blog.slug);
      setImageName("");
      setPreviousImage(blog.image);
      setSelectedId(blog.id);
      setAuthorId(blog.author_id);
      setCategoryId(blog.category_id);
      setBlogLiveId(blog.bloglive_id ? blog.bloglive_id : null);

      const user = users.find((user) => user.id === blog.author_id);

      const category = categories.find(
        (category) => category.id === blog.category_id
      );

      if (user) {
        setSelectedUserName(user.username);
      }

      if (category) {
        setSelectedCategoryName(category.name);
      }
    }
  }, [blog, users, categories]);

  if (status === "loading") {
    return <div></div>;
  }

  if (!session || session.user.name !== "admin") {
    return <div>Access Denied</div>;
  }

  const handleSelectChange = (event) => {
    setSelectedUserName(event.target.value);
    const user = users.find((user) => user.username === event.target.value);
    if (user) {
      setAuthorId(user.id);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategoryName(event.target.value);
    const category = categories.find(
      (category) => category.name === event.target.value
    );
    if (category) {
      setCategoryId(category.id);
    }
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
    setImageName(selectedFile ? selectedFile.name : ""); // Set the file name
  };

  const handleBlogUpdate = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", desc);
      formData.append("content", content);
      formData.append("image", image);
      formData.append("slug", slug);
      formData.append("selectedId", selectedId);
      formData.append("previousimage", previousimage);
      formData.append("published", searchParams.get("published"));
      formData.append("author_id", authorId);
      formData.append("category_id", categoryId);
      formData.append("blogLiveId", blogLiveId);

      const response = await fetch("/api/updateblog", {
        method: "PUT",
        body: formData,
      });

      const { error, result } = await response.json();

      if (error !== undefined) {
        console.log("Blog Updated error:", error);
      }
      window.location.href = "/allblogadmin";
    } catch (error) {
      console.error("Blog Update operation error", error);
    }
  };

  return (
    <>
      <div className=" px-6 py-10 sm:px-8 sm:py-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 sm:gap-x-10">
          <div className=" col-span-3 space-y-10">
            <SideNav />
          </div>

          <div className="col-span-9">
            <div className="card w-full bg-base-100 rounded-md">
              <form className="card-body">
                <h1 className="pt-4 text-center text-3xl font-semibold">
                  Edit Blog Details
                </h1>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Title</span>
                  </div>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="input input-bordered w-full placeholder-gray-500"
                  />
                </label>

                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Meta Description</span>
                  </div>
                  <textarea
                    type="text"
                    id="desc"
                    name="desc"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="textarea textarea-bordered placeholder-gray-500"
                    placeholder="Meta Description"
                  ></textarea>
                </label>

                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Category</span>
                  </div>
                </label>

                <select
                  onChange={handleCategoryChange}
                  value={selectedCategoryName || ""}
                  className="select select-bordered w-full"
                >
                  <option disabled value="">
                    Select Category?
                  </option>
                  {categories.map((category) => (
                    <option key={category.name}>{category.name}</option>
                  ))}
                  {selectedCategoryName === "" && (
                    <option disabled style={{ display: "none" }}>
                      Select Category?
                    </option>
                  )}
                </select>

                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Blog Content</span>
                  </div>
                </label>

                <DynamicSunEditor
                  onChange={setContent}
                  setContents={content}
                  placeholder="Blog Content"
                  className="text-black"
                  height="300px"
                  setOptions={{
                    height: "100%", // Use px unit for height
                    buttonList: [
                      ["undo", "redo"],
                      [
                        "bold",
                        "underline",
                        "italic",
                        "strike",
                        "subscript",
                        "superscript",
                      ],
                      ["removeFormat"],
                      ["outdent", "indent"],
                      ["fullScreen", "showBlocks", "codeView"],
                      ["preview", "print"],
                      ["link", "image", "video"],
                      [
                        "font",
                        "fontSize",
                        "formatBlock",
                        "align",
                        "list",
                        "table",
                      ],
                      ["fontColor", "hiliteColor", "horizontalRule"],
                    ],
                    font: ["Arial", "Courier New"], // Example: specify fonts
                    fontColor: "red", // Set font color
                    backgroundColor: "red", // Set background color
                  }}
                />
                <div className="mt-6">
                  <label
                    htmlFor="image"
                    className="p-2 border border-gray-300 cursor-pointer text-gray-500 hover:text-blue-700"
                  >
                    <span>
                      {imageName ? imageName : "Upload New Blog Image"}
                    </span>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                </div>

                <select
                  onChange={handleSelectChange}
                  value={selectedUserName || ""}
                  className="mt-6 select select-bordered w-full"
                >
                  <option disabled value="">
                    Assign to Employee?
                  </option>
                  {users.map((user) => (
                    <option key={user.username}>{user.username}</option>
                  ))}
                  {selectedUserName === "" && (
                    <option disabled style={{ display: "none" }}>
                      Assign to Employee?
                    </option>
                  )}
                </select>

                <div className="flex justify-end">
                  <button
                    onClick={handleBlogUpdate}
                    className="btn bg-[#dc2626] w-20 text-white"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default EditBlog;
