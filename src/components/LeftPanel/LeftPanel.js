import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchprofileName } from '../../actions';
import { connect } from 'react-redux';
import { Row, Col, Button} from 'antd';
import {
  StarOutlined,
  DribbbleOutlined,
  AimOutlined
} from '@ant-design/icons';

if (process.env.WEBPACK) {
  require('./LeftPanel.css'); // eslint-disable-line global-require
}

const LeftPanel = (props) => {
  const { dispatch, profileName, avatarUrl, profile } = props;

  useEffect(() => {
    dispatch(fetchprofileName());
  }, [])
  
  return (
    <div>
      {profile ? (
        <div className="leftPanel">
          <img height={250} src={avatarUrl}></img>
          <div className="profile-name">{profile.profileName}</div>
          <div className="profile-username">{profile.userName}</div>
          <div className="profile-bio">{profile.bio}</div>
          <Row>
            <span><Button className="follow-button" size='large' shape="round">Follow</Button></span>
            <span><Button className="dot-button" size='large' shape="round">...</Button></span>
          </Row>
          <Row className="networking">
            <span>{`${profile.followers} followers · ${profile.following} following · `}</span>
            <span> <StarOutlined spin={true}/></span>
          </Row>
          <div className={"icon"}><DribbbleOutlined />{`  ${profile.company}`}</div>
          <div className={"icon"}><AimOutlined />{`  ${profile.location}`}</div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { posts = [], isFetching = false, lastUpdated, profileName, avatarUrl, profile } = state;
  return {
    posts,
    isFetching,
    lastUpdated,
    profileName,
    avatarUrl,
    profile
  };
};

export default connect(mapStateToProps)(LeftPanel);