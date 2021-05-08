import React from "react";
import "./Crear.css";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Actions } from "./Actions";

export default function Crear() {
  const data = Actions();  

  function onAfterInsertRow(row) {
    let newRowStr = "";

    for (const prop in row) {
      newRowStr += prop + ": " + row[prop] + " \n";
    }
  }

  const options = {
    afterInsertRow: onAfterInsertRow// A hook for after insert rows
  };


  return (
    <>
      <div className="bloque">      
        <BootstrapTable
          className="react-bs-table"
          data={data}
          insertRow={true}
          search={true}
          options={options}
        >
          <TableHeaderColumn dataField="id" isKey>
            Cod. Barra
          </TableHeaderColumn>
          <TableHeaderColumn dataField="descripcion">
            Descripcion
          </TableHeaderColumn>
          <TableHeaderColumn dataField="articulo">Articulo</TableHeaderColumn>
          <TableHeaderColumn dataField="marca">Marca</TableHeaderColumn>
        </BootstrapTable>
      </div>
    </>
  );
}
