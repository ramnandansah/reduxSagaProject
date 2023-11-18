import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import CreateHeader from '../../components/CreateHeader';
import { createPostAction } from '../../store/posts/action';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const createPostError = useSelector((state) => state.post.createPostError);

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
    if (createPostError) {
      // Error handling Toastify
    } else if (createPostError !== null) {
      navigator('/posts');
      // Success handling Toastify
    }
  }, [createPostError, navigator]);

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log(values);
    dispatch(createPostAction(values));
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

        <div className='flex gap-4 mt-8 justify-end'>
          <button
            type='reset'
            onClick={resetForm}
            className='flex-1 border py-2 rounded border-green-500 text-green-500'
          >
            Clear
          </button>

          <button type='submit' className='flex-1 border py-2 rounded bg-green-500 text-white' disabled={isSubmitting}>
            Create post
          </button>
        </div>
      </form>
    );
  };

  return (
    <>
      <CreateHeader title={'Create new post'} onBackClick={goBack} />
      <div className='h-screen bg-gray-200 pt-32'>
        <div className='w-96 border rounded-md overflow-hidden bg-white mx-auto'>
          <div className='m-4'>
            <Formik initialValues={{ title: '', userId: '' }} validate={validator} onSubmit={onSubmit}>
              {checkAllAvailabilityProperties}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
