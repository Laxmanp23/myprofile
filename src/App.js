import React from 'react';

const App = () => {
  const developer = {
    name: 'Laxman Pawar',
    email: 'contact@laxmanpawar.site',
    bio: 'Experienced React developer with a strong background in building scalable web applications.',
    skills: ['JavaScript', 'React', 'Node.js', 'CSS'],
    avatarUrl: 'https://via.placeholder.com/150'
  };

  return (
    <div style={styles.container}>
      <img src={developer.avatarUrl} alt="Avatar" style={styles.avatar} />
      <h1>{developer.name}</h1>
      <p>Email: {developer.email}</p>
      <p>{developer.bio}</p>
      <h3>Skills:</h3>
      <ul>
        {developer.skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: '0 auto'
  },
  avatar: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    marginBottom: '20px'
  }
};



export default App;
