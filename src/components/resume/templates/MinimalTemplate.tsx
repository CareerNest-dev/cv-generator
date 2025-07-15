
import { ResumeData } from '@/hooks/useResumeData';
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';

interface MinimalTemplateProps {
  data: ResumeData;
}

export const MinimalTemplate = ({ data }: MinimalTemplateProps) => {
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
    <div className="p-8 font-sans leading-relaxed">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-2xl font-light text-gray-900 mb-1">
          {data.personalInfo.fullName || 'Your Name'}
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          {data.personalInfo.title || 'Your Professional Title'}
        </p>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          {data.personalInfo.email && (
            <div className="flex items-center gap-1">
              <Mail className="h-3 w-3" />
              <span>{data.personalInfo.email}</span>
            </div>
          )}
          {data.personalInfo.phone && (
            <div className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              <span>{formatPhoneNumber(data.personalInfo.phone)}</span>
            </div>
          )}
          {data.personalInfo.location && (
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>{data.personalInfo.location}</span>
            </div>
          )}
          {data.personalInfo.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin className="h-3 w-3" />
              <span>{data.personalInfo.linkedin}</span>
            </div>
          )}
          {data.personalInfo.website && (
            <div className="flex items-center gap-1">
              <Globe className="h-3 w-3" />
              <span>{data.personalInfo.website}</span>
            </div>
          )}
        </div>
      </header>

      {/* Summary */}
      {data.summary && (
        <section className="mb-6">
          <h2 className="text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider">
            Summary
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            {data.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wider">
            Experience
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">{exp.title}</h3>
                    <p className="text-gray-600 text-sm">{exp.company}</p>
                    {exp.location && <p className="text-gray-500 text-xs">{exp.location}</p>}
                  </div>
                  <div className="text-gray-500 text-xs mt-1 md:mt-0">
                    {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                  </div>
                </div>
                {exp.description && (
                  <div className="text-gray-700 text-xs leading-relaxed mt-2">
                    {exp.description.split('\n').map((line, index) => (
                      <div key={index} className="mb-1">
                        {line}
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
        <section className="mb-6">
          <h2 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wider">
            Education
          </h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">{edu.degree}</h3>
                    <p className="text-gray-600 text-sm">{edu.institution}</p>
                    {edu.location && <p className="text-gray-500 text-xs">{edu.location}</p>}
                    {edu.gpa && <p className="text-gray-500 text-xs">GPA: {edu.gpa}</p>}
                  </div>
                  <div className="text-gray-500 text-xs mt-1 md:mt-0">
                    {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
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
          <h2 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wider">
            Skills
          </h2>
          <div className="space-y-2">
            {['technical', 'tools', 'languages', 'soft'].map((category) => {
              const categorySkills = data.skills.filter(skill => skill.category === category);
              if (categorySkills.length === 0) return null;
              
              return (
                <div key={category} className="text-xs">
                  <span className="font-medium text-gray-900">
                    {category === 'technical' ? 'Technical' : 
                     category === 'tools' ? 'Tools' :
                     category === 'languages' ? 'Programming' : 'Soft Skills'}:
                  </span>
                  <span className="text-gray-700 ml-2">
                    {categorySkills.map(skill => skill.name).join(', ')}
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
          <h2 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wider">
            Projects
          </h2>
          <div className="space-y-3">
            {data.projects.map((project) => (
              <div key={project.id}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">{project.name}</h3>
                    {project.technologies && (
                      <p className="text-gray-600 text-xs">{project.technologies}</p>
                    )}
                    {project.url && (
                      <p className="text-gray-500 text-xs">{project.url}</p>
                    )}
                  </div>
                  {project.startDate && (
                    <div className="text-gray-500 text-xs mt-1 md:mt-0">
                      {formatDate(project.startDate)}
                    </div>
                  )}
                </div>
                {project.description && (
                  <p className="text-gray-700 text-xs leading-relaxed">
                    {project.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Languages */}
      {data.languages.length > 0 && (
        <section className="mb-6">
          <h2 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wider">
            Languages
          </h2>
          <div className="text-xs text-gray-700">
            {data.languages.map((lang, index) => (
              <span key={lang.id}>
                {lang.name} ({lang.proficiency})
                {index < data.languages.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
