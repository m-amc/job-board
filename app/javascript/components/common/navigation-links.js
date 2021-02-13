import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { media } from './media-queries';
import { logoutUser } from '../../actions';

const Menu = styled.nav`
  display: ${ p => p.open ? 'block' : 'none'};
  position: absolute;
  width: 100%;
  left: 0;
  bottom: -125px;
  background: ${p => p.theme.bodyBackgroundColor};

  ul {
    list-style: none;
    padding: 0;
  }

  ${media.tablet`
    display: flex;
    align-items: center;
    position: relative;
    background: none;
    left: initial;
    bottom: initial;
    width: 50%;

    ul {
      display: flex;
      justify-content: flex-end;
      list-style: none;
      width: 100%;

      li {
        padding: 1rem;
        margin: 0 0.5rem;
      }
    }
  `}
`

Menu.propTypes = {
  open: PropTypes.bool.isRequired
}

const LinkItem = ({ children, ...props }) => {
  return (
    <Link {...props}>
      {children}
    </Link>
  )
}

LinkItem.propTypes = {
  children: PropTypes.node.isRequired
}

const StyledLink = styled(LinkItem)`
  display: block;
  text-align: center;
  margin: auto 0;
  text-decoration: none;
  padding: 0.5rem;
  color: ${ p => p.theme.bodyFontColor};
  font-size: 1.8rem;

  &:hover{
    font-weight: bold;
    cursor: pointer;
  }

  ${media.tablet`
    color: white;

    /* hack to prevent font-weight bold jump*/
    &::before{
      display: flex;
      content: attr(data-text);
      font-weight: bold;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }
  `}
`

const FIND_JOBS = "Find jobs";
const POST_JOBS = "Post jobs";
const EMPLOYER_SIGN_UP = "Sign Up"
const LOGOUT = "Logout"

export const NavigationMenu = ({ menuOpen }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { logged_in: isLoggedIn } = useSelector(state => state.user.currentUser)

  return (
    <Menu open={menuOpen}>
      <ul>
        <li>
          <StyledLink to="/jobs" data-text={FIND_JOBS}>
            {FIND_JOBS}
          </StyledLink>
        </li>
        {/* LOGIN / POST JOBS*/}
        <li>
          <StyledLink to="/login" data-text={POST_JOBS}>
            {POST_JOBS}
          </StyledLink>
        </li>
        {/* LOGOUT */}
        {
          isLoggedIn && (<li>
            <StyledLink
              to="/logout"
              data-text={LOGOUT}
              onClick={(e) => {
                e.preventDefault();
                dispatch(logoutUser());
                history.push("/")
              }}>
              {LOGOUT}
            </StyledLink>
          </li>)
        }
        {/* SIGN UP */}
        {
          !isLoggedIn && (
            <li>
              <StyledLink to="/join/sign-up" data-text={EMPLOYER_SIGN_UP}>
                {EMPLOYER_SIGN_UP}
              </StyledLink>
            </li>
          )
        }
      </ul>
    </Menu>
  )
}

NavigationMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired
}