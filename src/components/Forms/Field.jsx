import React from "react";

const Field = ({ label, htmlFor, children, error }) => {
  const id = htmlFor || getChildId(children);
  return (
    <div className="flex flex-col">
      {label && <label className="text-lg font-medium" htmlFor={id}>{label}</label>}
      {children}
      {!!error && <div>{error.message}</div>}
    </div>
  );
};
const getChildId = (children) => {
  const child = React.Children.only(children);
  if ("id" in child.props) {
    return child.props.id;
  }
};

export default Field;
