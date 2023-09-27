import Main from './pages/Main/Main';

const routes = [
    {
      path: '/',
      page: Main,
    },
    {
      path: '/:random_string/:unique_id',
      page: Main,
    }
]
  
export default routes;