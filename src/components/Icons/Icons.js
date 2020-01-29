import React from "react";
import "./Icons.css";

export default () => {
  return (
    <div>
      <span id={"icon"}>
        <a
          style={{ color: "inherit" }}
          href="https://github.com/oddeirikigland"
        >
          <i className="fab fa-github mdi-dark" />
        </a>
      </span>

      <span id={"icon"}>
        <a
          style={{ color: "inherit" }}
          href="https://www.linkedin.com/in/odd-eirik-igland-342172155"
        >
          <i className="fab fa-linkedin" />
        </a>
      </span>
    </div>
  );
};
