// Global CSS
import "./src/styles/global.css";
// Apply layout component accrouss all the pages
import React from "react";
import Layout from "./src/layout/layout";
export function wrapPageElement({ element, props }) {
  return <Layout {...props}></Layout>;
}
