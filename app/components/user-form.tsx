"use client";

import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { CREATE_USER } from "../constants";

const UserForm = ({ refetch }: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [createUser] = useMutation(CREATE_USER);

  const onSubmit = async (data: any) => {
    const { age, first_name, last_name, email } = data || {};

    await createUser({
      variables: { input: { age: Number(age), first_name, last_name, email } },
    });
    refetch();
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 w-3/4"
    >
      <h2 className="font-semibold text-xl text-[#121212] m-3 text-center">
        Create new user
      </h2>
      <div className="input-wrapper">
        <input
          placeholder="first name"
          type="text"
          {...register("first_name", { required: true })}
        />
        {errors.first_name && <span>first name is required</span>}
      </div>

      <div className="input-wrapper">
        <input
          placeholder="last name"
          type="text"
          {...register("last_name", { required: true })}
        />
        {errors.last_name && <span>last name is required</span>}
      </div>

      <div className="input-wrapper">
        <input
          placeholder="email"
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>email is required</span>}
      </div>

      <div className="input-wrapper">
        <input
          placeholder="age"
          type="number"
          {...register("age", { required: true })}
        />
        {errors.age && <span>age is required</span>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-1/2 mx-auto my-4 bg-orange-500 text-white h-12 rounded "
      >
        Create User
      </button>
    </form>
  );
};

export default UserForm;
