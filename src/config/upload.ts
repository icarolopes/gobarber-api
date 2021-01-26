import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

const directory = path.resolve(__dirname, '..', '..', 'tmp')

export const uploadConfig = {
  tmpFolder: directory,
  uploadsFolder: path.resolve(directory, 'uploads'),
  storage: multer.diskStorage({
    destination: directory,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex')
      const filename = `${fileHash}-${file.originalname}`

      return callback(null, filename)
    }
  })
}
