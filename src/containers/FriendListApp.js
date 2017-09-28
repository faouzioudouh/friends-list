import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import {addFriend, deleteFriend, starFriend} from '../actions/FriendsActions';
import { FriendList, AddFriendForm, Pagination } from '../components';

const PAGE_SIZE = 2;
class FriendListApp extends Component {

  render () {
    const { friendsById, currentPage } = this.props;
    const paginatedFriendsList = (friendsById || [])
      .slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);

    const actions = {
      addFriend: this.props.addFriend,
      deleteFriend: this.props.deleteFriend,
      starFriend: this.props.starFriend
    };

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendForm addFriend={actions.addFriend} />
        <FriendList friends={paginatedFriendsList} actions={actions} />
        <div className="Pagination__wrapper">
            <Pagination
              totalItems={this.props.friendsById.length}
              pageSize={PAGE_SIZE} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({friendlist, pagination}) => ({
  friendsById: friendlist.friendsById,
  currentPage: pagination.currentPage
});

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend
})(FriendListApp)