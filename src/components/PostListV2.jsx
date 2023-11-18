import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostListAction,
  getPostListSuccessAction,
} from "../store/post-list-v2/action";

const PostListV2 = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.postListV2.posts);

  useEffect(() => {
    dispatch(getPostListAction());
    // dispatch(getPostListSuccessAction());
  }, [dispatch]);

  return data.map((item, index) => {
    return (
      <div key={index} className="border p-4 m-4 border-red-500">
        <h1 className="text-md mb-2 text-bold">{item.title}</h1>
        <p className="text-sm">{item.body}</p>
      </div>
    );
  });
};

export default PostListV2;
