export default function DesignerBehance() {
  const designProjects = [
    {
      id: 1,
      title: "Brand Identity - Coffee Shop",
      description: "Complete branding package including logo, packaging, and merchandise",
      category: "Branding",
      likes: 124,
      views: 2450
    },
    {
      id: 2,
      title: "Mobile App UI - Fitness Tracker",
      description: "User interface design for a health and wellness application",
      category: "UI/UX",
      likes: 89,
      views: 1870
    },
    {
      id: 3,
      title: "Packaging Design - Organic Skincare",
      description: "Eco-friendly packaging design for a natural skincare line",
      category: "Packaging",
      likes: 156,
      views: 3120
    }
  ];

  return (
    <div className="nes-container with-title">
      <h2 className="title">Designer - Behance</h2>
      
      <div className="nes-container is-dark with-title mb-4">
        <p className="title">Stats</p>
        <div className="lists">
          <ul className="nes-list is-circle">
            <li>24 Projects</li>
            <li>3.2K Followers</li>
            <li>12.4K Views</li>
          </ul>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="mb-2">Featured Projects</h3>
        {designProjects.map((project) => (
          <div key={project.id} className="nes-container with-title is-rounded mb-3">
            <p className="title">{project.title}</p>
            <p>{project.description}</p>
            <div className="flex-space-between mt-2">
              <span className="nes-text is-primary">{project.category}</span>
              <div>
                <i className="nes-icon heart is-small"></i>
                <span className="ml-1">{project.likes}</span>
                <i className="nes-icon eye is-small ml-2"></i>
                <span className="ml-1">{project.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="nes-container is-centered">
        <p>Connect with me on Behance</p>
        <button type="button" className="nes-btn is-primary">View Profile</button>
      </div>
    </div>
  );
}