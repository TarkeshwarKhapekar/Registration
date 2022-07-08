var rollV, nameV, genderV, addressV,emailV;

function readFom() {
  rollV = document.getElementById("roll").value;
  nameV = document.getElementById("name").value;
  genderV = document.getElementById("gender").value;
  addressV = document.getElementById("address").value;
  mobileV = document.getElementById("mobile").value;
  emailV = document.getElementById("email").value;


  console.log(rollV, nameV, addressV, genderV, mobileV,emailV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      name: nameV,
      gender: genderV,
      address: addressV,
      mobile: mobileV,
      email : emailV,
    });
  alert("Data Inserted");
  document.getElementById("roll").value = " ";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("email").value = "";

  
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snap) {
      document.getElementById("roll").value = snap.val().rollNo;
      document.getElementById("name").value = snap.val().name;
      document.getElementById("gender").value = snap.val().gender;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("mobile").value = snap.val().mobile;
      document.getElementById("email").value = snap.val().mobile;


    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      rollNo: rollV,
      name: nameV,
      gender: genderV,
      address: addressV,
      mobile: mobileV,
      email : emailV,
    });
  alert("Data Update");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("email").value = "";


};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .remove();
  alert("Data Deleted");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("email").value = "";


};
