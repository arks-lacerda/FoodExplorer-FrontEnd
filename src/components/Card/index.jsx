import {
  Container,
  Like,
  Edit,
  ImageProduct,
  Title,
  Description,
  Price,
} from './style';
import HeartIcon from '../../assets/heart.svg';
import LikedIcon from '../../assets/isFavorite.svg';
import EditIcon from '../../assets/pencil.svg';
import CaretRightIcon from '../../assets/caretRight.svg';
import { Button } from '../Button';
import { Amount } from '../Amount';
import { useAuth } from '../../hooks/auth';
import { useState, useEffect } from 'react';

export function Card({
  id,
  title,
  description,
  price,
  onClick,
  src,
  to,
  ...rest
}) {
  const [value, setValue] = useState(1);
  const [liked, setLiked] = useState(false);
  const { user } = useAuth();
  const isAdmin = user.isAdmin;

  const handleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);

    if (newLiked) {
      localStorage.setItem(`liked_${id}`, 'true');
    } else {
      localStorage.removeItem(`liked_${id}`);
    }
  };

  useEffect(() => {
    const isLiked = localStorage.getItem(`liked_${id}`);
    if (isLiked) {
      setLiked(true);
    }
  }, [id]);

  return (
    <Container {...rest} id={id}>
      {!isAdmin ? (
        <Like onClick={handleLike}>
          <img
            src={liked ? LikedIcon : HeartIcon}
            alt="Image to favorite the product"
          />
        </Like>
      ) : (
        <Edit onClick={onClick}>
          <img src={EditIcon} alt="Icon to edit the product" />
        </Edit>
      )}

      <ImageProduct isAdmin={isAdmin}>
        <img src={src} alt={`Product image ${title}`} />
      </ImageProduct>

      <Title to={to}>
        {title} <img src={CaretRightIcon} alt="Arrow pointing right" />
      </Title>

      <Description>{description}</Description>

      <Price>
        R${' '}
        <span>
          {' '}
          {(price * value).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}{' '}
        </span>
      </Price>

      <div className="Buttons">
        {!isAdmin && <Amount value={value} setValue={setValue} />}

        {!isAdmin && (
          <Button
            type={'submit'}
            title={'Incluir'}
            className={'Include btnInclude'}
          />
        )}
      </div>
    </Container>
  );
}
