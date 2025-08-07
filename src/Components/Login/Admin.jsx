import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState({
    photo: "",
    project: "",
    name: "",
    github: "",
    description: "",
    project_link: "",
    tech: [],
    plan: "",
    additionalImages: ["", "", ""] // For 3 additional images
  });
  const [newTech, setNewTech] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedImages = [...projectData.additionalImages];
        updatedImages[index] = reader.result;
        setProjectData(prev => ({
          ...prev,
          additionalImages: updatedImages
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddTech = () => {
    if (newTech.trim() && !projectData.tech.includes(newTech.trim())) {
      setProjectData(prev => ({
        ...prev,
        tech: [...prev.tech, newTech.trim()]
      }));
      setNewTech("");
    }
  };

  const handleRemoveTech = (techToRemove) => {
    setProjectData(prev => ({
      ...prev,
      tech: prev.tech.filter(tech => tech !== techToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Project submitted:", {
        ...projectData,
        id: Date.now() // Generate a unique ID
      });
      setIsSubmitting(false);
      alert("Project added successfully!");
      navigate("/"); // Redirect after submission
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 my-8 md:my-16 py-8 px-4 sm:px-6 lg:px-8 rounded-md">
      <div className="max-w-4xl mx-auto bg-white/10 rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-3xl text-center  font-bold text-white mb-10">Add New Project</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">

          <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
        {/* Project Name */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">Project Name</label>
            <input
              type="text"
              name="project"
              value={projectData.project}
              onChange={handleChange}
              placeholder="Verity Restaurant"
              className="w-full bg-white/10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* GitHub Link */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">GitHub Repository URL</label>
            <input
              type="url"
              name="github"
              value={projectData.github}
              onChange={handleChange}
              placeholder="https://github.com/username/repo.git"
              className="w-full bg-white/10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Project Link */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">Live Project URL</label>
            <input
              type="url"
              name="project_link"
              value={projectData.project_link}
              onChange={handleChange}
              placeholder="https://your-project.netlify.app"
              className="w-full bg-white/10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          </div>

          {/* Main Project Image */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">Main Project Image URL</label>
            <input
              type="text"
              name="photo"
              value={projectData.photo}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full bg-white/10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Additional Images (3) */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">Additional Project Images (3 required)</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[0, 1, 2].map((index) => (
                <div key={index} className="flex flex-col  items-center">
                  <label className="w-full h-32 bg-gray-200/20 rounded-md flex items-center justify-center cursor-pointer overflow-hidden">
                    {projectData.additionalImages[index] ? (
                      <img 
                        src={projectData.additionalImages[index]} 
                        alt={`Preview ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-white/80">Image {index + 1}</span>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, index)}
                      className="hidden"
                      required={index === 0}
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">Technologies Used</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {projectData.tech.map((tech, index) => (
                <span 
                  key={index} 
                  className="inline-flex  items-center px-3 py-1 rounded-full bg-white/10text-blue-800 text-sm"
                >
                  {tech}
                  <button 
                    type="button"
                    onClick={() => handleRemoveTech(tech)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <div className="flex">
              <input
                type="text"
                value={newTech}
                onChange={(e) => setNewTech(e.target.value)}
                placeholder="Add technology (e.g., React)"
                className="flex-1 bg-white/10 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={handleAddTech}
                className="px-4  py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add
              </button>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">Project Description</label>
            <textarea
              name="description"
              value={projectData.description}
              onChange={handleChange}
              placeholder="Describe your project..."
              rows={4}
              className="w-full bg-white/10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Future Plan */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">Future Plans</label>
            <textarea
              name="plan"
              value={projectData.plan}
              onChange={handleChange}
              placeholder="What improvements do you plan to make?"
              rows={3}
              className="w-full bg-white/10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Add Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;