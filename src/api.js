import axios from "axios";
const url="https://data.covid19india.org/v4/min/data.min.json";
const get_data=async()=>{
    const data =await axios.get(url);
    return data;
}
export default get_data;
