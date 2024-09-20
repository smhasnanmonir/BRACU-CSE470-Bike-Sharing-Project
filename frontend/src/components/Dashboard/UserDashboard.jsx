"use client";

import { useAuthContext } from "@/providers/AuthProvider";
import { useEffect, useState } from "react";
import ReuseableFetch from "../ReuseabelFetch/ReuseabelFetch";

const UserDashboard = () => {
  const { user, userInfo, loading } = useAuthContext();
  const [rentedBikes, setRentedBikes] = useState([]);

  const { data: rentedBikesData } = ReuseableFetch(
    `http://localhost:8099/api/getRent/${userInfo?.data?.email}`
  );

  useEffect(() => {
    if (rentedBikesData) {
      setRentedBikes(rentedBikesData.data || []); // Fallback to an empty array if data is null
    }
  }, [rentedBikesData]);

  const handleDelete = async (rentId) => {
    try {
      const response = await fetch(
        `http://localhost:8099/api/delete-rent/${rentId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Remove the deleted bike from the local state
        setRentedBikes((prevBikes) =>
          prevBikes.filter((bike) => bike._id !== rentId)
        );
        alert("Bike rental deleted successfully.");
      } else {
        throw new Error("Failed to delete the bike rental.");
      }
    } catch (error) {
      console.error(error);
      alert("Error while deleting the bike rental. Please try again.");
    }
  };

  return (
    <>
      {loading ? (
        <div className="h-screen grid place-content-center ">
          <h1>Loading</h1>
        </div>
      ) : (
        <div className="h-screen">
          <h1 className="border-black border py-3 px-2 text-center font-semibold text-xl mt-[10px] w-[90%] rounded-md mx-auto">
            Welcome To User Dashboard {userInfo?.data?.name}
          </h1>
          <h1 className="font-semibold text-2xl text-center py-[20px]">
            Your Bikes
          </h1>
          <div className="grid max-w-6xl mx-auto gap-5">
            <div className="">
              {rentedBikes.length > 0 ? (
                <div className="">
                  <div className="grid grid-cols-4 gap-3">
                    {rentedBikes.map((bike) => (
                      <div key={bike._id} className="border p-3">
                        <img
                          className="rounded-md mb-2 w-[275px] h-[250px] object-cover"
                          src={bike.bike_id?.image} // Use optional chaining
                          alt={bike.bike_id?.name} // Use optional chaining
                        />
                        <h1>Name: {bike.bike_id?.name}</h1>
                        <h1>Price: {bike.bike_id?.price}</h1>
                        <h1>Rented From: {bike.bike_id?.area}</h1>
                        <h1>
                          Rented At:{" "}
                          {new Date(bike.bike_id?.createdAt).toLocaleString()}
                        </h1>
                        <button
                          className="bg-red-600 text-white rounded-md mt-2 px-3 py-1"
                          onClick={() => handleDelete(bike._id)}
                        >
                          Cancel
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="py-[15px]">
                  <h1>You currently have no rented bikes.</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDashboard;
