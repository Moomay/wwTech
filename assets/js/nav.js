const next = (x)=>{
    character.style.left = ""+x+"%";
    console.log(x);
}

const handleView = item => {
    const linkEl = document.querySelector(`#link-${item}`);
      
    let offsetHeight = 0.6*(window.innerHeight)
    inView.offset({
      bottom:offsetHeight
    });
    
    inView(`#${item}`)
      .on("enter", () => linkEl.classList.add('is-active'))
      .on("exit", el  => linkEl.classList.remove('is-active'))
  };

  ["one", "two", "three", "four", "five", "six"].forEach(handleView);
