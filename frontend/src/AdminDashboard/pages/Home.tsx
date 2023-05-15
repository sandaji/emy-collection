import { useLocation } from "react-router-dom";

import { Sidebar, Navbar, Widget, Featured, Chart, Table } from "../components";
import "../style/home.scss";
import { Header } from "../../components";
import AdminNavbar from "../components/Navbar";

const AdminHome = () => {
  const location = useLocation();

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        {/* {location.pathname === "/" ? <Header /> : <AdminNavbar />} */}

        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
