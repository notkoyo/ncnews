import { Heart, MessageSquare, Trash } from "lucide-react";
import dateFormat from "../../utils/dateFormat.js";
import { useState } from "react";
import { getArticleById, getCommentsById } from "../../utils/APICalls.js";
import axios from "axios";

export default function ArticleCard({ article }) {
  const {
    author,
    topic,
    title,
    comment_count,
    article_img_url,
    created_at,
    article_id,
  } = article;
  const [totalVotes, setTotalVotes] = useState(() => article.votes);

  const handleVotes = async () => {
    try {
      const response = await axios.patch(
        `https://nc-news-api-8ppx.onrender.com/api/articles/${article_id}`,
        {
          inc_votes: 1,
        }
      );
      console.log(response.data.article);
      setTotalVotes(response.data.article.votes);
    } catch (error) {
      console.error("Error updating votes:", error);
    }
  };

  return (
    <>
      <div className="card card-compact w-96 h-fit bg-neutral shadow-xl m-3">
        <div className="card-body">
          <span className="font-small">
            {`${topic[0].toUpperCase()}${topic.slice(1)}`} - Posted by {author}
          </span>
          <h2 className="card-title mt-3 font-bold">{title}</h2>
          <figure>
            <img
              className="h-60"
              src={article_img_url}
              alt={`image for ${topic} article`}
            />
          </figure>
          <figcaption className="opacity-40 ml-1">
            {dateFormat(created_at)}
          </figcaption>
          <div className="card-actions justify-start mt-1">
            <button className="btn btn-ghost p-2">
              <MessageSquare size={16} />
              {comment_count} Comments
            </button>
            <button className="btn btn-ghost p-2" onClick={handleVotes}>
              <Heart size={16} />
              {totalVotes} Likes
            </button>
          </div>
          <ViewArticle id={article_id} />
        </div>
      </div>
    </>
  );
}

const ViewArticle = ({ id }) => {
  const [articleData, setArticleData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [isModalClicked, setIsModalClicked] = useState(false);
  const [isCommentClicked, setIsCommentClicked] = useState(false);
  const [newComment, setNewComment] = useState("");

  const username = localStorage.getItem("user");
  const auth = localStorage.getItem("auth");

  if (isModalClicked) {
    getArticleById(id).then((data) => setArticleData(data));
    getCommentsById(id).then((data) => setCommentData(data));
    setIsModalClicked(false);
  }

  const {
    title,
    topic,
    body,
    votes,
    comment_count,
    created_at,
    author,
    article_img_url,
  } = articleData;

  const handleCommentSubmit = async (e) => {
    if (newComment !== "") {
      try {
        e.preventDefault();
        const response = await axios.post(
          `https://nc-news-api-8ppx.onrender.com/api/articles/${id}/comments`,
          {
            body: newComment,
            username: username,
          }
        );
        setCommentData([...commentData, response.data.comment]);
      } catch (error) {
        console.error("Error posting comment:", error);
      }
    }
    setNewComment("");
  };

  const handleCommentDelete = (commentID) => {
    const updatedComments = commentData.filter(comment => comment.comment_id !== commentID);
    setCommentData(updatedComments);
  }

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
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <figure className="px-10 pt-10">
            <img
              src={article_img_url}
              alt="article img"
              className="rounded-xl"
            />
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
                      {auth && comment.author === username ? (
                        <div className="flex justify-end pt-1">
                          <button
                            className="btn-sm btn-circle btn-ghost"
                            onClick={() => {
                              axios.delete(
                                `https://nc-news-api-8ppx.onrender.com/api/comments/${comment.comment_id}`
                              )
                              .then(() => handleCommentDelete(comment.comment_id))
                              .catch((err) => console.error(err));
                            }}>
                            <Trash size={16} color="red" className="mx-auto" />
                          </button>
                        </div>
                      ) : null}
                    </div>
                  ))}
                  {localStorage.getItem("auth") ? (
                    <form
                      onSubmit={(e) => handleCommentSubmit(e)}
                      className="mt-3">
                      <textarea
                        placeholder="Enter a new comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="textarea textarea-bordered textarea-md w-full max-w-sm"></textarea>
                      <button
                        className="btn btn-ghost w-full mt-3"
                        type="submit">
                        Submit
                      </button>
                    </form>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};
