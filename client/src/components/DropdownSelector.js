import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  useTheme,
  alpha,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function DropdownSelector() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState("");

  const handleChange = ({ target }) => {
    setPersonName(target.value);
  };
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
        {personName.length === 0 && (
          <InputLabel
            sx={{ color: "#ffffff" }}
            id="demo-multiple-name-label"
            shrink={false}
          >
            Name
          </InputLabel>
        )}
        <Select
          notched={false}
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={personName}
          onChange={handleChange}
          MenuProps={MenuProps}
          sx={{
            color: "#ffffff",
            boxShadow: "none",
            borderRadius: 15,
            backgroundColor: alpha("#000000", 0.1),
            border: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            "& .MuiSvgIcon-root": {
              color: "white",
            },
          }}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
