import { useMemo } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { createAction } from "redux-actions";
import { TonaModel } from "app/models";
type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;

export namespace TonaActions {
  export enum Type {
    GET_TONA = "GET_TONA",
    ADD_TONA = "ADD_TONA",
    EDIT_TONA = "EDIT_TONA",
    DELETE_TONA = "DELETE_TONA",
  }

  export const getTona = createAction(Type.GET_TONA);
  export const addTona = createAction<PartialPick<TonaModel, "title">>(
    Type.ADD_TONA
  );
  export const editTona = createAction<PartialPick<TonaModel, "id">>(
    Type.EDIT_TONA
  );
  export const deleteTona = createAction<TonaModel["id"]>(Type.DELETE_TONA);
}

export type TonaActions = Omit<typeof TonaActions, "Type">;
export const useTonaActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = TonaActions;
  return useMemo(
    () => bindActionCreators(actions as any, dispatch),
    [dispatch]
  ) as TonaActions;
};
