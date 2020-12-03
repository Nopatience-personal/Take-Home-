module.exports = {
A:  function populateStorage(newEmp){
      const empid= newEmp[0];
      const first = newEmp[1];
      const last = newEmp[2];
      const hire = newEmp[3];
      const position = newEmp[4];
      const joke1 = newEmp[5];
      const quote1 = newEmp[6];
      sessionStorage.setItem('id', empid);
      sessionStorage.setItem('firstName', first);
      sessionStorage.setItem('lastName', last);
      sessionStorage.setItem('hireDate', hire);
      sessionStorage.setItem('role', position);
      sessionStorage.setItem('joke', joke1);
      sessionStorage.setItem('quote', quote1);

  },
  B: function getAllStorage(){
    const allEmp = [];
    let keys = Object.keys(sessionStorage);
      for(let key of keys) {
        allEmp.push(`${key}: ${sessionStorage.getItem(key)}`);
      }
      console.log(allEmp);

      return allEmp;
  }

}
