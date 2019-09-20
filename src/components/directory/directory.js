import React, { useContext } from "react";
import MenuItem from "../menu-item/menu-item";
import "./directory.scss";
import { DirectoryContext } from "../../context/directoryProvider";

const Directory = () => {
  const { directoryState } = useContext(DirectoryContext);

  return (
    <div className="directory-menu">
      {directoryState.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};

export default Directory;
