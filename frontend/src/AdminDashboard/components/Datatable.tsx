import "../style/datatable.scss";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { userColumns, userRows } from "../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

interface User {
  id: number;
  username: string;
  email: string;
  age: number;
  city: string;
}

const Datatable = () => {
  const [data, setData] = useState<GridRowsProp>(userRows);

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn: GridColDef[] = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/users/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={data} // pass in the data state variable as the 'rows' prop
        columns={userColumns} // pass in the 'userColumns' variable as the 'columns' prop
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25]}
      />
    </div>
  );
};

export default Datatable;
