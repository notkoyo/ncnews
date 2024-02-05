import {Heart, MessageSquare} from "lucide-react";

export default function ArticleCard() {
  return (
    <>
      <div className="card card-compact w-96 bg-neutral shadow-xl">
        <div className="card-body">
          <span className="font-small">topic - posted by username</span>
          <h2 className="card-title mt-3 px-2 font-bold">Title</h2>
          <p className="font-medium px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias quisquam
            reiciendis ea ex. Explicabo tenetur perspiciatis quidem sit unde officia alias
            laboriosam nostrum fugit neque, sapiente a nesciunt ut.
          </p>
          <div className="card-actions justify-start mt-5">
            <button className="btn btn-ghost p-2">
              <MessageSquare size={16} />
              Comments
            </button>
            <button className="btn btn-ghost p-2">
              <Heart size={16} />
              Likes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
