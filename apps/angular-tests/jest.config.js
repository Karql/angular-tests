module.exports = {
  name: "angular-tests",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/angular-tests/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
