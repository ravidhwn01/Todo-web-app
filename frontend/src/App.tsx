import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import UserLogin from "./login";
import SignUp from "./sign up";
import CreateTodoLists from "./todolist";
import { UserProvider } from "./context/usercontext";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/new-todo" element={<CreateTodoLists />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
