# Chef-AI

A React + Vite application that helps you generate recipes based on the ingredients you have on hand. This project uses Tailwind CSS for styling and includes Hugging Face libraries for AI integration.

## 🚀 Features

- **Ingredient Management**: Add ingredients to your pantry list.
- **Recipe Generation**: Once you have at least 4 ingredients, you can request a recipe.
- **Modern Tech Stack**: Built with React 19, Vite, and Tailwind CSS v4.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **AI/ML**: [Hugging Face Inference](https://huggingface.co/docs/huggingface.js/inference/README) & Transformers

## 📦 Installation & Setup

1. **Clone the repository** (if applicable) or navigate to the project folder.

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173` (or the URL shown in the terminal).

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 📂 Project Structure

```
chef-ai/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # React components
│   │   ├── Header.jsx   # App header and logo
│   │   ├── Main.jsx     # Main logic (ingredients & state)
│   │   ├── Recipe.jsx   # Recipe display
│   │   └── IngredientsList.jsx
│   ├── App.jsx          # Root component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles (Tailwind)
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 📝 Usage

1. Enter an ingredient (e.g., "chicken", "oregano") in the input field.
2. Click **+ Add ingredient** or press Enter.
3. Add at least **4 ingredients**.
4. A "Get a recipe" section will appear. Click the button to generate a recipe (currently shows a placeholder).

