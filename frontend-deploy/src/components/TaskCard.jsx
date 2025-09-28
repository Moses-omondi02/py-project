import React from "react";

export default function TaskCard({ task, onView }) {
  // Mock application count for demonstration
  const applicationCount = Math.floor(Math.random() * 10) + 1;
  
  return (
    <div className="task-card">
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
        <div className="task-meta">
          <span className="task-ngo">NGO: {task.ngo.name}</span>
          <span className="task-date">Date: {task.date}</span>
        </div>
      </div>

      <p className="task-description">{task.description}</p>

      <div className="task-footer">
        <div className="task-stats">
          <div className="applications-badge">
            <span className="badge-label">Applications</span>
            <span className="badge-count">{applicationCount}</span>
          </div>
        </div>
        <button className="btn primary view-btn" onClick={onView}>
          View Details
        </button>
      </div>
    </div>
  );
}