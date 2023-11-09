import { InputAdornment, TextField } from "@mui/material";
import Search from "@mui/icons-material/Search";

interface SearchBarProps {
  placeholder: string;
  onSearch: (query: string) => void;
}

function SearchBar({ placeholder, onSearch }: SearchBarProps) {
  return (
    <TextField
      sx={{
        backgroundColor: (theme) => theme.palette.textFieldBkg,
        border: (theme) => `2px solid ${theme.palette.primary.main}`,
        borderRadius: "10px",
      }}
      type="search"
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search color="primary" />
          </InputAdornment>
        ),
      }}
      fullWidth
      onChange={(e) => onSearch(e.target.value.toLowerCase())}
    />
  );
}

export default SearchBar;
