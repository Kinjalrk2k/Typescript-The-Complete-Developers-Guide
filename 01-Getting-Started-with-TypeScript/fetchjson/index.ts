import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

// used to define the structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios
  .get(url)
  .then((response) => {
    const todo = response.data as Todo;
    const { id, title, completed } = todo;

    logTodo(id, title, completed);
  })
  .catch((error) => {
    console.error("Error", error);
  });

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The todo with ID: ${id}
  Has a title of: ${title}
  Is is completed? ${completed}
`);
};
