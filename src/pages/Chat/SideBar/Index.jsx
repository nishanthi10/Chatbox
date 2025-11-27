import { useState } from "react";
import { LeftNav } from "./LeftNav/Index";
import { RightNav } from "./RightNav/Index";
import classes from "./Index.module.css";

export function SideBar({ onUserSelect , onActiveChange , onStatusSelect  }) {
  const [active, setActive] = useState("Chats");

 const handleActiveChange = (section) => {
    setActive(section);         
    onActiveChange(section);     
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <LeftNav active={active} setActive={handleActiveChange} />
        <RightNav active={active} onUserSelect={onUserSelect} onStatusSelect={onStatusSelect} />

      </div>
    </nav>
  );
}
