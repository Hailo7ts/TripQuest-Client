import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

const HomePage = (user) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:5000/posts');
      setPosts(res.data);
    };
    
    fetchPosts();
  }, []);


  return (

  
    <div className="flex flex-wrap gap-5 mt-10 mb-10 justify-center">
  
      {posts.map((post) => (            
            
        <div className="card bg-base-100 w-1/5 h-[32rem] shadow-xl duration-500 hover:scale-105 hover:bg-[#8c7768] overflow-hidden" key={post._id}>
            
          <Link to={`/posts/${post._id}`} className=''>
            <img
              src={post.image} 
              alt={post.title} 
              className=" w-full h-4/5 object-cover"
            />
              
            <div className="card-body h-full">

              <h2 className="card-title">{post.title}</h2>

              <div className='justify-items-end justify-end'>
                <h4>{post.author}</h4>
                <h3>{post.stars}</h3>
              </div>

            </div>
          </Link>
        </div>
            
      ))}
      
    </div>
    
  );
  
};

export default HomePage;


