import React, { useState, useRef } from 'react';
import "./Careear.css";

const Career = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const formRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
      resetFormFields();
    }
  };

  const resetFormFields = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('resume', selectedFile);

    // Append other form data if needed
    const formElements = event.target.elements;
    formData.append('name', formElements.name.value);
    formData.append('email', formElements.email.value);
    formData.append('phone', formElements.phone.value);
    formData.append('comments', formElements.comments.value);

    
  };

  return (
    <div className='career-container'>
      <h1 className='heading'>CAREER</h1>
      <div className='box1'>
        <div className="career-desc">
          <div className="career-desc-heading">
            <h2>What We Offer At Spike Point</h2>
            <p>We believe in providing a supportive culture and free environment where everyone can raise their hands and speak with freedom.</p>
          </div>

          <div className="heading-desc">
            <div className="heading-desc-text">
              <h3>✨Dynamic Work <span>Environment</span></h3>
              <p>Say goodbye to mundane cubicles! Our office is a vibrant space where ideas flow freely and collaboration is encouraged.</p>
            </div>
            <div className="heading-desc-text">
              <h3>🎉 Fun <span>Fridays</span></h3>
              <p>Every Friday, we host themed events, from mini-hackathons to talent shows. It’s a great way to unwind and showcase your unique skills.</p>
            </div>
            <div className="heading-desc-text">
              <h3>📚 Continuous <span>Learning</span></h3>
              <p>We provide access to top-notch resources and mentorship from industry experts. Whether it’s attending workshops or participating in brainstorming sessions, you’ll always find opportunities to grow.</p>
            </div>
            <div className="heading-desc-text">
              <h3>🌍 Diverse <span>Team</span></h3>
              <p>At Spike Point, diversity isn’t just a buzzword—it’s our strength. You’ll be working alongside a team that brings together perspectives from all over the world.</p>
            </div>
          </div>
        </div>

        <div className="photo-gallery">
          <div className="img1">
            <img src="./photo1.png" alt="Team activity" />
          </div>
          <div className="img">
            <img src="./photo2.png" alt="Office environment" />
            <img src="./photo4.png" alt="Team collaboration" />
          </div>
          <div className="img">
            <img src="./photo5.png" alt="Event" />
            <img src="./photo5.png" alt="Event" />
          </div>  
        </div>
        <div className="bottom-heading">
          <h1>Life at SPIPL</h1>
        </div>
      </div>

      <div className="box2">
        <h2>What our team says!</h2>
        <p>We don’t show up the culture we have; all you can believe is what our team says! We are all because of our team.</p>
        <div className="team-box">
          <div className="team-des">
            <div className="team-profile1">
              <img src="./schin.png" alt="Sachin Brahmbhat" />
            </div>
            <div className="team-text">
              <h4>Sachin Brahmbhat</h4>
              <p>CEO | Managing Director</p>
            </div>
          </div>
          <div className="profile-desc">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button><i className="fa-solid fa-arrow-left-long"></i></button>
            <button><i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>

      <div className="form-wrapper">
        <div className="form-container">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder='Name' required />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder='Email' required />
            </div>
            <div className="form-group">
              <input type="tel" id="phone" name="phone" placeholder='Mobile number' required />
            </div>
            <div className="form-group">
              <textarea id="comments" name="comments" placeholder='Describe your skills in 200 words.' required></textarea>
            </div>
            <div className="form-group">
              <div className="upload-btn">
                {fileName ? (
                  <span className="file-name">{fileName}</span>
                ) : (
                  <>
                    <i className="fa-solid fa-upload"></i>
                    <input type="file" id="resume" name="resume" onChange={handleFileChange} hidden />
                    <button type="button" className="file-upload-button" onClick={() => document.getElementById('resume').click()}>Upload resume</button>
                  </>
                )}
              </div>
            </div>
            <button type="submit" className="apply">Apply</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Career;
