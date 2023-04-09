import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTonaActions } from "app/actions";
import { RootState } from "app/reducers";
import Home from "components/page";

export const App = () => {
  const dispatch = useDispatch();
  const tonaActions = useTonaActions(dispatch);
  // tonaActions.getTona();
  const { tonas } = useSelector((state: RootState) => {
    return {
      tonas: state.tonas,
    };
  });

  return (
    <div>
      <Home tonas={tonas} actions={tonaActions} />
    </div>
  );
};
