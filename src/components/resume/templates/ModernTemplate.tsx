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
        </div>
      </header>

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-sm font-normal mb-3 border-b border-black pb-1 uppercase">
            EXPERIENCE
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start mb-1">
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
                      <div key={index} className="mb-1">• {line}</div>
                    ))}
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

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
                  </div>
                  {project.startDate && (
                    <div className="text-sm">
                      {formatDate(project.startDate)}
                    </div>
                  )}
                </div>
                {project.description && (
                  <div className="text-sm mt-2">
                    • {project.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Languages */}
      {data.languages.length > 0 && (
        <section className="mb-6">
          <h2 className="text-sm font-normal mb-3 border-b border-black pb-1 uppercase">
            LANGUAGES
          </h2>
          <div className="space-y-1">
            {data.languages.map((lang) => (
              <div key={lang.id} className="flex justify-between">
                <span className="text-sm">{lang.name}</span>
                <span className="text-sm capitalize">({lang.proficiency})</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Summary */}
      {data.summary && (
        <section className="mb-6">
          <h2 className="text-sm font-normal mb-3 border-b border-black pb-1 uppercase">Summary</h2>
          <p className="text-sm leading-relaxed">
            {data.summary}
          </p>
        </section>
      )}
    </div>
  );
}