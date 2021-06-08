import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import "./SortButton.css";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const options = ["Price", "Popularity"];

export default function SortButton(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [shoeSize, setShoeSize] = React.useState("All");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    console.log(event.target.innerText);
    props.handler(event);
  };

  return (
    <div>
      <button
        aria-haspopup="true"
        onClick={handleClick}
        className="sort-button"
        variant="outlined"
      >
        Sort
      </button>
      <StyledMenu
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 20 * 4.5,
            width: "18ch",
          }
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={shoeSize} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
