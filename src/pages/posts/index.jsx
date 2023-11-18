import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import { logOutAction } from '../../store/auth/action';
import PostCard from '../../components/PostCard';
import { useEffect } from 'react';
import { getPostAction } from '../../store/posts/action';

const Posts = () => {
  const user = useSelector((state) => state?.auth?.user);
  const posts = useSelector((state) => state?.post?.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostAction());
  }, [dispatch]);

  return (
    <>
      <Header user={user} onLogout={() => dispatch(logOutAction())} />

      <div className='m-4 flex justify-end'>
        <a href='/posts/create' className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
          + Create new post
        </a>
      </div>
      <section>
        {posts.map((post, i) => (
          <PostCard data={post} key={i} />
        ))}
      </section>
    </>
  );
};

export default Posts;
