import React, { useState, useEffect } from "react";
import IconViewRequest from "../../assets/icon/IconViewRequest";

// export default function Task({
//   task: { id, title, state },
//   onArchiveTask,
//   onPinTask,
// })

const NoteListItem = ({
  item: { user, requestId, role, location, messageContent, startDate },
  handleClickNoteItem,
  activeMessageId,
}) => {
  // const {
  //   user,
  //   requestId,
  //   // userType,
  //   role,
  //   location,
  //   messageContent,
  //   startDate,
  //   // endDate,
  //   // status,
  // } = item;

  const [isActive, setIsActive] = useState(false);

  // useEffect(() => {
  //   console.log("useEffect activeMessageId 1");

  //   console.log(activeMessageId + 1);

  //   const number = parseInt(requestId, 10);

  //   console.log(number);

  //   setIsActive(number === activeMessageId + 1 ? true : false);
  // }, [activeMessageId, requestId]);

  const handleClick = (e, requestId) => {
    console.log(" ===== ", e);
    // console.log(" ===== ", requestId);

    // handleClickNoteItem(e, requestId);
    // setIsActive(number === activeMessageId + 1 ? true : false);
    // setIsActive(!isActive);
  };

  return (
    <div
      className={`notes-list-item ${isActive ? "notes-list-item-on" : ""} `}
      // onClick={(e) => {
      //   handleClick(e, requestId);
      // }}
    >
      <div className="notes-list-item-inner ">
        <div className="">
          <div className="group icon-hover-black relative duration-300">
            <IconViewRequest />
            <span className="absolute hidden group-hover:flex -left-[26px] -top-2 -translate-y-full w-max px-2 py-1 bg-gray-700 rounded text-center text-white text-txt10 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
              View Request
            </span>
          </div>
        </div>
        <div className="">
          <div className="">
            <p className="text-base-blue text-txt11">Request: {requestId}</p>
            <p className="text-medium-gray text-txt10">
              {startDate.toLocaleDateString("en-US")},{" "}
              {startDate.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
              })}
            </p>
          </div>
          <div className="">
            <p className="text-dark-gray font-semibold text-txt10">{user}</p>
            <p className="text-medium-gray text-txt10">
              {role} | {location}
            </p>
          </div>
          <div className="">
            <p className="text-dark-gray text-txt10">
              {/* {messageContent?.substring(0, 50)}... */}
              <p>{messageContent}</p>
            </p>
            <p className="flex items-center justify-center bg-base-green text-white text-txt10 font-semibold rounded-full h-6 w-6">
              2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteListItem;
