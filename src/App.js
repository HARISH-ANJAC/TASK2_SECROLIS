import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CardComponent from "./CustomCardView";
import DetailsPage from "./DetailsScreen";
import languages from "./datas";

const language=languages;

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Programming Languages</h1>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              
              <div className="card-container">
                {language.map((item) => (
                  <CardComponent
                    key={item.id}
                    id={item.id}
                    CardTitle={item.title}
                    CardImg={item.img}
                    CardDescriptions={item.description}
                  />
                ))}
              </div>
            }
          />
          <Route path="/details/:id" element={<DetailsPage services={languages} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
