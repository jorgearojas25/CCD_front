import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Layout from "../../components/Layout";
import useField from "../../hooks/useField";
import { useDispatch, useSelector } from "react-redux";
import { reloadUser, signup } from "../../store/reducers/UserReducer";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registered = useSelector((store) => store.User.userCreated);

  const document = useField();
  const password = useField();
  const name = useField();
  const payor = useField();

  const handleRegister = () => {
    dispatch(
      signup({
        document: document.value,
        password: password.value,
        name: name.value,
        payor: payor.value,
      })
    );
  };

  React.useEffect(() => {
    if (registered) {
      dispatch(reloadUser());
      document.setValue("");
      password.setValue("");
      name.setValue("");
      payor.setValue("");
      navigate("/login", { replace: true });
    }
  }, [registered, dispatch]);

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "95vh",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            minWidth: 275,
            padding: "20px 0 ",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexFlow: "column",
            }}
          >
            <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
              Registrate!
            </Typography>
            <TextField
              margin="normal"
              id="nombre-field"
              label="nombre"
              value={name.value}
              onChange={name.onChange}
            />
            <TextField
              margin="normal"
              id="documento-field"
              label="documento"
              value={document.value}
              onChange={document.onChange}
            />
            <TextField
              margin="normal"
              id="password-field"
              label="password"
              value={password.value}
              onChange={password.onChange}
              type="password"
            />
            <TextField
              margin="normal"
              id="cuenta-field"
              label="cuenta de cobro"
              value={payor.value}
              onChange={payor.onChange}
            />
          </CardContent>
          <CardActions
            style={{
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Button variant="contained">Log in</Button>
            <Button variant="contained" onClick={handleRegister}>
              Sign Up
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Layout>
  );
};

export default Signup;
