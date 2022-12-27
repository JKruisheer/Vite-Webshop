import { useState } from 'react'
import './App.css'
import {WelcomeComponent} from "./components/WelcomeComponent.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {IndexComponent} from "./components/IndexComponent";
import {WebshopComponent} from "./components/WebshopComponent";
import {UnknownPathComponent} from "./components/UnknownPathComponent";
import TemplateComponent from "./components/templates/TemplateComponent.tsx";

function App() {
  return (
      <Routes>
          <Route path="/" element={<WelcomeComponent />} />
          <Route path="/webshop" element={<WebshopComponent />} >
              <Route index element={<TemplateComponent title={"one!"} subtitle={"one"} />} />
              <Route path="details" element={<TemplateComponent title={"one!"} subtitle={"one"} />} />
              <Route path="otherdetails" element={<TemplateComponent title={"two!!"} subtitle={"twooo!"} />} />
          </Route>

          <Route path="/index" element={<IndexComponent />} />
          <Route path="*" element={<UnknownPathComponent />} />
      </Routes>

  )
}

export default App
