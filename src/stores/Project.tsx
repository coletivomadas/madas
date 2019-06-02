import React from 'react';

interface IProjects {
  onFeature: (id: string | null) => void;
  featuredCollectionId: string | null;
}

const Projects = React.createContext<IProjects | null>(null);

export default Projects;
