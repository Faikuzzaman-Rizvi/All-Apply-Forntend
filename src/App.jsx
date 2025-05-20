import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import LoadingSpinner from './components/ui/LoadingSpinner'
import ErrorPage from './pages/ErrorPage'
import Layout from './components/layout/Layout'

// Lazy-loaded pages
const HomePage = lazy(() => import('./pages/HomePage'))
const TrackingPage = lazy(() => import('./pages/TrackingPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

function App() {
  return (
    <>
      {/* Global UI Elements */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#fff',
            color: '#333',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
            padding: '16px',
          },
        }}
      />

      {/* Main Application Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Suspense
                fallback={
                  <div className="grid min-h-[80vh] place-items-center">
                    <LoadingSpinner size="lg" />
                  </div>
                }
              >
                <HomePage />
              </Suspense>
            </Layout>
          }
        />
        
        
        
        <Route
          path="/track"
          element={
            <Layout>
              <Suspense fallback={<LoadingSpinner />}>
                <TrackingPage />
              </Suspense>
            </Layout>
          }
        />
        
        <Route
          path="/contact"
          element={
            <Layout>
              <Suspense fallback={<LoadingSpinner />}>
                <ContactPage />
              </Suspense>
            </Layout>
          }
        />
        
        {/* 404 Route */}
        <Route
          path="*"
          element={
            <Layout>
              <ErrorPage
                statusCode={404}
                title="Page Not Found"
                message="The page you're looking for doesn't exist"
              />
            </Layout>
          }
        />
      </Routes>
    </>
  )
}

export default App