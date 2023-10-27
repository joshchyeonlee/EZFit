import { Box, InputAdornment, TextField } from "@mui/material";
import Search from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <TextField
      id="outlined-search"
      type="search"
      defaultValue={"Search For a Workout..."}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
}

export default SearchBar;
