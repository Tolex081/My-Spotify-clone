export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQD4gIk5FKCVWGLmS3PqrV9vTJxaxhybs2HyS5p2YE91ArQX3J7dUo8izOcQEVVV2gu-7skrE_v2cq4O0h-RSa3tUNhNPzz0ojfQiw66OzdEVKqpNi8zn9kVKHP8xuMdsJ_NGkbolT2fIMzPRZA9xPejSgNpgWfaTk5hsgInyZa_eiEHP_ltAsZLbepbHVowocXSNSVjEuvdC4MK",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
