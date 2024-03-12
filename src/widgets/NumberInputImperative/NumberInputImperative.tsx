import { Add, Remove } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

type NumberInputImperativeProps = {
  max?: number;
  min?: number;
  period?: number;
  step?: number;
};

export const NumberInputImperative = ({
  max,
  min,
  period = 0,
  step = 1,
}: NumberInputImperativeProps) => {
  const [number, setNumber] = useState("0");

  const onChange = (value: string) => setNumber(value);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Allow entering only digits, dot and minus
    const value = event.target.value.replace(/[^0-9.-]/g, "");

    onChange(value);
  };

  const handleAdd = () => {
    const numbered = +number;
    const value = +(numbered + step).toFixed(period);

    if (Number.isNaN(value)) {
      return onChange(String(0));
    }

    if (max === undefined) {
      return onChange(String(value));
    }

    onChange(value > max ? String(max) : String(value));
  };

  const handleSub = () => {
    const numbered = +number;
    const value = +(numbered - step).toFixed(period);

    if (min === undefined) {
      return onChange(String(value));
    }

    onChange(value < min ? String(min) : String(value));
  };

  return (
    <TextField
      value={number}
      onChange={handleChange}
      sx={{ width: "100%" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={handleSub}>
              <Remove />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleAdd}>
              <Add />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
