import { createSlice } from "@reduxjs/toolkit";

export const selectedArticlesSlice = createSlice({
  name: "selectedArticles",
  initialState: {
    articles: []
  },
  reducers: {
    addArticle: (state, action) => {
      // Vérifier si l'article existe déjà (par id)
      const exists = state.articles.find(article => article.id === action.payload.id);
      if (!exists) {
        state.articles.push(action.payload);
      }
    },
    removeArticle: (state, action) => {
      state.articles = state.articles.filter(article => article.id !== action.payload.id);
    }
  }
});

export const { addArticle, removeArticle } = selectedArticlesSlice.actions;
export default selectedArticlesSlice.reducer;