import React from 'react';
import { useTranslation as useTranslationLocal } from "@Translation";
// Nhận 1 'job' làm prop
export default function JobDetail({ job }) {
  const { t: translate } = useTranslationLocal("@Template/work_experiment/work_experiment");

  return (
    <div className="information-container">
      <div className="job-detail">
        <div className="job-title-date">
          <strong>{translate(job.company)}</strong>
          <strong>{translate(job.date, { now: translate("present") })}</strong>
        </div>
        
        <strong className="job-primary-role">{translate(job.primaryRole)}</strong>

        <ul className="role-list">
          {job.roles.map(role => (
            <li key={role.id}>
              {/* Chỉ render tiêu đề nếu nó tồn tại */}
              {role.title && <strong>{translate(role.title)}</strong>}
              
              <ul className="description-list">
                {role.points.map((point, index) => (
                  // Dùng 'dangerouslySetInnerHTML' để render <strong></strong>
                  <li 
                    key={index} 
                    dangerouslySetInnerHTML={{ __html: translate(point) }} 
                  />
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Logic để render Technologies */}
        <div className="job-technologies">
          <strong>{translate("work.technologies-used")}:</strong>
          
          {/* Nếu có 'techGroups' (như startup) */}
          {job.techGroups && job.techGroups.map(group => (
            <div key={group.id}>
              <h4 className="technology-group-header">{translate(group.title)}</h4>
              <div className="skill-detail">
                {group.skills.map((skill, index) => (
                  <span key={index}>{translate(skill)}</span>
                ))}
              </div>
            </div>
          ))}

          {/* Nếu có 'technologies' (như MEC) */}
          {job.technologies && (
            <div className="skill-detail">
              {job.technologies.map((tech, index) => (
                <span key={index}>{translate(tech)}</span>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}