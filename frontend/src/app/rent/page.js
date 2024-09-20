"use client";

import ReuseableFetch from "@/components/ReuseabelFetch/ReuseabelFetch";

const BikeRent = () => {
  const { data, error, isLoading } = ReuseableFetch(
    "http://localhost:8099/api/getAllBike"
  );
  console.log(data);
  return (
    <div>
      <div className="py-[20px]">
        <h1 className="text-center font-semibold text-2xl">
          Book your favorite bikes at the best possible price.
        </h1>
      </div>
      <div className="pb-[15px]">
        {isLoading ? (
          <div className="grid place-content-center">
            <h1>Loading</h1>
          </div>
        ) : (
          <>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-[10%] gap-[20px] h-screen">
              {data?.data?.map((bike) => (
                <div key={bike?.id}>
                  <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img
                      alt=""
                      src={bike?.image}
                      className="h-56 w-full object-cover"
                    />
                    <div className="bg-white px-4 py-2">
                      <h3 className="mt-0.5 text-lg text-gray-900">
                        {bike?.name}
                      </h3>

                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                        Price: {bike?.price} per hour
                      </p>
                      <button className="bg-black px-[12px] py-[7px] text-white rounded-md mt-[7px]">
                        Book now
                      </button>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BikeRent;
