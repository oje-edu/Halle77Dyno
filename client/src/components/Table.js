import { useState, useEffect } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import "./table.css";

import axios from "../api/axios";
const MESSUNGEN_URL = "/messungen";

// import {
//   MuiThemeProvider,
//   createMuiTheme,
//   FormControlLabel,
//   Switch,
//   Grid,
//   Typography,
//   Divider,
// } from "@material-ui/core";

//let sortedData = cars.slice().sort((a, b) => a.id - b.id);
//console.log(JSON.stringify(sortedData));

const Table = () => {
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    axios.get(MESSUNGEN_URL).then((response) => {
      setTableData(response.data);
      //console.log(response.data);
    });
  }, []);

  if (!tableData) return null;

  const columns = [
    {
      title: "Episode",
      field: "episode_id",
      type: "numeric",
      filterPlaceholder: "Episode",
    },
    { title: "Nr", field: "nr", type: "numeric", filtering: false },
    {
      title: "Marke",
      field: "marke",
      filterPlaceholder: "Marke",
      // lookup: {
      //   "Alfa Romeo": "Alfa Romeo",
      //   Audi: "Audi",
      //   Barkas: "Barkas",
      //   BMW: "BMW",
      //   Cadillac: "Cadillac",
      //   Caterham: "Caterham",
      //   Citroen: "Citroen",
      //   Dacia: "Dacia",
      //   Daihatsu: "Daihatsu",
      //   Dodge: "Dodge",
      //   Ferrari: "Ferrari",
      //   Fiat: "Fiat",
      //   Ford: "Ford",
      //   Honda: "Honda",
      //   Jaguar: "Jaguar",
      //   Jeep: "Jeep",
      //   KitCar: "KitCar",
      //   Lada: "Lada",
      //   Lancia: "Lancia",
      //   Lexus: "Lexus",
      //   Mazda: "Mazda",
      //   Mercedes: "Mercedes",
      //   Mitsubishi: "Mitsubishi",
      //   Mini: "Mini",
      //   "Morris Mini": "Morris Mini",
      //   Nissan: "Nissan",
      //   NSU: "NSU",
      //   Oldsmobile: "Oldsmobile",
      //   Opel: "Opel",
      //   Pontiac: "Pontiac",
      //   Porsche: "Porsche",
      //   Renault: "Renault",
      //   Peugeot: "Peugeot",
      //   Saab: "Saab",
      //   Seat: "Seat",
      //   Skoda: "Skoda",
      //   Smart: "Smart",
      //   Subaru: "Subaru",
      //   Triumph: "Triumph",
      //   Toyota: "Toyota",
      //   Volvo: "Volvo",
      //   VW: "VW",
      // },
      sorting: false,
    },
    { title: "Modell", field: "modell", filtering: false },
    { title: "Hubraum", field: "ccm", type: "numeric", filtering: false },
    { title: "PS", field: "hp", type: "numeric", filtering: false },
    // {
    //   title: "KM",
    //   field: "km",
    //   type: "numeric",
    //   filtering: false,
    //   sorting: false,
    // },
    // {
    //   title: "BJ",
    //   field: "year",
    //   type: "numeric",
    //   filtering: false,
    //   sorting: false,
    // },
    {
      title: "1. Messung",
      field: "ps1",
      filtering: false,
      align: "center",
      sorting: false,
      render: (rowData) => (
        <div
          style={{
            background: rowData.ps1 < rowData.hp ? "#f90000aa" : "#008000aa",
            borderRadius: "4px",
            paddingLeft: 5,
            color: "white",
          }}
        >
          {/* {rowData.ps1 ? rowData.ps1.join(", ") : "-"} */}
          {rowData.ps1 ? rowData.ps1 : "-"}
        </div>
      ),
    },
    {
      title: "2. Messung",
      field: "ps2",
      filtering: false,
      align: "center",
      sorting: false,
      render: (rowData) => (
        <div
          style={{
            background: rowData.ps2 < rowData.hp ? "#f90000aa" : "#008000aa",
            borderRadius: "4px",
            paddingLeft: 5,
            color: "white",
          }}
        >
          {/* {rowData.ps2 ? rowData.ps2.join(", ") : "-"} */}
          {rowData.ps2 ? rowData.ps2 : "-"}
        </div>
      ),
    },
    // { title: "Bemerkung", field: "comment", filtering: false, sorting: false },
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
          searchAutoFocus: false,
          searchFieldVariant: "standard",
          paging: true,
          pageSize: 20,
          pageSizeOptions: [20, 50, 100],
          filtering: true,
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          paginationPosition: "both",
          grouping: false,
          headerStyle: {
            backgroundColor: "#de6e4a",
            color: "#000",
            border: "none",
          },
        }}
        localization={{
          body: {
            emptyDataSourceMessage: "Keine Einträge",
            addTooltip: "Hinzufügen",
            deleteTooltip: "Löschen",
            editTooltip: "Bearbeiten",
            filterRow: {
              filterTooltip: "Filter",
            },
            editRow: {
              deleteText: "Diese Zeile wirklich löschen?",
              cancelTooltip: "Abbrechen",
              saveTooltip: "Speichern",
            },
          },
          grouping: {
            placeholder: "Spalten ziehen ...",
            groupedBy: "Gruppiert nach:",
          },
          header: {
            actions: "Aktionen",
          },
          pagination: {
            labelDisplayedRows: "{from}-{to} von {count}",
            labelRowsSelect: "Zeilen",
            labelRowsPerPage: "Zeilen pro Seite:",
            firstAriaLabel: "Erste Seite",
            firstTooltip: "Erste Seite",
            previousAriaLabel: "Vorherige Seite",
            previousTooltip: "Vorherige Seite",
            nextAriaLabel: "Nächste Seite",
            nextTooltip: "Nächste Seite",
            lastAriaLabel: "Letzte Seite",
            lastTooltip: "Letzte Seite",
          },
          toolbar: {
            addRemoveColumns: "Spalten hinzufügen oder löschen",
            nRowsSelected: "{0} Zeile(n) ausgewählt",
            showColumnsTitle: "Zeige Spalten",
            showColumnsAriaLabel: "Zeige Spalten",
            exportTitle: "Export",
            exportAriaLabel: "Export",
            exportName: "Export als CSV",
            searchTooltip: "Suche",
            searchPlaceholder: "Suche",
          },
        }}
      />
    </div>
  );
};

export default Table;
