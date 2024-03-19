import useAxios from "config/api/useAxios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const api = useAxios();

  // useEffect(() => {
  //   api.get("/");
  // });
  return (
    <div
      style={{
        height: "100vh",
        padding: "20px",
        backgroundColor: "#232323",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>

      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/login"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Login
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/signup"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            SignUp
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/homenine"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            HomeNine
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/postadeleven"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            PostAdEleven
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/postadtwo"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            PostAdTwo
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/products"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Products
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/categories"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Categories
          </Link>
        </li>
        <li>
          <Link
            to="/description"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Description
          </Link>
        </li>
        <li>
          <Link
            to="/postad"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Post Ad
          </Link>
        </li>
        <li>
          <Link
            to="/postad1"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Post Ad1
          </Link>
        </li>
        <li>
          <Link
            to="/postad2"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Post Ad2
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/thanks"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Thank You
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
