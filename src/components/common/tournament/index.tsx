import React from "react";
import { TonaModel } from "app/models";
import { TonaActions } from "app/actions";

export namespace TonaItem {
  export interface Props {
    tona: TonaModel;
    searchText: string;
    editTona: typeof TonaActions.editTona;
    deleteTona: typeof TonaActions.deleteTona;
  }
}

function Tournament({
  tona,
  editTona,
  deleteTona,
  searchText,
}: TonaItem.Props) {
  let pos = tona.title.toLowerCase().search(searchText.toLowerCase());
  const onDelete = () => {
    if (window.confirm("Do you really want to delete this tournament?")) {
      deleteTona(tona.id);
    }
  };
  const onEdit = () => {
    const tona_name = window.prompt("New Tournament Name");
    if (tona_name?.length) {
      editTona({ id: tona.id, title: tona_name });
    }
  };
  return (
    <div className="bg-[#191919] p-5 duration-300 hover:bg-[#202020] ">
      <h5 className="text-xl font-bold mb-2">
        {tona.title.slice(0, pos)}
        <span className="text-[#FF6600]">
          {tona.title.slice(pos, pos + searchText.length)}
        </span>
        {tona.title.slice(pos + searchText.length, tona.title.length)}
      </h5>
      <p>Organizer: {tona.organizer}</p>
      <p>Game: {tona.game}</p>
      <p>Participants: {tona.participants}</p>
      <p>Start: {tona.start}</p>
      <div className="mt-3">
        <button
          onClick={onEdit}
          className="p-2 py-1 uppercase font-[600] bg-transparent rounded-md border-2 border-[#ff6600] text-[#ff6600] hover:text-[#ff9922]"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="p-2 py-1 uppercase font-[600] bg-transparent rounded-md border-2 border-[#ff6600] text-[#ff6600] hover:text-[#ff9922] ml-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Tournament;
