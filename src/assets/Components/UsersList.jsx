import React from "react";
import styles from "./UsersList.module.css";

function UsersList(props) {
  return (
    <div className={styles.UsersList}>
      {props.users
        ? props.users.map((user) => (
            <p key={Math.random()} className={styles.theUser}>
              {user.Name} ({user.Age} years old)
            </p>
          ))
        : ""}
    </div>
  );
}

export default UsersList;
