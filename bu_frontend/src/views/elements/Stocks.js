import React from "react";
//import "./App.css";
import {db} from '../../vibe/services/db';
import props from 'prop-types';

//constructor(props) {
//    super(props);
//}
export const Stocks = () => {    
    return (
      <>
        <HomePageHeader />
        <div className="">
          {db.map((data, key) => {
            return (
              <div key={key}>
                <Stock
                  key={key}
                  hash={data.hash}
                  secao={data.secao}
                  zona={data.zona}
                  uf={data.uf}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  };
  
  const HomePageHeader = () => {
    return (
      <header className="header">
        <h2>Your Stock Tracker</h2>
      </header>
    );
  };
  
  const Stock = ({ hash, zona, secao, turno }) => {
    if (!hash) return <div />;
    return (
      <table>
        <tbody>
          <tr>
            <td>
                <h1>hash:</h1>
                <h5>{hash}</h5>
            </td>
            <td>
                <h1>zona:</h1>
                <h5>{zona}</h5>
            </td>
            <td>
                <h1>seção:</h1>
                <h4>{secao}</h4>
            </td>
            <td>
                <h1>turno:</h1>
                <p>{turno}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };