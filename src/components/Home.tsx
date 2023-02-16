import axios from "axios";
import React, { FunctionComponent, useEffect, useState } from "react";

let post = {
  _id: "",
  title: "",
  body: "",
  images: [""],
};

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [posts, getPosts] = useState<typeof post[]>([]);

  useEffect(() => {
    getRandomPosts();
  }, []);

  ///////////////test one post///////////////////////////

  /*
    const [onePost,getPost] = useState<typeof post>(post);

    useEffect(() => {
        getOnePost();
    }, []);


     let getOnePost=()=>{

         
        axios.get(axios.defaults.baseURL+"posts/63de64a581c87662df06a63a").then((response)=>{

            getPost(response.data.data)


        })
        
        .catch(error => console.error(error));


         return(<div>
        { commentsCounter(onePost._id)}
        </div>)
    }
    */

  let getRandomPosts = () => {
    axios
      .get("http://localhost:8080/api/v1/posts?n=10")
      .then((response) => {
        getPosts(response.data.data);

        //get number of comments of every post

        // posts.forEach((element) => {

        //     axios.get(axios.defaults.baseURL+`comments/${element._id}`).then((response)=>{

        //         element.numberOfComment=response.data.data.length

        //     })

        //       .catch(error => console.error(error));

        // });
      })
      .catch((error) => console.error(error));

    console.log(posts);

    // posts.forEach((post)=>{

    //     axios.get(axios.defaults.baseURL+`comments/${post._id}`).then((response)=>{

    //         post.title=''+response.data.data.length

    //         console.log(post.title)
    // })

    //     .catch(error => console.error(error));

    // })

    // getPosts(posts);
  };

  //Counting comments of every post

  // let commentsCounter=(postId:string)=>{

  //     axios.get(axios.defaults.baseURL+`comments/${postId}`).then((response)=>{

  //         getCounterOfComments(response.data.data.length)

  // })

  //     .catch(error => console.error(error));

  //     console.log("in function : "+counterOfComments)

  //     return counterOfComments;

  // }

  return (
    <div>
      <h1>Posts</h1>
      <ul className="posts">
        {posts &&
          posts.map((post) => {
            //       post.numberOfComment= commentsCounter(post._id)

            return (
              <li className="post" key={post._id}>
                {/* <img src= {post.images[0]} alt="" /> */}
                <h2>
                  {" "}
                  {post.title}({post._id})
                </h2>
                <hr />
                <p> {post.body}</p>
                <hr />
                <span>
                  <a href="#">Comments</a>
                </span>
                <br />
                <br />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Home;
