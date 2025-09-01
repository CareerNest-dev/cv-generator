import { ResumeData } from '@/hooks/useResumeData';

interface ModernTemplateProps {
  data: ResumeData;
}

export const ModernTemplate = ({ data }: ModernTemplateProps) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  const formatPhoneNumber = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
      return `+1 (${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return phone;
  };

  return (
<<<<<<< HEAD
    <div className="max-w-4xl mx-auto p-8 bg-white text-black font-serif leading-normal">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-lg font-bold mb-1">
          {data.personalInfo.fullName || 'First Last'}
        </h1>
        <div className="text-sm text-gray-700 mb-4">
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.email && data.personalInfo.phone && <span> | </span>}
          {data.personalInfo.phone && <span>{formatPhoneNumber(data.personalInfo.phone)}</span>}
          {(data.personalInfo.email || data.personalInfo.phone) && data.personalInfo.location && <span> | </span>}
          {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
=======
    <div className="p-8 max-w-[8.5in] mx-auto bg-white text-black text-sm leading-normal">
      {/* Header */}
      <header className="mb-6">
        <div className="text-center mb-4">
          <h1 className="text-base font-normal mb-1">
            {data.personalInfo.fullName || 'First Last'}
          </h1>
          <div className="text-sm">
            {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
            {data.personalInfo.phone && <span> | {formatPhoneNumber(data.personalInfo.phone)}</span>}
            {data.personalInfo.location && <span> | {data.personalInfo.location}</span>}
          </div>
>>>>>>> 57ce0a93eb5d76970f0d7ca7a4269c14b63ef1b7
        </div>
      </header>

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-6">
<<<<<<< HEAD
          <h2 className="text-sm font-bold mb-3 uppercase">Experience</h2>
=======
          <h2 className="text-sm font-normal mb-3 border-b border-black pb-1 uppercase">
            EXPERIENCE
          </h2>
>>>>>>> 57ce0a93eb5d76970f0d7ca7a4269c14b63ef1b7
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start mb-1">
<<<<<<< HEAD
                  <div>
                    <h3 className="text-sm font-bold">{exp.company}</h3>
                    <p className="text-sm italic">{exp.title}</p>
                  </div>
                  <div className="text-sm text-right">
                    <div>{formatDate(exp.startDate)} – {exp.current ? 'Present' : formatDate(exp.endDate)}</div>
                    {exp.location && <div>{exp.location}</div>}
                  </div>
                </div>
                {exp.description && (
                  <div className="text-sm leading-relaxed ml-4">
                    {exp.description.split('\n').map((line, index) => {
                      if (line.trim()) {
                        return (
                          <div key={index} className="mb-1">
                            {line.startsWith('•') || line.startsWith('-') ? (
                              <div className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>{line.replace(/^[•-]\s*/, '')}</span>
                              </div>
                            ) : (
                              <div>{line}</div>
                            )}
                          </div>
                        );
                      }
                      return null;
                    })}
=======
                  <div className="flex-1">
                    <h3 className="text-sm font-normal">{exp.title}</h3>
                    <p className="text-sm">{exp.company}</p>
                  </div>
                  <div className="text-sm text-right">
                    <div>{formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
                {exp.description && (
                  <div className="text-sm mt-2">
                    {exp.description.split('\n').map((line, index) => (
                      <div key={index} className="mb-1">
                        • {line}
                      </div>
                    ))}
>>>>>>> 57ce0a93eb5d76970f0d7ca7a4269c14b63ef1b7
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-6">
<<<<<<< HEAD
          <h2 className="text-sm font-bold mb-3 uppercase">Education</h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold">{edu.institution}</h3>
                    <p className="text-sm italic">{edu.degree}</p>
                    {edu.gpa && <p className="text-sm">GPA: {edu.gpa}</p>}
                  </div>
                  <div className="text-sm text-right">
                    <div>{formatDate(edu.startDate)} – {edu.current ? 'Present' : formatDate(edu.endDate)}</div>
                    {edu.location && <div>{edu.location}</div>}
=======
          <h2 className="text-sm font-normal mb-3 border-b border-black pb-1 uppercase">
            EDUCATION
          </h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-sm font-normal">{edu.degree}</h3>
                    <p className="text-sm">{edu.institution}</p>
                    {edu.gpa && <p className="text-sm">GPA: {edu.gpa}</p>}
                  </div>
                  <div className="text-sm text-right">
                    <div>{formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}</div>
                    <div>{edu.location}</div>
>>>>>>> 57ce0a93eb5d76970f0d7ca7a4269c14b63ef1b7
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

<<<<<<< HEAD
      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-sm font-bold mb-3 uppercase">Projects</h2>
          <div className="space-y-3">
            {data.projects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-sm font-bold">{project.name}</h3>
                    {project.technologies && (
                      <p className="text-sm italic">{project.technologies}</p>
                    )}
                    {project.url && (
                      <p className="text-sm">{project.url}</p>
                    )}
=======
      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-sm font-normal mb-3 border-b border-black pb-1 uppercase">
            SKILLS
          </h2>
          <div className="space-y-2">
            {['technical', 'tools', 'languages', 'soft'].map((category) => {
              const categorySkills = data.skills.filter(skill => skill.category === category);
              if (categorySkills.length === 0) return null;
              
              return (
                <div key={category} className="flex">
                  <span className="text-sm w-24 font-normal">
                    {category === 'technical' ? 'Technical Skills' : 
                     category === 'tools' ? 'Tools' :
                     category === 'languages' ? 'Languages' : 
                     category === 'soft' ? 'Soft Skills' : category}:
                  </span>
                  <span className="text-sm flex-1">
                    {categorySkills.map((skill, index) => (
                      <span key={skill.id}>
                        {skill.name}
                        {index < categorySkills.length - 1 && ', '}
                      </span>
                    ))}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-sm font-normal mb-3 border-b border-black pb-1 uppercase">
            PROJECTS
          </h2>
          <div className="space-y-4">
            {data.projects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between items-start mb-1">
                  <div className="flex-1">
                    <h3 className="text-sm font-normal">{project.name}</h3>
                    {project.technologies && <p className="text-sm">{project.technologies}</p>}
                    {project.url && <p className="text-sm">{project.url}</p>}
>>>>>>> 57ce0a93eb5d76970f0d7ca7a4269c14b63ef1b7
                  </div>
                  {project.startDate && (
                    <div className="text-sm">
                      {formatDate(project.startDate)}
                    </div>
                  )}
                </div>
                {project.description && (
<<<<<<< HEAD
                  <div className="text-sm leading-relaxed ml-4">
                    <p>{project.description}</p>
=======
                  <div className="text-sm mt-2">
                    • {project.description}
>>>>>>> 57ce0a93eb5d76970f0d7ca7a4269c14b63ef1b7
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Technical Skills */}
      {data.skills.length > 0 && (
        <section className="mb-6">
<<<<<<< HEAD
          <h2 className="text-sm font-bold mb-3 uppercase">Other</h2>
          <div className="space-y-2">
            {/* Technical Skills */}
            {data.skills.filter(skill => skill.category === 'technical').length > 0 && (
              <div>
                <span className="text-sm font-bold">Technical Skills: </span>
                <span className="text-sm">
                  {data.skills
                    .filter(skill => skill.category === 'technical')
                    .map(skill => skill.name)
                    .join(', ')}
                </span>
=======
          <h2 className="text-sm font-normal mb-3 border-b border-black pb-1 uppercase">
            LANGUAGES
          </h2>
          <div className="space-y-1">
            {data.languages.map((lang) => (
              <div key={lang.id} className="flex justify-between">
                <span className="text-sm">{lang.name}</span>
                <span className="text-sm capitalize">({lang.proficiency})</span>
>>>>>>> 57ce0a93eb5d76970f0d7ca7a4269c14b63ef1b7
              </div>
            )}
            
            {/* Tools & Software */}
            {data.skills.filter(skill => skill.category === 'tools').length > 0 && (
              <div>
                <span className="text-sm font-bold">Tools & Software: </span>
                <span className="text-sm">
                  {data.skills
                    .filter(skill => skill.category === 'tools')
                    .map(skill => skill.name)
                    .join(', ')}
                </span>
              </div>
            )}

            {/* Programming Languages */}
            {data.skills.filter(skill => skill.category === 'languages').length > 0 && (
              <div>
                <span className="text-sm font-bold">Programming Languages: </span>
                <span className="text-sm">
                  {data.skills
                    .filter(skill => skill.category === 'languages')
                    .map(skill => skill.name)
                    .join(', ')}
                </span>
              </div>
            )}

            {/* Certifications & Training */}
            {data.skills.filter(skill => skill.category === 'soft').length > 0 && (
              <div>
                <span className="text-sm font-bold">Certifications & Training: </span>
                <span className="text-sm">
                  {data.skills
                    .filter(skill => skill.category === 'soft')
                    .map(skill => skill.name)
                    .join(', ')}
                </span>
              </div>
            )}

            {/* Languages */}
            {data.languages.length > 0 && (
              <div>
                <span className="text-sm font-bold">Languages: </span>
                <span className="text-sm">
                  {data.languages
                    .map(lang => `${lang.name} (${lang.proficiency})`)
                    .join(', ')}
                </span>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Summary */}
      {data.summary && (
        <section className="mb-6">
          <h2 className="text-sm font-bold mb-3 uppercase">Summary</h2>
          <p className="text-sm leading-relaxed">
            {data.summary}
          </p>
        </section>
      )}
    </div>
  );
};