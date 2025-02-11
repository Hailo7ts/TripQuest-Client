import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router";

const NewPostPage = () => {
  const [post, setPost] = useState({
    title: '',
    author: '',
    image: '',
    content: '',
    stars: 0,
  });
  
  let navigate = useNavigate();

  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/posts', post);
    navigate('/');
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Add Trip!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          
          <form onSubmit={handleSubmit} className="card-body">
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input type="text" name="title" placeholder="Title" className="input input-bordered" onChange={handleChange} required />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Author</span>
              </label>
              <input type="text" name="author" placeholder="Author" className="input input-bordered" onChange={handleChange} required />              
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input type="text" name="image" placeholder="Image URL" className="input input-bordered" onChange={handleChange} required />              
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Review</span>
              </label>
              <input type="textarea" name="content" placeholder="Content" className="input input-bordered" onChange={handleChange} required />              
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating 1-5</span>
              </label>
              <input type='number' name="stars" placeholder="Rating" className="input input-bordered" onChange={handleChange} required />              
            </div>
            
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Add</button>
            </div>
          </form>

        </div>
      </div>
</div>
  );

};

export default NewPostPage;