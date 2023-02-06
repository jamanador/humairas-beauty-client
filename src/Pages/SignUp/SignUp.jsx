import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/AuthProvider";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(authContext);

  const { register, handleSubmit } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const image = data.image[0];
    console.log(name, email, password, image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=e54433221b4043ac25b3be16c14a5ba1`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        createUser(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            toast.success("Successfully Registered");
            updateUserProfile(name, imageData.data.url)
              .then((result) => {})
              .catch((err) => {});
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
  };

  return (
    <div className="container mx-auto md:w-2/5">
      <div className="border-gray border mx-6 px-4 my-8">
        <h2 className="mt-6 text-3xl font-bold text-gray-900 text-center">
          Welcom To Humairas!
        </h2>
        <p className="mt-2 text-sm text-gray-600 text-center">
          Please Signup to your account !!
        </p>
        <div className="flex gap-x-8 justify-center my-6">
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </Link>
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </Link>
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </Link>
        </div>
        <div className="divider">Or</div>
        <form onSubmit={handleSubmit(handleSignUp)} className="mt-6">
          <label className="font-semibold text-gray-dark block pb-2">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: "required*" })}
            placeholder="Your Name"
            className="input w-full  focus:outline-none border-gray rounded-xl"
          />
          <label className="font-semibold text-gray-dark block pb-2">
            Photo
          </label>
          <input
            type="file"
            {...register("image", { required: "required*" })}
            id="dropzone-file"
            className="input w-full  focus:outline-none border-gray rounded-xl"
          />

          <label className="font-semibold text-gray-dark block pb-2">
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: "required*" })}
            placeholder="xyz@gmail.com"
            className="input w-full  focus:outline-none border-gray rounded-xl"
          />
          <label className="font-semibold text-gray-dark block pb-2">
            Password
          </label>
          <input
            type="password"
            {...register("password", { required: "required*" })}
            placeholder="type your password"
            className="input w-full  focus:outline-none border-gray rounded-xl"
          />
          <button className="w-full my-5 text-center py-1 text-white px-6 bg-gradient-to-r from-second to-main">
            Log In
          </button>
        </form>
        <p className="text-sm text-center py-4">
          Already have an account?
          <Link to="/login" className="text-second">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
