import React from 'react';
import Accordion from 'react-bootstrap/Accordion'

function ToolsPane() {

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Load Data</Accordion.Header>
                <Accordion.Body>
                    <p> The following data types are accepted:</p>
                    <ol>
                        <li>Zipped Shapefile</li>
                        <li>GeoJSON File</li>
                    </ol><br />
                    <input type="file" id="file_input" multiple />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>View GeoJSON</Accordion.Header>
                <Accordion.Body>
                    <p>
                        GeoJSON content here
                    </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default ToolsPane;