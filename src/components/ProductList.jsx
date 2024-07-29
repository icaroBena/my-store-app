import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/ProductList.css'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Dados estáticos de produtos
    const staticProducts = [
      {
        id: 1,
        name: "Adubo Orgânico",
        description: "Adubo de alta qualidade para preparação do solo",
        category: "preparacao-do-solo"
      },
      {
        id: 2,
        name: "Enxada",
        description: "Ferramenta essencial para preparação do solo",
        category: "preparacao-do-solo"
      },
      {
        id: 3,
        name: "Sementes de Árvores",
        description: "Sementes para plantação de árvores variadas",
        category: "plantacao-de-arvores"
      },
      {
        id: 4,
        name: "Regador",
        description: "Regador para manutenção de grama e plantas",
        category: "manutencao-de-grama"
      }
    ];

    // Simular requisição API definindo os dados estáticos
    setProducts(staticProducts);
  }, []);

  return (
    <div className="product-list">
      <h2>Lista de Produtos</h2>
      <div className="cards">
        {products.map(product => (
          <div className="card" key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Categoria: {product.category}</p>
          </div>
        ))}
      </div>
      <Link to="/" className="back-button">
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default ProductList;
