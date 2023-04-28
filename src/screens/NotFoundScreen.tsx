import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const NotFoundScreen:React.FC = () => {
  const error = useRouteError();
  console.error(error);
  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText}</i>
        </p>
      </div>
    );
  }
  return <p>{"Unknown Error"}</p>;
};

export default NotFoundScreen;
