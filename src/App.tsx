import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartProvider } from './contexts/CartContext'

import { Router } from './Router'

import { ToastContainer } from 'react-toastify'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import 'react-toastify/dist/ReactToastify.min.css'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <Router />
        </CartProvider>
      </BrowserRouter>

      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </ThemeProvider>
  )
}
