import TopicNav from "../components/Topics/TopicNav";
import TopicOrganiser from "../components/Topics/TopicOrganiser";

export default function FootballTopicPage() {
  const topic = "Football"

  return (
    <>
      <TopicNav topic={topic} />
      <TopicOrganiser topic={topic} />
    </>
  );
}