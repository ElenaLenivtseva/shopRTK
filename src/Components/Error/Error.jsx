import React from "react";
import './Error.css'
const Error = () => {
  return (
    <div>
      <div className="error">
        <p className="font-inter font-bold leading-none tracking-normal text-xl">
          Sorry, there are not such products... Clear the filter and try again
        </p>
      </div>
    </div>
  );
};

export default Error;
