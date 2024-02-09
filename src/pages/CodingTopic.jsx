import TopicNav from "../components/Topics/TopicNav";
import TopicOrganiser from "../components/Topics/TopicOrganiser";

export default function CodingTopicPage() {
  const topic = "Coding";

  return (
    <>
      <TopicNav topic={topic} />
      <TopicOrganiser topic={topic} />
    </>
  );
}