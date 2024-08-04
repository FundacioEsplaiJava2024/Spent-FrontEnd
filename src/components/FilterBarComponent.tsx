import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FilterBar() {
  const [sport, setSport] = React.useState("");

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSport(event.target.value);
  };

  return (
    <div id="filter">
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Sport</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={sport}
          onChange={handleChange}
          autoWidth
          label="Sport"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value={"Kayak"}>Kayak</MenuItem>
          <MenuItem value={"Spikeball"}>Spikeball</MenuItem>
          <MenuItem value={"curling"}>Curling</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
