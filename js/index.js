
function updateTime() {
    const now = new Date();
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('time').textContent = `${hours}:${minutes}`;
  }

  const currentYear = new Date().getFullYear();
  document.getElementById('year').textContent = `${currentYear}`;

  setInterval(updateTime, 1000);
  updateTime();

  const pinCode = localStorage.getItem("pin");
  const nameHeader = document.getElementById("name");

  if(pinCode == '1004'){
    console.log('Sara')
    nameHeader.innerHTML = `Sarinha`
  }else if(pinCode == '1705'){
    console.log('Matheus')
    nameHeader.innerHTML = `Tetheus`
  }else if(pinCode == '0907'){
    console.log('Jonathan')
    nameHeader.innerHTML = `Jotaglace`
  }else if(pinCode == '2302'){
    console.log('Júlia')
    nameHeader.innerHTML = `Julinha`
  }
