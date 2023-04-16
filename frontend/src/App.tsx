import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import UserLogin from "./login";
import SignUp from "./sign up";
import CreateTodoLists from "./todolist";
import { UserProvider } from "./context/usercontext";
import CreateTask from "./task";
import { UserProfile } from "./components/mock/user profile";
import Profile from "./user profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/user-profile" element={<Profile />} />
            <Route path="/todo-list" element={<CreateTodoLists />} />
            <Route path="/tasks" element={<CreateTask />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
