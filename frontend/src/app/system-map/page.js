import SystemMap from "@/components/SystemMap/SystemMap";

const page = () => {
  const nycCoordinates = [23.7724, 90.4255];
  return (
    <div>
      <h1 className="text-xl py-[15px] text-center">
        We are operating in these areas.
      </h1>
      <SystemMap coordinates={nycCoordinates}></SystemMap>
    </div>
  );
};

export default page;
