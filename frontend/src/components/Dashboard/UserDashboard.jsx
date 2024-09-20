"use client";

import { useAuthContext } from "@/providers/AuthProvider";
import { useEffect, useState } from "react";

const UserDashboard = () => {
  const rantedBike = "";
  const { user, userInfo, loading } = useAuthContext();
  console.log(user);
  // const [loading, setLoading] = useState(true);
  // const [userInfo, setUserInfo] = useState(false);

  // useEffect(() => {
  //   fetch(`http://localhost:8099/api/getUser/${user?.email}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUserInfo(data);
  //       setTimeout(() => {
  //         setLoading(false);
  //       }, 1000);
  //     });
  // }, [user]);

  console.log(userInfo);
  return (
    <>
      {loading ? (
        <>
          <div className="h-screen grid place-content-center ">
            <h1>Loading</h1>
          </div>
        </>
      ) : (
        <>
          <div className="h-screen">
            <h1 className=" border-black border py-3 px-2 text-center font-semibold text-xl mt-[10px] w-[90%] rounded-md mx-auto">
              Welcome To User Dashboard {userInfo?.data?.name}
            </h1>
            <div className="grid grid-cols-2 max-w-6xl mx-auto py-[20px] gap-5">
              <div className="border p-5">
                <h1 className="font-semibold text-2xl">Your Bikes</h1>
                <div>
                  {rantedBike ? (
                    <></>
                  ) : (
                    <div className="py-[15px]">
                      <h1>You currently have no ranted bike.</h1>
                    </div>
                  )}
                </div>
              </div>
              <div className="border p-5">
                <h1 className="font-semibold text-2xl">Your Previous Bikes</h1>
                <div>
                  {rantedBike ? (
                    <></>
                  ) : (
                    <div className="py-[15px]">
                      <h1>You have not ranted yet!</h1>
                    </div>
                  )}
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserDashboard;
