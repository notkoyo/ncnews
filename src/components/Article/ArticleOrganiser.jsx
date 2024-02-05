import ArticleCard from "./ArticleCard";
import {useState, useEffect} from "react";
import {getArticles} from "../../utils/APICalls";

export default function ArticleOrganiser() {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getArticles();
      setArticleData(data);
    };
    fetchArticles();
  }, []);

  return (
    <div className="flex flex-col">
      {articleData.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  );
}
