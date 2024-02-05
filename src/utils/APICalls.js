import axios from "axios";

const getArticles = async () => {
  const data = await axios.get("https://nc-news-api-8ppx.onrender.com/api/articles");
  const { articles } = data.data;
  return articles;
}

const getTopics = async () => {
  const data = await axios.get("https://nc-news-api-8ppx.onrender.com/api/topics");
  const { topics } = data.data;
  return topics.map((topic) => topic.slug);
}

export { getArticles, getTopics };