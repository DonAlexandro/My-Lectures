import { Add, Remove } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { chain, sanitize } from "lodash";
import { useState } from "react";
import "./presenter";

type NumberInputProps = {
  max?: number;
  min?: number;
  period?: number;
  step?: number;
};

type OnChangeEventType = React.ChangeEvent<
  HTMLTextAreaElement | HTMLInputElement
>;

export const NumberInputDeclarative = ({
  max,
  min,
  period = 0,
  step = 1,
}: NumberInputProps) => {
  const [number, setNumber] = useState("0");

  const onChange = (value: string) => setNumber(value);

  const handleChange = (event: OnChangeEventType) =>
    onChange(sanitize(event.target.value));

  const handleAdd = () =>
    onChange(
      chain(number)
        .sanitize()
        .toSafeNumber()
        .add(step)
        .calculateMaximum(max)
        .value()
        .toFixed(period)
    );

  const handleSub = () =>
    onChange(
      chain(number)
        .sanitize()
        .toSafeNumber()
        .subtract(step)
        .calculateMinimum(min)
        .value()
        .toFixed(period)
    );

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
