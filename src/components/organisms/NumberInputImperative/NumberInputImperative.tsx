import { Add, Remove } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";

export const NumberInput = () => {
  return (
    <TextField
      sx={{ width: "100%" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <Remove />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <Add />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
