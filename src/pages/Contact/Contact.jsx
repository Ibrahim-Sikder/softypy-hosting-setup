import {
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaUsers,
} from "react-icons/fa";
import Iframe from "react-iframe";
import "./Contact.css";
import { useRef } from "react";
import { useEffect } from "react";
import NavBar from "../Shared/NavBar/NavBar";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Subscribe from "../../components/Subscribe/Subscribe";
const Contact = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate()
const onSubmit = (data) => {
  const user = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message
  }

  fetch('http://localhost:5000/orders', {
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res=>res.json())
  .then(data=>{
   if(data.insertedId){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Thank you for submission ! We will contact you soon.',
      showConfirmButton: false,
      timer: 1500
    })
    navigate('/')
   }
  })
};


  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div>
      <section>
        <div className=" contactHeroSection">
          <div className="navsBarWrap">
            <NavBar />
            <div className="md:flex items-center justify-center text-center">
                <div className="questionWrap">
                <lottie-player
                    id="firstLottie"
                    ref={ref}
                    autoplay
                    loop
                    mode="normal"
                    src="/question.json"
                    className="animation"
                  ></lottie-player>
                </div>
                <div className="ml-3  text-white">
                  <h2 className="text-3xl mt-2 md:mt-0 md:text-4xl font-bold capitalize">
                  Need Exceptional  Services? <br /> call us 24/7
                  </h2> 
                  <span className="mt-2 block">+880 1762-380594</span>
                </div>
              </div>
          </div>
        </div>
      </section>
      <div className="contactInfoWrap">
        <section className="getInTouch">
          <div className="getInTouchLeft">
            <div className="getInTouchHead">
              <p className="text-xl font-bold uppercase">Reach & Contact us</p>
              <h2 className="text-4xl font-bold uppercase my-2">
                Get in touch{" "}
              </h2>
              <p className="mb-3">
                We would love to talk about how we can work together. Send us a
                message below and we will respond as soon as possible.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="formControl">
                <label> Name <span className="text-red-500 text-xl">*</span></label>
                <input
                {...register("name", { required: true })}
                name='name'
                  className="inputField"
                  type="text"
                  placeholder="Enter Your Full Name "
                  
                />
              </div>
              {errors.name && <p className="text-red-500 ">Name is required!</p>}
              <div className="formControl">
             
                <label> Email <span className="text-red-500 text-xl">*</span></label>
                <input
                  {...register("email", { required: true })}
                  name='email'
                  className="inputField"
                  type="email"
                  placeholder="Enter Your Email "
                />
              </div>
              <div className="formControl">
                <label> Phone Number <span className="text-red-500 text-xl">*</span></label>
                <input
                  {...register("phone", { required: true })}
                  name='phone'
                  className="inputField"
                  type="number"
                  placeholder="Enter Your Phone Number "
                  required
                />
                  {errors.phone && <p className="text-red-500 ">Phone number is required!</p>}
              </div>
              <div className="formControl">
                <label> Message </label>
                <textarea
                  {...register("message", { required: true })}
                  name='message'
                  placeholder=" Enter Your Message"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div>
                <button className="sendMessageBtn">Submit Order </button>
              </div>
            </form>
          </div>
          <div className="getInTouchRight">
            <lottie-player
              id="firstLottie"
              ref={ref}
              autoplay
              loop
              mode="normal"
              src="/contactUs.json"
              className="animation"
            ></lottie-player>
            <div className="contactInfo">
              <div className="flex items-center">
                <FaPhoneAlt className="contactIcon" />
                <div className="ml-2">
                  <p className="upercase text-2xl font-bold uppercase">
                    Phone Number
                  </p>
                  <strong>+880 1762-380594</strong>
                </div>
              </div>
              <div className="contactLine"></div>
              <div className="flex items-center">
                <FaEnvelope className="contactIcon" />
                <div className="ml-2">
                  <p className="upercase text-2xl  font-bold uppercase">
                    Email
                  </p>
                  <strong>softypy@gmail.com</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="socialMedia">
          <div className="singleSocialMedia">
            <div className="contacSocialIcon">
              <FaFacebookF />
            </div>
            <h4 className="text-3xl font-bold my-2">33K</h4>
            <strong>Follower</strong>
          </div>
          <div className="singleSocialMedia">
            <div className="contacSocialIcon">
              <FaUsers />
            </div>
            <h4 className="text-3xl font-bold my-2">99K</h4>
            <strong>Members</strong>
          </div>
          <div className="activeSocial">
            <div className="contacSocialIcon">
              <FaTwitter />
            </div>
            <h4 className="text-3xl font-bold my-2">59K</h4>
            <strong>Followers</strong>
          </div>
          <div className="singleSocialMedia">
            <div className="contacSocialIcon">
              <FaEnvelope />
            </div>
            <h4 className="text-3xl font-bold my-2">150K</h4>
            <strong>Subscribes</strong>
          </div>
        </section>

        {/* map section */}
        <section className=" w-full mx-auto flex flex-row justify-center items-center md:my-24 mb-32 md:mb-32 p-5">
          <Iframe
            className="lg:h-[600px] h-[300px] "
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.702714087243!2d-118.24379858493394!3d34.05149622521712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c648957fbb05%3A0x8c6c875a0069f4c9!2s26%20N%20Los%20Angeles%20St%2C%20Los%20Angeles%2C%20CA%2090012%2C%20USA!5e0!3m2!1sen!2sbd!4v1674159891667!5m2!1sen!2sbd"
            width="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            position="relative"
          ></Iframe>
        </section>
      </div>
      <Subscribe/>
    </div>
  );
};

export default Contact;
