import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminNavBar from '../navbar/Navbar';
import Header from '../header/Header';
import './Courses.css';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const lang= [
    {
      id: 1,
      title: 'Java Fundamentals',
      chapter: 'Chapter 1',
      desc:'Basic of Java Programming.',
      link: '/Java',
    },
    {
      id: 2,
      title: 'Python ',
      chapter:'Chapter 2',
      desc: 'Python Programming.',
      link: '#',
    }
  ];

  const filteredCourses3 = lang.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div style={{ flexDirection: 'column', height: '100vh' }}>
      <Header/>
    <div style={{ display: 'flex' }}>
      <AdminNavBar/>
      <div className="courses-container" style={{width:'100%'}}>
        <div className='crs-head'>
          <h3>COURSES</h3>
        </div>
        <div>
        <div className='search'>
          <input className='nosubmit'
            type="search"
            placeholder="Search for courses..."
            value={searchQuery}
            onChange={handleInputChange}
            style={{height:'40%',width:'50%'}}
          />
          </div>
        <div className='part1'>
          {filteredCourses3.map((course) => (
            <div className="course" key={course.id}>
              <div className="course-preview">
                <h6>Course</h6>
                <h2>{course.title}</h2>
                <a href="#">
                  View details
                  <i className="fas fa-chevron-right" />
                </a>
              </div>
              <div className="course-info">
                <h6>{course.chapter}</h6>
                <h2>{course.desc}</h2>
                <Link to={course.link} className='jlink'>
                  <button className="btn">Start</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Courses;
