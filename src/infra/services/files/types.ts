export type DownloadFileBase64 = {
  base64: string;
  fileName: string;
  typeFile: string;
};

export type FileToObject = (filepath: File) => Promise<{
  name: string;
  type: string;
  size: number;
  data: string | ArrayBuffer | null;
}>;
