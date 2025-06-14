// DARK MODE
function darkMode(){
  document.body.classList.toggle('dark-mode')
}

function showSection(id){
  const from = document.getElementById(id)        
  const isVisible = from.style.display =='block';
  document.getElementById('register').style.display ='none';

  //kalau from belum tampil,tampilin kalau udah sembunyiin lagi
  if(!isVisible){
    from.style.display ='block';
  }
}
// tempat simpan data2 sementara
function handleGetFormData(){
  const name =document.getElementById('name').value;
  const city =document.getElementById('city').value;
  const email =document.getElementById('email').value;
  const zipCode =document.getElementById('zip-code').value;
  const status =document.getElementById('status').checked;
  return{
    name,
    city,
    email,
    zipCode,
    status
  }
}

// validasi angka2, inputannya udh pada sesuai apa blm
function isNumber(angka){
  for(let i= 0; i < angka.length; i++){
    const num =angka[i];
    if(isNaN(num)){
      return false;
    }
  }
  return true; 
}
function checkboxIsChecked(){
  const checkbox=document.getElementById('status')
  return checkbox.checked;
}
function validateFormData(formBox){
  return (
    formBox !== null &&
    !isNaN(formBox.zipCode)&&
    checkboxIsChecked()
  )
}

// bagian logika pas krim form
// document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("register").addEventListener('submit', function (e) {
    e.preventDefault();
    submit();
  });

  function submit() {
    const data = handleGetFormData();
    const warning = document.getElementById('warning');
    warning.innerHTML = "";

    if (!validateFormData(data)) {
      const peringatan = document.createElement('div');
      peringatan.innerText = "Periksa form anda sekali lagi";
      warning.appendChild(peringatan);
    } else {
      warning.innerHTML = "";
      document.getElementById('register').reset();
      alert("Fungsi submit berhasil dijalankan!");
    }
  }
// });

// CARD 
function scrolSlide(direction){
  const slider = document.getElementById('card-container')
  const cardWidth = slider.querySelector('.card').offsetWidth + 16; // card+gep
  slider.scrollBy({left: direction*cardWidth, behavior: 'smooth'}) ;
}