import { useState } from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const MuiInputFields = () => {
  const [isPassword, setIsPassword] = useState(true);

  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2} display="block">
        <TextField label="Small Secondary" size="small" color="secondary" />
        <TextField label="Large" size="large" />
      </Stack>

      <Stack direction="row" spacing={2} display="block">
        <TextField label="Form Input (required)" required />
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
        <TextField
          label="Password disabled"
          type="password"
          helperText="Do not share your password with anyone"
          disabled
        />
      </Stack>

      <Stack direction="row" spacing={2} display="block">
        <TextField
          label="Amout"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          error
        />
        <TextField
          type="number"
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kgs</InputAdornment>,
          }}
        />
        <TextField
          type={isPassword ? "password" : "text"}
          label="password"
          helperText="Do not leak ur passwd"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {!isPassword ? (
                  <VisibilityIcon onClick={() => setIsPassword(!isPassword)} />
                ) : (
                  <VisibilityOffIcon
                    onClick={() => setIsPassword(!isPassword)}
                  />
                )}
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiInputFields;
