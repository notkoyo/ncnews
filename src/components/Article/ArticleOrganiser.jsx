import ArticleCard from "./ArticleCard";
import {useState, useEffect} from "react";
import {getArticles} from "../../utils/APICalls";

export default function ArticleOrganiser() {
  const [articleData, setArticleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getArticles();
      setArticleData(data);
      setIsLoading(false);
    };
    fetchArticles();
  }, []);

  

  if(isLoading) {
    return (
      <div className="flex justify-center items-center h-48">
        <span className="loading loading-spinner loading-lg"></span>
        <h3 className="font-bold ml-5">Loading Articles...</h3>
      </div>
    )
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 m-2">
        {articleData.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </div>
    </div>
  );
}
