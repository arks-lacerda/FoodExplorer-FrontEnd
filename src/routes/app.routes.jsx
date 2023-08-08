import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Menu } from '../pages/Menu';
import { FoodInfo } from '../pages/FoodInfo';
import { EditFood } from '../pages/EditFood';
import { CreateFood } from '../pages/CreateFood';
import { useAuth } from '../hooks/auth';

export const AppRoutes = () => {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/product-info/:id" element={<FoodInfo />} />

      {user.isAdmin ? (
        <Route path="/create" element={<CreateFood />} />
      ) : (
        <Route path="/" element={<Home />} />
      )}
      {user.isAdmin ? (
        <Route path="/edit/:id" element={<EditFood />} />
      ) : (
        <Route path="/" element={<Home />} />
      )}
    </Routes>
  );
};
