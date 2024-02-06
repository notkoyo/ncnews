import {Heart, MessageSquare} from "lucide-react";
import dateFormat from "../../utils/dateFormat.js";
import {useEffect, useState} from "react";
import {getArticleById, getCommentsById, updateVotes} from "../../utils/APICalls.js";

export default function ArticleCard({article}) {
  const {author, topic, votes, title, comment_count, article_img_url, created_at, article_id} = article;

  return (
    <>
      <div className="card card-compact w-96 h-fit bg-neutral shadow-xl m-3">
        <div className="card-body">
          <span className="font-small">
            {`${topic[0].toUpperCase()}${topic.slice(1)}`} - Posted by {author}
          </span>
          <h2 className="card-title mt-3 font-bold">{title}</h2>
          <figure>
            <img className="h-60" src={article_img_url} alt={`image for ${topic} article`} />
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
          <ViewArticle id={article_id} />
        </div>
      </div>
    </>
  );
}

const ViewArticle = ({id}) => {
  const [articleData, setArticleData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [isModalClicked, setIsModalClicked] = useState(false);
  const [isCommentClicked, setIsCommentClicked] = useState(false);

  if (isModalClicked) {
    getArticleById(id).then((data) => setArticleData(data));
    getCommentsById(id).then((data) => setCommentData(data));
    setIsModalClicked(false);
  }

  const {title, topic, body, votes, comment_count, created_at, author, article_img_url} =
    articleData;

  return (
    <div className="card actions justify-end">
      <button
        className="btn btn-accent"
        onClick={() => {
          setIsModalClicked(true);
          document.getElementById(`article${id}`).showModal();
        }}>
        View Article
      </button>
      <dialog id={`article${id}`} className="modal">
        <div className="modal-box no-scrollbar">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <figure className="px-10 pt-10">
            <img src={article_img_url} alt="article img" className="rounded-xl" />
          </figure>
          <figcaption className="px-10 pt-1 opacity-40">{`Posted on ${dateFormat(
            created_at
          )} by ${author} in ${topic}`}</figcaption>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{body}</p>
            <div className="card-actions justify-start mt-1">
              <button
                className="btn btn-ghost p-2"
                onClick={() => {
                  setIsCommentClicked((prevIsClicked) => !prevIsClicked);
                }}>
                <MessageSquare size={16} />
                {comment_count} Comments
              </button>
              <button className="btn btn-ghost p-2">
                <Heart size={16} />
                {votes} Likes
              </button>
            </div>
            <div className={`mx-auto ${isCommentClicked ? "hidden" : ""}`}>
              <div className="card w-96 bg-base-200">
                <div className="card-body">
                  {commentData.map((comment) => (
                    <div className="bg-base-300 rounded-xl p-3">
                      <div className="flex items-center justify-between">
                        <h2 className="text-left text-lg font-bold pb-2">
                          {comment.author}
                          <span className="pl-4 text-xs opacity-40">
                            {dateFormat(comment.created_at)}
                          </span>
                        </h2>
                        <button className="btn btn-ghost p-2">
                          <Heart size={16} />
                          {comment.votes} Likes
                        </button>
                      </div>
                      <p className="text-left font-medium">{comment.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};
