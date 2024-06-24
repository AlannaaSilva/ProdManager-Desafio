import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';

export const ProductForm = () => {

  const [formData, setFormData] = useState({
    name:"",
    description:"",
    price:"",
    available: true,
  });

    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData({
        ...formData,
        [id]: value
      });
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    console.log(formData)
    axios.post('http://localhost:8000/products', formData)
          
    navigate('/');
  };
 

  return (
    <>
    <h1> Cadastro de produtos</h1>
    <form>
      <div>
        <label>Nome do produto:</label>
        <input id='name' type="text" onChange={handleChange} />
      </div>
      <div>
        <label>Descrição do produto:</label>
        <input id= "description" type="text" onChange={handleChange}/>
      </div>
      <div>
        <label>Valor do produto:</label>
        <input id= "price" type="number" onChange={handleChange}/>
      </div>
      <div>
        <label>Disponível para venda:</label>
        <select id='available' value={formData.available} onChange={handleChange}>
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </select>
      </div>
      <button onClick={ handleSubmit} type="submit">Cadastrar Produto</button>
    </form>
    </>
  );
}

