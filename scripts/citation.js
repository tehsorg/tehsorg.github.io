function clickCitation(id){
  const itens = [...document.getElementsByClassName("citation-aside-item-container")]
  const citations = [...document.getElementsByClassName("citation-info-item-container")]

  itens.forEach((element, index) => {
    if(index === Number(id)){
      element.classList.remove("hide-item");
    }else{
      element.classList.add("hide-item");
    }
  })

  citations.forEach((element, index) => {
    if(index === Number(id)){
      element.classList.remove("hide");
    }else{
      element.classList.add("hide");
    }
  })
}