import { DownloadFileBase64, FileToObject } from './types';

export const downloadFileByBlob = (fileName: string, blob: Blob | string) => {
  const url = window.URL.createObjectURL(new Blob([blob]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
};

export const convertFileToBase64 = async (filepath: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(filepath);
    reader.onerror = (error) => reject(error);
    reader.onload = () => resolve(reader.result);
  });
};

export const fileToJson = async (filepath: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(filepath);
    reader.onerror = (error) => reject(error);
    reader.onload = (event) => {
      return resolve(JSON.parse(event.target?.result as string));
    };
  });
};

export const fileToObjectBase64: FileToObject = (filepath) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(filepath);
    reader.onerror = (error) => reject(error);
    reader.onload = () => {
      resolve({
        name: filepath.name,
        type: filepath.type,
        size: filepath.size,
        data: reader.result,
      });
    };
  });
};

export const downloadFileBase64 = ({
  base64,
  fileName,
  typeFile,
}: DownloadFileBase64) => {
  const link = document.createElement('a');
  link.download = `${fileName}.${typeFile}`;
  link.href = base64;
  link.click();
};
