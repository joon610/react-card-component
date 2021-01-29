module.exports = {
  transform: {
    '^.+\\.tsx$': 'ts-jest'
  },
  snapshotSerializers: [
    '@emotion/jest/serializer', /* if needed other snapshotSerializers should go here */
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'ts',
    'tsx'
  ]
}


