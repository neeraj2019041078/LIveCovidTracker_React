import React, { useEffect ,useState} from "react";
import "./covid.css";

const initial_data={
    recovered:0,
    confirmed:0,
    deceased:0,
    vaccinated1:0,
    vaccinated2:0
}
const Covid = () => {
    const [data,setData] = useState(initial_data);
  const getCovidData = async () => {
    try {
      const res = await fetch(
        "https://data.covid19india.org/v4/min/data.min.json"
      );
      console.log(res);
      const actualData = await res.json();
      console.log(actualData.UP);
      setData(actualData.UP.total);

    } catch (err) {
      console.log(err);
    } };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}> 🔴 Live Now</h1>
      <h2 style={{ textAlign: "center" ,fontSize:50 }}> Covid -19 Coronavirus Tracker</h2>
        <ul style={{ listStyleType: "None" }}>
      <section style={{display:"flex"}}>
          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p
                  className="card__name"
                  style={{ fontSize: 30, fontWeight: 600 }}
                >
                  <span style={{ fontSize: 20 }}>Our</span> Country
                </p>
                <p
                  className="card__total card__small"
                  style={{ fontSize: 50, fontWeight: 600, margin: -10 }}
                >
                  INDIA
                </p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card__main" style={{backgroundColor:"#09BC6E"}}>
              <div className="card__inner">
                <p
                  className="card__name"
                  style={{ fontSize: 30, fontWeight: 600 }}
                >
                  <span style={{ fontSize: 20 }}>Total</span> Recovered 
                </p>
                <p
                  className="card__total card__small"
                  style={{ fontSize: 50, fontWeight: 600, margin: -10 }}
                >
                  {data.recovered}
                </p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card__main" style={{backgroundColor:"#EAF280"}}>
              <div className="card__inner">
                <p
                  className="card__name"
                  style={{ fontSize: 30, fontWeight: 600 }}
                >
                  <span style={{ fontSize: 20 }}>Total</span> Confirmed
                </p>
                <p
                  className="card__total card__small"
                  style={{ fontSize: 50, fontWeight: 600, margin: -10 }}
                >
                  {data.confirmed}
                </p>
              </div>
            </div>
          </li>

      </section>
      <section style={{display:"flex"}}>
          <li className="card">
            <div className="card__main" style={{backgroundColor:"#F58E53"}}>
              <div className="card__inner">
                <p
                  className="card__name"
                  style={{ fontSize: 30, fontWeight: 600 }}
                >
                  <span style={{ fontSize: 20 }}>Total</span> Deaths
                </p>
                <p
                  className="card__total card__small"
                  style={{ fontSize: 50, fontWeight: 600, margin: -10 }}
                >
                  {data.deceased}
                </p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card__main" style={{backgroundColor:"#536EF5"}}>
              <div className="card__inner">
                <p
                  className="card__name"
                  style={{ fontSize: 30, fontWeight: 600 }}
                >
                  <span style={{ fontSize: 20 }}>Total</span> vaccinated
                </p>
                <p
                  className="card__total card__small"
                  style={{ fontSize:50, fontWeight: 600, margin: -10 }}
                >
                 {data.vaccinated1}
                </p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card__main" style={{backgroundColor:"#D783CE"}}>
              <div className="card__inner">
                <p
                  className="card__name"
                  style={{ fontSize: 30, fontWeight: 600 }}
                >
                  <span style={{ fontSize: 20 }}>last</span> Fully vaccinated
                </p>
                <p
                  className="card__total card__small"
                  style={{ fontSize: 50, fontWeight: 600, margin: -10 }}
                >
                  {data.vaccinated2}
                </p>
              </div>
            </div>
          </li>
          </section>
        </ul>
    </>
  );
};

export default Covid;
