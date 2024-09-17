import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const dashboard = async () => {
  const { getAccessToken, getUser } = getKindeServerSession();
  console.log(await getUser());
  console.log("test");
  return (
    <div>
      <h1>This is dashboard</h1>
    </div>
  );
};

export default dashboard;
