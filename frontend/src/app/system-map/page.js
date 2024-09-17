import SystemMap from "@/components/SystemMap/SystemMap";
import Link from "next/link";

const page = () => {
  const nycCoordinates = [23.7724, 90.4255];
  return (
    <div>
      <div className="text-center py-[10px]">
        <h1 className="text-xl py-[5px]">We are operating in these areas.</h1>
        <Link
          href="/rent"
          className="bg-yellow-200 px-2 py-2 rounded-md my-[5px] inline-block"
        >
          Book a bike right now!
        </Link>
      </div>
      <SystemMap coordinates={nycCoordinates}></SystemMap>
    </div>
  );
};

export default page;
