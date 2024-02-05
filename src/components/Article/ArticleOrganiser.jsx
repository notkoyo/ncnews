import ArticleCard from "./ArticleCard";
import axios from "axios";
import {useState, useEffect} from "react";

export default function ArticleOrganiser() {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("https://nc-news-api-8ppx.onrender.com/api/articles");
      const { articles } = data.data;
      setArticleData(articles);
    };
    getData();
  }, []);

  return (<div className="flex flex-col">
    {articleData.map((article) => <ArticleCard article={article} /> )}
  </div>);
}
