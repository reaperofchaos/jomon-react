import { DataGrid, GridColDef } from "@mui/x-data-grid";
import useGetAllExperts from "../hooks/useGetAllExperts";
import { useSelector } from "react-redux";
import { selectAllExperts } from "../selectors";
import { Box } from "@mui/material";

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


  return (
    <Box sx={{ height: "65vh", width: "100%" }}>
      <DataGrid
        rows={expertList}
        columns={columns}
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
