import Image from "next/image";

const UserBadge = () => {
  return (
    <div className="flex flex-row h-14 p-2 justify-between items-center bg-slate-100">
      <div className="flex flex-row gap-2" >
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
          <span className="m-0 text-sm text-gray-900">Stephany Awino</span>
          <span className="text-[11px] text-gray-600">email@gmail.com</span>
        </div>
      </div>
      <button className="bg-green-300 h-4 w-4 rounded-full"></button>
    </div>
  );
};

export default UserBadge;
