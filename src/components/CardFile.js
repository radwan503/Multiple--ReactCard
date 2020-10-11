import React from 'react';
import data from '../data.json';

import { Accordion, Card, Button } from 'react-bootstrap';


export default function CardFile() {
    return (
        <div className="container">
            <div className="bg-dark text-center py-5">
                <h1 className="text-white">Bootstrap Accordion</h1>
            </div>

            <div className="row">
                {
                    data.data.map((item, i) => {
                        return (
                            <div className="col-md-4 mb-2 mt-3" key={i}>
                                <Accordion>
                                    <Card>
                                        <Card.Header className="bg-dark">
                                            <Accordion.Toggle className="text-white text-decoration-none" as={Button} variant="link" eventKey="0">
                                                {item.Title}
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>{item.Details}</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
