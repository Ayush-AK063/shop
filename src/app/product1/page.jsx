"use client";
import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import Button from "@mui/material/Button";
import { IoGrid } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductItem from "../productItem1/ProductItem1";
import ProductItemListView from "../productItemListView1/ProductItemListView1";

const ProductListing = () => {
  const [ItemView, setItemView] = useState("grid");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header className="bg-white shadow-lg relative z-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center py-6">
            <div className="text-3xl font-serif font-extrabold bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
              corevist.
            </div>
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7">
              <Link
                href="/product1"
                underline="none"
                className="!text-blue-700 hover:!text-blue-600 !transition-colors !font-medium !text-lg"
              >
                product 1
              </Link>
              <Link
                href="/product2"
                underline="none"
                className="text-blue-700 hover:text-blue-600 transition-colors !font-medium !text-lg"
              >
                product 2
              </Link>
              <Link
                href="#"
                underline="none"
                className="text-blue-700 hover:text-blue-600 transition-colors !font-medium !text-lg"
              >
                About
              </Link>
              <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-lg ml-4">
                Contact Us
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <section className="py-0 pb-0">
        <div className="relative w-full flex justify-center items-center h-[400px] overflow-hidden bg-black/30">
          {/* Background image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/product1img.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.1, // 👈 only background is faded
            }}
          ></div>

          {/* Content (not affected by opacity) */}
          <div className="relative z-10">
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                underline="hover"
                color="inherit"
                href="/third"
                className="link !text-5xl !font-bold px-6 py-3 rounded-lg text-blue-800 hover:!text-blue-900"
              >
                Product 1
              </Link>
            </Breadcrumbs>
          </div>
        </div>

        <div className="px-2  bg-white">
          <div className="container flex gap-3">
            <div className="rightContent w-full py-3">
              <div className="bg-[#f1f1f1] w-full p-2 mb-4 rounded-md flex items-center justify-between">
                <div className="flex items-center col1 itemViewActions">
                  <Button
                    className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]
                                       ${ItemView === "list" && "active"}`}
                    onClick={() => setItemView("list")}
                  >
                    <IoMenu className="text-[rgba(0,0,0,0.7)]" />
                  </Button>

                  <Button
                    className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]
                                       ${ItemView === "grid" && "active"}`}
                    onClick={() => setItemView("grid")}
                  >
                    <IoGrid className="text-[rgba(0,0,0,0.7)]" />
                  </Button>
                </div>

                <div className="flex items-center justify-end gap-3 pr-4 ml-auto col2">
                  <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
                    Sort By:
                  </span>

                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    className="!bg-white !text-[14px] !text-[#000] !captialize !border-2 !border-[#000]"
                  >
                    Sales, heighest to lowest
                  </Button>

                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem
                      onClick={handleClose}
                      className="!text-[13px] !text-[#000] !captialize"
                    >
                      Sales, heighest to lowest
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className="!text-[13px] !text-[#000] !captialize"
                    >
                      Relevance
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className="!text-[13px] !text-[#000] !captialize"
                    >
                      Name A to Z
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className="!text-[13px] !text-[#000] !captialize"
                    >
                      Name Z to A
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className="!text-[13px] !text-[#000] !captialize"
                    >
                      Price low to high
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className="!text-[13px] !text-[#000] !captialize"
                    >
                      Price high to low
                    </MenuItem>
                  </Menu>
                </div>
              </div>

              <div
                className={`gap-4 ${
                  ItemView === "grid"
                    ? "grid grid-cols-4 md:grid-cols-4"
                    : "grid grid-cols-1 md:grid-cols-1"
                }`}
              >
                {ItemView === "grid" ? (
                  <>
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                  </>
                ) : (
                  <>
                    <ProductItemListView />
                    <ProductItemListView />
                    <ProductItemListView />
                    <ProductItemListView />
                    <ProductItemListView />
                    <ProductItemListView />
                    <ProductItemListView />
                    <ProductItemListView />
                    <ProductItemListView />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-900 via-blue-600 to-blue-900 py-20 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[600px] h-64 bg-gradient-to-br from-yellow-200/40 via-blue-200/30 to-yellow-300/30 rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row gap-6 mb-20 justify-center">
            <div className="group relative">
              <button className="relative bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-500 hover:to-yellow-700 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-1 shadow-2xl flex items-center justify-center border border-yellow-200">
                Contact Sales
              </button>
            </div>
            <div className="group relative">
              <button className="relative bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-1 shadow-2xl flex items-center justify-center border border-blue-200">
                Request Sample
              </button>
            </div>
          </div>
          <div className="grid lg:grid-cols-5 gap-12 mb-8">
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-100/50 to-blue-50/50 backdrop-blur-sm border border-yellow-200 rounded-2xl p-8">
                <h4 className="font-bold text-2xl text-yellow-900 mb-6 flex items-center">
                  SALES
                </h4>
                <p className="text-4xl font-bold text-yellow-900 mb-4 tracking-tight">
                  +1 800 123 4567
                </p>
                <p className="text-white text-lg leading-relaxed mb-6">
                  Our product experts are here to answer any questions you have
                  about our dyes and pigments.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-800 rounded-full animate-pulse"></div>
                  <span className="text-green-700 text-sm font-medium">
                    Available 24/7
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl text-yellow-900 mb-6 flex items-center">
                COMPANY
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Press Room
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    News & Media
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl text-yellow-900 mb-6 flex items-center">
                PRODUCT
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Textile Dyes
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Pigments
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Eco-Friendly Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl text-yellow-900 mb-6 flex items-center">
                RESOURCES
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Client Stories
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    ROI Calculator
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-yellow-200 py-2">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="flex flex-col lg:flex-row items-center lg:space-y-0 lg:space-x-8 mb-0 lg:mb-0">
                <span className="text-white text-lg">
                  © 2025 Dyes & Pigments Inc. All rights reserved.
                </span>
                <div className="flex space-x-6 text-sm">
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300"
                  >
                    Cookie Policy
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-900 transition-colors duration-300"
                  >
                    Terms of Use
                  </Link>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-3xl font-serif font-extrabold bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
                  corevist.
                </div>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center text-white hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center text-white hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.665 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center text-white hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ProductListing;
