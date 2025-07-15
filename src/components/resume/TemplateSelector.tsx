
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';

interface TemplateSelectorProps {
  currentTemplate: string;
  onTemplateChange: (template: string) => void;
}

export const TemplateSelector = ({ currentTemplate, onTemplateChange }: TemplateSelectorProps) => {
  const templates = [
    { id: 'modern', name: 'Modern', description: 'Clean and professional with color accents' },
    { id: 'classic', name: 'Classic', description: 'Traditional and elegant layout' },
    { id: 'minimal', name: 'Minimal', description: 'Simple and clean design' }
  ];

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Template:</span>
      <Select value={currentTemplate} onValueChange={onTemplateChange}>
        <SelectTrigger className="w-32">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {templates.map((template) => (
            <SelectItem key={template.id} value={template.id}>
              {template.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
