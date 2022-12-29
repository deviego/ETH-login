let span = document.querySelector('span')
let button = document.querySelector('button')



const HandleLogin = async ()=> {
  if(window.ethereum){
    try{
      const accounts = await ethereum.request({method:'eth_requestAccounts'})
      let account = accounts[0];
      span.innerHTML=`<h3> você esta logado com a conta: ${account}</h3>`
    }catch(e){}

}else{
  alert("não possui conta mask")
}
}
button.addEventListener('click', HandleLogin())