import React from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const Notification = () => {
  //   const NotificationContainer = window.ReactNotifications.NotificationContainer;
  //   const NotificationManager = window.ReactNotifications.NotificationManager;

  const createNotification = (type) => {
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info("Info message");
          break;
        case "success":
          NotificationManager.success("Success message", "Title here");
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000
          );
          break;
        case "error":
          NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("callback");
          });
          break;
        default:
          break;
      }
    };
  };

  return (
    <div>
      <button
        className="btn btn-info"
        onClick={(e) => createNotification("info")}
      >
        Info
      </button>
      <hr />
      <button
        className="btn btn-success"
        onClick={(e) => createNotification("success")}
      >
        Success
      </button>
      <hr />
      <button
        className="btn btn-warning"
        onClick={(e) => createNotification("warning")}
      >
        Warning
      </button>
      <hr />
      <button
        className="btn btn-danger"
        onClick={(e) => createNotification("error")}
      >
        Error
      </button>

      <NotificationContainer />
    </div>
  );
};

export default Notification;
