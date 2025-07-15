
import { useState, useEffect } from 'react';
import { Moon, Sun, Download, Save, RefreshCw, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast, Toaster } from 'react-hot-toast';
import { ResumeForm } from '@/components/resume/ResumeForm';
import { ResumePreview } from '@/components/resume/ResumePreview';
import { TemplateSelector } from '@/components/resume/TemplateSelector';
import { generatePDF } from '@/utils/pdfGenerator';
import { useResumeData } from '@/hooks/useResumeData';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState('modern');
  const [showPreview, setShowPreview] = useState(true);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const { resumeData, updateResumeData, saveToStorage, loadFromStorage } = useResumeData();

  useEffect(() => {
    // Load theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    
    // Load saved data
    loadFromStorage();
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      await generatePDF(resumeData, currentTemplate);
      toast.success('Resume downloaded successfully!');
    } catch (error) {
      toast.error('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleSave = () => {
    saveToStorage();
    toast.success('Resume saved successfully!');
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300`}>
      <Toaster position="top-right" />
      
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                ResumeBuilder
              </h1>
              <div className="hidden sm:block">
                <TemplateSelector
                  currentTemplate={currentTemplate}
                  onTemplateChange={setCurrentTemplate}
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowPreview(!showPreview)}
                className="lg:hidden"
              >
                {showPreview ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleSave}
                className="hidden sm:flex"
              >
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
              
              <Button
                onClick={handleDownloadPDF}
                disabled={isGeneratingPDF}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isGeneratingPDF ? (
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Download className="h-4 w-4 mr-2" />
                )}
                {isGeneratingPDF ? 'Generating...' : 'Download PDF'}
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="p-2"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className={`space-y-6 ${showPreview ? 'hidden lg:block' : ''}`}>
            <Card className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  Build Your Resume
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Fill out the form below to create your professional resume
                </p>
              </div>
              
              <ResumeForm
                data={resumeData}
                onDataChange={updateResumeData}
              />
            </Card>
          </div>

          {/* Preview Section */}
          <div className={`space-y-6 ${!showPreview ? 'hidden lg:block' : ''}`}>
            <Card className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Live Preview
                </h2>
                <div className="sm:hidden">
                  <TemplateSelector
                    currentTemplate={currentTemplate}
                    onTemplateChange={setCurrentTemplate}
                  />
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <ResumePreview
                  data={resumeData}
                  template={currentTemplate}
                />
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
