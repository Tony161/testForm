import React from "react";

// import { sizing } from "@material-ui/system";
import {
  // Container,
  Box,
  // Grid,
  // Modal,
  Input,
  Button,
  // TextField,
  Dialog,
  DialogActions,
  DialogContent,
  // DialogContentText,
  DialogTitle,
  Checkbox,
  Select,
  MenuItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "block",
    flexWrap: "nowrap"
  }
}));

export default function Form(data) {
  const [open, setOpen] = React.useState(false);

  // const [selector, setSelector] = React.useState('');

  const [state, setState] = React.useState({
    name: "",
    comment: "",
    deadZone: "",
    default: false,
    command: false,
    archive: false,
    type: "bit"
  });

  const handleChange = name => event => {
    console.log("handleChange", name, event.target.checked);
    setState({ ...state, [name]: event.target.checked });
  };

  const handleSelect = name => event => {
    console.log("handleChange", name, event.target.value);
    setState({ ...state, [name]: event.target.value });
  };

  function showNumberParam() {
    return (
      <div style={{ width: "100%" }}>
        <Box display="flex" height={"34px"} style={{ alignItems: "center" }}>
          <label style={{ width: "270px" }}>Начальное значение:</label>
          <Input
            fullWidth
            defaultValue=""
            className={classes.input}
            onChange={handleSelect("default")}
            inputProps={{
              "aria-label": "description"
            }}
          />
        </Box>
        <Box
          component="span"
          display="flex"
          w={1}
          height={"34px"}
          style={{ alignItems: "center" }}
        >
          <label style={{ width: "270px" }}>Мертвая зона:</label>
          <Input
            fullWidth
            defaultValue=""
            className={classes.input}
            onChange={handleSelect("deadZone")}
            inputProps={{
              "aria-label": "description"
            }}
          />
        </Box>
      </div>
    );
  }

  function showStringParam() {
    return (
      <div style={{ width: "100%" }}>
        <Box display="flex" height={"34px"} style={{ alignItems: "center" }}>
          <label style={{ width: "270px" }}>Начальное значение:</label>
          <Input
            fullWidth
            defaultValue=""
            className={classes.input}
            onChange={handleSelect("default")}
            inputProps={{
              "aria-label": "description"
            }}
          />
        </Box>
      </div>
    );
  }

  function showBitParam() {
    return (
      <div style={{ width: "100%" }}>
        <Box
              display="flex"
              height={"34px"}
              style={{ alignItems: "center" }}
            >
              <label style={{ width: "170px" }}>Начальное значение:</label>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleSelect("default")}
                defaultValue={state.default}
                style={{ width: "100px" }}
              >
                <MenuItem value={"true"}>true</MenuItem>
                <MenuItem value={"false"}>false</MenuItem>
              </Select>
            </Box>

      </div>
    );
  }

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    console.log(state);
    data.data.cbResult();
    //setState({ ...state, [name]: event.target.value });
   // setOpen(false);
  };
  console.log("data",data)
  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog
        open={data.data.show} //{open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Form</DialogTitle>
        <DialogContent>
          <div className={classes.container} style={{ width: "100%" }}>
            <Box
              component="span"
              display="flex"
              w={1}
              height={"34px"}
              style={{ alignItems: "center" }}
            >
              <label style={{ width: "270px" }}>Имя переменной:</label>
              <Input
                fullWidth
                defaultValue=""
                className={classes.input}
                onChange={handleSelect("name")}
                inputProps={{
                  "aria-label": "description"
                }}
              />
            </Box>
            <Box
              display="flex"
              height={"34px"}
              style={{ alignItems: "center" }}
            >
              <label style={{ width: "170px" }}>Тип</label>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleSelect("type")}
                defaultValue={state.type}
              >
                <MenuItem value={"bit"}>Бит</MenuItem>
                <MenuItem value={"number"}>Число</MenuItem>
                <MenuItem value={"string"}>Строка</MenuItem>
              </Select>
            </Box>
            
            {state.type === "bit" && showBitParam()}
            {state.type === "number" && showNumberParam()}
            {state.type === "string" && showStringParam()}

            <Box
              component="span"
              display="flex"
              w={1}
              height={"34px"}
              style={{ alignItems: "center" }}
            >
              <label style={{ width: "170px" }}>Команда:</label>
              <Checkbox
                checked={state.command}
                onChange={handleChange("command")}
                value="command"
                inputProps={{
                  "aria-label": "primary checkbox"
                }}
              />
            </Box>
            <Box
              component="span"
              display="flex"
              w={1}
              height={"34px"}
              style={{ alignItems: "center" }}
            >
              <label style={{ width: "170px" }}>Архив</label>
              <Checkbox
                checked={state.archive}
                onChange={handleChange("archive")}
                value="archive"
                inputProps={{
                  "aria-label": "primary checkbox"
                }}
              />
            </Box>
            <Box
              component="span"
              display="flex"
              w={1}
              height={"34px"}
              style={{ alignItems: "center" }}
            >
              <label style={{ width: "270px" }}>Комментарий:</label>
              <Input
                fullWidth
                defaultValue=""
                className={classes.input}
                onChange={handleSelect("comment")}
                inputProps={{
                  "aria-label": "description"
                }}
              />
            </Box>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отмена
          </Button>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}




