const Fieldset = ({ label, children }) => {
  return (
    <fieldset>
      {label && <legend className="text-2xl font-semibold pb-3 text-center">{label}</legend>}
      <div className="space-y-3">{children}</div>
    </fieldset>
  );
};

export default Fieldset;
