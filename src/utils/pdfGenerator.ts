
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ResumeData } from '@/hooks/useResumeData';

export const generatePDF = async (data: ResumeData, template: string) => {
  const element = document.getElementById('resume-preview');
  if (!element) {
    throw new Error('Resume preview element not found');
  }

  // Temporarily set the element to be visible and at full width
  const originalStyle = element.style.cssText;
  element.style.cssText = `
    position: absolute;
    left: -9999px;
    top: 0;
    width: 8.5in;
    height: auto;
    background: white;
    box-shadow: none;
    transform: scale(1);
    zoom: 1;
  `;

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      width: 816, // 8.5 inches at 96 DPI
      height: 1056, // 11 inches at 96 DPI
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'in',
      format: 'letter'
    });

    const imgWidth = 8.5;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    
    const fileName = `${data.personalInfo.fullName || 'Resume'}_${template}.pdf`;
    pdf.save(fileName);
  } finally {
    // Restore original styling
    element.style.cssText = originalStyle;
  }
};
