const CODES = {
  A: 65,
  Z: 90
}

function creareRow() {
  return `
      <div class="row">
       <div class="row-info"></div>
       <div class="row-data"></div>
      </div>
  `
}

function createCol() {
  return `
      <div class="column">
       A
      </div>
  `
}

function createCell() {
  return `
      <div class="cell" contenteditable="true">
       B2
      </div>
  `
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A
  const rows = []
  return `<h1>Table</h1>`
}
