import { useFormContext, Controller } from "react-hook-form";
import {
  InputLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

function RadioButtonInput(props) {
  const classes = useStyles();
  const { control } = useFormContext();
  const { label, name, options, defaultValue } = props;

  return (
    <div className={classes.field}>
      <InputLabel>{label}</InputLabel>
      <Controller
        rules={{ required: true }}
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { name, onBlur, onChange, value } }) => (
          <RadioGroup
            row
            value={value}
            onBlur={onBlur}
            onChange={(e) => {
              onChange(e);
              console.log(e.target.value); // will be called this time
            }}
          >
            <>
              {options.map((option) => (
                <div key={option.label}>
                  <FormControlLabel
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                  />
                </div>
              ))}
            </>
          </RadioGroup>
        )}
      />
    </div>
  );
}
export default RadioButtonInput;
