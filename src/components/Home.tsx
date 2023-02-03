// import { ClassNames } from "@emotion/react";
import axios, { AxiosResponse } from "axios";
import React, { FunctionComponent, useEffect, useState } from "react";
import { Post } from "../Interfaces/Interfaces";
import Card from "../components/Card/Card";
import "../css/main.scss";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [posts, getPosts] = useState<Post[]>([]);
  //   const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios
      .get(axios.defaults.baseURL + "posts?n=10")
      .then((response: AxiosResponse) => {
        // console.log("🚀 ~ file: Home.tsx:31 ~ .then ~ response", response);
        const posts = response.data.data as [Post];
        // console.log("🚀 ~ file: Home.tsx:32 ~ .then ~ posts", posts);
        getPosts(posts);
      })

      .catch((error) => console.error(error));
  }, []);

  //   let commentsCounter = (postId: string) => {
  //     axios
  //       .get(axios.defaults.baseURL + `comments/${postId}`)
  //       .then((response) => {
  //         setCounter(response.data.data.length);
  //       })

  //       .catch((error) => console.error(error));
  //   };

  return (
    <div className="posts">
      {posts && posts.map((post) => <Card key={post._id} {...post} />)}
    </div>
  );
};

export default Home;

// {

//   commentsCounter(post._id);
// }
//   console.log(posts);
