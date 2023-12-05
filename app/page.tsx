"use client";
import UserForm from "./components/user-form";
import UserBadge from "./components/user-badge";
import { Fragment } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { FETCH_USERS } from "./constants";

export default function Home() {
  // will update this to fetch users from the db
  const { loading, error, data, refetch } = useQuery(FETCH_USERS);

  return (
    <main className="flex min-h-screen flex-row gap-12 items-center justify-evenly p-24">
      {error && <p>Error : {error.message}</p>}
      {loading && <p>Loading...</p>}

      <div className="h-4/5 w-1/3 px-4 py-6 flex flex-col gap-2 overflow-y-auto max-h-[700px] border border-orange-400 rounded">
        <h1>list of all users</h1>
        {data?.users?.map((user: Record<string, string | null | number>) => (
          <Fragment key={user?.id}>
            <UserBadge user={user} refetch={refetch} />
          </Fragment>
        ))}
      </div>
      <div className="h-4/5 w-1/3 px-2 py-5 justify-center flex border border-orange-400 rounded">
        <UserForm refetch={refetch} />
      </div>
    </main>
  );
}
