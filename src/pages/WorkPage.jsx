import React from 'react';
import { Card, CardBody, Button } from 'reactstrap';
// import { Link } from 'react-router-dom';


const WorkPage = ({ title, content, buttonText, imageSrc, buttonDetails, link,Githublink }) => {

    return (
        <>
            <Card className="projectcard" style={{ marginBottom: "30px", backgroundColor: "aliceblue", border: "none" }}>
                <CardBody className="row">
                    <div className="col-md-6">
                        <h5 className="card-title h2 text-primary ">{title}</h5>
                        {content.map((paragraph, index) => (
                            <div key={index} className="d-flex align-items-center gap-3 choose__us-title">
                                {/* <FaHandPointRight className='icon' /> */}
                                <p className="card-text">{paragraph}</p>
                            </div>
                        ))}
                        <div className="d-flex h6 mt-4">
                            <Button color="primary" className="rounded-pill" onClick={() => window.open(link)}>
                                {buttonText}
                            </Button>

                            <Button outline color="primary" className="rounded-pill ms-3" onClick={() => window.open(Githublink)}>
                                {buttonDetails}
                            </Button>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <img src={imageSrc} alt='Comming Soon' className="img-fluid w-100" />
                    </div>
                </CardBody>
            </Card>

        </>
    )
}

export default WorkPage;
