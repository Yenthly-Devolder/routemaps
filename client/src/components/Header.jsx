import Navbar from './Navbar'
export default function Header() {
  function addDropOff(address) {
    
  }

  return (
    <div>
      <Navbar/>
      <p>Header</p>
      <label htmlFor="Dropoff address">Dropoff address</label>
      <input type="text" />
      <input type="button" value="addDropOff" id="addDropOff" onClick={
        addDropOff
      }/>
      <input type="text" />
      <input type="button" value="addDropOff" id="addDropOff" />np
    </div>
  );
}   

<style>

</style>
