"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import HoverMenu from 'material-ui-popup-state/HoverMenu'
import MenuItem from "@mui/material/MenuItem";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
import Menu2 from "./menu2";

const Menu1 = () => {
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu1" });
  return (
    <div>
      <Button variant="contained" {...bindHover(popupState)}>
        Menu 1
      </Button>
      <HoverMenu {...bindMenu(popupState)}>
        <MenuItem onClick={popupState.close}>Cake</MenuItem>
        <MenuItem onClick={popupState.close}>Death</MenuItem>
        <MenuItem onClick={popupState.close}>
          <Menu2 />
        </MenuItem>
      </HoverMenu>
    </div>
  );
};

export default Menu1;
