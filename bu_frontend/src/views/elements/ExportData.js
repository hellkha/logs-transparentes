import React from 'react'
import usersData from './apuracao.json'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  ButtonGroup,
  ButtonToolbar,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const downloadFile = ({ data, fileName, fileType }) => {
    // Create a blob with the data we want to download as a file
    const blob = new Blob([data], { type: fileType })
    // Create an anchor element and dispatch a click event on it
    // to trigger a download
    const a = document.createElement('a')
    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    })
    a.dispatchEvent(clickEvt)
    a.remove()
  }
  
  const exportToJson = e => {
    e.preventDefault()
    downloadFile({
      data: JSON.stringify(usersData.users),
      fileName: 'apuracao.json',
      fileType: 'text/json',
    })
  }
  
  export default function ExportData() {
    return (
      <div className='App'>
        <div className='actionBtns'>
          <Button
          onClick={exportToJson}
          >
              Exportar em JSON
          </Button>
        </div>
      </div>
    )
  }
  
  