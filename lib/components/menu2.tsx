"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
import HoverMenu from 'material-ui-popup-state/HoverMenu'

const Menu2 = () => {
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu2" });
  return (
    <div>
      <Button variant="contained" {...bindHover(popupState)}>
        Menu 2
      </Button>
      <HoverMenu {...bindMenu(popupState)}>
        <MenuItem onClick={popupState.close}>Cake</MenuItem>
        <MenuItem onClick={popupState.close}>Death</MenuItem>
      </HoverMenu>
    </div>
  );
};

export default Menu2;
