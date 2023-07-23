import Navbar from "./Navbar";
import axios from "axios";

console.log(axios.isCancel("something"));
export default function Header() {
  function addDropOff(address) {
    axios.post("https://api.mapbox.com/optimized-trips/v2", {
      version: 1,
      vehicles: [],
      services: [],
    });
  }

  return (
    <div>
      <Navbar />
      <p>Header</p>
      <label htmlFor="Dropoff address">Dropoff address</label>
      <input type="text" />
      <input
        type="button"
        value="addDropOff"
        id="addDropOff"
        onClick={addDropOff}
      />
      <input type="text" />
      <input type="button" value="addDropOff" id="addDropOff" />
      np
    </div>
  );
}

<style></style>;
