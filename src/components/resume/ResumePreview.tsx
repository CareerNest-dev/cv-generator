
import { ResumeData } from '@/hooks/useResumeData';
import { ModernTemplate } from './templates/ModernTemplate';
import { ClassicTemplate } from './templates/ClassicTemplate';
import { MinimalTemplate } from './templates/MinimalTemplate';

interface ResumePreviewProps {
  data: ResumeData;
  template: string;
}

export const ResumePreview = ({ data, template }: ResumePreviewProps) => {
  const renderTemplate = () => {
    switch (template) {
      case 'modern':
        return <ModernTemplate data={data} />;
      case 'classic':
        return <ClassicTemplate data={data} />;
      case 'minimal':
        return <MinimalTemplate data={data} />;
      default:
        return <ModernTemplate data={data} />;
    }
  };

  return (
    <div id="resume-preview" className="w-full max-w-[8.5in] mx-auto bg-white text-black min-h-[11in]">
      {renderTemplate()}
    </div>
  );
};
