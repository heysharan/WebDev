import { useState } from "react";
import { PostComponent } from "./Post";

function App() {
  const [posts, setPosts] = useState([]);

  const postComponent = posts.map((post) => (
    <PostComponent
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      image={post.image}
      description={post.description}
    />
  ));

  const addPost = () => {
    setPosts([
      ...posts,
      {
        name: "Sharan",
        subtitle: "20k followers",
        time: "2m ago",
        image:
          "https://media.licdn.com/dms/image/v2/C5603AQGcOif9rbXP9Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1592307009739?e=1747872000&v=beta&t=nlGzn8Z2w0KjQByR7bXTntC5GEfg6oSmNLWSbbvMBwQ",
        description:
          "Innovative Software Engineer | Transforming Ideas into Robust Code",
      },
    ]);
  };

  return (
    <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}>Add Post</button>
      <div
        style={{ display: "flex", justifyContent: "center", paddingTop: 40 }}
      >
        <div>
          <div>
            {postComponent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
