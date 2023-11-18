import { useEffect, useState } from "react";
import { getPostsApi } from "../api";

const PostList = () => {
  const [data, setData] = useState([]);
  const getPostListDataApi = async () => {
    const res = await getPostsApi();
    console.log(res);
    setData(res.posts);
  };

  useEffect(() => {
    getPostListDataApi();
  }, []);

  return data.map((item, index) => {
    return (
      <div key={index} className="border p-4 m-4 border-red-500">
        <h1 className="text-md mb-2 text-bold">{item.title}</h1>
        <p className="text-sm">{item.body}</p>
      </div>
    );
  });
};

export default PostList;
