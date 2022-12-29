let span = document.querySelector('span')
let button = document.querySelector('button')


const redirectTime = () => {
  window.location.href = "https://metamask.io/" 
}

const HandleLogin = async () => {
  if(window.ethereum){
    try{
      const accounts = await ethereum.request({method:'eth_requestAccounts'})
      let account = accounts[0];
      span.innerHTML=`<h3> você esta logado com a conta: ${account}</h3>`
    }catch(e){
      alert('Tivemos complicações, dê um f5')
    }

}else{
  alert("Você não possui conta Metamask, iremos te redirecionar para fazer sua conta na Metamask")
  redirectTime()
}
}
button.addEventListener('click', HandleLogin())