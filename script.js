
function clearForm() {
    const nameInput = document.getElementById('name');
    const provinceInput1 = document.getElementById('province');
    const cityInput = document.getElementById('city');
    const sectorInput = document.getElementById('sector');
    const streetInput = document.getElementById('street');
    const careerSelect = document.getElementById('career');

    nameInput.value = '';
    provinceInput.value = '';
    cityInput.value = '';
    sectorInput.value = '';
    streetInput.value = '';
    careerSelect.selectedIndex = 0;

    nameInput.focus();
    
    localStorage.clear();
    sessionStorage.clear();
}


function Acabar() {
        const respuesta = confirm("Desea mandar sus registros?");
        if (respuesta) {
            localStorage.clear();
            sessionStorage.clear();
            alert("Se han guardado sus datos");
            window.location.href = "datos.html";
        } else {
            alert("Pues continue editando");
        }
}

function Save() {
    let isValid = true;

    const name = document.getElementById("name").value;
    const province = document.getElementById("province").value;
    const city = document.getElementById("city").value;
    const sector = document.getElementById("sector").value;
    const street = document.getElementById("street").value;
    const career = document.getElementById("career").value; 

    isValid = InputValidator(name, isValid);
    isValid = InputValidator(province, isValid);
    isValid = InputValidator(city, isValid);
    isValid = InputValidator(sector, isValid);
    isValid = InputValidator(street, isValid);

    if (career === "Carrera") {
        isValid = false;
    }

    if (isValid) {
        alert("All data is complete");

        const formData = {
            name: name,
            province: province,
            city: city,
            sector: sector,
            street: street,
            career: career 
        };

        sessionStorage.setItem("formData", JSON.stringify(formData));

        window.location.href = "selecion.html";
    } else {
        alert("Missing fields to complete");
    }
}


function InputValidator(input, isValid) {
  const value = input.trim();

  if (value === "") {
      isValid = false;
  }
  
  return isValid;
}


function Confir() {
    let storedData = [];
    
    function addSelectedData(inputs) {
        inputs.forEach(input => {
            const subjectId = input.dataset.subjectId; 
            const dayId = input.dataset.dayId; 
            const selectedTime = input.parentNode.textContent.trim(); 
            const selectedMateria = input.value;
            storedData.push({ subjectId: subjectId, dayId: dayId, time: selectedTime, subject: selectedMateria });
        });
    }

    const selectedInputs = document.querySelectorAll('input[name="algoritmos"]:checked');
    const selectedInputs2 = document.querySelectorAll('input[name="fundamentos"]:checked');
    const selectedInputs3 = document.querySelectorAll('input[name="p-1"]:checked');
    const selectedInputs4 = document.querySelectorAll('input[name="web"]:checked');
    const selectedInputs5 = document.querySelectorAll('input[name="p-2"]:checked');

    addSelectedData(selectedInputs);
    addSelectedData(selectedInputs2);
    addSelectedData(selectedInputs3);
    addSelectedData(selectedInputs4);
    addSelectedData(selectedInputs5);
    
    sessionStorage.setItem("selectedData", JSON.stringify(storedData));

    window.location.href = "confirmacion.html";
}

