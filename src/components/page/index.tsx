import React, { useState } from "react";

import Tournament from "components/common/tournament";
import { TonaActions } from "app/actions/tonas";
import { TonaModel } from "app/models/TonaModel";

export namespace TonaList {
  export interface Props {
    tonas: TonaModel[];
    actions: TonaActions;
  }
}

const Home = ({ tonas, actions }: TonaList.Props): JSX.Element => {
  const [searchText, setSearchText] = useState("");
  const onCreate = () => {
    const tona_name = window.prompt("Tournament Name");
    if (tona_name?.length) actions.addTona({ title: tona_name });
  };
  const onSearch = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="text-white">
      <div className="container mx-auto p-10">
        <div className="flex flex-col">
          <div className="my-5">
            <h1 className="text-3xl font-bold">FACEIT Tournaments</h1>
          </div>
          <div className="flex flex-row justify-between">
            <input
              type="text"
              onChange={onSearch}
              placeholder="Search tournament..."
              className="p-3 bg-[#191919] duration-300 hover:bg-[#202020]"
            />
            <button
              onClick={onCreate}
              className="p-2 py-1 uppercase font-[600] bg-transparent rounded-md border-2 border-[#ff7700] text-[#ff7700] hover:text-[#ff9922]"
            >
              Create Tournament
            </button>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10 ">
            {tonas.map((item) =>
              item.title.toLowerCase().includes(searchText.toLowerCase()) ? (
                <Tournament
                  key={item.id}
                  tona={item}
                  editTona={actions.editTona}
                  deleteTona={actions.deleteTona}
                  searchText={searchText}
                />
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
