import _ from "lodash";
import MaterialTable, { MTableToolbar } from "material-table";
import "./table.css";

const Table = ({ tableData }) => {
  const sortedResponse = _.orderBy(tableData, (r) => r.episodeNr, ["desc"]);

  const columns = [
    {
      title: "Episode",
      field: "episodeNr",
      filterPlaceholder: "Episode",
    },
    {
      title: "Nr",
      field: "carNr",
      filtering: false,
      sorting: false,
    },
    {
      title: "Marke",
      field: "brand",
      filterPlaceholder: "Marke",
      sorting: false,
    },
    { title: "Modell", field: "type", filtering: false },
    {
      title: "Hubraum",
      field: "ccm",
      filtering: false,
    },
    {
      title: "PS",
      field: "hp",
      filtering: false,
      render: (rowData) => (
        <div
          style={{
            width: "50px",
            textAlign: "center",
            background: "#f5f5f5",
            borderRadius: "4px",
            padding: "0 4px",
            color: "black",
            display: rowData.hp ? "inline-block" : "none",
            fontFamily: "monospace",
          }}
        >
          {/* {rowData.ps1 ? rowData.ps1.join(", ") : "-"} */}
          {rowData.hp ? rowData.hp : "-"}
        </div>
      ),
    },
    // {
    //   title: "1. Messung",
    //   field: "ps1",
    //   filtering: false,
    //   sorting: false,
    //   render: (rowData) => (
    //     <div
    //       style={{
    //         width: "50px",
    //         textAlign: "center",
    //         // background: rowData.ps1 < rowData.hp ? "#f90000aa" : "#008000aa",
    //         borderRadius: "4px",
    //         padding: "0 3px",
    //         color: "white",
    //         // display: rowData.ps1 ? "inline-block" : "none",
    //         fontFamily: "monospace",
    //       }}
    //     >
    //       {/* {rowData.ps1 ? rowData.ps1.join(", ") : "-"} */}
    //       {/* {rowData.ps1 ? rowData.ps1 : "-"} */}
    //     </div>
    //   ),
    // },
    {
      title: "2. Messung",
      field: "ps2",
      filtering: false,
      sorting: false,
      render: (rowData) => (
        <div
          style={{
            width: "50px",
            textAlign: "center",
            background: rowData.ps2 < rowData.hp ? "#f90000aa" : "#008000aa",
            borderRadius: "4px",
            padding: "0 3px",
            color: "white",
            display: rowData.ps2 ? "inline-block" : "none",
            fontFamily: "monospace",
          }}
        >
          {/* {rowData.ps2 ? rowData.ps2.join(", ") : "-"} */}
          {rowData.ps2 ? rowData.ps2 : "-"}
        </div>
      ),
    },
    // { title: "Bemerkung", field: "messung_comment", filtering: false, sorting: false },
  ];
  return (
    <div className="pt-2 pb-16">
      <MaterialTable
        title="Messungen"
        data={sortedResponse}
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
            backgroundColor: "#6ee7b7",
            color: "#94a3b8",
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
