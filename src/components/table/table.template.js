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

function createCol(content) {
  return `<div class="column"> {content} </div>`
}

function createCell() {
  return `
      <div class="cell" contenteditable="true">
       B2
      </div>
  `
}

function toChar() {

}

function toColumn() {

}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A
  const rows = []

  const rows = new Array(colsCount)
    .fill('')
    .map(el, index => {
      return
    })

  return rows.join('')
}
