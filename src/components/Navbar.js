import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  RiHome6Line,
  RiNewspaperLine,
  RiCommunityLine,
  RiFilePaper2Line,
} from "react-icons/ri";
import { IoMdSwap } from "react-icons/io";
import { ImHammer2, ImTicket } from "react-icons/im";
import { BiCoinStack } from "react-icons/bi";
import { FaFileContract } from "react-icons/fa";
import FomoBaby from "../assets/pdf/White Paper Fomobaby.pdf";
import FomoBabyAudit from "../assets/pdf/audit.pdf";

const Navbar = () => {
  return (
    <div className="aside-menu force-show">
      <ul className="menu-list">
        <li className="menu-item">
          <NavLink
            activeClassName="router-link-active"
            exact
            to="/"
            className="router-link-exact-active link-item"
          >
            <RiHome6Line className="icon" />
            Home
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink
            exact
            activeClassName="router-link-active"
            to="/swap"
            className="router-link-exact-active link-item"
          >
            <IoMdSwap className="icon" />
            Swap
          </NavLink>
        </li>
        <li className="menu-item">
          {/* <NavLink
            exact
            activeClassName="router-link-active"
            to="/comingsoon"
            className="router-link-exact-active link-item"
          > */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://fomobaby.app/lotto"
            className="router-link-exact-active link-item"
          >
            <ImTicket className="icon" />
            Lotto
          </a>
          {/* </NavLink> */}
        </li>
        <li className="menu-item">
          <NavLink
            exact
            activeClassName="router-link-active"
            to="/comingsoonnft"
            className="router-link-exact-active link-item"
          >
            <ImHammer2 className="icon" />
            NFT Marketplace
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink
            exact
            activeClassName="router-link-active"
            to="/comingsoonstaking"
            className="router-link-exact-active link-item"
          >
            <BiCoinStack className="icon" />
            Staking
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink
            activeClassName="router-link-active"
            exact
            to="/news"
            className="router-link-exact-active link-item"
          >
            <RiNewspaperLine className="icon" />
            News Articles
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink
            activeClassName="router-link-active"
            exact
            to="/community"
            className="router-link-exact-active link-item"
          >
            <RiCommunityLine className="icon" />
            Community
          </NavLink>
        </li>
        <li className="menu-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={FomoBaby}
            className="router-link-exact-active link-item"
          >
            <RiFilePaper2Line className="icon" />
            Whitepaper
          </a>
        </li>
        <li className="menu-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://bscscan.com/address/0x82D6E409438E9c2eAEd8ceec4Bd95918cbd17c87"
            className="router-link-exact-active link-item"
          >
            <FaFileContract className="icon" />
            Contract
          </a>
        </li>
        <li className="menu-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={FomoBabyAudit}
            className="router-link-exact-active link-item"
          >
            <FaFileContract className="icon" />
            Audit
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
