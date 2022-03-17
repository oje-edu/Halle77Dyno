import { useState, useEffect } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import ScrollArrow from "./ScrollArrow";
import "./table.css";

import axios from "../api/axios";
const EPISODEN_URL = "/episodes";

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
    axios.get(EPISODEN_URL).then((response) => {
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
    {
      title: "Nr",
      field: "messung_nr",
      type: "numeric",
      filtering: false,
      sorting: false,
    },
    {
      title: "Marke",
      field: "messung_marke",
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
    { title: "Modell", field: "messung_modell", filtering: false },
    {
      title: "Hubraum",
      field: "messung_ccm",
      type: "numeric",
      filtering: false,
    },
    {
      title: "PS",
      field: "messung_hp",
      type: "numeric",
      filtering: false,
      render: (rowData) => (
        <div
          style={{
            background: "#f5f5f5",
            borderRadius: "4px",
            padding: "0 4px",
            color: "black",
            display: rowData.messung_hp ? "inline-block" : "none",
            fontFamily: "monospace",
          }}
        >
          {/* {rowData.ps1 ? rowData.ps1.join(", ") : "-"} */}
          {rowData.messung_hp ? rowData.messung_hp : "-"}
        </div>
      ),
    },
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
      field: "messung_ps1",
      filtering: false,
      align: "center",
      sorting: false,
      render: (rowData) => (
        <div
          style={{
            background:
              rowData.messung_ps1 < rowData.messung_hp
                ? "#f90000aa"
                : "#008000aa",
            borderRadius: "4px",
            padding: "0 3px",
            color: "white",
            display: rowData.messung_ps1 ? "inline-block" : "none",
            fontFamily: "monospace",
          }}
        >
          {/* {rowData.ps1 ? rowData.ps1.join(", ") : "-"} */}
          {rowData.messung_ps1 ? rowData.messung_ps1 : "-"}
        </div>
      ),
    },
    {
      title: "2. Messung",
      field: "messung_ps2",
      filtering: false,
      align: "center",
      sorting: false,
      render: (rowData) => (
        <div
          style={{
            background:
              rowData.messung_ps2 < rowData.messung_hp
                ? "#f90000aa"
                : "#008000aa",
            borderRadius: "4px",
            padding: "0 3px",
            color: "white",
            display: rowData.messung_ps2 ? "inline-block" : "none",
            fontFamily: "monospace",
          }}
        >
          {/* {rowData.ps2 ? rowData.ps2.join(", ") : "-"} */}
          {rowData.messung_ps2 ? rowData.messung_ps2 : "-"}
        </div>
      ),
    },
    // { title: "Bemerkung", field: "messung_comment", filtering: false, sorting: false },
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
          paginationPosition: "bottom",
          grouping: true,
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
        // parentChildData={(row, rows) =>
        //   rows.find((a) => a.episode === row.episode_id)
        // }
      />
      <ScrollArrow />
    </div>
  );
};

export default Table;
