import React from "react";

import { connect } from "react-redux";

import { deleteAccount } from "../../store/action";

const DeleteAccount = ({ deleteAccount }) => {
  const handleDeleteAccount = () => {
    deleteAccount();
    console.log("click");
  };
  return (
    <div>
      <div className="pt-16">
        <div
          className="font-bold underline hover:text-red-800"
          onClick={handleDeleteAccount()}
        >
          Supprimer mon compte
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  _id: state.user.loggedUser._id,
  email: state.user.loggedUser.email,
  isLoading: state.user.isLoading,
});

const mapDispatch = (dispatch) => ({
  deleteAccount: (_id) => {
    dispatch(deleteAccount(_id));
  },
});

export default connect(mapState, mapDispatch)(DeleteAccount);
