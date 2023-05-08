import React, { useState } from "react";
import { Container } from "../shared";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { HiPencil } from "react-icons/hi2";
import { IoMdTrash } from "react-icons/io";
import Swal from "sweetalert2";
const Popular = () => {
  const navigate = useNavigate();
  const [coffees, setCoffees] = useState(useLoaderData());

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/api/v1/coffees/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "Deleted!",
              text: "Your coffee has been deleted.",
              icon: "success",
              confirmButtonText: "Okay",
            });
            const remaining = coffees.filter((el) => el._id !== id);
            setCoffees(remaining);
          } else if (!res.ok) {
            Swal.fire({
              title: "Oops!",
              text: "Something went wrong!",
              icon: "error",
              confirmButtonText: "Okay",
            });
          }
        });
      }
    });
  };
  return (
    <Container className="mb-6 py-4">
      <div className="text-center space-y-3">
        <p className="text-gray-900 text-base">--- Sip & Savor ---</p>
        <h4 className="text-3xl font-semibold">Our Popular Products</h4>
        <button
          onClick={() => navigate("/create-coffee")}
          to="/create-coffee"
          className="px-4 py-2 bg-[#372727] hover:bg-[#372727]/90 text-white transition-all rounded"
        >
          Add Coffee
        </button>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {coffees?.map((coffee) => (
          <div
            key={coffee._id}
            className="py-6 px-4 flex items-center justify-between bg-[#F5F4F1] rounded"
          >
            <div>
              <img
                src={coffee.photo}
                alt={coffee.name}
                className="w-full h-auto"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="font-medium">
                Name:{" "}
                <span className="font-normal text-gray-900">{coffee.name}</span>
              </h3>
              <h3 className="font-medium">
                Chef:{" "}
                <span className="font-normal text-gray-900">{coffee.chef}</span>
              </h3>
              <h3 className="font-medium">
                Supplier:{" "}
                <span className="font-normal text-gray-900">
                  {coffee.supplier}
                </span>
              </h3>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-8 h-8 bg-orange-500 hover:bg-orange-600 transition-all flex items-center justify-center rounded cursor-pointer">
                <AiFillEye className="text-white text-xl" />
              </div>
              <div
                onClick={() => navigate(`update-coffee/${coffee._id}`)}
                className="w-8 h-8 bg-gray-800 hover:bg-gray-900 transition-all flex items-center justify-center rounded cursor-pointer"
              >
                <HiPencil className="text-white text-xl" />
              </div>
              <div
                onClick={() => handleDelete(coffee._id)}
                className="w-8 h-8 bg-red-500 hover:bg-red-600 transition-all flex items-center justify-center rounded cursor-pointer"
              >
                <IoMdTrash className="text-white text-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Popular;
