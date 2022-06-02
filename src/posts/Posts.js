import "./post.css";
import { useState, useEffect, Fragment } from "react";
import Input from "../inputs/Input";
import { Link } from "react-router-dom";

export default function Post() {
  const [post, setPost] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    async function getData() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((data) => data.json())
        .then((data) => setPost(data));
    }
    getData();
  }, []);

  function handleToggle(toggle) {
    setToggle((toggle) => !toggle);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // setValue((value) => (value = e.currentTarget.input.value));
  }

  if (!post.length) {
    return <h2>Loading............</h2>;
  }

  return (
    <Fragment>
      <ul data-testid="post">
        {post?.map((post) => (
          <li className="post" key={post.id}>
            {post.name}
          </li>
        ))}
      </ul>
      <div className="p-4">
        <p data-testid="text">
          {toggle ? "Toggle is enabled" : "Toggle is disabled"}
        </p>
        <button onClick={handleToggle} className="p-4 btn">
          Toggle button
        </button>
      </div>
      <Input handleSubmit={handleSubmit} />

      <div className="p-4">
        <Link data-testid="about-link" to={"/about"}>Link</Link>
      </div>
    </Fragment>
  );
}
