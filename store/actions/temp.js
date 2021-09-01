export const CURR_PWD = "CURR_PWD";
export const NEW_PWD = "NEW_PWD";
export const COPY_PWD = "COPY_PWD";

export const updateCurr = (val) => {
  return {type: CURR_PWD, val: val};
};

export const updateNew = (val) => {
  return {type: NEW_PWD, val: val};
};

export const updateCopy = (val) => {
  return {type: COPY_PWD, val: val};
};