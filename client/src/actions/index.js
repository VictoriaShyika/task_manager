import { CREATE_TASK, REMOVE_TASK, EDIT_TASK } from "./types";
import uuid from "react-uuid";

export const editTask = (id, params = {}) => {
  return {
    type: EDIT_TASK,
    payload: { id, params },
  };
};

export const createTask = ({ title, description }) => {
  return {
    type: CREATE_TASK,
    payload: {
      id: uuid(),
      title,
      description,
      status: "On Hold",
    },
  };
};

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    id,
  };
};
