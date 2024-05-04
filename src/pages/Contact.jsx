import React, { useEffect, useState } from 'react'
import { Alert, Button, Col, Container, Form, FormGroup, Input, Label, Row, Spinner } from 'reactstrap'
import email_send from '../assets/email.png'
import '../styles/Contact.css'
import Aos from 'aos';
const Contact = () => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');
 const [success, setSuccess] = useState(false);
 const [emailError, setEmailError] = useState('');

 const SignUp = async () => {
  if (!email) {
    setEmailError('Email is required');
    setTimeout(() => {
      setEmailError(false);
    }, 2000);
    return;
  }




  try {
    const response = await fetch("https://portfolio-server-v52b.onrender.com/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      
      }),
    });

    if (response.ok) {
      const resData = await response.json();
      console.log(resData);
      alert(resData.message);
      setSuccess(true);
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } else {
      console.error("Failed to submit data");
    }
  } catch (error) {
    console.error("Error submitting data:", error);
  }

};


  useEffect(() => {
    Aos.init();
  })
  return (
    <>
      <section className="pt-0 w-100" id='contect'>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5" data-aos="zoom-in" data-aos-delay="200">
              <h5 className='text-primary'>Contact Me</h5>
              <h2>Get in Touch With Me.</h2>
            </Col>
          </Row>
          <Row>
            <Col md={6} data-aos="fade-right" data-aos-delay="300">
              <div className="" >
                <img src={email_send} alt="" className='img-fluid w-75' />
              </div>
            </Col>
            <Col md={6} className='mt-5'>
            {emailError && <Alert color="danger" className="mt-3">
                {emailError}
              </Alert>}
              <Form data-aos="fade-left" data-aos-delay="300">
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleName">
                        Name
                      </Label>
                      <Input
                        id="exampleName"
                        name="Name"
                        placeholder="Enter Your Name"
                        type="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                      

                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">
                        Email <span className=''>required</span>
                      </Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Enter Your email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                      

                    </FormGroup>
                  </Col>
                </Row>
                  <Row>
                  <Col md={12}>
                  <FormGroup>
                      <Label for="exampleText">
                        Message
                      </Label>
                      <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                        placeholder="Send Me Message"
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}/>
                     
                    </FormGroup>
                  </Col>
                  </Row>
                    {success && (
                  <Alert color="success" className="mt-3">
                    Your message has been sent successfully!
                  </Alert>
                )}
                  <Button color="primary"
                  outline onClick={SignUp} >
                  
                      Send Me <i class="ri-send-plane-fill ms-2"></i>
                   
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section >
    </>
  )
}

export default Contact