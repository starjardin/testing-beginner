import './post.css';
import { useState, useEffect, Fragment } from "react";

export default function Post() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://gorest.co.in/public/v2/users");
      const data = await res.json();
      console.log(data);
      setPost(data);
    }
    getData();
  }, []);

  if (!post.length) {
    console.log(post);
    return <h2>Loading............</h2>;
  }

  return (
    <Fragment>
      {post?.map((post) => (
        <div className="post" key={post.id}>{post.name}</div>
      ))}
    </Fragment>
  );
}
