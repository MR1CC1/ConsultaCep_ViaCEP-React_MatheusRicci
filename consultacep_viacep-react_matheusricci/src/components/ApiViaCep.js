import React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

const ApiViaCep = () => {
  const [dados, setDados] = useState([]);
  const [valorInput, setValorInput] = useState("24020002");
  const [inputUrl, setInputUrl] = useState();
  const [error, setError] = useState(null);

  const url = `https://viacep.com.br/ws/${valorInput}/json/`;

  const handleChange = (e) => {
    setValorInput(e.target.value);
    setInputUrl(e.target.value);
    console.log(inputUrl);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setDados(data);
      } catch {
        setError("Dados Não Encontrados!");
      }
    };
    fetchData();
  }, [url]);

  return (
    <div>
      <p>
        <TextField
          color="success"
          label="CEP"
          focused
          value={valorInput}
          onChange={handleChange}
        />{" "}
      </p>
      <p>
        <TextField
          color="success"
          label="Logradouro"
          focused
          value={dados.logradouro ? dados.logradouro : error}
        />
      </p>
      <p>
        <TextField
          color="success"
          label="Complemento"
          focused
          value={dados.complemento ? dados.complemento : error}
        />
      </p>
      <p>
        <TextField
          color="success"
          label="Bairro"
          focused
          value={dados.bairro ? dados.bairro : error}
        />
      </p>
      <p>
        <TextField
          color="success"
          label="UF"
          focused
          value={dados.uf ? dados.uf : error}
        />
      </p>
      <p>
        <TextField
          color="success"
          label="Ibge"
          focused
          value={dados.ibge ? dados.ibge : error}
        />
      </p>
      <p>
        <TextField
          color="success"
          label="Gia"
          focused
          value={dados.gia ? dados.gia : error}
        />
      </p>
      <p>
        <TextField
          color="success"
          label="DDD"
          focused
          value={dados.ddd ? dados.ddd : error}
        />
      </p>
      <p>
        <TextField
          color="success"
          label="Siafi"
          focused
          value={dados.siafi ? dados.siafi : error}
        />
      </p>
    </div>
  );
};

export default ApiViaCep;
