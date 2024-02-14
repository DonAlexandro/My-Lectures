import { Box, Typography } from "@mui/material";

export const Colors = () => {
  const colors = [
    {
      label: "Primary",
      bgcolor: "primary.main",
    },
    {
      label: "Secondary",
      bgcolor: "secondary.main",
    },
    {
      label: "Error",
      bgcolor: "error.main",
    },
    {
      label: "Success",
      bgcolor: "success.main",
    },
  ];

  return colors.map((color) => (
    <Box
      sx={{
        width: "100%",
        p: 2,
        bgcolor: color.bgcolor,
        color: "white",
        mb: 2,
      }}
    >
      <Typography>{color.label}</Typography>
    </Box>
  ));
};
