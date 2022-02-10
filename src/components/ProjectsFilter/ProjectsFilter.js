import React from "react";
import { FilterContainer, Button, FilterHeading } from "./ProjectsFilterStyles";
import { SiReact, SiJavascript } from "react-icons/si";
import { FaPhp } from "react-icons/fa";

const ProjectsFilter = ({ filter, filterBy }) => (
  <section>
    <FilterHeading>
      Filtered by: <b>{filterBy}</b>
    </FilterHeading>
    <FilterContainer>
      <Button
        type="button"
        className={filterBy === "All" ? "active" : null}
        aria-label="Filter by All"
        onClick={() => filter("All")}
      >
        All
      </Button>
      <Button
        type="button"
        className={filterBy === "JavaScript" ? "active" : null}
        aria-label="Filter by JS"
        onClick={() => filter("javascript")}
      >
        <SiJavascript />
      </Button>
      <Button
        type="button"
        className={filterBy === "React" ? "active" : null}
        aria-label="Filter by ReactJS"
        onClick={() => filter("react")}
      >
        <SiReact />
      </Button>
      <Button
        type="button"
        className={filterBy === "PHP" ? "active" : null}
        aria-label="Filter by PHP"
        onClick={() => filter("php")}
      >
        <FaPhp />
      </Button>
    </FilterContainer>
  </section>
);

export default ProjectsFilter;
