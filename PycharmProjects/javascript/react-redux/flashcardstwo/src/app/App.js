import React from "react";
import {
  Route,
  Routes,
  Link,
} from "react-router-dom";
import NewQuizForm from "../components/NewQuizForm";
import NewTopicForm from "../components/NewTopicForm";
import Topics from "../features/topics/Topics";
import Topic from "../features/topics/Topic";
import Quiz from "../features/quizzes/Quiz";
import Quizzes from "../features/quizzes/Quizzes";
import ROUTES from "./routes";

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={ROUTES.topicsRoute()} activeclassname="active">
              Topics
            </Link>
          </li>
          <li>
            <Link to={ROUTES.quizzesRoute()} activeclassname="active">
              Quizzes
            </Link>
          </li>
          <li>
            <Link to={ROUTES.newQuizRoute()} activeclassname="active">
              New Quiz
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/topics/*" element = {<TopicsRoutes />}>
        </Route>
        <Route path="/quizzes/*" element = {<QuizRoutes />}>
        </Route>
      </Routes>
    </div>
  );
}

function TopicsRoutes() {

  return (
    <>
      <Routes>
        <Route path="/new" element={<NewTopicForm />}>
        </Route>
        <Route path="/:topicId" element={<Topic />}>
        </Route>
          <Route path="" element={<Topics />}>
        </Route>
      </Routes>
    </>
  );
}

function QuizRoutes() {
  return (
    <>
      <Routes>
        <Route path="/new" element={ <NewQuizForm />}>
        </Route>
        <Route path="/:quizId" element={<Quiz />}>
        </Route>
        <Route path="" element={<Quizzes />}>
        </Route>
      </Routes>
    </>
  );
}
