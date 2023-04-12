import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import UserLogin from "./login";
import SignUp from "./sign up";
import CreateTodoLists from "./todolist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/new-todo" element={<CreateTodoLists />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
