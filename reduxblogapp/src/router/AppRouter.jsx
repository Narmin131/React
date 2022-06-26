import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import Nav from "../components/Nav"
import Home from "../components/pages/Home"
import Blogs from "../components/pages/Blogs"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Route path="/" exact component={Home}></Route>
      <Route path="/blogs"  component={Blogs}></Route>
    </BrowserRouter>
  )
}

export default AppRouter