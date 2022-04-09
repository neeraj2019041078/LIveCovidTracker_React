import { Line, Pie } from "react-chartjs-2";
import { useState, useEffect } from "react";
import get_data from "./api";

function Lchart() {
  const [data, setData] = useState([]);

  const get_Data = async () => {
    const res = await get_data();
    setData(res.data);
  };
  //console.log(data);

  const Labels = [];

  Object.entries(data).map((item) => {
    Labels.push(item[1].total.tested);
  });

  // console.log(Labels);

const colors=[];
Labels.map((item) => {
  colors.push(`rgba(${item%225},${(item+50)%225},${(item+1000)%225})`);
});

  useEffect(() => {
    get_Data();
  }, []);

  return (
    <>
      <div>
        <h1 style={{textAlign:"center",color:"black",textDecoration:"underline"}}>Pie Chart</h1>

        <Pie
          datasetIdKey="id"
          data={{
            labels: Object.keys(data),
            datasets: [
              {
                id: 1,
                label: "",
                data: Labels,
                borderColor: 'rgb(14, 15, 15)',
                backgroundColor:colors
              },
            ],
          }}
        />
      </div>
      <div>
        <h1 style={{textAlign:"center",color:"black",textDecoration:"underline"}}>Line Chart</h1>
        <Line
          datasetIdKey="id"
          data={{
            labels: Object.keys(data),
            datasets: [
              {
                id: 1,
                label: "",
                data: Labels,
                borderColor: 'rgb(14, 15, 15)',
                backgroundColor:colors
              },
            ],
          }}
        />
      </div>
    </>
  );
}

export default Lchart;
