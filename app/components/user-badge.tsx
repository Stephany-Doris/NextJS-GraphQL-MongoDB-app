import Image from "next/image";
import { UPDATE_USER } from "../constants";
import { useMutation } from "@apollo/client";

const UserBadge = ({
  user,
  refetch,
}: {
  user: Record<string, string | null | number>;
  refetch: any;
}) => {
  const [updateUser] = useMutation(UPDATE_USER);

  const updateActiveStatus = async () => {
    await updateUser({
      variables: { input: { id: user?.id, active: user?.active ? false : true } },
    });
    refetch();
  };

  return (
    <div className="flex flex-row h-14 p-2 justify-between items-center bg-slate-100">
      <div className="flex flex-row gap-2">
        <div className="border border-slate-400 items-center flex p-2 h-10 w-10 rounded-full bg-white">
          <Image
            src="/next.svg"
            alt=""
            width={20}
            height={20}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="m-0 text-sm text-gray-900">
            {user?.first_name} {user?.last_name}
          </span>
          <span className="text-[11px] text-gray-600">{user?.email}</span>
        </div>
      </div>
      <button
        onClick={updateActiveStatus}
        style={{
          backgroundColor: user?.active ? "green" : "red",
        }}
        className="h-3 w-3 rounded-full"
      ></button>
    </div>
  );
};

export default UserBadge;
