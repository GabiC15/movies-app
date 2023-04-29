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

export default function DropdownSelector({ items, value, setValue }) {
  const theme = useTheme();
  const itemsIds = items.map((i) => i.id);
  const itemsValues = items.map((i) => i.name);

  const handleChange = ({ target }) => {
    setValue(items[itemsValues.indexOf(target.value)].id);
  };

  function getStyles(theme) {
    return {
      fontWeight:
        itemsIds.indexOf(value) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
        {
          <InputLabel
            sx={{ color: "#ffffff" }}
            id="demo-multiple-name-label"
            shrink={false}
          >
            {value ? "" : "Genero"}
          </InputLabel>
        }
        <Select
          notched={false}
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={items[itemsIds.indexOf(value)]?.name ?? ""}
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
          {items.map((genre) => (
            <MenuItem
              key={genre.id}
              value={genre.name}
              style={getStyles(theme)}
            >
              {genre.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
