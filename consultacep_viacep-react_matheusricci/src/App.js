import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";

function App() {

  const [dados, setDados] = useState([]);

  const url = "https://viacep.com.br/ws/01001000/json/"

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setDados(data);
    };
    fetchData();
  }, [url]);


  return (
    <div className="box">
      <div className="inputs">
        <p>{dados.logradouro}</p>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "80ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="CEP" variant="outlined" />
        </Box>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "80ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="CEP" variant="outlined" />
        </Box>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "80ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="CEP" variant="outlined" />
        </Box>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "80ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="CEP" variant="outlined" />
        </Box>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "80ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="CEP" variant="outlined" />
        </Box>
      </div>
    </div>
  );
}

export default App;
