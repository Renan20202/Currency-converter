import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function GitHubLink() {
  return (
    <a
      href="https://github.com/Renan20202"
      target="_blank"
      rel="noopener noreferrer"
      style={{ marginTop: '20px', color: '#3498DB' }} // Cambia el color a morado
    >
      <GitHubIcon fontSize="large" />
    </a>
  );
}
