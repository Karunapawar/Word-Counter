import React from 'react';

const Projects = () => {
  return (
    <>
     <h2>My Projects</h2>
    <section id="projects" className='container'>
     
      <div className="project-card">
        <h3>TODO List</h3>
        <p>Organize, prioritize, and get things done. This Projects give you a space to plan out your goals and keep track of all areas of your work and life. Created using React js and bootstrap</p>
        <a target="_blank" href="https://github.com/Karunapawar/To-Do-List">Github Repo</a>
      </div>
      <div className="project-card">
        <h3>BMI Calculator</h3>
        <p>use to estimate the amount of body fat by using your height and weight measurements. It can help assess risk factors for certain health conditions. Created using React.js features like key, value, state etc.</p>
        <a target="_blank" href="https://github.com/Karunapawar/BMICalculator">Github Repo</a>
      </div>
      <div className="project-card">
        <h3>Calculator</h3>
        <p>It can perform basic arithmetic such as addition, subtraction, multiplication etc. also allowed the theme in which one can chnage the theme into light or dark mode. This project is created in reactjs.</p>
        <a target="_blank" href="https://github.com/Karunapawar/Word-Counter/tree/main/calculator">Github Repo</a>
      </div>
      <div className="project-card">
        <h3>Word Counter</h3>
        <p>Used React, Node and Bootstrap. Can be used for capitalizing, small case conversion the text, also by default shows the counting of words and characters, allow user to use dark-mode, reset and sample text.</p>
        <a target="_blank" href="https://github.com/Karunapawar/Word-Counter">Github Repo</a>
      </div>
    </section>
    </>
  );
};

export default Projects;
