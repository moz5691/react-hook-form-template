import Select from "react-select";
import { useFormContext, Controller } from "react-hook-form";
import { InputLabel, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
  },
  inputLabel: {
    marginBottom: 5,
  },
});

function SelectInput(props) {
  const classes = useStyles();
  const { control } = useFormContext();
  const { label, name, options } = props;

  return (
    <div className={classes.field}>
      <InputLabel className={classes.inputLabel}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          // https://react-select.com/styles#cx-and-custom-components  overriding the theme
          <Select
            {...field}
            options={options}
            defaultValue={""}
            theme={(theme) => ({
              ...theme,
              borderRadius: 3,
              colors: {
                ...theme.colors,
                primary25: "hotpink",
                primary: "purple",
              },
            })}
          />
        )}
      />
    </div>
  );
}
export default SelectInput;
