import "./styles.css";
import { useState } from "react";

const customTable = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];
export default function App() {
  const [data, setData] = useState([...customTable]);

  const handleDateSort = () => {
    customTable.sort((a, b) => {
      const date1 = new Date(a.date);
      const date2 = new Date(b.date);
      if (date2.getTime() !== date1.getTime())
        return date2.getTime() - date1.getTime();
      else return b.views - a.views;
    });
    setData([...customTable]);
    console.log(data);
  };

  const handleViewsSort = () => {
    customTable.sort((a, b) => {
      if (b.views !== a.views) return b.views - a.views;
      else {
        const date1 = new Date(a.date);
        const date2 = new Date(b.date);
        return date2 - date1;
      }
    });
    setData([...customTable]);
  };

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={handleDateSort}> Sort by Date</button>
      <button onClick={handleViewsSort}> Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
