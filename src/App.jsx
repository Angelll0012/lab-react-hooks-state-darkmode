
import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {

  // State for dark mode
  const [darkMode, setDarkMode] = useState(false)

  // State for cart
  const [cart, setCart] = useState([])

  // State for category filtering
  const [category, setCategory] = useState('all')

  // Toggle dark mode
  function toggleDarkMode() {
    setDarkMode(!darkMode)
  }

  // Add items to cart
  function addToCart(item) {
    setCart([...cart, item])
  }

  return (
    <div style={{
      backgroundColor: darkMode ? '#222' : '#fff',
      color: darkMode ? '#fff' : '#222',
      minHeight: '100vh',
      padding: '20px'
    }}>

      <h1>Shopping App</h1>

      
      {/* Dark mode toggle */}
      <DarkModeToggle
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Category filter */}
      <label>Filter by Category: </label>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Product list */}
      <ProductList
        category={category}
        addToCart={addToCart}
      />

      {/* Cart */}
      <Cart cart={cart} />

    </div>
  )
}

export default App
