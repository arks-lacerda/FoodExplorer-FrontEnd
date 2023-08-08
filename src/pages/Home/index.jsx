import { Container, Banner, Section } from './style';
import ImageBanner from '../../assets/image-banner.png';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Carousel } from '../../components/Carousel';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const [search, setSearch] = useState('');
  const [meals, setMeals] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const navigate = useNavigate();

  const handleEditProduct = (id) => {
    navigate(`edit/${id}`);
  };

  useEffect(() => {
    const fetchProductsSearch = async () => {
      const response = await api.get(`/products/search/?title=${search}`);

      setMeals(
        response.data.filter((product) => product.categories === 'Meals')
      );
      setDesserts(
        response.data.filter((product) => product.categories === 'Dessert')
      );
      setDrinks(
        response.data.filter((product) => product.categories === 'Drinks')
      );
    };

    fetchProductsSearch();
  }, [search, meals, desserts, drinks]);

  return (
    <Container>
      <Header onChange={(e) => setSearch(e.target.value)} />

      <Banner>
        <img src={ImageBanner} alt="Imagem de brownies ilustrativa do banner" />
        <div className="Texting">
          <h1>Unparalleled flavors</h1>
          <p>Feel the care of the preparation with selected ingredients.</p>
        </div>
      </Banner>

      <Section>
        <h1>Meals</h1>

        <Carousel>
          {meals &&
            meals.map((product, index) => (
              <Card
                key={index}
                id={product.id}
                value={product.price}
                src={`${api.defaults.baseURL}/files/${product.image}`}
                title={product.title}
                to={`/product-info/${product.id}`}
                description={product.description}
                price={product.price}
                onClick={() => handleEditProduct(product.id)}
              />
            ))}
        </Carousel>
      </Section>

      <Section>
        <h1>Desserts</h1>

        <Carousel>
          {desserts &&
            desserts.map((product, index) => (
              <Card
                key={index}
                id={product.id}
                src={`${api.defaults.baseURL}/files/${product.image}`}
                title={product.title}
                to={`/product-info/${product.id}`}
                description={product.description}
                price={product.price}
                onClick={() => handleEditProduct(product.id)}
              />
            ))}
        </Carousel>
      </Section>

      <Section>
        <h1>Drinks</h1>

        <Carousel>
          {drinks &&
            drinks.map((product, index) => (
              <Card
                key={index}
                id={product.id}
                src={`${api.defaults.baseURL}/files/${product.image}`}
                title={product.title}
                to={`/product-info/${product.id}`}
                description={product.description}
                price={product.price}
                onClick={() => handleEditProduct(product.id)}
              />
            ))}
        </Carousel>
      </Section>

      <Footer />
    </Container>
  );
}
