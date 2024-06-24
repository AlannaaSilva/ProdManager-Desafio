import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export const ProductList = () => {
  const [productList, setProductList] = useState([]);

  const navigate = useNavigate();

  const handleAddProduct = () => {
      navigate('/ProductForm');
    };
    
    function fetchData(){
      axios.get('http://localhost:8000/products')
      .then(function (response) {
        // manipula o sucesso da requisição
        const sortedProducts = response.data.sort((a, b) => a.price - b.price);
        setProductList(sortedProducts);
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
      })
    }
    useEffect(()=>{
      fetchData()
    },[])
  
  return (
    <div>
        <h1> Listagem de produtos</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody >
          {productList.map((product, index)=>{
           return(
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
          </tr>
           )
          })}
          
        </tbody>
      </table>
       <button onClick={handleAddProduct}>Cadastrar Novo Produto</button>
    </div>
  );  
};
  