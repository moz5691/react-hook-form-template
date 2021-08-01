import { useFormContext, Controller } from "react-hook-form";
import { InputLabel, FormControlLabel, Checkbox } from "@material-ui/core";

function CheckBoxInput(props) {
  const { control } = useFormContext();
  const { label, name, defaultValue } = props;

  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || false}
        render={({ field: { name, onChange, value } }) => (
          <FormControlLabel
            control={<Checkbox checked={value} onChange={onChange} />}
            label={label}
            style={{ marginRight: 40 }}
          />
        )}
      />
    </div>
  );
}
export default CheckBoxInput;
