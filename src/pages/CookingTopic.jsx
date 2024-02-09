import TopicNav from "../components/Topics/TopicNav";
import TopicOrganiser from "../components/Topics/TopicOrganiser";

export default function CookingTopicPage() {
  const topic = "Cooking";

  return (
    <>
      <TopicNav topic={topic} />
      <TopicOrganiser topic={topic} />
    </>
  );
}