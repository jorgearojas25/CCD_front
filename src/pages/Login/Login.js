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
import { login } from "../../store/reducers/UserReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store.User.user);

  const navigate = useNavigate();

  const document = useField();
  const password = useField();

  const handleLogin = () => {
    dispatch(login({ document: document.value, password: password.value }));
  };

  React.useEffect(() => {
    console.log(userInfo);
    if (userInfo?.id_usuario || userInfo?.id_restaurante) {
      navigate("/dashboard", { replace: true });
    }
  }, [userInfo, navigate]);

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
              Bienvenido!
            </Typography>
            <TextField
              margin="normal"
              id="login-field"
              label="documento"
              value={document.value}
              onChange={document.onChange}
            />
            <TextField
              id="password-field"
              label="password"
              value={password.value}
              onChange={password.onChange}
              type="password"
            />
          </CardContent>
          <CardActions
            style={{
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" onClick={handleLogin}>
              Log in
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Layout>
  );
};

export default Login;
