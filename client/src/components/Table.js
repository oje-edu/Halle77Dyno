import { useState } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
// import {
//   MuiThemeProvider,
//   createMuiTheme,
//   FormControlLabel,
//   Switch,
//   Grid,
//   Typography,
//   Divider,
// } from "@material-ui/core";

import { cars } from "../data/cars";
import "./table.css";

//let sortedData = cars.slice().sort((a, b) => a.id - b.id);
//console.log(JSON.stringify(sortedData));

const Table = () => {
  const [tableData, setTableData] = useState(cars);

  const columns = [
    {
      title: "Episode",
      field: "episode",
      type: "numeric",
      filterPlaceholder: "Episode",
    },
    { title: "Nr", field: "id", type: "numeric", filtering: false },
    {
      title: "Marke",
      field: "name",
      filterPlaceholder: "Marke",
      lookup: {
        "Alfa Romeo": "Alfa Romeo",
        Audi: "Audi",
        Barkas: "Barkas",
        BMW: "BMW",
        Cadillac: "Cadillac",
        Caterham: "Caterham",
        Citroen: "Citroen",
        Dacia: "Dacia",
        Daihatsu: "Daihatsu",
        Dodge: "Dodge",
        Ferrari: "Ferrari",
        Fiat: "Fiat",
        Ford: "Ford",
        Honda: "Honda",
        Jaguar: "Jaguar",
        Jeep: "Jeep",
        KitCar: "KitCar",
        Lada: "Lada",
        Lancia: "Lancia",
        Lexus: "Lexus",
        Mazda: "Mazda",
        Mercedes: "Mercedes",
        Mitsubishi: "Mitsubishi",
        Mini: "Mini",
        "Morris Mini": "Morris Mini",
        Nissan: "Nissan",
        NSU: "NSU",
        Oldsmobile: "Oldsmobile",
        Opel: "Opel",
        Pontiac: "Pontiac",
        Porsche: "Porsche",
        Renault: "Renault",
        Peugeot: "Peugeot",
        Saab: "Saab",
        Seat: "Seat",
        Skoda: "Skoda",
        Smart: "Smart",
        Subaru: "Subaru",
        Triumph: "Triumph",
        Toyota: "Toyota",
        Volvo: "Volvo",
        VW: "VW",
      },
      sorting: false,
    },
    { title: "Hubraum", field: "ccm", type: "numeric", filtering: false },
    { title: "PS", field: "hp", type: "numeric", filtering: false },
    {
      title: "KM",
      field: "km",
      type: "numeric",
      filtering: false,
      sorting: false,
    },
    {
      title: "BJ",
      field: "year",
      type: "numeric",
      filtering: false,
      sorting: false,
    },
    {
      title: "1. Messung",
      field: "messung1",
      filtering: false,
      align: "center",
      sorting: false,
      render: (rowData) => (
        <div
          style={{
            background:
              rowData.messung1[0] < rowData.hp ? "#f90000aa" : "#008000aa",
            borderRadius: "4px",
            paddingLeft: 5,
            color: "white",
          }}
        >
          {/* {rowData.messung1 ? rowData.messung1.join(", ") : "-"} */}
          {rowData.messung1 ? rowData.messung1[0] : "-"}
        </div>
      ),
    },
    {
      title: "2. Messung",
      field: "messung2",
      filtering: false,
      align: "center",
      sorting: false,
      render: (rowData) => (
        <div
          style={{
            background:
              rowData.messung2[0] < rowData.hp ? "#f90000aa" : "#008000aa",
            borderRadius: "4px",
            paddingLeft: 5,
            color: "white",
          }}
        >
          {/* {rowData.messung2 ? rowData.messung2.join(", ") : "-"} */}
          {rowData.messung2 ? rowData.messung2[0] : "-"}
        </div>
      ),
    },
    { title: "Bemerkung", field: "comment", filtering: false, sorting: false },
  ];
  return (
    <div>
      <MaterialTable
        title="Messungen"
        data={tableData}
        columns={columns}
        components={{
          Toolbar: (props) => (
            <div>
              <MTableToolbar {...props} />
              {/* <Grid align="right" style={{ padding: 15 }}>
                <Typography variant="subtitle2">
                  Number of rows : {props.data.length}
                </Typography>
              </Grid>
              <Divider /> */}
            </div>
          ),
        }}
        options={{
          searchFieldAlignment: "right",
          searchAutoFocus: true,
          searchFieldVariant: "standard",
          paging: true,
          pageSize: 20,
          pageSizeOptions: [20, 50, 100],
          filtering: true,
          align: "center",
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          paginationPosition: "both",
          grouping: true,
          headerStyle: {
            backgroundColor: "#de6e4a",
            color: "#FFF",
          },
        }}
      />
    </div>
  );
};

export default Table;
