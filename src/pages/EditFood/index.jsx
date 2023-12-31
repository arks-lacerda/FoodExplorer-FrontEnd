import { Container, CreateProductForm } from './style';
import { Header } from '../../components/Header';
import { Back } from '../../components/Back';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputValue } from '../../components/InputValue';
import { IngredientsItem } from '../../components/IngredientsItem';
import UploadIcon from '../../assets/upload.svg';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';

export function EditFood() {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState('');
  const [price, setPrice] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState([]);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imageProductFilename, setImageProductFilename] = useState('');

  const params = useParams();
  const navigate = useNavigate();

  const handleImageAdd = (e) => {
    const filename = e.target.files[0];
    setImage(filename);
    setImageProductFilename(filename.name);
  };

  const handleAddIngredient = () => {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient('');
  };

  const handleRemoveIngredient = (deleted) => {
    setIngredients((prevState) =>
      prevState.filter((ingredients) => ingredients !== deleted)
    );
  };

  const formatValue = (productValue) => {
    const valueNumber = productValue.replace(/[^0-9]/g, '');
    const decimalNumber = valueNumber.slice(-2);
    const wholeNumber = valueNumber.slice(0, -2);

    const formattedNumber = `R$ ${wholeNumber},${decimalNumber}`;

    return formattedNumber;
  };

  const handleChangeInputValue = (e) => {
    const newValue = e.target.value;
    const valueFormatted = formatValue(newValue);

    setPrice(valueFormatted);
  };

  const handleEditProduct = async (e) => {
    e.preventDefault();

    if (newIngredient.length > 1) {
      return alert(
        'You have an ingredient not added, click + to add or leave the field empty'
      );
    }

    if (!title || !categories || !price || !description) {
      return alert('Fill in all fields!');
    }

    const valueNumber = price.replace(/[^0-9]/g, '');
    const valueSent = (parseFloat(valueNumber) / 100).toFixed(2);

    console.log(valueSent);

    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', valueSent);
    formData.append('categories', categories);
    formData.append('ingredients', ingredients);

    await api.put(`/products/edit/${params.id}`, formData);

    alert('Product edited successfully');
    navigate('/');
  };

  const handleDeleteProduct = async () => {
    const confirmDeleteProduct = window.confirm(
      'Do you really want to delete the product?'
    );

    if (confirmDeleteProduct) {
      await api.delete(`/products/${params.id}`);
      navigate('/');
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await api.get(`/products/${params.id}`);

      setData(response.data);
      setIngredients(response.data.convertIngredients);
      console.log(response);
    };

    fetchProduct();
  }, []);

  return (
    <Container>
      <Header />
      {data && (
        <>
          <Back />
          <h1>Edit dish</h1>

          <CreateProductForm
            enctype={'multipart/form-data'}
            onSubmit={handleEditProduct}
          >
            <div className="row">
              <div className="column">
                <label htmlFor="file-upload">Imagem of the dish</label>

                <label htmlFor="file-upload" className="custom-file-upload">
                  <i className="fas fa-cloud-upload-alt">
                    <img src={UploadIcon} alt="Icon for uploading images" />
                  </i>
                  {imageProductFilename
                    ? imageProductFilename
                    : 'Add image to change it'}
                </label>

                <input
                  name={'imageProductFilename'}
                  id={'file-upload'}
                  type={'file'}
                  accept={'image/*'}
                  onChange={handleImageAdd}
                />
              </div>

              <div className="column">
                <label htmlFor="name-product" className="label">
                  Name
                </label>
                <Input
                  type={'text'}
                  placeholder={data.product.title}
                  id={'name-product'}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="column">
                <label htmlFor="category-product" className="label">
                  Category
                </label>
                <select
                  name="category-product"
                  id="category-product"
                  onChange={(e) => setCategories(e.target.value)}
                >
                  <option value="disabled">Select</option>
                  <option value="Meals">Meals</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Drinks">Drinks</option>
                </select>
              </div>
            </div>

            <div className="row row-grid">
              <div className="column">
                <label htmlFor="ingredients-product" className="label">
                  Ingredients
                </label>

                <div className="Ingredients">
                  <IngredientsItem
                    isNew
                    placeholder={'Add'}
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                    onClick={handleAddIngredient}
                  />

                  {ingredients &&
                    ingredients.map((ingredient, index) => (
                      <IngredientsItem
                        key={String(index)}
                        value={ingredient}
                        onClick={() => handleRemoveIngredient(ingredient)}
                      />
                    ))}
                </div>
              </div>

              <div className="column price">
                <label htmlFor="price-product" className="label">
                  Price
                </label>
                <InputValue
                  placeholder={`R$ ${data.product.price}`}
                  id={'price-product'}
                  onChange={handleChangeInputValue}
                />
              </div>
            </div>

            <label htmlFor="description-product" className="label">
              Description
            </label>
            <textarea
              name="description-product"
              id="description-product"
              placeholder={data.product.description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <div className="buttons">
              <Button
                type={'button'}
                title={'Delete dish'}
                className={'delete'}
                onClick={handleDeleteProduct}
              />

              <Button
                type={'submit'}
                title={'Save editions'}
                id={'create'}
                className={'save'}
              />
            </div>
          </CreateProductForm>

          <Footer />
        </>
      )}
    </Container>
  );
}
