var faker = require('faker');
function generatePatient(){
  var patients =[];
  faker.seed(100);
  for (var id = 1; id < 26; id++) {
    var Name = faker.name.firstName()
    var Age = faker.random.number({'min':1,'max':99})
    var Problem= faker.lorem.word()
    var Prescription= faker.lorem.words()
    patients.push({
      "id": id,
      "PatientName": Name,
      "PatientAge": Age,
      "PatientProblem": Problem,
      "PatientPrescription" : Prescription
    })
  }
  return { "patients": patients }
}
module.exports = generatePatient