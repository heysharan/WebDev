// import { useState } from "react";
// import { PostComponent } from "./Post";

// function App() {
//   const [posts, setPosts] = useState([]);

//   const postComponent = posts.map((post) => (
//     <PostComponent
//       name={post.name}
//       subtitle={post.subtitle}
//       time={post.time}
//       image={post.image}
//       description={post.description}
//     />
//   ));

//   const addPost = () => {
//     setPosts([
//       ...posts,
//       {
//         name: "Sharan",
//         subtitle: "20k followers",
//         time: "2m ago",
//         image:
//           "https://media.licdn.com/dms/image/v2/C5603AQGcOif9rbXP9Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1592307009739?e=1747872000&v=beta&t=nlGzn8Z2w0KjQByR7bXTntC5GEfg6oSmNLWSbbvMBwQ",
//         description:
//           "Innovative Software Engineer | Transforming Ideas into Robust Code",
//       },
//     ]);
//   };

//   return (
//     <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
//       <button onClick={addPost}>Add Post</button>
//       <div
//         style={{ display: "flex", justifyContent: "center", paddingTop: 40 }}
//       >
//         <div>
//           <div>
//             {postComponent}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useState } from 'react'
// import { PostComponent } from './Post'
// import { Notifications } from './Notifications'

// const App = () => {
//   const [posts, setPosts] = useState([]);

//   const postComponent = posts.map(post => <PostComponent
//   name = {post.name}
//   subtitle = {post.subtitle}
//   time = {post.time}
//   image = {post.image}
//   description = {post.description}
//   />)

//   const addPost = () => {
//     setPosts([...posts, {
//       name: "Sharan",
//       subtitle: "20k followers",
//       time: "2m ago",
//       image:
//       "https://media.licdn.com/dms/image/v2/C5603AQGcOif9rbXP9Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1592307009739?e=1747872000&v=beta&t=nlGzn8Z2w0KjQByR7bXTntC5GEfg6oSmNLWSbbvMBwQ",
//       description:
//       "Innovative Software Engineer | Transforming Ideas into Robust Code",
//     }])
//   }

//   return (
//     <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
//       <button onClick={addPost} >Add Post</button>
//       <div style={{ display: "flex", justifyContent: "center", paddingTop: 40 }}>
//           <div>
//             {postComponent}
//           </div>
//           <Notifications />
//       </div>
//     </div>
//   )
// }

// export default App

// import { Notifications } from "./Notifications";

// const App = () => {
//   return (
//     <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
//       <Notifications />
//     </div>
//   );
// };

// export default App;

// import { TopBar } from "./TopBar";

// const App = () => {
//   return (
//     <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
//       <TopBar />
//     </div>
//   );
// };

// export default App;

// import { CleanUp } from "./CleanUp";

// const App = () => {
//   return (
//     <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
//       <CleanUp />
//     </div>
//   );
// };

// export default App;

// import { Card } from "./Card";

// const App = () => {
//   return (
//     <div style={{ backgroundColor: "white", height: "100vh" }}>
//       <Card>
//         <div>
//           <h2>Card Title</h2> <p>This is some content inside the card</p>
//         </div>
//       </Card>
//       <Card>
//         <h2>Another Card</h2>{" "}
//         <p>This is some content inside the another card</p>
//       </Card>
//       <Card>
//         <h2>Another Card 2</h2>{" "}
//         <p>This is some content inside the another card</p>
//       </Card>
//       <Card>
//         <h2>Another Card 3</h2>{" "}
//         <p>This is some content inside the another card</p>
//       </Card>
//       <Card>
//         <h2>Another Card 4</h2>{" "}
//         <p>This is some content inside the another card</p>
//       </Card>
//       <Card>
//         <h2>Another Card</h2>{" "}
//         <p>This is some content inside the another card</p>
//       </Card>
//     </div>
//   );
// };

// export default App;

// import { ListsAndKeys } from "./ListsAndKeys";

// const App = () => {
//   const items = [
//     {
//       id: 1,
//       title: "go to gym",
//       done: true
//     },
//     {
//       id: 2,
//       title: "finish react",
//       done: false
//     },
//     {
//       id: 3,
//       title: "eat properly",
//       done: true
//     },
//     {
//       id: 4,
//       title: "sleep well",
//       done: false
//     },
//   ];

//   return (
//     <div style={{ backgroundColor: "white", height: "100vh" }}>
//       <ListsAndKeys>{ items }</ListsAndKeys>
//     </div>
//   );
// };

// export default App;

// import { ClassComponent } from "./ClassComponent";

// const App = () => {

//   return (
//     <div style={{ backgroundColor: "white", height: "100vh" }}>
//       <ClassComponent> </ClassComponent>
//     </div>
//   );
// };

// export default App;

import { ErrorBoundary } from "./ErrorBoundary";
import { Fragment } from "react";

const App = () => {
  const RedCard = () => {
    throw new Error("Error while rendering !");

    return (
      <div style={{ background: "red", borderRadius: 20, padding: 20 }}>
        Hi there !
      </div>
    );
  };

  const BlueCard = () => {
    return (
      <div
        style={{
          background: "blue",
          borderRadius: 20,
          padding: 20,
          margin: 20,
        }}
      >
        Hi there !
      </div>
    );
  };

  return (
    <Fragment style={{ backgroundColor: "white", height: "100vh" }}>
      <ErrorBoundary>
        <RedCard />
      </ErrorBoundary>
      <ErrorBoundary>
        <BlueCard />
      </ErrorBoundary>
    </Fragment>
  );
};

export default App;
