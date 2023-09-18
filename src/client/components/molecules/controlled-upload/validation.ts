import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const MAX_SIZE = 500000;
const ACCEPT_TYPE = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export const fileSchema = z
  .any()
  .refine((files) => files?.length === 1, 'File is required.')
  .refine((files) => files?.[0]?.size <= MAX_SIZE, `Max file size is 5MB.`)
  .refine(
    (files) => files?.[0]?.type === 'application/json',
    'Must be a json file.'
  );
// .refine(
//   (files) => ACCEPT_TYPE.includes(files?.[0]?.type),
//   '.jpg, .jpeg, .png and .webp files are accepted.'
// );

export const formFileSchema = z.object({ file: fileSchema });
export type FileType = z.infer<typeof formFileSchema>;
export const fileResolver = zodResolver(formFileSchema);
