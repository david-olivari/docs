import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "./";

const DropdownItem = ({ to, active, children }) => (
  <Link to={to} className={`dropdown-item ${active && "active fw-bold"}`}>
    {children}
  </Link>
);

const VersionDropdown = ({
  versionArray,
  pathVersions,
  preciseVersion,
  path,
}) => {
  const activeVersion = path.split("/")[2];
  let roundedVersion = "";
  if (!preciseVersion) {
    roundedVersion = activeVersion;
  } else {
    roundedVersion = preciseVersion.split(".")[0];
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-primary" size="sm">
        Version {preciseVersion ? preciseVersion : activeVersion}&nbsp;
        {
          // must be a better way to get space between the text and caret
        }
      </Dropdown.Toggle>

      <Dropdown.Menu className="version-dropdown">
        {versionArray.map((version) => (
          <DropdownItem
            to={version.url}
            key={version.url}
            active={activeVersion === version.version}
          >
            Version {version.version}{" "}
            {version.version === roundedVersion && preciseVersion
              ? `(${preciseVersion})`
              : ""}
          </DropdownItem>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default VersionDropdown;
