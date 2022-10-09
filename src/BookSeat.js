import React, {useState} from 'react'
const bookingSeatsArr = () => {
   const arr = [];
   const arr2 = []
   for (let i = 1; i < 101; i++) i > 50 ? arr2.push(i) : arr.push(i);
   return [arr, arr2];
}

function BookSeat() {
   const [selectedSeats, setSelectedSeats] = useState([1, 2, 3])
   const [total, setTotal] = useState("1");
   const seats = bookingSeatsArr()
   const onSelect = seat => {
      let data = [];
      for (let i = 0; i < Number(total); i++) {
         data.push((i + seat) % 100 === 0 ? 100 : (i + seat) % 100);
      }
      setSelectedSeats(data);
   }
   return (
      <>
         <header></header>
         <div className='selection'>
            <div className="number-of-seats">
               <label htmlFor="totalseats">Select number of seats</label>
               <select value={total} onChange={e => setTotal(e.target.value)} id="totalseats">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
               </select>
            </div>
            <h2>Select Seat Number</h2>
            <div className='seat-selection'>
               <div className="left-section">
                  {seats[0].map(seat => <Seat key={seat} seatNo={seat} selected={selectedSeats.indexOf(seat) !== -1}  onSelect={onSelect}/>)}
               </div>
               <div className="right-section">
                  {seats[1].map(seat => <Seat key={seat} seatNo={seat} selected={selectedSeats.indexOf(seat) !== -1}  onSelect={onSelect}/>)}
               </div>
            </div>
         </div>
      </>
  )
}

export default BookSeat

function Seat({seatNo, selected, onSelect }) {
   return <div className={selected ? "active seat" : "seat"} onClick={() => onSelect(seatNo)}>
      {seatNo}
   </div>
}