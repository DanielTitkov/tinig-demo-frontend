import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
    const currentUser = useSelector((state) => state.user.currentUser);

    return <div>{ JSON.stringify(currentUser) }</div>;
};

export default UserProfile;
