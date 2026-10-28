# Shopping Cart App (React + Redux Toolkit)

A beginner-friendly shopping cart built to learn how **Redux Toolkit** manages shared state across multiple React components. Users can browse products, add them to a cart, change quantities, remove items, and filter by category.

No backend is required. All product data is stored locally in the frontend.

---

## Features

- Product listing with name, price, category, and image (8 sample products)
- **Add to Cart** button on every product
- Cart with quantity controls (+ / -), quantity never goes below 1
- Remove a single item or clear the entire cart
- Cart summary showing total items and total price
- Live cart count badge in the Navbar
- **Bonus:** category filter that does not affect the cart
- Responsive layout for desktop and mobile (React Bootstrap)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React | UI components |
| Vite | Dev server and build tool |
| Redux Toolkit | Cart state (`createSlice`, `configureStore`) |
| React Redux | Connects Redux to React (`Provider`, `useSelector`, `useDispatch`) |
| React Bootstrap + Bootstrap CSS | Styling and layout |

---

## Prerequisites

Install these before starting:

- **Node.js** version 20 or newer (includes npm). Download from https://nodejs.org
- A code editor such as VS Code

Check your installed versions:

```bash
node -v
npm -v
```

---

## Installation

1. **Open a terminal in the project folder** (the folder that contains `package.json`):

   ```bash
   cd shopping-cart
   ```

2. **Install all dependencies:**

   ```bash
   npm install
   ```

   This reads `package.json` and downloads everything into the `node_modules/` folder.

> **Starting from scratch instead?** Create the project and install the libraries manually:
>
> ```bash
> npm create vite@latest shopping-cart -- --template react
> cd shopping-cart
> npm install
> npm install @reduxjs/toolkit react-redux react-bootstrap bootstrap
> ```

---

## Running the Application

Start the development server:

```bash
npm run dev
```

Vite prints a local address, usually:

```
http://localhost:5173
```

Open it in your browser. The page reloads automatically whenever you save a file.

To stop the server, press `Ctrl + C` in the terminal.

---

## Other Commands

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check code for problems (if ESLint is set up) |

---

## Project Structure

```
src/
├── redux/
│   ├── cartSlice.js      # Cart state + reducers (addToCart, increaseQuantity,
│   │                     #   decreaseQuantity, removeFromCart, clearCart)
│   └── store.js          # configureStore() registers the cart reducer
├── components/
│   ├── ProductList.jsx   # Product grid + category filter (local useState)
│   ├── ProductCard.jsx   # One product card (dispatches addToCart)
│   ├── Cart.jsx          # Cart list + summary (reads state with useSelector)
│   └── CartItem.jsx      # One cart row (quantity buttons, remove)
├── data/
│   └── products.js       # Local sample product data
├── App.jsx               # Navbar + page layout
└── main.jsx              # Entry point: Bootstrap CSS + Redux Provider
```

---

## How It Works

```
ProductCard  --dispatch(addToCart)-->  Store  --useSelector-->  Cart, Navbar
CartItem     --dispatch(+, -, remove)-->  Store  --useSelector-->  Cart, Navbar
```

- **Store:** one central object holding the cart (`state.cart`).
- **Slice:** `cartSlice.js` defines how the cart can change.
- **Dispatch:** components send actions to the store with `useDispatch`.
- **Selector:** components read the cart with `useSelector`, and re-render automatically when it changes.
- **Derived data:** total items and total price are calculated from the cart items, not stored.
- **Category filter:** the selected category lives in local `useState` inside `ProductList`, so it is completely separate from the cart.

---

## Testing Checklist

Run through these in the browser before submitting:

- [ ] 8 products are displayed with name, price, and image
- [ ] Clicking **Add to Cart** adds the product to the cart
- [ ] Adding the same product again increases its quantity (no duplicate row)
- [ ] **+** increases the quantity
- [ ] **-** decreases the quantity and is disabled at 1
- [ ] **Remove** deletes only that item
- [ ] **Clear Cart** empties the cart and shows the empty message
- [ ] Total items and total price update after every change
- [ ] Navbar badge matches the total item count
- [ ] Category filter changes the visible products
- [ ] Changing the filter does not change the cart
- [ ] Layout works on a narrow (mobile) screen

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Blank page | Open the browser console (F12) and read the red error message |
| `does not provide an export named 'default'` | The component file is empty or missing `export default ComponentName;` |
| `Failed to resolve import` | Check file name spelling and capitalization, or run `npm install` |
| Page looks unstyled | Make sure `import "bootstrap/dist/css/bootstrap.min.css";` is in `main.jsx` |
| `could not find react-redux context value` | `<Provider store={store}>` must wrap `<App />` in `main.jsx` |
| Images don't match the product | The placeholder service returns random photos. Replace the `image` values in `src/data/products.js` with your own URLs or local files in `public/images/` |
| Port already in use | Vite picks the next free port automatically, or stop the other server |

---

## Learning Goals

- Understand `createSlice`, reducers, and actions
- Understand `configureStore` and `Provider`
- Use `useDispatch` to change state and `useSelector` to read it
- Know the difference between derived data and stored state
- Know when to use local state (`useState`) instead of Redux
- Build reusable components with React Bootstrap
