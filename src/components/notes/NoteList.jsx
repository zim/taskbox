import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllNotes } from "../../store/notesSlice";
import NoteListItem from "./NoteListItem";

const NoteList = ({
  messageItems,
  sidePanelOpen,
  handleClickNoteItem,
  activeMessageId,
}) => {
  const dispatch = useDispatch();
  const { data: notes } = useSelector((state) => state.notes);

  console.log(activeMessageId);

  useEffect(() => {
    dispatch(fetchAllNotes());
  }, [dispatch]);

  //   console.log(notes);

  let dateToday = new Date();
  let dateYesterday = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24);

  const filterFunction = (item) => {
    return item.startDate.toDateString() === dateToday.toDateString();
  };

  const notesToday = notes.filter(filterFunction);

  const notesYesterday = notes.filter(
    (item) => item.startDate.toDateString() === dateYesterday.toDateString()
  );

  const notesOlder = notes.filter(
    (item) =>
      item.startDate.toDateString() !== dateYesterday.toDateString() &&
      item.startDate.toDateString() !== dateToday.toDateString()
  );

  const renderedNotesToday = notesToday.map((item, index) => {
    return (
      <NoteListItem
        key={`${index}`}
        item={item}
        handleClickNoteItem={handleClickNoteItem}
        activeMessageId={activeMessageId}
      />
    );
  });

  const renderedNotesYesterday = notesYesterday.map((item, index) => {
    return (
      <NoteListItem
        key={`${index}`}
        item={item}
        handleClickNoteItem={handleClickNoteItem}
      />
    );
  });

  const renderedNotesOlder = notesOlder.map((item, index) => {
    return (
      <NoteListItem
        key={`${index}`}
        item={item}
        handleClickNoteItem={handleClickNoteItem}
      />
    );
  });

  return (
    <div className="flex ">
      <div className="flex w-[464px] bg-white border-r-[1px] pl-[16px] border-light-gray items-center flex-wrap h-[624px] overflow-y-scroll">
        {notesToday.length > 0 ? (
          <p className="flex w-full justify-center text-dark-gray text-txt10 font-medium py-2">
            TODAY
          </p>
        ) : null}
        {notesToday.length > 0 ? renderedNotesToday : null}

        {notesYesterday.length > 0 ? (
          <p className="flex w-full justify-center text-dark-gray text-txt10 font-medium py-2">
            YESTERDAY
          </p>
        ) : null}
        {notesYesterday.length > 0 ? renderedNotesYesterday : null}

        {notesOlder.length > 0 ? (
          <p className="flex w-full justify-center text-dark-gray text-txt10 font-medium py-2">
            OLDER
          </p>
        ) : null}
        {notesOlder.length > 0 ? renderedNotesOlder : null}
      </div>
    </div>
  );
};

export default NoteList;
