var sum=0;
const count= document.getElementById('total');
 count.innerHTML=sum;
const buton=document.getElementById('add');
    const updatedata=()=>{
        const textareadata=document.querySelectorAll('textarea');
       
        const notes=[];
        // console.log(textareadata);
        // console.log(inputdata);
        funy=(note)=>{
            if(note.value!="")notes.push(note.value);
        }
        textareadata.forEach(funy);
        localStorage.setItem('notes',JSON.stringify(notes));
        
    }
  const  adddiv = (text="") => {
      sum++;
       count.innerHTML=sum;
    document.getElementById('extra').style.display='none';
            const note=document.createElement('div');
            note.classList.add('note');
            const htmldata=`
            <div class="operation">
            <button class="edit"  ><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}" placeholder="Enter Text"></textarea>`;
       note.insertAdjacentHTML('afterbegin',htmldata);
       const box=document.getElementById('sim');
       const delet=note.querySelector('.delete');
       const edit=note.querySelector('.edit');
       const maindiv=note.querySelector('.main');
       const texta=note.querySelector('textarea');
        delet.addEventListener('click',()=>{
           note.remove();
           sum--;
           count.innerHTML=sum;
           updatedata();
           if(sum==0){
            document.getElementById('extra').style.display='inline';
         }
         else{
            document.getElementById('extra').style.display='none';
         }
        }) 
        texta.value=text;
        maindiv.innerHTML=text;
        edit.addEventListener('click',()=>{
         maindiv.classList.toggle('hidden');
         texta.classList.toggle('hidden');
        })  
        texta.addEventListener('change',(event)=>{
            const value=event.target.value;
            maindiv.innerHTML=value;
            if(event.target.value==""){
                note.remove();sum--;
            }
            else updatedata();
        }
            );

        box.appendChild(note);
    }

   const noti=JSON.parse(localStorage.getItem('notes'));
   if(noti){noti.forEach((note)=>{
       adddiv(note);
   })};
 const ele= document.getElementById('sim');
 console.log(ele.style.height);
 
 if(sum==0){
    document.getElementById('extra').innerHTML="You Have Nothing to Show";
 }
 else{
    document.getElementById('extra').style.display='none';
 }