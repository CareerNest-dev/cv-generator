
import { useState } from 'react';
import { Plus, Trash2, GripVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ResumeData } from '@/hooks/useResumeData';

interface ResumeFormProps {
  data: ResumeData;
  onDataChange: (data: Partial<ResumeData>) => void;
}

export const ResumeForm = ({ data, onDataChange }: ResumeFormProps) => {
  const [activeTab, setActiveTab] = useState('personal');

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const addExperience = () => {
    const newExperience = {
      id: generateId(),
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    };
    onDataChange({
      experience: [...data.experience, newExperience]
    });
  };

  const updateExperience = (id: string, updates: any) => {
    onDataChange({
      experience: data.experience.map(exp => 
        exp.id === id ? { ...exp, ...updates } : exp
      )
    });
  };

  const removeExperience = (id: string) => {
    onDataChange({
      experience: data.experience.filter(exp => exp.id !== id)
    });
  };

  const addEducation = () => {
    const newEducation = {
      id: generateId(),
      degree: '',
      institution: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      gpa: ''
    };
    onDataChange({
      education: [...data.education, newEducation]
    });
  };

  const updateEducation = (id: string, updates: any) => {
    onDataChange({
      education: data.education.map(edu => 
        edu.id === id ? { ...edu, ...updates } : edu
      )
    });
  };

  const removeEducation = (id: string) => {
    onDataChange({
      education: data.education.filter(edu => edu.id !== id)
    });
  };

  const addSkill = () => {
    const newSkill = {
      id: generateId(),
      name: '',
      level: 'intermediate',
      category: 'technical'
    };
    onDataChange({
      skills: [...data.skills, newSkill]
    });
  };

  const updateSkill = (id: string, updates: any) => {
    onDataChange({
      skills: data.skills.map(skill => 
        skill.id === id ? { ...skill, ...updates } : skill
      )
    });
  };

  const removeSkill = (id: string) => {
    onDataChange({
      skills: data.skills.filter(skill => skill.id !== id)
    });
  };

  const addProject = () => {
    const newProject = {
      id: generateId(),
      name: '',
      description: '',
      technologies: '',
      url: '',
      startDate: '',
      endDate: ''
    };
    onDataChange({
      projects: [...data.projects, newProject]
    });
  };

  const updateProject = (id: string, updates: any) => {
    onDataChange({
      projects: data.projects.map(project => 
        project.id === id ? { ...project, ...updates } : project
      )
    });
  };

  const removeProject = (id: string) => {
    onDataChange({
      projects: data.projects.filter(project => project.id !== id)
    });
  };

  const addLanguage = () => {
    const newLanguage = {
      id: generateId(),
      name: '',
      proficiency: 'conversational'
    };
    onDataChange({
      languages: [...data.languages, newLanguage]
    });
  };

  const updateLanguage = (id: string, updates: any) => {
    onDataChange({
      languages: data.languages.map(lang => 
        lang.id === id ? { ...lang, ...updates } : lang
      )
    });
  };

  const removeLanguage = (id: string) => {
    onDataChange({
      languages: data.languages.filter(lang => lang.id !== id)
    });
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
        <TabsTrigger value="personal">Personal</TabsTrigger>
        <TabsTrigger value="summary">Summary</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
      </TabsList>

      <TabsContent value="personal" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              value={data.personalInfo.fullName}
              onChange={(e) => onDataChange({
                personalInfo: { ...data.personalInfo, fullName: e.target.value }
              })}
              placeholder="John Doe"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Professional Title *</Label>
            <Input
              id="title"
              value={data.personalInfo.title}
              onChange={(e) => onDataChange({
                personalInfo: { ...data.personalInfo, title: e.target.value }
              })}
              placeholder="Software Engineer"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={data.personalInfo.email}
              onChange={(e) => onDataChange({
                personalInfo: { ...data.personalInfo, email: e.target.value }
              })}
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              value={data.personalInfo.phone}
              onChange={(e) => onDataChange({
                personalInfo: { ...data.personalInfo, phone: e.target.value }
              })}
              placeholder="(555) 123-4567"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={data.personalInfo.location}
              onChange={(e) => onDataChange({
                personalInfo: { ...data.personalInfo, location: e.target.value }
              })}
              placeholder="New York, NY"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn</Label>
            <Input
              id="linkedin"
              value={data.personalInfo.linkedin}
              onChange={(e) => onDataChange({
                personalInfo: { ...data.personalInfo, linkedin: e.target.value }
              })}
              placeholder="linkedin.com/in/johndoe"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="website">Website/Portfolio</Label>
          <Input
            id="website"
            value={data.personalInfo.website}
            onChange={(e) => onDataChange({
              personalInfo: { ...data.personalInfo, website: e.target.value }
            })}
            placeholder="https://johndoe.com"
          />
        </div>
      </TabsContent>

      <TabsContent value="summary" className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="summary">Professional Summary</Label>
          <Textarea
            id="summary"
            value={data.summary}
            onChange={(e) => onDataChange({ summary: e.target.value })}
            placeholder="Write a compelling summary of your professional background, key achievements, and career goals..."
            rows={6}
            className="resize-none"
          />
          <p className="text-sm text-muted-foreground">
            Tip: Keep it concise (2-3 sentences) and focus on your most relevant achievements and skills.
          </p>
        </div>
      </TabsContent>

      <TabsContent value="experience" className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Work Experience</h3>
          <Button onClick={addExperience} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Experience
          </Button>
        </div>
        
        {data.experience.map((exp, index) => (
          <Card key={exp.id} className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <GripVertical className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Experience {index + 1}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeExperience(exp.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Job Title *</Label>
                <Input
                  value={exp.title}
                  onChange={(e) => updateExperience(exp.id, { title: e.target.value })}
                  placeholder="Software Engineer"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Company *</Label>
                <Input
                  value={exp.company}
                  onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                  placeholder="Tech Company Inc."
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Location</Label>
                <Input
                  value={exp.location}
                  onChange={(e) => updateExperience(exp.id, { location: e.target.value })}
                  placeholder="San Francisco, CA"
                />
              </div>
              <div className="space-y-2">
                <Label>Start Date *</Label>
                <Input
                  type="month"
                  value={exp.startDate}
                  onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>End Date</Label>
                <Input
                  type="month"
                  value={exp.endDate}
                  onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                  disabled={exp.current}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id={`current-${exp.id}`}
                  checked={exp.current}
                  onCheckedChange={(checked) => updateExperience(exp.id, { current: checked })}
                />
                <Label htmlFor={`current-${exp.id}`}>Current Position</Label>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
                placeholder="• Developed and maintained web applications using React and Node.js&#10;• Collaborated with cross-functional teams to deliver high-quality software&#10;• Improved application performance by 40% through optimization techniques"
                rows={4}
              />
              <p className="text-sm text-muted-foreground">
                Use bullet points (•) to highlight key achievements and quantify results when possible.
              </p>
            </div>
          </Card>
        ))}
      </TabsContent>

      <TabsContent value="education" className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Education</h3>
          <Button onClick={addEducation} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Education
          </Button>
        </div>
        
        {data.education.map((edu, index) => (
          <Card key={edu.id} className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <GripVertical className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Education {index + 1}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeEducation(edu.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Degree *</Label>
                <Input
                  value={edu.degree}
                  onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                  placeholder="Bachelor of Science in Computer Science"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Institution *</Label>
                <Input
                  value={edu.institution}
                  onChange={(e) => updateEducation(edu.id, { institution: e.target.value })}
                  placeholder="University of California, Berkeley"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Location</Label>
                <Input
                  value={edu.location}
                  onChange={(e) => updateEducation(edu.id, { location: e.target.value })}
                  placeholder="Berkeley, CA"
                />
              </div>
              <div className="space-y-2">
                <Label>GPA (Optional)</Label>
                <Input
                  value={edu.gpa}
                  onChange={(e) => updateEducation(edu.id, { gpa: e.target.value })}
                  placeholder="3.8/4.0"
                />
              </div>
              <div className="space-y-2">
                <Label>Start Date</Label>
                <Input
                  type="month"
                  value={edu.startDate}
                  onChange={(e) => updateEducation(edu.id, { startDate: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>End Date</Label>
                <Input
                  type="month"
                  value={edu.endDate}
                  onChange={(e) => updateEducation(edu.id, { endDate: e.target.value })}
                  disabled={edu.current}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id={`current-edu-${edu.id}`}
                  checked={edu.current}
                  onCheckedChange={(checked) => updateEducation(edu.id, { current: checked })}
                />
                <Label htmlFor={`current-edu-${edu.id}`}>Currently Enrolled</Label>
              </div>
            </div>
          </Card>
        ))}
      </TabsContent>

      <TabsContent value="skills" className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Skills</h3>
          <Button onClick={addSkill} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Skill
          </Button>
        </div>
        
        {data.skills.map((skill, index) => (
          <Card key={skill.id} className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <GripVertical className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Skill {index + 1}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeSkill(skill.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Skill Name *</Label>
                <Input
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, { name: e.target.value })}
                  placeholder="JavaScript"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Proficiency Level</Label>
                <Select 
                  value={skill.level} 
                  onValueChange={(value) => updateSkill(skill.id, { level: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Category</Label>
                <Select 
                  value={skill.category} 
                  onValueChange={(value) => updateSkill(skill.id, { category: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="soft">Soft Skills</SelectItem>
                    <SelectItem value="tools">Tools & Software</SelectItem>
                    <SelectItem value="languages">Programming Languages</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        ))}
      </TabsContent>

      <TabsContent value="projects" className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Projects</h3>
          <Button onClick={addProject} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Project
          </Button>
        </div>
        
        {data.projects.map((project, index) => (
          <Card key={project.id} className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <GripVertical className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Project {index + 1}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeProject(project.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Project Name *</Label>
                <Input
                  value={project.name}
                  onChange={(e) => updateProject(project.id, { name: e.target.value })}
                  placeholder="E-commerce Platform"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Technologies Used</Label>
                <Input
                  value={project.technologies}
                  onChange={(e) => updateProject(project.id, { technologies: e.target.value })}
                  placeholder="React, Node.js, MongoDB"
                />
              </div>
              <div className="space-y-2">
                <Label>Project URL</Label>
                <Input
                  value={project.url}
                  onChange={(e) => updateProject(project.id, { url: e.target.value })}
                  placeholder="https://github.com/username/project"
                />
              </div>
              <div className="space-y-2">
                <Label>Date</Label>
                <Input
                  type="month"
                  value={project.startDate}
                  onChange={(e) => updateProject(project.id, { startDate: e.target.value })}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                value={project.description}
                onChange={(e) => updateProject(project.id, { description: e.target.value })}
                placeholder="Developed a full-stack e-commerce platform with user authentication, payment processing, and inventory management..."
                rows={3}
              />
            </div>
          </Card>
        ))}
      </TabsContent>
    </Tabs>
  );
};
