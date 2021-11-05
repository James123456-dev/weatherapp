import React from "react";

export default function Query({ city }) {
  return <div className="search-location">{city}</div>;
}

Query.defaultProps = {
  city: "some city",
};
