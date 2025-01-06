import Card from "@/components/common/Card";
import { POSTS } from "@/constants";
export default function Home() {
  return (
    <div className="w-[85%] mx-auto">
      <section className="grid grid-cols-3 gap-4">
        {POSTS.map((post, i) => (
          <Card title={post.title} content={post.content} key={i} />
        ))}
      </section>
    </div>
  );
}
