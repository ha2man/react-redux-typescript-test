import { handleActions } from "redux-actions";
import { RootState } from "./state";
import { TonaActions } from "app/actions/tonas";
import { TonaModel } from "app/models";
import axios from "axios";

const SERVER_URI = "http://localhost:3000";

const initialState: RootState.TonaState = [
  {
    id: 1,
    title: "Test A",
    organizer: "Ominis Ominis",
    game: "Dota 2",
    participants: "9/442",
    start: "27/04/2023, 12:23:13",
  },
  {
    id: 2,
    title: "Test B",
    organizer: "Tomas Jinn",
    game: "League of Legends",
    participants: "91/235",
    start: "27/06/2023, 09:50:00",
  },
  {
    id: 3,
    title: "Test C",
    organizer: "Alexandra",
    game: "Rocket League",
    participants: "84/763",
    start: "27/02/2023, 11:10:30",
  },
  {
    id: 4,
    title: "Test D",
    organizer: "Tomas Jinn",
    game: "Rocket League",
    participants: "2/442",
    start: "27/02/2023, 05:07:04",
  },
  {
    id: 5,
    title: "Test E",
    organizer: "Ominis Ominis",
    game: "Rocket League",
    participants: "76/123",
    start: "27/02/2023, 12:04:03",
  },
  {
    id: 6,
    title: "Test F",
    organizer: "Ben Suzuki",
    game: "Rocket League",
    participants: "7/342",
    start: "27/02/2023, 12:00:00",
  },
];

export const tonaReducer = handleActions<RootState.TonaState, TonaModel>(
  {
    [TonaActions.Type.GET_TONA]: (state, action) => {
      axios
        .get(SERVER_URI + "/tona")
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
      return state;
    },
    [TonaActions.Type.ADD_TONA]: (state, action) => {
      if (action.payload && action.payload.title) {
        const formData = {
          id:
            state.reduce(
              (max: number, tona: { id: any }) => Math.max(tona.id || 1, max),
              0
            ) + 1,
          title: action.payload.title,
          organizer: action.payload.organizer,
          game: action.payload.game,
          participants: action.payload.participants,
          start: action.payload.start,
        };
        // axios.post(SERVER_URI + "/tona", formData);
        return [formData, ...state];
      }
      return state;
    },
    [TonaActions.Type.DELETE_TONA]: (state, action) => {
      const id = action.payload;
      // axios.delete(SERVER_URI + `/tona/${id}`);
      return state.filter((tona) => tona.id !== (id as any));
    },
    [TonaActions.Type.EDIT_TONA]: (state, action) => {
      const id = action.payload.id;
      // axios.put(SERVER_URI + `/tona/${id}`, { title: action.payload.title });
      return state.map((tona) => {
        if (!tona || !action || !action.payload) {
          return tona;
        }
        return (tona.id || 0) === action.payload.id
          ? { ...tona, title: action.payload.title }
          : tona;
      });
    },
  },
  initialState
);
