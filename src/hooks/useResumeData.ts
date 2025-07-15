
import { useState, useCallback } from 'react';

export interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    title: string;
    linkedin: string;
    website: string;
  };
  summary: string;
  experience: {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }[];
  education: {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    gpa: string;
  }[];
  skills: {
    id: string;
    name: string;
    level: string;
    category: string;
  }[];
  projects: {
    id: string;
    name: string;
    description: string;
    technologies: string;
    url: string;
    startDate: string;
    endDate: string;
  }[];
  languages: {
    id: string;
    name: string;
    proficiency: string;
  }[];
}

const initialData: ResumeData = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    title: '',
    linkedin: '',
    website: ''
  },
  summary: '',
  experience: [],
  education: [],
  skills: [],
  projects: [],
  languages: []
};

export const useResumeData = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialData);

  const updateResumeData = useCallback((newData: Partial<ResumeData>) => {
    setResumeData(prev => ({ ...prev, ...newData }));
  }, []);

  const saveToStorage = useCallback(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  const loadFromStorage = useCallback(() => {
    const saved = localStorage.getItem('resumeData');
    if (saved) {
      try {
        const parsedData = JSON.parse(saved);
        setResumeData(parsedData);
      } catch (error) {
        console.error('Failed to load saved data:', error);
      }
    }
  }, []);

  return {
    resumeData,
    updateResumeData,
    saveToStorage,
    loadFromStorage
  };
};
