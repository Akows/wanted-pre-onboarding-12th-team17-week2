import { Routes, Route } from 'react-router-dom';
import { IssueItemPage } from './pages/IssueItemPage';
import MainPage from './pages/MainPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={MainPage} />
      <Route path="/issueitem/:issueNumber" element={<IssueItemPage />} />
    </Routes>
  );
};

export default AppRoutes;
