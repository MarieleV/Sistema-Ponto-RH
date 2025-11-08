import multer from 'multer';
import fs from 'fs';
import path from 'path';


const uploadDir = process.env.UPLOAD_DIR || 'uploads';
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });


const storage = multer.diskStorage({
destination: (req, file, cb) => cb(null, uploadDir),
filename: (req, file, cb) => {
const ts = Date.now();
const safe = file.originalname.replace(/[^a-zA-Z0-9_.-]/g, '_');
cb(null, `${ts}__${safe}`);
}
});


export const upload = multer({
storage,
limits: { fileSize: (parseInt(process.env.MAX_FILE_SIZE_MB || '5', 10)) * 1024 * 1024 }
});