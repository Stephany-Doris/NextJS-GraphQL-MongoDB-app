"use client";
import UserForm from "./components/user-form";
import UserBadge from "./components/user-badge";
import { Fragment } from "react";

export default function Home() {
  // will update this to fetch users from the db
  const users = [1,2,3,4,5,6];

  return (
    <main className="flex min-h-screen flex-row gap-12 items-center justify-evenly p-24">
      <div className="h-4/5 w-1/3 px-4 py-6 flex flex-col gap-2 overflow-y-auto max-h-[700px] border border-orange-400 rounded">
        <h1>list of all users</h1>
        {users?.map((user) => (
          <Fragment key={user}>
            <UserBadge />
          </Fragment>
        ))}
      </div>
      <div className="h-4/5 w-1/3 px-2 py-5 justify-center flex border border-orange-400 rounded">
        <UserForm />
      </div>
    </main>
  );
}
