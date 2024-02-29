import Field from "./Field";
import Fieldset from "./Fieldset";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const submitForm = (formData) => {
    console.log(formData);
    const user = {
      email: "rk@gmail.com",
      password: "123456789",
    };
    const found =
      formData.email === user.email && formData.password === user.password;
    if (!found) {
      setError("root.random", {
        message: `User with email ${formData.email} is not found.`,
        type: "random",
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="p-5 bg-green-100 rounded-md shadow-md m-5 w-[500px] mx-auto"
    >
      <Fieldset label="Login">
        <Field label="Email" error={errors.email}>
          <input
            {...register("email", { required: "Emil is required" })}
            className={`border-2 p-2 rounded ${
              errors.email ? "border-red-500" : "border-green-400 "
            }`}
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
          />
        </Field>
        <Field label="Password" error={errors.password}>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Your Password must be at least 8 characters",
              },
            })}
            className={`border-2 p-2 rounded ${
              errors.password ? "border-red-500" : "border-green-400 "
            }`}
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          />
        </Field>
        <Field>
          <button
            type="submit"
            className="py-3 text-xl bg-green-600 rounded font-semibold text-white"
          >
            Login
          </button>
        </Field>
      </Fieldset>
      <div className="text-xl font-semibold text-red-600 text-center mt-3">{errors?.root?.random?.message}</div>
    </form>
  );
};

export default LoginForm;
