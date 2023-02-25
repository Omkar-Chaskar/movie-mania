import React, {useState} from 'react';
import MovieDetail from './MovieDetail';
function Movies() {
  
  const [show, setShow] = useState(false);

  function handleShow(operation) {
    setShow(operation);
    console.log("click" + operation + show)
  }

  return (
    <>
      {show ? (<MovieDetail handleShow={handleShow}/>) : (<></>) }
      
      <ul className="cards">
        <li className="cards_item" onClick={() => handleShow(true)}>
          <div className="card">
            <div className="card_image">
              <img src="https://picsum.photos/300/400/?image=10" alt=''/>
            </div>
            <div className="card_content">
              <h2 className="card_title">Card title</h2>
            </div>
          </div>
        </li>
        <li className="cards_item" onClick={() => handleShow(true)}>
          <div className="card">
            <div className="card_image">
              <img src="https://picsum.photos/300/400/?image=10" alt=''/>
            </div>
            <div className="card_content">
              <h2 className="card_title">Card title</h2>
            </div>
          </div>
        </li>
        <li className="cards_item" onClick={() => handleShow(true)}>
          <div className="card">
            <div className="card_image">
              <img src="https://picsum.photos/300/400/?image=10" alt=''/>
            </div>
            <div className="card_content">
              <h2 className="card_title">Card title</h2>
            </div>
          </div>
        </li>
        <li className="cards_item" onClick={() => handleShow(true)}>
          <div className="card">
            <div className="card_image">
              <img src="https://picsum.photos/300/400/?image=10" alt=''/>
            </div>
            <div className="card_content">
              <h2 className="card_title">Card title</h2>
            </div>
          </div>
        </li>
        <li className="cards_item" onClick={() => handleShow(true)}>
          <div className="card">
            <div className="card_image">
              <img src="https://picsum.photos/300/400/?image=10" alt=''/>
            </div>
            <div className="card_content">
              <h2 className="card_title">Card title</h2>
            </div>
          </div>
        </li>
        <li className="cards_item" onClick={() => handleShow(true)}>
          <div className="card">
            <div className="card_image">
              <img src="https://picsum.photos/300/400/?image=10" alt=''/>
            </div>
            <div className="card_content">
              <h2 className="card_title">Card title</h2>
            </div>
          </div>
        </li>
      </ul>
    </>
  )
}

export default Movies