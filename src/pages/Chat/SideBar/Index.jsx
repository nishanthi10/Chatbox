import { useState } from "react";
import { LeftNav } from "./LeftNav/Index";
import { RightNav } from "./RightNav/Index";
import classes from "./Index.module.css";

export function SideBar() {
  const [active, setActive] = useState("Chats");

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <LeftNav active={active} setActive={setActive} />
        <RightNav active={active} />
      </div>
    </nav>
  );
}
