import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';


class ContactMe extends React.Component{
  constructor(){
    super();
    this.hanldeSubmit = this.hanldeSubmit.bind(this);
  }
  hanldeSubmit =(event) =>{
event.preventDefault();


  }
  render(){
    return (
      
        <div className="contact_me">
        <h3>You can reach me</h3>

        <div className="contact-content">
       
       {/* content --one */}
        <div className="form">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form className="contact-form" onSubmit={this.hanldeSubmit}>
              <div className="contact">
                <MDBInput
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Subject"
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  type="textarea"
                  rows="2"
                  label="Your message"
                  icon="pencil-alt"
                />
              </div>
              <div className="text-center">
                <MDBBtn  className ="btn btn-default"  size="sm">
                  Send <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
      {/* end of content one */}
      {/* content two */}
      <div className="details">
    <p><i className="fas fa-map-marker-alt"></i> The Reserve at Walnut creek Apartments</p>
    <p><i className="fas fa-phone"></i>54287687</p>
    <p><i className="fas fa-envelope"></i>bakemore@gmail.com</p>
      </div>
      {/* end of content two */}
      </div>  {/*end of contact-content */}
      </div> 
    //   end of contact
    );
  }
  }


export default ContactMe;