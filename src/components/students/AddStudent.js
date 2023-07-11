import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Paper, Button } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addStudent } from "../../redux/features/studentSlice";
import { useHistory } from "react-router-dom";

const AddStudent = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { handleSubmit, control, reset, register } = useForm({
    defaultValues: {
      id: uuidv4(),
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
    },
  });
  const onSubmit = (data) => {
    dispatch(addStudent(data));
    reset({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
    });
    history.push("/");
  };
  return (
    <div>
      <h1>Register Student :</h1>
      <Paper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            inputProps={{ type: "hidden" }}
            margin="normal"
            {...register("id")}
          />

          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <TextField
                id="first-name"
                label="First Name"
                variant="outlined"
                placeholder="Enter Your First Name"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <TextField
                id="last-name"
                label="Last Name"
                variant="outlined"
                placeholder="Enter Your Last Name"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                placeholder="Enter Your E-mail Address"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                placeholder="Enter Your Address"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <TextField
                id="phone-number"
                label="Phone Number"
                variant="outlined"
                placeholder="Enter Your Phone Number"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Button variant="contained" type="submit" style={{background:"blue", color:"white"}}>Submit</Button>

        </form>
      </Paper>
    </div>
  );
};

export default AddStudent;
