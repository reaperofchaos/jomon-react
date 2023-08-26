import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import useGetAllExperts from "../hooks/useGetAllExperts";
import { useSelector } from "react-redux";
import { selectAllExperts } from "../selectors";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ExpertList = () => {
  useGetAllExperts();

  const expertList = useSelector(selectAllExperts);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "middleName",
      headerName: "Middle name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "suffix",
      headerName: "Suffix",
      width: 110,
      editable: true,
    },
  ];

  const navigate = useNavigate();

  const handleEvent: GridEventListener<"rowClick"> = (
    params // GridRowParams
  ) => navigate(`/Expert/${params.row.id}`);
  return (
    <Box sx={{ height: "65vh", width: "100%" }}>
      <DataGrid
        rows={expertList}
        columns={columns}
        onCellClick={handleEvent}
        density="compact"
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default ExpertList;
