import { useFormContext, Controller } from "react-hook-form";
import { TextField, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
  },
  inputLabel: {
    marginBottom: 5,
  },
});

function FormInput(props) {
  const classes = useStyles();

  const { control } = useFormContext();

  const { label, name, defaultValue } = props;

  return (
    <div className={classes.field}>
      <InputLabel className={classes.inputLabel}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || ""}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            // label={label}
            variant="outlined"
            color="secondary"
            value={value}
            onChange={onChange}
            error={!!error}
            fullWidth
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: `${label} is required` }}
      />
    </div>
  );
}

export default FormInput;
