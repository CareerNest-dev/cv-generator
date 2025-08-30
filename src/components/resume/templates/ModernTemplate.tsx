
import { ResumeData } from '@/hooks/useResumeData';
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';

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
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return phone;
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white text-black font-sans">
      {/* Header */}
      <header className="mb-8">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-wide">
            {data.personalInfo.fullName || 'YOUR NAME'}
          </h1>
          <p className="text-lg text-orange-600 font-medium mb-4 tracking-wider">
            {data.personalInfo.title || 'Your Professional Title'}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
            {data.personalInfo.email && (
              <span>{data.personalInfo.email}</span>
            )}
            {data.personalInfo.phone && (
              <span>{formatPhoneNumber(data.personalInfo.phone)}</span>
            )}
            {data.personalInfo.location && (
              <span>{data.personalInfo.location}</span>
            )}
            {data.personalInfo.linkedin && (
              <span>{data.personalInfo.linkedin}</span>
            )}
            {data.personalInfo.website && (
              <span>{data.personalInfo.website}</span>
            )}
          </div>
        </div>
      </header>

      {/* Summary */}
      {data.summary && (
        <section className="mb-7">
          <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wider">
            SUMMARY
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            {data.summary}
          </p>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-7">
          <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">
            SKILLS
          </h2>
          <div className="space-y-3">
            {['technical', 'tools', 'languages', 'soft'].map((category) => {
              const categorySkills = data.skills.filter(skill => skill.category === category);
              if (categorySkills.length === 0) return null;
              
              return (
                <div key={category}>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                    {category === 'technical' ? 'Project Management' : 
                     category === 'tools' ? 'Leadership' :
                     category === 'languages' ? 'Cost Management' : 
                     category === 'soft' ? 'Cloud Knowledge' : category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <span
                        key={skill.id}
                        className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium border border-orange-200"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-7">
          <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">
            EXPERIENCE
          </h2>
          <div className="space-y-5">
            {data.experience.map((exp) => (
              <div key={exp.id} className="relative">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-gray-700">
                        {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                      </span>
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">{exp.title}</h3>
                    <p className="text-orange-600 font-semibold text-sm mb-1">{exp.company}</p>
                    {exp.location && <p className="text-gray-600 text-xs mb-2">{exp.location}</p>}
                  </div>
                </div>
                {exp.description && (
                  <div className="text-gray-700 text-xs leading-relaxed">
                    {exp.description.split('\n').map((line, index) => (
                      <div key={index} className="mb-1">
                        • {line}
                      </div>
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
        <section className="mb-7">
          <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">
            EDUCATION
          </h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id} className="relative">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-gray-700">
                        {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                      </span>
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">{edu.degree}</h3>
                    <p className="text-orange-600 font-semibold text-sm">{edu.institution}</p>
                    {edu.location && <p className="text-gray-600 text-xs">{edu.location}</p>}
                    {edu.gpa && <p className="text-gray-600 text-xs">GPA: {edu.gpa}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mb-7">
          <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">
            PROJECTS
          </h2>
          <div className="space-y-4">
            {data.projects.map((project) => (
              <div key={project.id} className="relative">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    {project.startDate && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-gray-700">
                          {formatDate(project.startDate)}
                        </span>
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                    )}
                    <h3 className="font-bold text-gray-900 text-base mb-1">{project.name}</h3>
                    {project.technologies && (
                      <p className="text-orange-600 font-semibold text-sm mb-1">{project.technologies}</p>
                    )}
                    {project.url && (
                      <p className="text-gray-600 text-xs mb-2">{project.url}</p>
                    )}
                  </div>
                </div>
                {project.description && (
                  <div className="text-gray-700 text-xs leading-relaxed">
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
        <section className="mb-7">
          <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">
            LANGUAGES
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {data.languages.map((lang) => (
              <div key={lang.id} className="flex justify-between items-center">
                <span className="text-gray-900 font-semibold text-sm">{lang.name}</span>
                <span className="text-gray-600 text-xs capitalize">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
