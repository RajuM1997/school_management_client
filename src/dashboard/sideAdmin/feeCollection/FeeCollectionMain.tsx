import { Container, Paper } from "@mui/material";
import FeeChart from "./FeeChart";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../../components/loader/Loader";

type FeeData = {
  date: any;
  totalPaid: any;
};

const FeeCollectionMain = () => {
  const [data, setData] = useState<FeeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newDate = new Date();
        const queryDate = newDate.toISOString();
        const response = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_BASE_URL
          }/student/payment/single/daily?date=${queryDate}`
        );
        setData(response.data);
      } catch (err: any) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log({ data });

  return (
    <div>
      <Container maxWidth={"xl"}>
        {loading ? (
          <Loader />
        ) : (
          <Paper
            className="dashboard_container_form"
            style={{ marginTop: "120px" }}
          >
            <FeeChart />
            <div className="today_pay">
              <h3 className="dashboard_common_title">
                Today Total Pay: <b>{data?.totalPaid}</b>
              </h3>
            </div>
          </Paper>
        )}
      </Container>
    </div>
  );
};

export default FeeCollectionMain;
