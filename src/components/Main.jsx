import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // isLoading: true,
            data: null,
            resp: []
        };

        this.handleUploadImage = this.handleUploadImage.bind(this);
    }

    handleUploadImage(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        // data.append('filename', this.fileName.value);

        fetch('http://localhost:5000/upload', {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.json().then((body) => {
                // this.setState({ isLoading: false, resp: body });
                this.setState({ imageURL: `http://localhost:5000/${body.file}` });
                // console.log("data : ", data)
                // console.log("response : ", response)
                // console.log("body : ", body.JOB_DESCRIPTION)
                // console.log("body.file : ", body.file)
            });
        });
        // console.log(this.state.isLoading)
    }

    render() {
        return (
            <>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
                    crossorigin></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
                    crossorigin></script>

                <script>var Alert = ReactBootstrap.Alert;</script>

                <Card className="text-center">
                    {/* <Card.Header>UPLOAD THE JD</Card.Header> */}
                    <Card.Body>
                        <Card.Title>Upload the JD here...</Card.Title>
                        <Card.Text>
                            <form onSubmit={this.handleUploadImage}>
                                <div>
                                    <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
                                </div>
                                {/* <div>
                                    <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
                                </div> */}
                                <br />
                                <div>
                                    <button className='button'><span>Upload</span></button>
                                </div>
                            </form>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">NOTE: .xlsx and .pdf files supported</Card.Footer>
                </Card>
                {/* <div className="text-center mt-5">
                    {this.state.isLoading && (
                        <i className="fa fa-spinner fa-spin fa-5x"></i>
                    )}
                </div> */}

                {this.state.resp !== null && (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th># Ranking</th>
                                <th>Job Position</th>
                                <th>Percentage Match</th>
                                <th>Job Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {console.log(this.state.resp.JOB_DESCRIPTION)}
                            {this.state.resp.map((data, index) => (
                                < tr key={index} >
                                    <td>{index + 1}</td>
                                    <td>{data.JOB_DESCRIPTION}</td>
                                    <td>{data.JOB_DESCRIPTION}</td>
                                    <td>{data.JOB_DESCRIPTION}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )
                }
            </>
        );
    }
}

export default Main;
