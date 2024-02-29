import { useFieldArray, useForm } from "react-hook-form";
import Field from "../Field";
import Fieldset from "../Fieldset";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control,
  });

  const submitForm = (formData) => {
    console.log(formData);
  };
 
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="p-5 bg-green-100 rounded-md shadow-md m-5 w-[500px] mx-auto"
    >
      <Fieldset label="Registration">
        <Field label="Full Name" error={errors.fName}>
          <input
            {...register("fName", { required: "Full Name is required" })}
            className={`border-2 p-2 rounded ${
              errors.fName ? "border-red-500" : "border-green-400 "
            }`}
            type="text"
            name="fName"
            id="fName"
            placeholder="Enter Full Name"
          />
        </Field>
        <Field label="Age" error={errors.age}>
          <input
            {...register("age", {
              required: "Age is required",
              max: {
                value: 100,
                message: "Age must be between 0 and 100",
              },
            })}
            className={`border-2 p-2 rounded ${
              errors.age ? "border-red-500" : "border-green-400 "
            }`}
            type="number"
            name="age"
            id="age"
            placeholder="Enter Age"
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            {...register("email", { required: "Emil is required" })}
            className={`border-2 p-2 rounded ${
              errors.email ? "border-red-500" : "border-green-400 "
            }`}
            type="email"
            name="email"
            id="regEmail"
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
            id="regPassword"
            placeholder="Enter password"
          />
        </Field>
      </Fieldset>
      <fieldset>
        <h3>Add Social Handles</h3>
        {fields &&
          fields.map((field, index) => (
            <div className="flex justify-between " key={field.id}>
              <Field label="Social Name">
                <input
                  {...register(`socials[${index}].name`)}
                  className="border-2 p-2 rounded border-green-400"
                  type="text"
                  name={`socials[${index}].name`}
                  id={`socials[${index}].name`}
                />
              </Field>
              <Field label="Social URL">
                <input
                  {...register(`socials[${index}].url`)}
                  className="border-2 p-2 rounded border-green-400"
                  type="text"
                  name={`socials[${index}].url`}
                  id={`socials[${index}].url`}
                />
              </Field>
              <button onClick={()=>remove(index)} className="p-2 bg-red-600 m-2 ">X</button>
            </div>
          ))}
        <button
          onClick={() => append({ name: "", url: "" })}
          className="px-3 py-1 bg-orange-500 rounded"
        >
          @ Add a social handle
        </button>
      </fieldset>
      <Field>
        <button
          type="submit"
          className="py-3 text-xl bg-green-600 rounded font-semibold text-white"
        >
          Register
        </button>
      </Field>
      <div className="text-xl font-semibold text-red-600 text-center mt-3">
        {errors?.root?.random?.message}
      </div>
    </form>
  );
};

export default RegistrationForm;
