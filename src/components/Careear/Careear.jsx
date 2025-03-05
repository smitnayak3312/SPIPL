import React, { useState } from 'react';
import "./Careear.css";
import Footer from '../Footer/Footer';
import emailjs from '@emailjs/browser';
const Careear = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile_no: '',
    description: '',
  });
  const [resume, setResume] = useState(null);
  const [validationError, setValidationError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume" && files.length > 0) {
      setResume(files[0]); // Set the file separately
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCancelFile = () => {
    setResume(null); // Clear the selected file
    document.getElementById('resume').value = ""; // Reset file input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!resume) {
      setValidationError(true); // Show error if no file is selected

      // Automatically clear error after 3 seconds
      setTimeout(() => {
        setValidationError(false);
      }, 3000); // 3000ms = 3 seconds
      setLoading(false);
      return;
    }
    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("mobile_no", formData.mobile_no);
      form.append("description", formData.description);

      if (resume) {
        form.append("resume", resume); // Add the file to the FormData
      }

      const response = await fetch('https://notification.spikepointinfotech.com/api/resume', {
        method: 'POST',
        body: form, // Use FormData directly
      });

      const result = await response.json();

      if (result.error === false) {
        

        const acknowledgmentParams = {
        to_email: formData.email,  // The user's email address
        to_name: formData.name,    // The user's name
        };

      emailjs
        .send(
          'service_broxqq3', // Your EmailJS service ID (use the same or a different one)
          'template_w8a63hk', // Your EmailJS template ID for the acknowledgment email
          acknowledgmentParams,
          '6eAgbcsK4bR-CaM5z' // Your public key (user ID)
        )
        .then(
          () => {
              console.log('EMAIL SENT SUCCESSFULLY!');
              // setLoading(true);
              setLoading(false);
          },
          (error) => {
            console.error('FAILED TO SEND ACKNOWLEDGMENT EMAIL...', error);
          // alert('FAILED TO SENT EMAIL...');
          setLoading(false);
          })
          .finally(() => {
            setFormData({
              name: "",
              email: "",
              mobile_no: "",
              description: "",
            });
            alert(result.message);
            setLoading(false); // Stop loading in both success and error cases
          });
      
        
        
      } else {
        alert(result.message);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setLoading(false);
    }
  };
  const teamReviews = [
    
    {
      name: "Nehal Darji",
      role: "HR | Jr. Flutter Developer",
      img: "./nehal.png",
      review: "Spike Point Infotech has been an incredible place to work. The collaborative environment and continuous learning opportunities help me grow both professionally and personally. The team is supportive, and every day feels like a new chance to innovate!"
    },
    {
      name: "Dhruvil Nayak",
      role: "Web Developer",
      img: "./dhruvil1.png",
      review: "The best part about working here is the inclusive culture. Everyone’s ideas are valued, and there’s always room to speak up and contribute. It’s more than just a job; it’s a place where I feel challenged and appreciated."
    },
    {
      name: "Preet Patel",
      role: "Web Developer",
      img: "./preet.png",
      review:"The work environment at Spike Point is incredibly motivating. We have fun, we learn together, and we always feel empowered to take risks and innovate. I truly feel part of a family here!"
    },
    {
      name: "Adarsh Patel",
      role: "Web Developer",
      img: "./adarsh.png",
      review: "I love the vibrant and dynamic work culture at Spike Point. It’s amazing how the company values work-life balance, yet constantly pushes for personal growth. The team spirit here is unmatched!"
    },
    {
      name: "Adarsh Patel",
      role: "React Developer",
      img: "./suchi.png",
      review: "Spike Point offers an inclusive and fun atmosphere where teamwork and individual growth are equally prioritized. It’s a place where every employee’s contribution matters."
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamReviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamReviews.length) % teamReviews.length);
  };

  return (
    <div className='careear-container'>
      <h1 className='heading'>CAREER</h1>
      <div className='box1'>
        <div className='career-desc'>
          <div className='career-desc-heading'>
            <h2>What We Offer At Spike Point</h2>
            <p>We believe in providing a supportive culture and free environment where everyone can raise their hands and speak with freedom.</p>
          </div>
          <div className='heading-desc'>
            <div className='heading-desc-text'>
              <h3>✨Dynamic Work <span>Environment</span></h3>
              <p>Say goodbye to mundane cubicles! Our office is a vibrant space where ideas flow freely and collaboration is encouraged.</p>
            </div>
            <div className='heading-desc-text'>
              <h3>🎉 Fun <span>Fridays</span></h3>
              <p>Every Friday, we host themed events, from mini-hackathons to talent shows. It’s a great way to unwind and showcase your unique skills.</p>
            </div>
            <div className='heading-desc-text'>
              <h3>📚 Continuous <span>Learning</span></h3>
              <p>We provide access to top-notch resources and mentorship from industry experts. Whether it’s attending workshops or participating in brainstorming sessions, you’ll always find opportunities to grow.</p>
            </div>
            <div className='heading-desc-text'>
              <h3>🌍 Diverse <span>Team</span></h3>
              <p>At Spike Point, diversity isn’t just a buzzword—it’s our strength. You’ll be working alongside a team that brings together perspectives from all over the world.</p>
            </div>
          </div>
        </div>

        <div className="photo-gallery">
          <div className="img1">
            <img src="./photo4.jpeg" alt="" />
          </div>
          <div className="img">
            <img src="./photo2.png" alt="" />
            <img src="./photo3.jpeg" alt="" />
          </div>
          <div className="img">
            <img src="./photo1.png" alt="" />
            <img src="./photo5.jpeg" alt="" />
          </div>
        </div>
        <div className='bottom-heading'>
          <h1>Life at SPIPL</h1>
        </div>
      </div>

      {/* Team Review Section */}
      <div className="box2">
        <h2>What our team says!</h2>
        <p>We don’t show up the culture we have all you can believe is what our team says! We are all because of our team.</p>
        <div className="team-box">
          <div className="team-des">
            <div className="team-profile1">
              <img src={teamReviews[currentIndex].img} alt="" />
            </div>
            <div className="team-text">
              <h4>{teamReviews[currentIndex].name}</h4>
              <p>{teamReviews[currentIndex].role}</p>
            </div>
          </div>
          <div className="profile-desc">
            <p>{teamReviews[currentIndex].review}</p>
            <button onClick={prevReview}><i className="fa-solid fa-arrow-left-long"></i></button>
            <button onClick={nextReview}><i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>

      <div className="form-wrapper">
        <div className="form-container">
        <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="tel"
          id="phone"
          name="mobile_no"
          placeholder="Mobile number"
          required
          value={formData.mobile_no}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <textarea
          id="comments"
          name="description"
          placeholder="Describe your skills in 200 words."
          required
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group">
      <div className="upload-btn">
      <label htmlFor="resume" className="file-upload-label">
      {!resume ? (
        <>
          <i className="fa-solid fa-upload"></i> Choose Resume
        </>
      ) : (
        <>
          {resume.name}
        </>
      )}
                </label>
        <input
          type="file"
          id="resume"
          name="resume"
          className="file-upload-input"
          onChange={handleChange}
          
        />
        {validationError && (
            <span className="error-message">Please upload your resume.</span>
          )}
        
        {resume && (
          // <button
          //   type="button"
          //   className="cancel-btn"
          //   onClick={handleCancelFile}
          // >
          //   Cancel
          // </button>
          <i className="fa-solid fa-trash" onClick={handleCancelFile}></i>
        )}
      </div>

      {/* {modalVisible && <Modal message={modalMessage} />} */}
    </div>
      <button type="submit" disabled={loading} className="apply">{loading ? 'Loading...' : 'Submit'}</button>
      {loading && (
                        <div className="spinner">
                        <div className="loader"></div>
                        <p>Submit Resume...</p>
                        </div>
                    )}
    </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careear;
