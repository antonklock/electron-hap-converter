import ffmpeg from 'fluent-ffmpeg'
import fs from 'fs'
import path from 'path'

function convertProResToHAP(inputFilePath: string, outputFilePath: string): void {
  ffmpeg(inputFilePath)
    .outputOptions(['-vcodec hap'])
    .on('end', () => {
      console.log(`Conversion finished: ${outputFilePath}`)
    })
    .on('error', (err) => {
      console.error(`Error during conversion: ${err.message}`)
    })
    .save(outputFilePath)
}

export function convertDirectory(inputDir: string, outputDir: string): void {
  fs.readdir(inputDir, (err, files) => {
    if (err) {
      console.error(`Could not list the directory: ${err}`)
      return
    }

    files.forEach((file) => {
      const inputFilePath = path.join(inputDir, file)
      const outputFilePath = path.join(outputDir, file.replace('.mov', '_hap.mov'))

      // Assuming ProRes files have a .mov extension
      if (path.extname(file).toLowerCase() === '.mov') {
        convertProResToHAP(inputFilePath, outputFilePath)
      }
    })
  })
}
