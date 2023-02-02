import { ClassNames } from '@emotion/react';
import axios from 'axios';
import React, { FunctionComponent, useEffect, useState } from 'react';


interface HomeProps {
    
    
    
}
 
const Home: FunctionComponent<HomeProps> = () => {

    const [posts,getPosts] = useState<any[]>([]);
    const [counter,setCounter] = useState(0);

    useEffect(() => {
        getRandomPosts();
   }, []);



    let getRandomPosts=()=>{
        
        axios.get(axios.defaults.baseURL+"posts?n=10").then((response)=>{

                getPosts(response.data)


        })
        
        .catch(error => console.error(error));
    

    }

    let commentsCounter=(postId:string)=>{

        axios.get(axios.defaults.baseURL+`comments/${postId}`).then((response)=>{

            setCounter(response.data.data.length);
            

    })
    
    .catch(error => console.error(error));



    }

    return ( <div>
        <h1>Posts</h1>
        <ul className='posts'>

        {
            posts && posts.map((post)=>{

                {commentsCounter(post._id)}

                return(
                        <li className='post'>
                            <h2> {post.title}({post._id})</h2>
                            <hr />
                            <p> {post.body}</p>
                            <hr />
                            <span>
                                <a href="#">Comments {counter}</a>
                            </span> 
                            <br />
                            <br />
                        </li>
                )

            
            })
        }
    
        </ul>

    </div> );
}
 
export default Home;


