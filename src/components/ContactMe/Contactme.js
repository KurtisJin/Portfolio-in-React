import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactMe() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_xfrnsjk', 'template_w6i2mpk', e.target, 'user_vccCy2B5SXosoRj67LR6F')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

    return (

        <section class="contact" id="contact">
        <div class="max-width">
            <h2 class="title">Contact me</h2>
            <div class="contact-content">
                <div class="column left">
                    <div class="text">Get in Touch</div>
                    <p>Thank you for making it this far! This means, you may just be interested in me! Please call and/or leave me a message and I will get back to you ASAP!</p>
                    <div class="icons">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Kurtis Jin</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">Addison, Texas</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">kurtisjin21@gmail.com</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-phone-square"></i>
                            <div class="info">
                                <div class="head">Phone</div>
                                <div class="sub-title">972-877-3505</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    <div class="text">Message me</div>
                    <form class="contact-form" onSubmit={sendEmail} action="#" method="POST">
                        <div class="fields">
                            <div class="field name">
                                <input type="text" class="fullname" placeholder="Name" name="name" />
                            </div>
                            <div class="field email">
                                <input type="text" class="email-input" placeholder="Email" name="email" />
                            </div>
                        </div>
                        <div class="field">
                            <input type="text" class="subject" placeholder="Subject" name="subject" />
                        </div>
                        <div class="field textarea">
                            <textarea class="message" cols="30" rows="10" placeholder="Message.." name="message"></textarea>
                        </div>
                        <div class="button-area">
                            <button class="send-msg" type="submit" name="send" onClick="sendMail(); return false">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>



    )

}