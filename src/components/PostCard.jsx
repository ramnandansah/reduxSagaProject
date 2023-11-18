import { Link } from 'react-router-dom';

const PostCard = (props) => {
  const { data } = props;

  return (
    <div className='border rounded p-4 m-4'>
      <div className='flex gap-4 justify-between items-center'>
        <h3 className='font-bold'>{data.title}</h3>
        <div>
          <button type='reset' className='flex-1 border p-2 rounded text-green-500 mr-2'>
            Delete
          </button>

          {/* <a href={`/posts/${data?.id}/edit`}>
            <button type='submit' className='flex-1 border p-2 rounded bg-green-500 text-white'>
              Edit post
            </button>
          </a> */}

          <Link to={`/posts/${data?.id}/edit`}>
            <button type='submit' className='flex-1 border p-2 rounded bg-green-500 text-white'>
              Edit post
            </button>
          </Link>
        </div>
      </div>

      <p className='my-4'>{data.body}</p>
      <p className=''>
        {data?.tags?.map((tag) => (
          <span key={tag} className='bg-green-200 rounded-full px-2 py-1 mx-1'>
            {tag}
          </span>
        ))}
      </p>
    </div>
  );
};

export default PostCard;
