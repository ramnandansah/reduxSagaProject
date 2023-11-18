import Auth from "../auth";
import Posts from "../posts";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../home";
import Users from "../users";
import Products from "../products";
import CreatePost from "../posts/CreatePost";
import EditPost from "../posts/EditPost";
import EditUser from "../users/EditUser";
import CreateUser from "../users/CreateUser";
import EditProduct from "../products/EditProduct";
import CreateProduct from "../products/CreateProduct";
import ProtectedRoute from "../../components/ProtectedRoute";
import PostList from "../../components/PostList";
import PostListV2 from "../../components/PostListV2";

// navigate.push('/posts', {replace: true})

const App = () => {
  return (
    // <Routes>
    //   <Route exact path="/" index element={<h1>Home</h1>} />
    //   <Route exact path="/post-list" element={<PostList />} />
    //   <Route exact path="/post-list-v2" element={<PostListV2 />} />
    // </Routes>
    <Routes>
      <Route
        exact
        path="/"
        index
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/posts"
        element={
          <ProtectedRoute>
            <Posts />
          </ProtectedRoute>
        }
      />

      {/*
      /posts/1/edit
      /posts/2/edit
      /posts/3/edit
      /posts/400000/edit
      */}

      <Route
        exact
        path="/posts/:postId/edit"
        element={
          <ProtectedRoute>
            <EditPost />
          </ProtectedRoute>
        }
      />

      <Route
        exact
        path="/posts/create"
        element={
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        }
      />

      <Route
        exact
        path="/users"
        element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/users/:userId/edit"
        element={
          <ProtectedRoute>
            <EditUser />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/users/create"
        element={
          <ProtectedRoute>
            <CreateUser />
          </ProtectedRoute>
        }
      />

      <Route
        exact
        path="/products"
        element={
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/products/:productId/edit"
        element={
          <ProtectedRoute>
            <EditProduct />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/products/create"
        element={
          <ProtectedRoute>
            <CreateProduct />
          </ProtectedRoute>
        }
      />

      <Route exact path="/auth" element={<Auth />} />
      {/* <Route path='*' element={<h1>404</h1>} /> */}
      <Route path="*" element={<Navigate to={"/auth"} replace={true} />} />
    </Routes>
  );
};

export default App;
