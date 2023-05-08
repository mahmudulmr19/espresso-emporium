import React from "react";
import { Container } from "../../Components/shared";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useTitle } from "../../hooks";

const Update = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  useTitle("Update Coffee");
  const navigate = useNavigate();
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updateCoffe = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    if (
      name === "" ||
      chef === "" ||
      supplier === "" ||
      taste === "" ||
      category === "" ||
      details === "" ||
      photo === ""
    ) {
      return Swal.fire({
        title: "Error!",
        text: "All fields required",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }

    const PutCoffee = async () => {
      const response = await fetch(
        `http://localhost:4000/api/v1/coffees/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateCoffe),
        }
      );
      await response.json();
      if (!response.ok) {
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong!",
          icon: "error",
          confirmButtonText: "Okay",
        });
      } else if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Coffee Updated Successfully!",
          icon: "success",
          confirmButtonText: "Cool",
        });
        form.reset();
      }
    };
    PutCoffee();
  };

  return (
    <Container className="py-4">
      <h1
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <AiOutlineArrowLeft />
        Back to home
      </h1>

      <div className="bg-[#F4F3F0] rounded-sm mt-4 px-8 py-10">
        <div className="text-center space-y-2 mt-3">
          <h1 className="font-semibold text-2xl md:text-3xl text-[#372727]">
            Update Existing Coffee Details
          </h1>
          <p className="text-gray-900">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>

          <form onSubmit={handleUpdateCoffee} className="w-full py-2">
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-y-6 md:gap-x-8">
              <div className="text-left">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  defaultValue={name}
                  placeholder="Enter coffee name"
                  className="py-3 px-4 border rounded shadow-sm text-[#372727] outline-none focus:border-[#372727] block w-full sm:text-sm border-gray-400"
                />
              </div>

              <div className="text-left">
                <label
                  htmlFor="chef"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Chef
                </label>
                <input
                  defaultValue={chef}
                  type="text"
                  name="chef"
                  id="chef"
                  placeholder="Enter coffee chef"
                  className="py-3 px-4 border rounded shadow-sm text-[#372727] outline-none focus:border-[#372727] block w-full sm:text-sm border-gray-400"
                />
              </div>

              <div className="text-left">
                <label
                  htmlFor="Supplier"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Supplier
                </label>
                <input
                  type="text"
                  defaultValue={supplier}
                  name="supplier"
                  id="Supplier"
                  placeholder="Enter coffee supplier"
                  className="py-3 px-4 border rounded shadow-sm text-[#372727] outline-none focus:border-[#372727] block w-full sm:text-sm border-gray-400"
                />
              </div>

              <div className="text-left">
                <label
                  htmlFor="Taste"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Taste
                </label>
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  id="Taste"
                  placeholder="Enter coffee taste"
                  className="py-3 px-4 border rounded shadow-sm text-[#372727] outline-none focus:border-[#372727] block w-full sm:text-sm border-gray-400"
                />
              </div>
              <div className="text-left">
                <label
                  htmlFor="Category"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  id="Category"
                  placeholder="Enter coffee category"
                  className="py-3 px-4 border rounded shadow-sm text-[#372727] outline-none focus:border-[#372727] block w-full sm:text-sm border-gray-400"
                />
              </div>

              <div className="text-left">
                <label
                  htmlFor="Details"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Details
                </label>
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  id="Details"
                  placeholder="Enter coffee details"
                  className="py-3 px-4 border rounded shadow-sm text-[#372727] outline-none focus:border-[#372727] block w-full sm:text-sm border-gray-400"
                />
              </div>

              <div className="text-left md:col-span-2">
                <label
                  htmlFor="Photo"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Photo
                </label>
                <input
                  defaultValue={photo}
                  type="text"
                  name="photo"
                  id="Photo"
                  placeholder="Enter photo URL"
                  className="py-3 px-4 border rounded shadow-sm text-[#372727] outline-none focus:border-[#372727] block w-full sm:text-sm border-gray-400"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full block py-3 px-4 rounded bg-[#372727] hover:bg-[#372727]/90 transition-all text-white mt-6"
              >
                Update Coffee Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Update;
