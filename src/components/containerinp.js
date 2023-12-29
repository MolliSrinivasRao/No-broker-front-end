import { FaSearch } from "react-icons/fa";
export function Containerinp() {
    return (
        <div>
            <article>
                <div>
                    <h1>World's Largest NoBrokerage Property Site</h1>
                </div>
                <div>
                    <form action="">
                        <div>
                            <select>
                                <option>Puna</option>
                                <option>Mumbai</option>
                                <option>Vizag</option>
                                <option>Bangalore</option>
                                <option>Chennai</option>
                                <option>Noida</option>
                                <option>Delhi</option>
                            </select>
                        </div>
                        <div>
                            <input type="text" placeholder="Search locations 3 Or More "></input>
                        </div>
                        <div>
                            <button><span><FaSearch />Search</span></button>
                        </div>
                        <div>
                            <input type="radio" name="house" /><label>Full House</label>
                            <input type="radio" name="house" /><label>PG / Hostel</label>
                            <input type="radio" name="house" /><label>Flatmates</label>
                        </div>
                        <select>
                            <option>Availablity</option>
                            <option>immediate</option>
                            <option>With in 15days</option>
                            <option>With in 30Days</option>
                            <option>After 30Days</option>
                        </select>
                    </form>
                </div>
            </article>
        </div>
    )
}