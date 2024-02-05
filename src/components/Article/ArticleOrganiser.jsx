import ArticleCard from "./ArticleCard";
import {useState, useEffect} from "react";

export default function ArticleOrganiser() {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  return (<div className="flex flex-col">
    {articleData.map((article) => <ArticleCard article={article} /> )}
  </div>);
}
