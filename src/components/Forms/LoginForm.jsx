import Field from "./Field";
import Fieldset from "./Fieldset";

const LoginForm = () => {
  return (
    <form className="p-5 bg-green-100 rounded-md shadow-md m-5 w-[500px] mx-auto">
      <Fieldset label="Login">
        <Field label="Email">
          <input
          className="border-2 p-2 border-green-400 rounded"
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
          />
        </Field>
        <Field label="Password">
          <input
          className="border-2 p-2 border-green-400 rounded"
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          />
        </Field>
        <Field>
          <button className="py-3 text-xl bg-green-600 rounded font-semibold text-white">Login</button>
        </Field>
      </Fieldset>
    </form>
  );
};

export default LoginForm;
