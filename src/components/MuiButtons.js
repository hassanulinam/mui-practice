import { useState } from "react";
import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MuiButtons = () => {
  const [formats1, setFormats1] = useState([]);
  const [formats2, setFormats2] = useState(null);

  const handleFormat1Change = (event, updatedFormats) => {
    console.log("formats1", updatedFormats);
    setFormats1(updatedFormats);
  };
  const handleFormat2Change = (event, updatedFormats) => {
    console.log("format2: ", updatedFormats);
    setFormats2(updatedFormats);
  };
  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
        </Stack>

        <Stack display="block" spacing={2} direction="row">
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </Stack>

        <Stack spacing={2} direction="row" display="block">
          <Button variant="contained" startIcon={<SendIcon />} disableRipple>
            send
          </Button>
          <Button
            variant="contained"
            endIcon={<SendIcon color="warning" />}
            disableElevation
            color="success"
          >
            send
          </Button>
          <IconButton
            aria-label="send"
            color="success"
            size="large"
            onClick={() => alert("Clicked send Button")}
          >
            <SendIcon />
          </IconButton>
        </Stack>

        <Stack direction="row" display="block" spacing={2}>
          <ButtonGroup
            variant="contained"
            size="small"
            aria-label="alignment button group"
          >
            <Button>Left</Button>
            <Button
              onClick={() => alert("Center button clicked from btn-group")}
            >
              Center
            </Button>
            <Button>Right</Button>
          </ButtonGroup>

          <ButtonGroup
            variant="contained"
            size="small"
            color="secondary"
            aria-label="alignment button group"
            orientation="vertical"
            disableElevation
            disableRipple
          >
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>

        <Stack spacing={2} direction="row" display="block">
          <ToggleButtonGroup
            aria-label="text-formatting"
            value={formats1}
            onChange={handleFormat1Change}
            size="small"
            color="success"
            orientation="vertical"
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>

          <ToggleButtonGroup
            aria-label="text-formatting"
            value={formats2}
            onChange={handleFormat2Change}
            size="small"
            color="success"
            exclusive
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </>
  );
};

export default MuiButtons;
