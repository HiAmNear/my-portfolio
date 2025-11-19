import React from 'react';
import { useTranslation as useTranslationLocal } from "@Translation";
export default function ResearchDetail({ research }) {
  const { t: translate } = useTranslationLocal("@Template/research_experiment/research_experiment");
  
  return (
    <div className="information-container">
      <div className="job-detail">
        
        {/* 1. Title & Date */}
        <div className="job-title-date">
          <strong>{translate(research.title)}</strong>
          <strong>{translate(research.date, { now: translate("present")})}</strong>
        </div>

        {/* 2. LOGIC CITATION: Chỉ hiện nếu có dữ liệu */}
        {research.citation && (
          <div className="citation-box">
             {/* Icon sách hoặc dấu ngoặc kép nếu muốn đẹp */}
             <span style={{marginRight: '8px'}}>📄</span> 
             <i>{research.citation}</i>
          </div>
        )}

        {/* 3. Description List */}
        <ul className="description-list">
          {research.description.map((desc, index) => (
            <li 
              key={index}
              // Dùng cái này để render được thẻ <a> trong text
              dangerouslySetInnerHTML={{ __html: translate(desc) }} 
            />
          ))}
        </ul>

        {/* 4. Technologies */}
        <div className="job-technologies">
          <strong>{translate('research.technologies-used')} : </strong>
          {research.techGroups.map((group, idx) => (
            <div key={idx}>
              <h4 className="technology-group-header">{translate(group.title)}</h4>
              <div className="skill-detail">
                {group.skills.map((skill, sIdx) => (
                  <span key={sIdx}>{translate(skill)}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}