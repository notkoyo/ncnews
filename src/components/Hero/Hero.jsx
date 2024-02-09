import ArticleOrganiser from "../Article/ArticleOrganiser";
import { ChevronDown } from "lucide-react";

export default function Hero({ isLoggedIn }) {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to NC News!</h1>
            <p className="mb-5 text-xl">
              Scroll to view recent articles.
            </p>
            <ChevronDown size={48} className="chevron-bounce" />
          </div>
        </div>
      </div>
      <div className="text-center mt-20 mb-10">
        <h2 className="font-bold text-4xl">Recent Articles</h2>
      </div>
      <ArticleOrganiser isLoggedIn={isLoggedIn} />
    </>
  );
}
