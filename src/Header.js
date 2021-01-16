import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import { logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div class="header">
      <div class="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" />
      </div>
      <div class="header__middile">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon classname="header__inputCaret" />
      </div>
      <div class="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <Avatar onClick={signOut} src={user?.photourl} />
      </div>
    </div>
  );
}

export default Header;
