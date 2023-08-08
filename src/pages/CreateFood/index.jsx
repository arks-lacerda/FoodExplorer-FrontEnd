import { Container, CreateProductForm } from './style';
import { Header } from '../../components/Header';
import { Back } from '../../components/Back';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputValue } from '../../components/InputValue';
import { IngredientsItem } from '../../components/IngredientsItem';
import UploadIcon from '../../assets/upload.svg';
import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export function CreateFood() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const isAdmin = user.isAdmin;

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState('');
  const [price, setPrice] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [description, setDescription] = useState('');
  const [imageProductFilename, setImageProductFilename] = useState('');

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

  const handleCreateNewProduct = async (e) => {
    e.preventDefault();

    if (newIngredient) {
      return alert(
        'You have an ingredient not added, click + to add or leave the field empty'
      );
    }

    if (!image) {
      return alert('You must add an image');
    }

    if (!title || !categories || !price || !description) {
      return alert('You must fill all fields');
    }

    const valueNumber = price.replace(/[^0-9]/g, '');
    const valueSent = (parseInt(valueNumber) / 100).toFixed(2);

    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', valueSent);
    formData.append('categories', categories);
    formData.append('ingredients', ingredients);

    await api.post('/products/create', formData);

    alert('Product created successfully');
    navigate('/');
  };

  return (
    <Container>
      <Header isAdmin={isAdmin} />
      <Back />
      <h1>Add dish</h1>

      <CreateProductForm enctype={'multipart/form-data'}>
        <div className="row">
          <div className="column">
            <label htmlFor="file-upload">Image of the dish</label>
            <label htmlFor="file-upload" className="custom-file-upload">
              <i className="fas fa-cloud-upload-alt">
                <img src={UploadIcon} alt="Icon for uploading images" />
              </i>
              {imageProductFilename ? imageProductFilename : 'Choose a file'}
            </label>
            <input
              name={'imageProductFilename'}
              id={'file-upload'}
              type={'file'}
              accept="image/*"
              onChange={handleImageAdd}
            />
          </div>

          <div className="column">
            <label htmlFor="name-product" className="label">
              Name
            </label>
            <Input
              type={'text'}
              placeholder={'Ex.: American salad'}
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
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
            >
              <optgroup>
                <option value="disabled">Select</option>
                <option value="Meals">Meals</option>
                <option value="Dessert">Dessert</option>
                <option value="Drinks">Drinks</option>
              </optgroup>
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

              {ingredients.map((ingredient, index) => (
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
              placeholder={'R$ 00,00'}
              id={'price-product'}
              onChange={handleChangeInputValue}
            />
          </div>
        </div>
        <label htmlFor="description-product" className="label">
          Description
        </label>
        <textarea
          name={'description-product'}
          id={'description-product'}
          placeholder={
            'Briefly talk about the dish, its ingredients and composition.'
          }
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <div className="button">
          <Button
            type={'submit'}
            title={'Save dish'}
            id={'create'}
            className={'save'}
            onClick={handleCreateNewProduct}
          />
        </div>
      </CreateProductForm>

      <Footer />
    </Container>
  );
}
