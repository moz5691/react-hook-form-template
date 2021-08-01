import { useForm, FormProvider } from "react-hook-form";
import {
  Button,
  Container,
  createTheme,
  MuiThemeProvider,
  makeStyles,
} from "@material-ui/core";
import FormInput from "./react-hook-forms/controls/input";
import SelectInput from "./react-hook-forms/controls/select";
import RadioButtonInput from "./react-hook-forms/controls/radio";
import CheckBoxInput from "./react-hook-forms/controls/checkbox";
import { purple } from "@material-ui/core/colors";
import { Typography } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

const useStyles = makeStyles({
  checkboxItem: {
    display: "flex",
    flexGrow: 0,
  },

  buttonGroup: {
    display: "flex",
    flexGrow: 0,
  },

  buttonItem: {
    marginLeft: 30,
    marginRight: 30,
    flexGrow: 1,
  },
});

const selectOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const radioOptions = [
  {
    value: "orange",
    label: "Orange",
  },
  { value: "grape", label: "Grape" },
  { value: "apple", label: "Apple" },
];

function App() {
  const classes = useStyles();
  const methods = useForm();
  const { handleSubmit, reset } = methods;
  const onSubmit = (data) => {
    console.log("data is", data);
    formReset();
  };

  const formReset = () => {
    reset({
      firstName: "",
      icecream: { value: "", label: "" },
      fruits: "",
      checkbox1: false,
      checkbox2: false,
    });
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Container size={"sm"}>
        <Typography
          variant="h6"
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          React Hook Form Template
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput label={"First Name"} name={"firstName"} />
            <SelectInput
              label={"Icecream"}
              name={"icecream"}
              options={selectOptions}
            />
            <RadioButtonInput
              label={"Fruits"}
              name={"fruits"}
              options={radioOptions}
              defaultValue={"orange"}
            />
            <div className={classes.checkboxItem}>
              <CheckBoxInput
                label="CheckBox1"
                name="checkbox1"
                defaultValue={false}
                className={classes.checkboxItem}
              />
              <CheckBoxInput
                label="CheckBox2"
                name="checkbox2"
                defualtValue={false}
                className={classes.checkboxItem}
              />
            </div>

            <div className={classes.buttonGroup}>
              <Button
                className={classes.buttonItem}
                color={"secondary"}
                type={"input"}
                variant={"contained"}
                endIcon={<KeyboardArrowRightIcon />}
                style={{ display: "flex", flexGrow: 1 }}
              >
                Submit
              </Button>

              <Button
                className={classes.buttonItem}
                color="primary"
                variant={"contained"}
                style={{ display: "flex", flexGrow: 1 }}
                onClick={formReset}
              >
                Clear
              </Button>
            </div>
          </form>
        </FormProvider>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
