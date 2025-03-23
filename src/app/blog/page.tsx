

export default function Blog() {
  const posts = [
    { id: 1, title: "Getting Started with Next-Electron", content: "Learn how to set up your Next-Electron project and build cross-platform desktop apps." },
    { id: 2, title: "Why Choose Next-Electron?", content: "Explore the benefits of using Next.js and Electron together for modern desktop applications." },
    { id: 3, title: "Advanced Features in Next-Electron", content: "Dive into advanced features like custom configurations, plugins, and performance optimizations." },
  ];

  return (
    <div className={"container"}>
      <h1>Blog</h1>
      <p>Welcome to the Next-Electron blog! Here are some articles to get you started:</p>
      <div className={"posts"}>
        {posts.map((post) => (
          <div key={post.id} className={"post"}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}