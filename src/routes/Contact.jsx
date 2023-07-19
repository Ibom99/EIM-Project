import React, { useRef } from "react";
import "./Contact.css";
import Nav from "../components/Nav";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_agk7cbo",
        "template_k6mbs4d",
        form.current,
        "gHj_-Jba9AoxZpLlh"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="navigation">
        <Nav />
      </div>
      <div className="contact-content">
        <div className="form-container">
          <h1 className="contact-title">Contact</h1>
          <p className="contact-desc"><em>
            For all pricing and booking inquiries, please fill out the form
            below. We will love to hear from you! Or email us directly at{" "}
            <a className="form-email" href="mailto:tibbyomoarephoto@gmail.com">
              tibbyomoarephoto@gmail.com
            </a>
            .</em>
          </p>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label>Name / Company Name:</label>
            <input type="text" name="user_name" required />

            <label>Email:</label>
            <input type="email" name="user_email" required />

            <label>Contact Number:</label>
            <input
              type="number"
              name="user_number"
              maxLength={15}
              minLength={7}
            />

            <label>
              What does your photography/videography budget look like? (An
              estimate will be helpful)
            </label>
            <input type="number" name="user_budget" />

            <label>Which of our services will you need? </label>

            <div className="input-select">
              <span>
                <input
                  type="radio"
                  name="user_service"
                  value="photos"
                  id="photos"
                />
                <label htmlFor="photos">Photos</label>
              </span>

              <span>
                <input
                  type="radio"
                  name="user_service"
                  value="Drone Photography"
                  id="drone"
                />
                <label htmlFor="drone">Drone Photography</label>
              </span>

              <span>
                <input
                  type="radio"
                  name="user_service"
                  value="Both"
                  id="both"
                />
                <label htmlFor="both">Both</label>
              </span>

              {/* <label htmlFor="staging">Staging</label>
      <input type="radio" name="user_service" value="Staging" id='staging'/>    */}
            </div>

            <label>What's the deadline for this project?</label>
            <input type="date" name="user_deadline" />

            <label>
              Do you have permission from your clients to photograph the space?
            </label>

            <div className="input-select">
              <span>
                <input
                  type="radio"
                  name="user_permission"
                  value="Yes"
                  id="yes"
                />
                <label htmlFor="yes">Yes</label>
              </span>

              <span>
                <input type="radio" name="user_permission" value="No" id="no" />
                <label htmlFor="no">No</label>
              </span>
            </div>

            <label>
              What is the timeline between completion and access to the
              property?(This can be an estimate)
            </label>
            <input type="text" name="user_timeline" />

            <label>Where are the images or videos going to be used? </label>

            <div className="input-select">

              <span>
              <input
                type="radio"
                name="user_content_location"
                value="Website"
                id="website"
              />
              <label htmlFor="website">Website</label>
              </span>
             
             <span>
             

<input
  type="radio"
  name="user_content_location"
  value="Social Media"
  id="socialmedia"
/>
<label htmlFor="socialmedia">Social Media</label>

             </span>

             <span>
         
<input
  type="radio"
  name="user_content_location"
  value="Youtube"
  id="youtube"
/>
<label htmlFor="youtube">Youtube</label>
             </span>
              
              <span>
             

<input
  type="radio"
  name="user_content_location"
  value="Magazine Publication"
  id="magazinepublication"
/>
<label htmlFor="magazinepublication">Magazine Publication</label>
              </span>
             <span>
             <label htmlFor="other">Other</label>
              <input type="text" name="user_content_location" />
             </span>
             

             
            </div>

            <label>How many images do you need from this shoot?</label>

            <div className="input-select">

              <span>
              <input type="radio" name="user_images" value="10" id="ten" />
              <label htmlFor="ten">10</label>
              </span>
              
<span>
<input type="radio" name="user_images" value="20" id="twenty" />
              <label htmlFor="twenty">20</label>
</span>
              
<span>
<input
                type="radio"
                name="user_images"
                value="35"
                id="thirtyfive"
              />
              <label htmlFor="thirtyfive">35</label>

</span>

<span>
<label htmlFor="other">Other</label>
              <input type="number" name="user_images" id="other" />
</span>
              
              
            </div>

            <label>How did you find us and what made you contact us? </label>
            <input type="text" name="user_discover" />

            <label>
              Tell us a little bit about your project and why it's important to
              you.{" "}
            </label>
            <input type="text" name="user_project" />

            <label>
              Additional information you would like to share with us:
            </label>
            <textarea rows={10} name="message" />

            <input className="contact-submit" type="submit" value="SEND" />
          </form>
        </div>
        <div className="contact-img-container">
<img  className="contact-img" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689788835/Amal_sinterior-IMG_3690210820_lfjiim.jpg" />
</div>
      </div>


    </div>
  );
};

export default Contact;
