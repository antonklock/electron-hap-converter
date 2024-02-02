import ffmpeg from 'fluent-ffmpeg'

export const convertToHap = (inputFilePath: string, outputFilePath: string): void => {
  ffmpeg(inputFilePath)
    .outputOptions([
      '-vcodec hap', // Specify HAP codec
      '-format hap' // Specify format if needed; remove if causing issues
    ])
    .on('end', () => {
      console.log(`Conversion finished: ${outputFilePath}`)
    })
    .on('error', (err) => {
      console.error(`Error during conversion: ${err.message}`)
    })
    .save(outputFilePath)
}
