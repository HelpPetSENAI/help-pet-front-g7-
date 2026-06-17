import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ComingSoonPage from './pages/CommingSoonPage'
import NotFoundPage from './pages/NotFoundPage.jsx'
import GlobalStyle from './styles/GlobalStyle.js'
import ExamplePage from './pages/ExamplePage.jsx'
import MessagePageG6 from './pages/page-g6/MessagePageG6.jsx'
import MessagePageG7 from './pages/page-g7/NotificationsPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ComingSoonPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/coming-soon',
    element: <ComingSoonPage />
  },
  {
    path: '/example',
    element: <ExamplePage />
  },
  {
    path: '/message',
    element: <MessagePageG6 />
  },
  {
    path: '/notification',
    element: <MessagePageG7 />
  }
])

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  )
}
