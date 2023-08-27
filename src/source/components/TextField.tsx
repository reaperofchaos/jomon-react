import { Box, Input, InputLabel } from "@mui/material";

const TextField = ({
  label,
  value,
  setValue,
}: {
  label: string;
  value: string | undefined;
  setValue: (value: string | undefined) => void;
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      width: "100%",
      columnGap: "10px",
    }}
  >
    <InputLabel>{label}</InputLabel>
    <Input value={value} onChange={(e) => setValue(e.target.value)} />
  </Box>
);

export default TextField;
