import { DeleteProps } from './types';

export const Delete = ({ ind, index, state, setState }: DeleteProps) => {
  return (
    <button
      type="button"
      onClick={() => {
        const newState = [...state];
        newState[ind].splice(index, 1);
        setState(newState.filter((group) => group.length));
      }}
    >
      delete
    </button>
  );
};
