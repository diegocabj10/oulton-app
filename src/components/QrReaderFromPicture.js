import React from "react";
import QrReader from "react-qr-reader";
import Button from "@material-ui/core/Button";
import Backup from '@material-ui/icons/Backup';


export default class QrReaderFromPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: "No result",
    };

    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    this.setState({
      result: data,
    });
  }
  handleError(err) {
    console.error(err);
  }
  openImageDialog() {
    this.refs.qrReader1.openImageDialog();
  }

  render() {
    const previewStyle = {
      height: 240,
      width: 320,
    };

    return (
      <div>
        <QrReader
          ref="qrReader1"
          delay={this.state.delay}
          previewStyle={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          legacyMode={true}
        />
        <Button
          variant="contained"
          onClick={this.openImageDialog.bind(this)}
          endIcon={<Backup />}

        >
          Leer código QR desde una imagen
        </Button>
        <p>{this.state.result}</p>
      </div>
    );
  }
}
