import axios from "axios";

const getArticles = async () => {
  const data = await axios.get("https://nc-news-api-8ppx.onrender.com/api/articles");
  const { articles } = data.data;
  setArticleData(articles);
}

export { getArticles };