import { CREATE_TASK, REMOVE_TASK, EDIT_TASK } from "../actions/types";

const initialState = [
  // {
  //   id: 1,
  //   title: "Task 1",
  //   description: "Description of Task 1",
  //   status: "On Hold",
  // },
  // {
  //   id: 2,
  //   title: "Task 2",
  //   description: "Description of Task 2",
  //   status: "To Do",
  // },
  // {
  //   id: 3,
  //   title: "Task 3",
  //   description: "Description of Task 3",
  //   status: "On Hold",
  // },
];

const tasks = (state = { tasks: initialState }, action) => {
  const { payload } = action;
  switch (action.type) {
    case EDIT_TASK: {
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return Object.assign({}, task, payload.params);
          }
          return task;
        }),
      };
    }
    case CREATE_TASK: {
      return { tasks: state.tasks.concat(action.payload) };
    }
    case REMOVE_TASK: {
      return {
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    }
    default:
      return state;
  }
};

export default tasks;
