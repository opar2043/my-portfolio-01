import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../Supabase/Supabase";
import Swal from "sweetalert2";

const Admin = () => {
  const navigate = useNavigate();

  const [projectData, setProjectData] = useState({
    project: "",
    github: "",
    description: "",
    project_link: "",
    plan: "",
    photo: "",
    tech: [],
  });

  const [newTech, setNewTech] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle basic input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add a technology to the array
  const handleAddTech = () => {
    if (newTech.trim() && !projectData.tech.includes(newTech.trim())) {
      setProjectData((prev) => ({
        ...prev,
        tech: [...prev.tech, newTech.trim()],
      }));
      setNewTech("");
    }
  };

  // Remove a technology
  const handleRemoveTech = (techToRemove) => {
    setProjectData((prev) => ({
      ...prev,
      tech: prev.tech.filter((tech) => tech !== techToRemove),
    }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const photoFile = form.photo.files[0];
    let photoUrl = "";

    try {
      // Upload image to Supabase storage
      if (photoFile) {
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("portfolio")
          .upload(`projects/${Date.now()}_${photoFile.name}`, photoFile);

        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage
          .from("portfolio")
          .getPublicUrl(uploadData.path);

        photoUrl = urlData.publicUrl;
      }

      // Prepare data for insert
      const myData = {
        name: "Rijoan Rashid Opar",
        project: projectData.project,
        github: projectData.github,
        description: projectData.description,
        project_link: projectData.project_link,
        plan: projectData.plan,
        photo: photoUrl,
        tech: projectData.tech, // 👈 array of strings
      };

      // Insert into Supabase
      const { data, error } = await supabase.from("projects").insert([myData]);

      if (error) throw error;

      Swal.fire({
        icon: "success",
        title: "Project Added!",
        text: "Your project has been successfully added.",
      }).then(() => {
        console.log(true);
      });
    } catch (error) {
      console.error("Error inserting project:", error.message);
      Swal.fire({
        icon: "error",
        title: "Failed to add project",
        text: error.message || "An error occurred while saving your project.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 my-8 md:my-16 py-8 px-4 sm:px-6 lg:px-8 rounded-md">
      <div className="max-w-4xl mx-auto bg-white/10 rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-3xl text-center font-bold text-white mb-10">
          Add New Project
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Project, Github, Live Link */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Project Name
              </label>
              <input
                type="text"
                name="project"
                value={projectData.project}
                onChange={handleChange}
                placeholder="Verity Restaurant"
                className="w-full bg-white/10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                GitHub Repository URL
              </label>
              <input
                type="url"
                name="github"
                value={projectData.github}
                onChange={handleChange}
                placeholder="https://github.com/username/repo.git"
                className="w-full bg-white/10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Live Project URL
              </label>
              <input
                type="url"
                name="project_link"
                value={projectData.project_link}
                onChange={handleChange}
                placeholder="https://your-project.netlify.app"
                className="w-full bg-white/10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* File upload + Tech tags */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Main Project Image
              </label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                className="w-full bg-white/10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Technologies Used
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {projectData.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600 text-white text-sm"
                  >
                    {tech}
                    <button
                      type="button"
                      onClick={() => handleRemoveTech(tech)}
                      className="ml-2 text-red-300 hover:text-red-500"
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
                  className="flex-1 bg-white/10 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={handleAddTech}
                  className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
                >
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Description + Plans */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Project Description
            </label>
            <textarea
              name="description"
              value={projectData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Describe your project..."
              className="w-full bg-white/10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Future Plans
            </label>
            <textarea
              name="plan"
              value={projectData.plan}
              onChange={handleChange}
              rows={3}
              placeholder="What improvements do you plan to make?"
              className="w-full bg-white/10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Add Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
