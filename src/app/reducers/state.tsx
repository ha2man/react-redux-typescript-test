import { TonaModel } from "app/models";

export interface RootState {
  tonas: RootState.TonaState;
  router?: any;
}

export namespace RootState {
  export type TonaState = TonaModel[];
}
