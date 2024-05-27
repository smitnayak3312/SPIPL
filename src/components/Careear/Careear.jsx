import React, { useState } from 'react';
import './Careear.css';

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile_no: '',
    description: '',
    document: null,
  });
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, document: file });
    setFileName(file ? file.name : '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setModalMessage(''); // Clear message on new submission

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('mobile_no', formData.mobile_no);
    data.append('description', formData.description);
    if (formData.document) {
      data.append('document', formData.document);
    }

    try {
      const response = await fetch('https://spikepointinfotech.com/careerData.php', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Response from API:', result);

      if (result.error === false) {
        setModalMessage('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          mobile_no: '',
          description: '',
          document: null,
        });
        setFileName('');
      } else {
        setModalMessage('Failed to submit the form');
        console.log('Error', result.error);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setModalMessage('Error submitting the form');
    } finally {
      setLoading(false);
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
      }, 3000); // Hide modal after 3 seconds
    }
  };

  return (
    <div className='career-container'>
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

        <div className='photo-gallery'>
          <div className='img1'>
            <img src='./photo1.png' alt='Team activity' />
          </div>
          <div className='img'>
            <img src='./photo2.png' alt='Office environment' />
            <img src='./photo4.png' alt='Team collaboration' />
          </div>
          <div className='img'>
            <img src='./photo5.png' alt='Event' />
            <img src='./photo5.png' alt='Event' />
          </div>  
        </div>
        <div className='bottom-heading'>
          <h1>Life at SPIPL</h1>
        </div>
      </div>

      <div className='box2'>
        <h2>What our team says!</h2>
        <p>We don’t show up the culture we have; all you can believe is what our team says! We are all because of our team.</p>
        <div className='team-box'>
          <div className='team-des'>
            <div className='team-profile1'>
              <img src='./schin.png' alt='Sachin Brahmbhat' />
            </div>
            <div className='team-text'>
              <h4>Sachin Brahmbhat</h4>
              <p>CEO | Managing Director</p>
            </div>
          </div>
          <div className='profile-desc'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button><i className='fa-solid fa-arrow-left-long'></i></button>
            <button><i className='fa-solid fa-arrow-right'></i></button>
          </div>
        </div>
      </div>

      <div className='form-wrapper'>
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='tel'
                id='mobile_no'
                name='mobile_no'
                placeholder='Mobile number'
                value={formData.mobile_no}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <textarea
                id='description'
                name='description'
                placeholder='Describe your skills in 200 words.'
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className='form-group'>
              <div className='upload-btn'>
                {fileName ? (
                  <span className='file-name'>{fileName}</span>
                ) : (
                  <>
                    <i className='fa-solid fa-upload'></i>
                    <input
                      type='file'
                      id='document'
                      name='document'
                      onChange={handleFileChange}
                      hidden
                    />
                    <button
                      type='button'
                      className='file-upload-button'
                      onClick={() => document.getElementById('document').click()}
                    >
                      Upload resume
                    </button>
                  </>
                )}
              </div>
            </div>
            <button type='submit' className='apply' disabled={loading}>
              {loading ? 'Applying...' : 'Apply'}
              {loading && <div className='loader'></div>}
            </button>
          </form>
        </div>
      </div>

      {modalVisible && <Modal message={modalMessage} />}
    </div>
  );
};

const Modal = ({ message }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Career;
