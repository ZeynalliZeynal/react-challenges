import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
];

function App() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className='avatar'>
      <img
        src='https://source.unsplash.com/1600x900/?businessman'
        alt='Zeynalli Zeynal'
      />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Zeynalli Zeynal</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate
        voluptatem consequuntur fugiat dicta beatae iure quibusdam illum hic
        quis?
      </p>
    </div>
  );
}

function Skill({ skill, color, level }) {
  const listStyle = {
    backgroundColor: color,
  };
  return (
    <li className='skill' style={listStyle}>
      <span>{skill}</span>
      <span>
        {level === 'advanced' && '💪'}
        {level === 'intermediate' && '👍'}
        {level === 'beginner' && '👶'}
      </span>
    </li>
  );
}

function SkillList() {
  return (
    <ul className='skill-list'>
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </ul>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
