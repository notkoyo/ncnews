import {Heart, MessageSquare} from "lucide-react";
import dateFormat from "../../utils/dateFormat.js";

export default function ArticleCard({article}) {
  const { author, topic, votes, title, comment_count, article_img_url, created_at } = article;

  return (
    <>
      <div className="card card-compact w-96 bg-neutral shadow-xl my-3">
        <div className="card-body">
          <span className="font-small">{`${topic[0].toUpperCase()}${topic.slice(1)}`} - Posted by {author}</span>
          <h2 className="card-title mt-3 font-bold">{title}</h2>
          <figure>
            <img src={article_img_url} alt={`image for ${topic} article`} />
          </figure>
          <figcaption className="opacity-40 ml-1">{dateFormat(created_at)}</figcaption>
          <div className="card-actions justify-start mt-1">
            <button className="btn btn-ghost p-2">
              <MessageSquare size={16} />
              {comment_count} Comments
            </button>
            <button className="btn btn-ghost p-2">
              <Heart size={16} />
              {votes} Likes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
