import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import CreateHeader from '../../components/CreateHeader';
import { updatePostAction, resetUpdatePostError } from '../../store/posts/action';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSinglePostApi } from '../../api';

const EditPost = () => {
  const [postData, setPostData] = useState(null);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const params = useParams();

  const updatePostError = useSelector((state) => state.post.updatePostError);

  const getData = async (postId) => {
    const data = await getSinglePostApi(postId);
    const { title, userId, body, reactions, tags } = data;
    const formDefaultValues = {
      title,
      userId,
      body,
      reactions,
      tags,
    };
    setPostData(formDefaultValues);
  };

  useEffect(() => {
    getData(params.postId);
  }, [params]);

  const validator = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = 'Required';
    }

    if (!values.userId) {
      errors.userId = 'Required';
    }

    return errors;
  };

  useEffect(() => {
    if (updatePostError) {
      // Error handling Toastify
    } else if (updatePostError !== null) {
      console.log('updatePostError', updatePostError);
      dispatch(resetUpdatePostError());
      navigator('/posts');
      // Success handling Toastify
    }
  }, [updatePostError, navigator, dispatch]);

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log(values);
    dispatch(updatePostAction({ id: params.postId, post: values }));
    setSubmitting(false);
  };

  const goBack = () => {
    navigator('/posts');
  };

  const checkAllAvailabilityProperties = (formikProps) => {
    const {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      resetForm,
      /* and other goodies */
    } = formikProps;

    return (
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='my-4'>
            Title:
            <br />
            <input
              type='text'
              name='title'
              autoComplete='title'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              className='px-2 py-1 border rounded border-green-500 w-full'
            />
          </label>
          {errors.title && touched.title && <span className='text-red-500 text-sm'>{errors.title}</span>}
        </div>

        <div className='mb-4'>
          <label className='my-4'>
            User Id:
            <br />
            <input
              type='number'
              name='userId'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.userId}
              className='px-2 py-1 border rounded border-green-500 w-full'
            />
          </label>
          {errors.userId && touched.userId && <span className='text-red-500 text-sm'>{errors.userId}</span>}
        </div>

        <div className='mb-4'>
          <label className='my-4'>
            Body:
            <br />
            <textarea
              rows={5}
              name='body'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.body}
              className='px-2 py-1 border rounded border-green-500 w-full'
            />
          </label>
          {errors.body && touched.body && <span className='text-red-500 text-sm'>{errors.body}</span>}
        </div>

        <div className='mb-4'>
          <label className='my-4'>
            Reactions:
            <br />
            <input
              type='number'
              name='reactions'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.reactions}
              className='px-2 py-1 border rounded border-green-500 w-full'
            />
          </label>
          {errors.reactions && touched.reactions && <span className='text-red-500 text-sm'>{errors.reactions}</span>}
        </div>

        <div className='mb-4'>
          <label className='my-4'>
            Tags:
            <br />
            <input
              type='text'
              name='tags'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tags.join(', ')}
              className='px-2 py-1 border rounded border-green-500 w-full'
            />
          </label>
          {errors.tags && touched.tags && <span className='text-red-500 text-sm'>{errors.tags}</span>}
        </div>

        <div className='flex gap-4 mt-8 justify-end'>
          <button
            type='reset'
            onClick={resetForm}
            className='flex-1 border py-2 rounded border-green-500 text-green-500'
          >
            Clear
          </button>

          <button type='submit' className='flex-1 border py-2 rounded bg-green-500 text-white' disabled={isSubmitting}>
            Update post
          </button>
        </div>
      </form>
    );
  };

  return (
    <>
      <CreateHeader title={'Edit post'} onBackClick={goBack} />
      <div className='h-screen bg-gray-200 pt-32'>
        <div className='w-96 border rounded-md overflow-hidden bg-white mx-auto'>
          <div className='m-4'>
            {postData && (
              <Formik initialValues={postData} validate={validator} onSubmit={onSubmit}>
                {checkAllAvailabilityProperties}
              </Formik>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPost;
