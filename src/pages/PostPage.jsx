import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from "react-router";

const PostPage = () => {

  const [post, setPost] = useState({
    title: '',
    author: '',
    image: '',
    content: '',
    stars: 0,
  });

  let { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`http://localhost:5000/posts/${id}`);
      setPost(res.data);
    };

    fetchPost();
  }, [id]);



  const handleDelete = async (id) => {
    try {
      //delete post
      await axios.delete(`http://localhost:5000/posts/${id}`);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className='container justify-self-center m-8' key={post._id}>
      <div className="bg-[#b6866e] card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={post.image}
            alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.content}</p>
          <span>{post.author}</span>
          <span>{post.stars}</span>
          <div className="card-actions justify-end">
            <Link to={`/posts/edit/${post._id}`} className="btn btn-primary"> Edit </Link>
            <Link to={`/`} onClick={() => handleDelete(post._id)} className="btn btn-primary">Delete</Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PostPage;